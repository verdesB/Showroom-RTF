'use client'
import './Website/page.scss';
import { useEffect, useState } from 'react';
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

// Extend Three.js objects with react-three-fiber
extend({ Mesh, MeshPhongMaterial, PlaneGeometry });

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState<Gallery>(galleries[1]);

   const helpersMobile = (
      <>

        <div className="pageSection__helpersMobileKeyboard ">
          <img src="./keyboard.png" alt="Keyboard" style={{width: '2rem', height: '2rem'}}/>
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
            <button className="pageSection__buttonCloseMobile" onClick={handleClick}>
              <X />
            </button>
        ) : (
            <Button onClick={handleClick} className={`pageSection__buttonClose ${isClicked ? 'clicked' : ''}`}>
              <div style={{ height: '100%', width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                VISITER
              </div>
              <div style={{ height: '100%', width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CornerRightDown className="pageSection__iconClose" />
              </div>
            </Button>
        )}
        <section
            className="pageSection"
            style={{
              transform: isClicked ? 'translateX(-100%)' : 'translateX(0)',
            }}
        >
          <MainTitle />
          <div className="h-[50%] md:h-full  [perspective:1000px] relative b flex flex-col  mx-auto w-full  items-start justify-start mt-2">
            <Tabs
                tabs={tabs({ onGalleryChange: handleGalleryChange })}
                galleries={galleries}
                selectedGallery={selectedGallery}
                onGalleryChange={handleGalleryChange}
            />
          </div>
        </section>
        {isMobile ? (
            <SceneBottomMobile selectedGallery={selectedGallery} isClicked={isClicked } helpers={helpersMobile}/>
        ) : (
            <SceneBottomDesktop helpers={helpersDesktop} isClicked={isClicked} selectedGallery={selectedGallery} />
        )}
      </main>
  );
}
