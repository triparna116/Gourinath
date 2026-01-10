// app/about/page.tsx

export default function AboutPage() {
    const gold = '#FFB100';
    const dark = '#050505';
    const grayText = '#bbbbbb';

    return (
        <main style={{ backgroundColor: dark, color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>

            {/* 1. HEADER SECTION */}
            <section style={{ padding: '80px 20px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '0' }}>
                    ABOUT <span style={{ color: gold }}>ME</span>
                </h1>
                <div style={{ width: '40px', height: '3px', backgroundColor: gold, margin: '15px auto' }}></div>
            </section>

            {/* 2. MAIN CONTENT SECTION */}
            <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px 100px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'flex-start' }}>

                    {/* IMAGE BOX - Unchanged */}
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <div style={{
                            border: `1px solid ${gold}`,
                            borderRadius: '15px',
                            padding: '10px',
                            backgroundColor: '#111'
                        }}>
                            <img
                                src="/g2.jpg"
                                alt="Gourinath Banerjee"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    borderRadius: '10px',
                                    objectPosition: 'top',
                                }}
                            />
                        </div>
                    </div>

                    {/* TEXT BOX */}
                    <div style={{ flex: '1.5', minWidth: '300px' }}>
                        <h2 style={{ color: gold, fontSize: '2rem', marginBottom: '15px' }}>My Journey</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: grayText }}>
                            I am Gourinath Banerjee, a veteran of the stage and screen.
                            Since founding my drama group in 1976, my life has been dedicated to the art of performance.
                            I have written and directed over *40+ drama productions* under the banner of *Theatre-Place*, believing that theatre is the most powerful way to reflect the human condition.
                        </p>

                        <h3 style={{ color: gold, marginTop: '30px' }}>What I Do</h3>
                        <ul style={{ listStyle: 'none', padding: '0', color: grayText, lineHeight: '2.5', fontSize: '1.1rem' }}>
                            <li>🎭 <strong>Acting:</strong> Theatre, Cinema, and Web Series.</li>
                            <li>✍️ <strong>Writing:</strong> Script development and storytelling.</li>
                            <li>🎓 <strong>Teaching:</strong> Guiding the next generation of actors.</li>
                            {/* কাকার ইনস্ট্রাকশন অনুযায়ী Direction যোগ করা হলো */}
                            <li>🎬 <strong>Direction:</strong> Leading 40+ stage productions for Theatre-Place.</li>
                        </ul>

                        {/* সিনেম্যাটিক কোট - Unchanged */}
                        <div style={{ marginTop: '40px', paddingLeft: '20px', borderLeft: `4px solid ${gold}`, fontStyle: 'italic' }}>
                            <p style={{ color: '#eee', fontSize: '1.2rem' }}>
                                "Theatre is not just a performance; it's the heartbeat of human experience."
                            </p>
                        </div>
                    </div>

                    {/* 3. PERFORMANCE VIDEO SECTION - Unchanged */}
                    <section style={{ maxWidth: '1100px', margin: '40px auto 100px', padding: '0 20px', width: '100%' }}>
                        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                            <h2 style={{ color: '#FFB100', fontSize: '2rem' }}>Performance Highlights</h2>
                            <div style={{ width: '60px', height: '2px', backgroundColor: '#FFB100', margin: '15px auto' }}></div>
                        </div>

                        <div style={{
                            maxWidth: '800px',
                            margin: '0 auto',
                            border: '2px solid #FFB100',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            backgroundColor: '#000',
                            boxShadow: '0 10px 30px rgba(255, 177, 0, 0.2)'
                        }}>
                            <video
                                controls
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            >
                                <source src="/dadu_video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </section>

                </div>
            </section >
        </main >
    );
}