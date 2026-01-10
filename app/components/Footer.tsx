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
            {/* ১. থিয়েটার প্লেস - কাকার কথামতো উপরে বড় করে দেওয়া হলো */}
            <h2 style={{
                color: gold,
                fontSize: '2.2rem',
                margin: '0 0 10px 0',
                fontWeight: 'bold',
                textTransform: 'uppercase'
            }}>
                THEATRE-PLACE
            </h2>

            {/* ২. থিয়েটার প্লেস সম্পর্কে বিস্তারিত বর্ণনা (নতুন যোগ করা হয়েছে) */}
            <p style={{
                color: '#bbb',
                fontSize: '1.1rem',
                maxWidth: '800px',
                margin: '0 auto 30px auto',
                lineHeight: '1.8'
            }}>
                Since 1976, Theatre-Place has been a sanctuary for performing arts in Bengal. Under the visionary
                leadership of Gourinath Banerjee, we have produced over 40+ plays, blending traditional
                storytelling with modern experimental drama. Our mission is to nurture new talent and keep
                the rich cultural legacy of Bengali theatre alive.
            </p>

            {/* ৩. নাম (গৌরিনাথ ব্যানার্জি) - তোমার আগের কোড অনুযায়ী */}
            <h3 style={{
                color: gold,
                fontSize: '1.5rem',
                margin: '0 0 10px 0'
            }}>
                Gourinath Banerjee
            </h3>

            <p style={{
                color: '#ccc',
                fontSize: '1rem',
                maxWidth: '700px',
                margin: '0 auto 30px auto',
                lineHeight: '1.6'
            }}>
                A veteran of Bengali Theatre since 1976. As a dedicated director and actor, he has been the driving force behind the cultural legacy of Theatre-Place.
            </p>

            {/* ৪. কন্টাক্ট লিঙ্কস - হুবহু তোমার আগের ডিজাইনে রাখা হয়েছে */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center',
                marginBottom: '40px'
            }}>
                {/* Call Button - ব্যাকটিক ফিক্স করা হয়েছে */}
                <a href={`tel:+${phoneNumber}`} style={{
                    border: `2px solid ${gold}`,
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

            {/* ৫. নিচের ডিজাইন এলিমেন্ট এবং কপিরাইট */}
            < div style={{
                width: '60px',
                height: '1px',
                backgroundColor: '#444',
                margin: '0 auto 20px auto'
            }}></div >

            <p style={{ color: '#555', fontSize: '0.8rem', marginTop: '10px' }}>
                © 2025 Theatre-Place. All rights reserved.
            </p>
        </footer >
    );
};

export default Footer;