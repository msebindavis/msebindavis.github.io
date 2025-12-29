export default function Contact() {
    return (
        <div style={{ maxWidth: '900px' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1.2', fontWeight: '800', marginBottom: '2rem' }}>
                LET'S WORK<br />
                <span className="text-accent">TOGETHER</span>
            </h1>
            <p style={{ maxWidth: '500px', lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '3rem' }}>
                I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="contact-grid">
                <div>
                    <h3 style={{ fontSize: '0.8rem', opacity: 0.5, marginBottom: '1rem' }}>CONTACT</h3>
                    <a href="mailto:sebindavis.mec@gmail.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', borderBottom: '1px solid var(--color-accent)', wordBreak: 'break-all' }}>sebindavis.mec@gmail.com</a>
                </div>
                <div>
                    <h3 style={{ fontSize: '0.8rem', opacity: 0.5, marginBottom: '1rem' }}>SOCIALS</h3>
                    <a href="https://x.com/SebinDavis8" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', borderBottom: '1px solid var(--color-accent)', wordBreak: 'break-all' }}>x.com/SebinDavis8</a>
                </div>
            </div>
        </div>
    )
}
