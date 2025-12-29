export default function About() {
    return (
        <div style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '1rem', color: 'var(--color-accent)', marginBottom: '1rem' }}>// PROFILE</h2>
            <h1 style={{ fontSize: '2rem', lineHeight: '1.4', marginBottom: '2rem' }}>
                Engineering robust, scalable systems that power data-driven decisions.
            </h1>

            <div className="about-grid">
                <div>
                    <p style={{ lineHeight: '1.6', fontSize: '1rem', fontWeight: '500' }}>
                        I am a Software Development Engineer with a strong foundation in distributed systems and cloud architecture.
                        Currently at Skellam AI, I build fault-tolerant data pipelines and secure platforms, ensuring efficiency and reliability at scale.
                        My work bridges the gap between complex backend logic and intuitive user experiences.
                    </p>
                </div>
                <div>
                    <h3 style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>SKILLS</h3>
                    <ul style={{ lineHeight: '1.8', fontSize: '1rem', fontWeight: '500' }}>
                        <li>Java / Spring Boot</li>
                        <li>AWS (Lambda, SQS, Glue)</li>
                        <li>SQL & Data Engineering</li>
                        <li>React / Frontend</li>
                        <li>System Design</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
