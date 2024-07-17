const ContactSection = () => {
    console.log()
    return (
        <div
            className="w-full overflow-hidden relative h-full rounded-md  p-2  md:p-10   font-bold text-white bg-gradient-to-br from-[#E2E1E1] to-[#C6C5C5]"
            style={{backdropFilter: 'blur(10px)', border: '1px solid rgba(242, 242, 242, 0.7)'}}>
            <h2 style={{
                color: 'gray',
                fontWeight: '600',
                fontFamily: 'CooperHewitt, sans-serif',
                fontSize: '2rem'
            }}>Contact</h2>

        </div>
    )
}

export default ContactSection