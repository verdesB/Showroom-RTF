const BioSection = () => {
    console.log()
    return (
        <div
            className="w-full overflow-hidden relative h-full rounded-md p-2  md:p-10   font-bold text-white bg-gradient-to-br  from-[#E2E1E1] to-[#C6C5C5]"
            style={{backdropFilter: 'blur(10px)', border: '1px solid rgba(242, 242, 242, 0.7)'}}>
            <h2 style={{
                color: 'gray',
                fontWeight: '600',
                fontFamily: 'CooperHewitt, sans-serif',
                fontSize: '2rem'
            }}>Bio</h2>
            <div style={{
                height: 'calc(100% - 2rem)',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginTop: '1rem',
                overflowY: 'scroll',
                boxSizing: 'border-box',
                paddingBottom: '2rem'
            }} className="no-visible-scrollbar no-visible-scrollbar::-webkit-scrollbar">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'gray',
                    fontWeight: '400',
                    fontFamily: 'CooperHewitt, sans-serif'
                }}>
                    <p>Nathalie Afonso Dell’Omo (Afonso N.) participe utilement à une évolution de l’art, au travers de
                        ses approches, qui renouvellent et vivifient le concept de ce que l’on appelle aujourd’hui la «
                        peinture ethnique ».</p>
                    <p>L’ « art ethnique », à travers le monde, de Melbourne, au Musée du costume ethnique de Shanghai,
                        des Musées ethnographiques d’Ukraine, à ceux d’Amérique Centrale, d’Asie, d’Afrique ou
                        d’Australie, permet de témoigner du passé des peuples, montrer leur mémoire, les composantes
                        ancestrales des sociétés actuelles.</p>
                </div>
                <div style={{color: 'gray', fontWeight: '400', fontFamily: 'CooperHewitt, sans-serif'}}>
                    <p>Nathalie Afonso Dell’Omo (Afonso N.) participe utilement à une évolution de l’art, au travers
                        de ses approches, qui renouvellent et vivifient le concept de ce que l’on appelle
                        aujourd’hui la « peinture ethnique ».</p>
                    <p>L’ « art ethnique », à travers le monde, de Melbourne, au Musée du costume ethnique de
                        Shanghai, des Musées ethnographiques d’Ukraine, à ceux d’Amérique Centrale, d’Asie,
                        d’Afrique ou d’Australie, permet de témoigner du passé des peuples, montrer leur mémoire,
                        les composantes ancestrales des sociétés actuelles.</p>
                </div>
            </div>
        </div>
    )
}
export default BioSection