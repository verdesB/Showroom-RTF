'use client'
import {galleries} from "@/app/3D/OBJs/Paintings/paintingsData";
import {Button} from "@/app/Website/components/ui/Button";
import {SquareArrowUpRight} from "lucide-react";

const GalleriesSection = ({onGalleryChange}) => {
    console.log()
    return (
        <div
            className="w-full overflow-hidden relative h-full rounded-md p-2  md:p-10  font-bold text-white bg-gradient-to-br  from-[#E2E1E1] to-[#C6C5C5] flex-col gap-6"
            style={{backdropFilter: 'blur(10px)', border: '1px solid rgba(242, 242, 242, 0.7)'}}>
            <h2 style={{
                color: 'gray',
                fontWeight: '600',
                fontFamily: 'CooperHewitt, sans-serif',
                fontSize: '2rem'
            }}>Galleries</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '1rem',
                maxHeight: 'calc(100% - 3rem)'
            }}>
                <div className="no-visible-scrollbar no-visible-scrollbar::-webkit-scrollbar"
                     style={{overflowY: 'scroll'}}>
                    {galleries.map((gallery) => (
                        <div key={gallery.id} style={{
                            height: '10rem',
                            width: '100%',

                            marginBottom: '1rem',
                            borderRadius: '0.5rem',
                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: "absolute",
                                bottom: '0',
                                right: '0',
                                height: "3rem",
                                width: '100%',
                                backgroundColor: 'rgba(255,255,255,0.28)',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                                borderRadius: '0 0 0.3rem 0.3rem',
                                padding: '0.2rem 0.3rem ',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <h2 className={'shadow'} style={{
                                    textAlign: 'center',
                                    width: '65%',
                                    fontWeight: '400',
                                    fontFamily: 'CooperHewitt, sans-serif',
                                    color: '#4a4a4a',
                                    background: 'rgba(181,181,181,0.49)',
                                    padding: '0.1rem 0.2rem',
                                    borderRadius: '0.3rem',
                                    fontSize: '1.2rem',
                                    height: '2.2rem',
                                    boxSizing: 'border-box',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)', // Ajouté
                                    alignItems: 'center'
                                }}>{gallery.name}</h2>
                                <Button onClick={() => onGalleryChange(gallery.id)} style={{
                                    background: 'rgba(181,181,181,0.49)',
                                    color: '#4a4a4a',
                                    display: 'flex',
                                    gap: '0.5rem',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)'
                                }}>Visiter <SquareArrowUpRight/></Button>

                            </div>
                            <img src={gallery.img} alt={gallery.name} style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                borderRadius: '0.3rem',
                                border: '2px solid gray'
                            }}>

                            </img>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default GalleriesSection;