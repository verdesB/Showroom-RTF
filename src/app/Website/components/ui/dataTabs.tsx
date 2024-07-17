import {galleries} from "@/app/3D/OBJs/Paintings/paintingsData";
import WelcomeSection from "@/app/Website/components/server/WelcomeSection";
import GalleriesSection from "@/app/Website/components/GalleriesSection";
import BioSection from "@/app/Website/components/server/BioSection";
import ContactSection from "@/app/Website/components/server/ContactSection";

export const tabs  = ({onGalleryChange }: any) => [
    {
        title: "Bienvenue",
        value: "bienvenue",
        content: (
               <WelcomeSection/>
        ),
    },
    {
        title: "Galleries",
        value: "galleries",
        content: (
              <GalleriesSection onGalleryChange={onGalleryChange}/>
        ),
    },
    {
        title: "Bio",
        value: "bio",
        content: (
             <BioSection/>
        ),
    },
    {
        title: "Contact",
        value: "contact",
        content: (
             <ContactSection/>
        ),
    },
];