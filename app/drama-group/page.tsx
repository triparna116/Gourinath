"use client"; // এটি অবশ্যই একদম উপরে রাখবে

import React, { useState } from 'react';

const GroupPage = () => {
    const gold = '#FFB100';

    // ১. তোমার গ্যালারির ছবির লিস্ট এখানে দাও
    const images = [
        "g1.jpg",
        "g2.jpg",
        "g3.jpg",

    ];

    // স্টেট: কোন ছবিটা বড় করে দেখাচ্ছে সেটা ট্র্যাক করার জন্য
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    return (
        <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '40px 20px' }}>

            {/* পেজ হেডার */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ color: gold, fontSize: '2rem' }}>Group Gallery</h1>
                <p style={{ color: '#ccc' }}>Memorable moments of Theatre-Place</p>
            </div>

            {/* ২. থাম্বনেইল গ্রিড (মোবাইলের জন্য পারফেক্ট) */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', // মোবাইলে ছোট ছোট থাম্বনেইল হবে
                gap: '8px',
                maxWidth: '1000px',
                margin: '0 auto'
            }}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedImg(img)}
                        style={{
                            cursor: 'pointer',
                            aspectRatio: '1/1', // ছবিগুলোকে চারকোণা থাম্বনেইল করবে
                            overflow: 'hidden',
                            borderRadius: '4px',
                            border: '1px solid #333'
                        }}
                    >
                        <img
                            src={img}
                            alt="Gallery"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: '0.3s'
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* ৩. ফুল সাইজ ইমেজ মোডাল (ক্লিক করলে খুলবে) */}
            {selectedImg && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.95)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999,
                    padding: '10px'
                }}>
                    {/* ক্রস বাটন */}
                    <button
                        onClick={() => setSelectedImg(null)}
                        style={{
                            position: 'absolute',
                            top: '30px',
                            right: '30px',
                            background: gold,
                            color: '#000',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            fontSize: '24px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            boxShadow: '0 0 10px rgba(0,0,0,0.5)'
                        }}
                    >
                        ✕
                    </button>

                    {/* ফুল সাইজ ছবি */}
                    <img
                        src={selectedImg}
                        alt="Full View"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '80vh',
                            objectFit: 'contain',
                            borderRadius: '8px'
                        }}
                    />
                </div>
            )}

            {/* নিচের এই অংশটি চাইলে রাখতে পারো অথবা ডিলিট করতে পারো */}
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <a href="/" style={{ color: gold, textDecoration: 'none' }}>← Back to Home</a>
            </div>

        </main>
    );
};

export default GroupPage;