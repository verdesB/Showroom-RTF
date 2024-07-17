import './BioSection.scss'
const BioSection = () => {
    console.log()
    return (
        <section
            className="bioSection"
           >
            <h2 className="bioSection__title">Bio</h2>
            <div  className="no-visible-scrollbar no-visible-scrollbar::-webkit-scrollbar bioSection__contentContainer">
                <div className="bioSection__textContainer">
                    <p>Nathalie Afonso Dell’Omo (Afonso N.) participe utilement à une évolution de l’art, au travers de
                        ses approches, qui renouvellent et vivifient le concept de ce que l’on appelle aujourd’hui la «
                        peinture ethnique ».</p>
                    <p>L’ « art ethnique », à travers le monde, de Melbourne, au Musée du costume ethnique de Shanghai,
                        des Musées ethnographiques d’Ukraine, à ceux d’Amérique Centrale, d’Asie, d’Afrique ou
                        d’Australie, permet de témoigner du passé des peuples, montrer leur mémoire, les composantes
                        ancestrales des sociétés actuelles.</p>
                </div>
                <div className="bioSection__textContainer">
                    <p>Nathalie Afonso Dell’Omo (Afonso N.) participe utilement à une évolution de l’art, au travers
                        de ses approches, qui renouvellent et vivifient le concept de ce que l’on appelle
                        aujourd’hui la « peinture ethnique ».</p>
                    <p>L’ « art ethnique », à travers le monde, de Melbourne, au Musée du costume ethnique de
                        Shanghai, des Musées ethnographiques d’Ukraine, à ceux d’Amérique Centrale, d’Asie,
                        d’Afrique ou d’Australie, permet de témoigner du passé des peuples, montrer leur mémoire,
                        les composantes ancestrales des sociétés actuelles.</p>
                </div>
            </div>
        </section>
    )
}
export default BioSection