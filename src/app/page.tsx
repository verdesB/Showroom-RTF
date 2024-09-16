'use client'
import './Website/page.scss';
import {useEffect, useRef, useState} from 'react';
import { CornerRightDown, Rotate3D, SquareArrowOutUpLeft, X } from 'lucide-react';
import MainTitle from '@/app/Website/components/server/MainTitle';
import { checkIfMobile } from '@/app/Website/components/hooks/useCheckIfMobile';
import { Button } from '@/app/Website/components/ui/Button';
import { Tabs } from '@/app/Website/components/ui/Tabs';
import { tabs } from '@/app/Website/components/ui/dataTabs';
import { SceneBottomDesktop } from '@/app/3D/Scene/SceneBottomDesktop';
import { galleries, Gallery } from '@/app/3D/OBJs/Paintings/paintingsData';
import { SceneBottomMobile } from '@/app/3D/Scene/SceneBottomMobile';
import { helpersDesktop } from '@/app/Website/components/helpers/helpersDesktop';
import { extend } from '@react-three/fiber';
import { Mesh, MeshPhongMaterial, PlaneGeometry } from 'three';
import Image from 'next/image'
import SceneTopDesktop from "@/app/3D/Scene/SceneTopDesktop";
import {SceneDesktopHybrid} from "@/app/3D/Scene/SceneDesktopHybrid";

// Extend Three.js objects with react-three-fiber
extend({ Mesh, MeshPhongMaterial, PlaneGeometry });

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState<Gallery>(galleries[0]);

  const [goToNextScene, setGoToNextScene] = useState(false);

    const handleBoxClick = () => {
        const newSelectedGallery = galleries[1]; // Mettez ici l'index ou l'ID de votre deuxième tableau d'objets
        setSelectedGallery(newSelectedGallery);

    };




   const helpersMobile = (
      <>

        <div className="pageSection__helpersMobileKeyboard ">
            <Image src="/keyboard.png" alt="Keyboard" width={20} height={20} style={{width: '2rem', height: '2rem'}}></Image>
        </div>
        <div className="pageSection__helpersMobileOrientation">
          <Rotate3D style={{color: '#9a9a9a', width: "2rem", height: '2rem'}}/>
        </div>
        <button onTouchStart={() => setIsClicked(false)} style={{zIndex: '1'}} className="pageSection__helpersEscape">
          <SquareArrowOutUpLeft  style={{color: '#9a9a9a', width: "2rem", height: '2rem'}}/>
        </button>

      </>
  )



  const handleGalleryChange = (selectedGalleryId: any) => {
    const newSelectedGallery = galleries.find(gallery => gallery.id === selectedGalleryId);
    if (newSelectedGallery) {
      setSelectedGallery(newSelectedGallery);
      setIsClicked(true)
    } else {
      console.error(`No gallery found with id: ${selectedGalleryId}`);
    }
  };

  const handleClick = (event: React.MouseEvent) => {
    if (isClicked) {
      event.preventDefault(); // Prevent default action if already clicked
      return;
    }
    setIsClicked(true);
  };


  useEffect(() => {
    const isMobile = checkIfMobile();
    setIsMobile(isMobile);

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {

          setIsClicked(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
      <main className="main">
        {isMobile ? (
            <button className={`pageSection__buttonCloseMobile  ${isClicked ? 'clicked' : ''}`} onClick={handleClick}><X /></button>
        ) : (
            <Button onClick={handleClick} className={`pageSection__buttonClose ${isClicked ? 'clicked' : ''}`}>
              <div className="pageSection__buttonCloseBox1">VISITER</div>
              <div className="pageSection__buttonCloseBox2"><CornerRightDown className="pageSection__iconClose" /></div>
            </Button>
        )}
        <section className="pageSection" style={{transform: isClicked ? 'translateX(-100%)' : 'translateX(0)'}}>
          <MainTitle />
          <div className="pageSection__containerTabs">
            <Tabs
                tabs={tabs({ onGalleryChange: handleGalleryChange })}
                galleries={galleries}
                selectedGallery={selectedGallery}
                onGalleryChange={handleGalleryChange}
            />
          </div>
        </section>
          {isMobile ? (
              <SceneBottomMobile selectedGallery={selectedGallery} isClicked={isClicked} helpers={helpersMobile}/>
          ) : (
              <SceneDesktopHybrid helpers={helpersDesktop} isClicked={isClicked} selectedGallery={selectedGallery} handleBoxClick={handleBoxClick} />

          )}
      </main>
  );
}
