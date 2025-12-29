export default function ContactPage() {
    const gold = '#FFB100';
    const dark = '#050505';
    const cardBg = '#111';
    const grayText = '#bbbbbb';

    // Contact Details from your provided images
    const contactInfo = {
        phone: "+91-620956284", //
        email: "gourinathbanerjee@gmail.com", //
        location: "Kolkata, West Bengal" //
    };

    return (
        <main style={{ backgroundColor: dark, color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>

            {/* 1. HERO HEADER */}
            <section style={{
                padding: '120px 20px 60px',
                textAlign: 'center',
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/g3.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderBottom: `2px solid ${gold}`
            }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '900', margin: '0' }}>
                    GET IN <span style={{ color: gold }}>TOUCH</span>
                </h1>
                <p style={{ color: gold, letterSpacing: '4px', marginTop: '15px', textTransform: 'uppercase', fontSize: '1rem' }}>
                    For acting, workshops, or collaborations
                </p>
            </section>

            {/* 2. CONTACT CARDS SECTION */}
            <section style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px'
                }}>

                    {/* PHONE CARD */}
                    <div style={{ backgroundColor: cardBg, padding: '40px', borderRadius: '20px', border: '1px solid #222', textAlign: 'center' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>📞</div>
                        <h3 style={{ color: gold, marginBottom: '10px', fontSize: '1.4rem' }}>Phone</h3>
                        <p style={{ fontSize: '1.2rem', color: '#fff' }}>{contactInfo.phone}</p>
                    </div>

                    {/* EMAIL CARD */}
                    <div style={{ backgroundColor: cardBg, padding: '40px', borderRadius: '20px', border: '1px solid #222', textAlign: 'center' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>✉️</div>
                        <h3 style={{ color: gold, marginBottom: '10px', fontSize: '1.4rem' }}>Email</h3>
                        <p style={{ fontSize: '1.1rem', color: '#fff', wordBreak: 'break-all' }}>{contactInfo.email}</p>
                    </div>

                    {/* LOCATION CARD */}
                    <div style={{ backgroundColor: cardBg, padding: '40px', borderRadius: '20px', border: '1px solid #222', textAlign: 'center' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>📍</div>
                        <h3 style={{ color: gold, marginBottom: '10px', fontSize: '1.4rem' }}>Location</h3>
                        <p style={{ fontSize: '1.2rem', color: '#fff' }}>{contactInfo.location}</p>
                    </div>

                </div>
            </section>

            {/* 3. CLOSING CALL TO ACTION */}
            <section style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#0a0a0a' }}>
                <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Let's Create Something Great</h2>
                    <p style={{ color: grayText, lineHeight: '1.6', fontSize: '1.1rem' }}>
                        Whether it is a new script, a theatre production, or a cinematic role,
                        I am always open to discussing new artistic ventures.
                    </p>
                    <div style={{ width: '60px', height: '3px', backgroundColor: gold, margin: '30px auto' }}></div>
                </div>
            </section>

        </main>
    );
}