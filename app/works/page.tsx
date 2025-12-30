"use client";
import { useState } from 'react';

// ১. তোমার বলা ক্রমানুসারে (Sonakto, Postmaster, Mahanayak, Iti Binodini) সাজানো হয়েছে
export const worksData = [
    {
        id: "4",
        year: "2005",
        title: "SONAKTO",
        desc: "A story of a ghost scripted in comedy",
        synopsis: "Full synopsis: A hilarious story of a ghost who visits a family and becomes their daily chaos, a hilarious take on the supernatural world. This comedy classic has been one of the most loved productions of Theatre-Place."
    },
    {
        id: "5",
        year: "2006",
        title: "Oshompurno",
        desc: "A story of a unouch on stage",
        synopsis: "Full synopsis : It is the story of the struggles and life of a unouch and concluding to their soft emotions and hardships"
    },
    {
        id: "6",
        year: "2008",
        title: "Hotat Nayok",
        desc: "The story of a young boy who dreamt to be an actor",
        synopsis: "Full synopsis : It is the story of the life of a young boy who dreamt to be an actor and it is scripted in drama on stage in a comedy mood but finally becoming a famous actor fulfilling his dream"
    },

    {
        id: "2",
        year: "2013",
        title: "POSTMASTER",
        desc: "The story written by Rabindranath Tagore scripted in drama on stage",
        synopsis: "Full synopsis: Based on Tagore's profound writing, this play focuses on the relationship between a postmaster and Ratan, exploring themes of morality, duty, and human emotions."
    },
    {
        id: "3",
        year: "2022",
        title: "MAHANAYAK",
        desc: "The description about the life of the legendary and most known actor in image of Uttam Kumar.",
        synopsis: "Full synopsis: This play explores the journey of the greatest star of Bengali cinema, Uttam Kumar, his struggles, and his legendary rise to fame. Directed by Gourinath Banerjee, it captures the golden era of cinema."
    },
    {
        id: "9",
        year: "2023",
        title: "Bishorjoner Baddi",
        desc: "The story of a poor and innocent girl concluding to her most saddest tragedy",
        synopsis: "Full synopsis: This play explores the journey of a poor and innocent girl concluding to her most saddest tragedy who got murdered by a very wicked villager directing only her life struggles"
    },

    {
        id: "1",
        year: "2024",
        title: "ITI BINODINI",
        desc: "A story of the renowned actress who was famous for dramas in early ages",
        synopsis: "This drama depicts the tragic yet inspiring life of Binodini Dasi, the first star of the Bengali stage. It highlights her dedication to theatre and the societal challenges she faced."
    }
];

export default function WorksPage() {
    const gold = '#FFB100';
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleWork = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <main style={{
            backgroundColor: '#050505',
            color: '#fff',
            padding: '80px 15px',
            minHeight: '100vh',
            overflowX: 'hidden'
        }}>

            <h1 style={{
                textAlign: 'center',
                color: gold,
                fontSize: 'clamp(1.8rem, 8vw, 2.5rem)',
                marginBottom: '40px',
                wordWrap: 'break-word'
            }}>
                Productions
            </h1>

            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                {worksData.map((work) => (
                    <div
                        key={work.id}
                        onClick={() => toggleWork(work.id)}
                        style={{
                            borderBottom: '1px solid #333',
                            padding: '25px 0',
                            cursor: 'pointer',
                            width: '100%'
                        }}
                    >
                        <span style={{ color: gold, fontWeight: 'bold', fontSize: '1rem' }}>{work.year}</span>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 style={{
                                margin: '5px 0',
                                fontSize: 'clamp(1.2rem, 5vw, 1.6rem)',
                                textTransform: 'uppercase'
                            }}>
                                {work.title}
                            </h2>
                            <span style={{ color: gold, fontSize: '1.2rem' }}>
                                {openId === work.id ? '−' : '+'}
                            </span>
                        </div>

                        <p style={{ color: '#bbb', fontSize: '0.95rem', lineHeight: '1.4' }}>{work.desc}</p>

                        {/* সিনোপসিস সেকশন */}
                        {openId === work.id && (
                            <div style={{
                                marginTop: '15px',
                                padding: '15px',
                                backgroundColor: '#111',
                                borderLeft: `3px solid ${gold}`,// এখানে ব্যাকটিকস ব্যবহার করা হয়েছে কালার কাজ করানোর জন্য
                            }}>
                                <h4 style={{ color: gold, marginBottom: '8px', fontSize: '1rem' }}>Synopsis:</h4>
                                <p style={{ color: '#eee', lineHeight: '1.5', fontSize: '0.95rem' }}>
                                    {work.synopsis}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* ৫. এনিমেশন ও অন্যান্য স্টাইল */}
            <style jsx>{`
                div {
                    animation: fadeIn 0.4s ease;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </main >
    );
}