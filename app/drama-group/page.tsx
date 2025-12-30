"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function GroupPage() {
    const gold = '#FFB100';

    // ১. টাইপ ডিফাইন করা হয়েছে যাতে লাল দাগ না আসে
    const images: string[] = ["g1.jpg", "g2.jpg", "g3.jpg"];
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    return (
        <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '40px 20px' }}>

            {/* ২. লোগো এবং টাইটেল সেকশন */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
                <img
                    src="/logo.png"
                    alt="Logo"
                    style={{ width: '60px', height: 'auto', objectFit: 'contain' }}
                />
                <h1 style={{ color: gold, fontSize: '2.5rem', margin: 0, fontWeight: 'bold' }}>
                    THEATRE-PLACE GROUP
                </h1>
            </div>

            {/* ৩. বর্ণনামূলক লেখা */}
            <div style={{ maxWidth: '850px', margin: '0 auto 50px auto', textAlign: 'center', color: '#ccc', lineHeight: '1.8' }}>
                <p>Founded and led by <strong>Gourinath Banerjee</strong>, a veteran of Bengali Theatre since 1976.</p>
                <p>With a legacy of writing and directing over <strong>40+ plays and has acted more than 20 films</strong>, we continue to nurture new talents.</p>
            </div>

            {/* ৪. গ্যালারি গ্রিড - ছবি কাটা আটকানোর সমাধানসহ */}
            <h2 style={{ textAlign: 'center', marginBottom: '30px', fontWeight: '300' }}>Memorable Moments</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '25px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedImg(img)}
                        style={{
                            cursor: 'pointer',
                            overflow: 'hidden',
                            borderRadius: '12px',
                            border: '2px solid transparent',
                            transition: 'all 0.3s ease',
                            backgroundColor: '#111',
                            height: '350px', // বক্সের উচ্চতা নির্দিষ্ট করা হলো
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                            e.currentTarget.style.borderColor = gold;
                            e.currentTarget.style.transform = 'scale(1.02)';
                        }}
                        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                            e.currentTarget.style.borderColor = 'transparent';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        <img
                            src={img}
                            alt="Gallery Moment"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain' // এর ফলে ছবি আর কাটবে না
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* ৫. ব্যাক বাটন - সঠিক সিনট্যাক্সসহ */}
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <Link href="/" style={{
                    color: gold,
                    textDecoration: 'none',
                    borderBottom: `1px solid ${gold}`,
                    paddingBottom: '5px'
                }}>
                    ← Back to Home
                </Link>
            </div>
        </main >
    );
}