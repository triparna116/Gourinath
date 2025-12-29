"use client"; // এটি অবশ্যই শুরুতে রাখবে কারণ আমরা 'state' ব্যবহার করছি
import { useState } from 'react';

export const worksData = [
    {
        id: "1",
        year: "2022",
        title: "MAHANAYAK",
        desc: "The description about the life of the legendary and most known actor in image of Uttam Kumar.",
        synopsis: "Full synopsis: This play explores the journey of the greatest star of Bengali cinema, Uttam Kumar, his struggles, and his legendary rise to fame. Directed by Gourinath Banerjee, it captures the essence of the golden era of cinema."
    },
    {
        id: "2",
        year: "2005",
        title: "SONAKTO",
        desc: "A story of a ghost scripted in comedy.",
        synopsis: "Full synopsis: A hilarious take on the supernatural world where a ghost becomes a part of a human family's daily chaos. This comedy classic has been one of the most loved productions of Theatre-Place."
    },
    {
        id: "3",
        year: "2024",
        title: "ITI BINODINI",
        desc: "A story of the renowned actress who was famous for dramas in early ages.",
        synopsis: "Full synopsis: This drama depicts the tragic yet inspiring life of Binodini Dasi, the first star of the Bengali stage. It highlights her dedication to theatre and the societal challenges she faced."
    },
    {
        id: "4",
        year: "2013",
        title: "MASTARMOSHAI",
        desc: "The story written by Rabindranath Tagore scripted in drama on stage.",
        synopsis: "Full synopsis: Based on Tagore's profound writing, this play focuses on the relationship between a teacher and his student, exploring themes of morality, duty, and human emotions."
    }
];

export default function WorksPage() {
    const gold = '#FFB100';
    // কোন নাটকটি খোলা আছে তা মনে রাখার জন্য 'state'
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleWork = (id: string) => {
        setOpenId(openId === id ? null : id); // ক্লিক করলে খুলবে, আবার ক্লিক করলে বন্ধ হবে
    };

    return (
        <main style={{ backgroundColor: '#050505', color: '#fff', padding: '100px 20px', minHeight: '100vh' }}>
            <h1 style={{ textAlign: 'center', color: gold, fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '50px' }}>
                Theatre Productions
            </h1>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {worksData.map((work) => (
                    <div
                        key={work.id}
                        onClick={() => toggleWork(work.id)}
                        style={{
                            borderBottom: '1px solid #333',
                            padding: '30px 0',
                            cursor: 'pointer',
                            transition: '0.3s'
                        }}
                    >
                        {/* বছরের অংশ */}
                        <span style={{ color: gold, fontWeight: 'bold', fontSize: '1.1rem' }}>{work.year}</span>

                        {/* টাইটেল এবং ক্লিক ইন্ডিকেটর */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 style={{ margin: '10px 0', fontSize: '1.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                {work.title}
                            </h2>
                            <span style={{ color: gold, fontSize: '1.5rem' }}>
                                {openId === work.id ? '−' : '+'}
                            </span>
                        </div>

                        {/* ছোট ডেসক্রিপশন */}
                        <p style={{ color: '#bbb', fontSize: '1.1rem', margin: '0' }}>{work.desc}</p>

                        {/* বিস্তারিত সিনোপসিস (ক্লিক করলেই কেবল এটি দেখা যাবে) */}
                        {openId === work.id && (
                            <div style={{
                                marginTop: '20px',
                                padding: '20px',
                                backgroundColor: '#111',
                                borderLeft: '4px solid ${gold}',
                                animation: 'fadeIn 0.5s ease'
                            }}>
                                <h4 style={{ color: gold, marginBottom: '10px' }}>Synopsis:</h4>
                                <p style={{ color: '#eee', lineHeight: '1.6', fontSize: '1.05rem' }}>
                                    {work.synopsis}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* ফেড-ইন অ্যানিমেশনের জন্য ছোট CSS */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </main >
    );
}