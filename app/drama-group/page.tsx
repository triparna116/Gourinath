"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const GroupPage = () => {
    const gold = '#FFB100';

    // তোমার গ্যালারির ছবির লিস্ট (এখানে তোমার আসল ছবির নাম বা পাথ দাও)
    const images = [
        "/g1.jpg", // উদাহরণস্বরূপ পাথ
        "/g2.jpg",
        "/g3.jpg",
    ];

    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <main style={{
            backgroundColor: '#050505', // একদম কুচকুচে কালোর বদলে একটু সফট কালো
            color: '#fff',
            minHeight: '100vh',
            padding: '60px 20px',
            fontFamily: '"Helvetica Neue", Arial, sans-serif'
        }}>

            {/* ১. আকর্ষণীয় হেডার এবং টেক্সট সেকশন */}
            <div style={{
                maxWidth: '900px',
                margin: '0 auto 60px auto',
                textAlign: 'center'
            }}>
                <h1 style={{
                    color: gold,
                    fontSize: '3rem', // ফন্ট সাইজ বাড়ানো হয়েছে
                    fontWeight: '700',
                    letterSpacing: '2px',
                    marginBottom: '30px',
                    textTransform: 'uppercase'
                }}>
                    Theatre-Place Group
                </h1>

                <div style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.8',
                    color: '#ddd', // একটু উজ্জ্বল টেক্সট কালার
                    textAlign: 'left' // টেক্সট পড়তে সুবিধার জন্য বামদিকে অ্যালাইন করা
                }}>
                    <p style={{ marginBottom: '20px' }}>
                        Founded and led by <span style={{ color: gold, fontWeight: 'bold' }}>Gourinath Banerjee</span>, a veteran of Bengali Theatre since 1976, Theatre-Place has been a cornerstone of cultural excellence for decades.
                    </p>
                    <p>
                        With a legacy of writing and directing over <span style={{ color: gold, fontWeight: 'bold' }}>40+ plays</span>, our group continues to nurture new talents and bring powerful stories to the stage.
                    </p>
                </div>
            </div>

            {/* ২. সুন্দর গ্যালারি সেকশন */}
            <div style={{
                maxWidth: '1000px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <h2 style={{
                    fontSize: '1.8rem',
                    fontWeight: '300',
                    color: '#eee',
                    marginBottom: '40px',
                    letterSpacing: '1px'
                }}>
                    Memorable Moments
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // ছবিগুলো আরও বড় দেখাবে
                    gap: '25px',
                    justifyContent: 'center'
                }}>
                    {images.map((img, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImg(img)}
                            style={{
                                cursor: 'pointer',
                                aspectRatio: '4/3', // একটু ওয়াইড ল্যান্ডস্কেপ শেপ
                                overflow: 'hidden',
                                borderRadius: '12px', // কোণাগুলো গোল করা
                                border: '2px solid transparent',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.5)', // সুন্দর শ্যাডো

                            }}
                            // হোভার ইফেক্টের জন্য মাউস ইভেন্ট
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = gold;
                                e.currentTarget.style.transform = 'scale(1.02)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'transparent';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            <img
                                src={img}
                                alt={`Gallery Image ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                                // ইমেজেও আলাদা হোভার ইফেক্ট
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* ৩. ফুল সাইজ ইমেজ মোডাল (আগের মতোই) */}
            {selectedImg && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.95)', display: 'flex', justifyContent: 'center',
                    alignItems: 'center', zIndex: 9999, padding: '20px'
                }} onClick={() => setSelectedImg(null)}>
                    <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
                        <img src={selectedImg} alt="Full View" style={{
                            width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px',
                            boxShadow: '0 0 20px rgba(255, 177, 0, 0.3)'
                        }} />
                        <button onClick={() => setSelectedImg(null)} style={{
                            position: 'absolute', top: '-20px', right: '-20px',
                            background: gold, color: '#000', border: 'none', borderRadius: '50%',
                            width: '40px', height: '40px', fontSize: '24px', cursor: 'pointer',
                            fontWeight: 'bold', boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
                        }}>✕</button>
                    </div>
                </div>
            )}

            {/* ৪. স্টাইলিশ ব্যাক বাটন */}
            <div style={{ textAlign: 'center', marginTop: '80px' }}>
                <Link href="/" style={{
                    display: 'inline-block',
                    color: gold,
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    padding: '12px 30px',
                    border: '2px solid ${gold}',
                    borderRadius: '50px',
                    transition: 'all 0.3s ease'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = gold;
                        e.currentTarget.style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = gold;
                    }}
                >
                    ← Back to Home
                </Link>
            </div>

        </main >
    );
};

export default GroupPage;