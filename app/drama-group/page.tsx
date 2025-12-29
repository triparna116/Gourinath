// app/drama-group/page.tsx

export default function DramaGroupPage() {
    const gold = '#FFB100';
    const dark = '#050505';
    const cardBg = '#111';

    // গ্যালারির জন্য আপনার ছবিগুলো ব্যবহার করা হচ্ছে
    const galleryImages = ["/g1.jpg", "/g2.jpg", "/g3.jpg"];

    return (
        <main style={{ backgroundColor: dark, color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>

            {/* 1. HERO SECTION */}
            <section style={{
                padding: '100px 20px 60px',
                textAlign: 'center',
                borderBottom: `3px solid ${gold}`
            }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '900', margin: '0' }}>
                    THE DRAMA <span style={{ color: gold }}>GROUP</span>
                </h1>
                <p style={{ color: gold, letterSpacing: '3px', marginTop: '15px', textTransform: 'uppercase', fontSize: '1.1rem' }}>
                    Est. 1976 • A Legacy of Performance
                </p>
            </section>

            {/* 2. ABOUT THE GROUP */}
            <section style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', color: gold, marginBottom: '30px' }}>Our Story</h2>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#bbb' }}>
                    Founded in 1976 by Gourinath Banerjee, our drama group has been a beacon for theatrical arts for nearly five decades.
                    We are dedicated to producing thought-provoking plays, nurturing new talent through workshops, and keeping the true spirit of live performance alive.
                </p>
            </section>

            {/* 3. THE GALLERY SECTION - মাথা কাটা ফিক্স করা হয়েছে */}
            <section style={{ backgroundColor: cardBg, padding: '100px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: gold }}>The Gallery</h2>

                    {/* Gallery Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '30px'
                    }}>
                        {galleryImages.map((imgSrc, index) => (
                            <div key={index} style={{
                                border: `1px solid #333`,
                                borderRadius: '15px',
                                overflow: 'hidden',
                                backgroundColor: '#000'
                            }}>
                                <img
                                    src={imgSrc}
                                    alt='{Gallery Image ${index + 1}}'
                                    style={{
                                        width: '100%',
                                        height: 'auto',        // ছবিকে তার আসল অনুপাতে রাখবে
                                        display: 'block',
                                        objectFit: 'cover',
                                        objectPosition: 'top' // মাথা কাটা রোধ করতে এটি সবচেয়ে গুরুত্বপূর্ণ
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* 4. JOIN US CTA */}
            <section style={{ padding: '80px 20px', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '30px', fontSize: '2rem' }}>Want to join our next production?</h2>
                <p style={{ color: '#bbb', marginBottom: '40px', fontSize: '1.1rem' }}>We are always looking for passionate actors and backstage crew.</p>
                <button style={{
                    backgroundColor: gold,
                    color: dark,
                    padding: '15px 40px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer'
                }}>
                    GET IN TOUCH
                </button>
            </section>

        </main >
    );
}