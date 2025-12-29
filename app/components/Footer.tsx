"use client";
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const gold = '#FFB100';
    const phoneNumber = "916290956284";

    return (
        <footer style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '60px 20px',
            textAlign: 'center',
            borderTop: '1px solid #222'
        }}>
            {/* ১. নাম (গৌরিনাথ ব্যানার্জি) */}
            <h2 style={{
                color: gold,
                fontSize: '1.8rem',
                margin: '0 0 15px 0'
            }}>
                Gourinath Banerjee
            </h2>

            {/* ২. সেই বর্ণনা যা আগে ছিল */}
            <p style={{
                color: '#ccc',
                fontSize: '1rem',
                maxWidth: '700px',
                margin: '0 auto 30px auto',
                lineHeight: '1.6'
            }}>
                A veteran of Bengali Theatre since 1976. As a dedicated director and actor, he has been the driving force behind the cultural legacy of Theatre-Place.
            </p>

            {/* ৩. কন্টাক্ট লিঙ্কস (হুবহু আগের ডিজাইনে) */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center',
                marginBottom: '40px'
            }}>
                {/* Call Button */}
                <a href={`tel:+${phoneNumber}`} style={{
                    border: '2px solid ${gold}',
                    color: '#fff',
                    padding: '12px 30px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    📞 Call: +{phoneNumber}
                </a>

                {/* WhatsApp Link */}
                <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    💬 WhatsApp Message
                </a>

                {/* About Us Link */}
                <Link href="/about" style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    borderBottom: '1px solid #555'
                }}>
                    📖 About Us
                </Link>
            </div >

            {/* ৪. নিচের সেই সাদা দাগ */}
            < div style={{
                width: '60px',
                height: '1px',
                backgroundColor: '#444',
                margin: '0 auto 20px auto'
            }}></div >

            {/* ৫. থিয়েটার প্লেস ব্র্যান্ডিং */}
            < h3 style={{
                fontSize: '1.1rem',
                letterSpacing: '3px',
                margin: '0',
                color: '#eee',
                textTransform: 'uppercase'
            }}>
                THEATRE - PLACE
            </h3 >

            <p style={{ color: '#555', fontSize: '0.8rem', marginTop: '10px' }}>
                © 2025 Theatre-Place. All rights reserved.
            </p>
        </footer >
    );
};

export default Footer;