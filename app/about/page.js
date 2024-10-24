"use client";

import Image from 'next/image';
import { useEffect } from 'react';

export default function About() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });

        document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="about-container">
            <section className="hero fade-in">
                <div className="hero-content">
                    <h1>About Soltax</h1>
                    <p>Your Trusted Partner in Financial Success</p>
                </div>
            </section>

            <section className="mission fade-in">
                <div className="content">
                    <h2>Our Mission</h2>
                    <p>At Soltax, we are committed to providing expert financial guidance and innovative solutions to help our clients achieve their financial goals. We believe in building long-lasting relationships based on trust, integrity, and exceptional service.</p>
                </div>
                <div className="image-container">
                    <Image src="/images/ourmission.jpg" alt="Soltax Mission" width={500} height={300} objectFit="cover" />
                </div>
            </section>

            <section className="values fade-in">
                <h2>Our Core Values</h2>
                <div className="values-grid">
                    {[
                        {
                            title: 'Integrity',
                            description: 'We uphold the highest ethical standards in all our dealings, ensuring transparency and honesty in every aspect of our work.'
                        },
                        {
                            title: 'Expertise',
                            description: 'Our team of professionals continuously updates their knowledge to provide cutting-edge financial solutions tailored to your needs.'
                        },
                        {
                            title: 'Client-Centric',
                            description: "We prioritize our clients' interests, offering personalized services that address their unique financial challenges and goals."
                        },
                        {
                            title: 'Innovation',
                            description: 'We embrace technological advancements and creative problem-solving to deliver efficient and effective financial strategies.'
                        }
                    ].map((value, index) => (
                        <div key={index} className="value-item">
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <style jsx>{`
                .about-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem;
                }

                .hero {
                    text-align: center;
                    padding: 8rem 0;
                    background-image: url('/images/soltax.jpeg');
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    margin-bottom: 3rem;
                }

                .hero::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                }

                .hero-content {
                    position: relative;
                    z-index: 1;
                }

                .hero h1 {
                    font-size: 3.5rem;
                    color: #ffffff;
                    margin-bottom: 1rem;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                }

                .hero p {
                    font-size: 1.5rem;
                    color: #ffffff;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
                }

                .mission {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    margin-bottom: 3rem;
                }

                .mission .content {
                    flex: 1;
                }

                .mission h2, .values h2 {
                    font-size: 2.5rem;
                    color: #2c3e50;
                    margin-bottom: 1rem;
                }

                .mission p {
                    font-size: 1.1rem;
                    color: #34495e;
                    line-height: 1.6;
                }

                .image-container {
                    flex: 1;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                .values {
                    margin-bottom: 3rem;
                }

                .values-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }

                .value-item {
                    background-color: #f8f9fa;
                    padding: 1.5rem;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .value-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
                }

                .value-item h3 {
                    font-size: 1.3rem;
                    color: #2c3e50;
                    margin-bottom: 0.5rem;
                }

                .value-item p {
                    font-size: 1rem;
                    color: #34495e;
                    line-height: 1.5;
                }

                .fade-in {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
                }

                .fade-in.show {
                    opacity: 1;
                    transform: translateY(0);
                }

                @media (max-width: 768px) {
                    .mission {
                        flex-direction: column;
                    }

                    .hero h1 {
                        font-size: 2.5rem;
                    }

                    .hero p {
                        font-size: 1.2rem;
                    }

                    .mission h2, .values h2 {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </div>
    );
}
