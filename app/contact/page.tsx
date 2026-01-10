"use client";

export default function ContactPage() {
    const gold = '#FFB100';
    const dark = '#050505';

    // আপনার আসল তথ্য এখানে বসান
    const phoneNumber = "916290956284"; // দেশের কোডসহ (যেমন 91) শুধু নম্বর দিন
    const emailAddress = "gourinathbanerjee@gmail.com";

    return (
        <main style={{ backgroundColor: dark, color: '#ffffff', minHeight: '100vh', padding: '100px 20px', fontFamily: 'sans-serif' }}>

            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '10px' }}>
                    CONTACT <span style={{ color: gold }}>US</span>
                </h1>
                <p style={{ color: gold, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '40px' }}>
                    Theatre-Place • Established 1976
                </p>

                <div style={{ backgroundColor: '#111', padding: '40px', borderRadius: '20px', border: '1px solid #333' }}>

                    {/* ১. নাম ও পরিচয় */}
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Gourinath Banerjee</h2>
                    <p style={{ color: '#bbb', marginBottom: '30px', lineHeight: '1.6' }}>
                        Actor, Script Writer, and Director of over 40+ drama productions.
                        Lead of the renowned drama group *Theatre-Place*.
                    </p>

                    <div style={{ width: '50px', height: '2px', backgroundColor: gold, margin: '0 auto 30px' }}></div>

                    {/* ২. ক্লিকবল হোয়াটসঅ্যাপ লিঙ্ক (পয়েন্ট ১১ অনুযায়ী) */}
                    <div style={{ marginBottom: '25px' }}>
                        <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '5px' }}>WHATSAPP & PHONE</p>
                        <a
                            href={`https://wa.me/${phoneNumber}`}
                            style={{
                                color: gold,
                                fontSize: '1.5rem',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                display: 'block'
                            }}
                        >
                            +91 {phoneNumber.slice(2)}
                        </a>
                    </div>

                    {/* ৩. ক্লিকবল ইমেল লিঙ্ক (পয়েন্ট ১২ অনুযায়ী) */}
                    <div style={{ marginBottom: '40px' }}>
                        <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '5px' }}>EMAIL ADDRESS</p>
                        <a
                            href={`mailto:${emailAddress}`}
                            style={{
                                color: gold,
                                fontSize: '1.5rem',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                wordBreak: 'break-word'
                            }}
                        >
                            {emailAddress}
                        </a>
                    </div>

                    {/* ৪. কন্টাক্ট বাটন (পয়েন্ট ৫ অনুযায়ী - এটি সব পেজেই রাখা যায়) */}
                    <button
                        onClick={() => window.location.href = `mailto:${emailAddress}`}
                        style={{
                            backgroundColor: gold,
                            color: dark,
                            padding: '15px 40px',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            border: 'none',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            textTransform: 'uppercase'
                        }}
                    >
                        Send a Message
                    </button>
                </div >

                <p style={{ marginTop: '40px', color: '#666' }}>
                    Based in West Bengal, India. Available for collaborations and workshops.
                </p>
            </div >
        </main >
    );
}