'use client'
import './GalleriesSection.scss'
import {galleries} from "@/app/3D/OBJs/Paintings/paintingsData";
import {Button} from "@/app/Website/components/ui/Button";
import {SquareArrowUpRight} from "lucide-react";
import Image from "next/legacy/image";
interface GalleriesSectionProps {
    onGalleryChange: (id: number) => void;
}

const GalleriesSection = ({onGalleryChange}: GalleriesSectionProps) => {
    console.log()
    return (
        <div className="galleriesSection">
            <h2 className="galleriesSection__title">Galeries</h2>
            <div className="galleriesSection__content">
                <div className="no-visible-scrollbar no-visible-scrollbar::-webkit-scrollbar"
                     style={{overflowY: 'scroll',  padding: '0 0.5rem 4rem 0.5rem'}}>
                    {galleries.map((gallery) => (
                        <div key={gallery.id} className="galleriesSection__card">
                            <div className="galleriesSection__cardBoxInfos">
                                <h3 className="shadow galleriesSection__titleGallery" >{gallery.name}</h3>
                                <Button onClick={() => onGalleryChange(gallery.id)} className="galleriesSection__button">VISITER <SquareArrowUpRight/></Button>
                            </div>
                            <Image
                                src={gallery.img}
                                alt={gallery.name}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                className="galleriesSection__image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default GalleriesSection;