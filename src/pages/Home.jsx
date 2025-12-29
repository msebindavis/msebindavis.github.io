export default function Home() {
    return (
        <div style={{ maxWidth: '900px' }}>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '0.9', fontWeight: '800', letterSpacing: '-0.02em', mixBlendMode: 'difference' }}>
                FULL STACK<br />
                <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--color-accent)' }}>ENGINEER</span>
            </h1>
            <p style={{ marginTop: '2rem', maxWidth: '500px', lineHeight: '1.6', fontSize: '1rem', opacity: 0.8 }}>
                Architecting scalable cloud solutions and high-performance web applications with Java, AWS, and React.
            </p>

            <div style={{ marginTop: '3rem' }}>
                <a href="https://drive.google.com/file/d/1_2AzXUhv8HClOHq9LKNt3aojLh6DdwwK/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{
                    background: 'var(--color-accent)',
                    color: '#000',
                    border: 'none',
                    padding: '1rem 2rem',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    marginTop: '1rem',
                    cursor: 'pointer',
                    display: 'inline-block',
                    textDecoration: 'none',
                    pointerEvents: 'auto'
                }}>
                    VIEW RESUME
                </a>
            </div>
        </div>
    )
}
