import React from 'react';

const Footer = () => {
    const gold = '#FFB100';
    const phoneNumber = "916290956284"; // দাদুর নম্বর

    return (
        <footer style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '60px 20px',
            borderTop: '1px solid #222',
            textAlign: 'center'
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                {/* ১. নাম ও বর্ণনা */}
                <div style={{ marginBottom: '30px' }}>
                    <h2 style={{ color: gold, fontSize: '1.8rem', marginBottom: '15px' }}>
                        Gourinath Banerjee
                    </h2>
                    <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '1rem', margin: '0 auto', maxWidth: '600px' }}>
                        A veteran of Bengali Theatre since 1976. As a dedicated director and actor,
                        he has been the driving force behind the cultural legacy of Theatre-Place.
                    </p>
                </div>

                {/* ২. কন্টাক্ট এবং এবাউট সেকশন */}
                <div style={{
                    marginBottom: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    alignItems: 'center'
                }}>
                    {/* ফোন কল লিঙ্ক */}
                    <a href={`tel:+${phoneNumber}`} style={{
                        color: '#fff',
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        border: `1px solid ${gold}`, // এখানে আমি ব্যাকটিক (`) ঠিক করে দিয়েছি
                        padding: '8px 20px',
                        borderRadius: '25px',
                        display: 'inline-block',
                        transition: '0.3s'
                    }}>
                        📞 Call: +{phoneNumber}
                    </a>

                    {/* হোয়াটসঅ্যাপ লিঙ্ক */}
                    <a href={`https://wa.me/${phoneNumber}?text=Hello%20Gourinath%20Banerjee,%20I%20visited%20your%20website...`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#25D366',
                            textDecoration: 'none',
                            fontSize: '1.1rem',
                            fontWeight: 'bold'
                        }}>
                        💬 WhatsApp Message
                    </a>

                    {/* ৩. নতুন যোগ করা About Us লিঙ্ক */}
                    <a href="/about" style={{
                        color: gold,
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        marginTop: '5px'
                    }}>
                        📖 About Us
                    </a>
                </div>

                {/* বিভাজক ও কপিরাইট */}
                <div style={{ width: '50px', height: '1px', backgroundColor: '#444', margin: '0 auto 20px' }}></div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>THEATRE-PLACE</h3>
                <p style={{ color: '#666', fontSize: '0.85rem' }}>
                    © {new Date().getFullYear()} Theatre-Place. All rights reserved.
                </p>

            </div >
        </footer >
    );
};

export default Footer;