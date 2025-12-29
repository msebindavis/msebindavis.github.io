const projects = [
    { id: 1, title: 'DISTRIBUTED INGESTION', category: 'JAVA / AWS', year: '2024' },
    { id: 2, title: 'ENTERPRISE RBAC', category: 'SECURITY', year: '2024' },
    { id: 3, title: 'AI QUERY ENGINE', category: 'FASTAPI + ML', year: '2024' },
    { id: 4, title: 'TOURIST BIKE BOOKING', category: 'WEB PLATFORM', year: '2023' },
]

export default function Works() {
    return (
        <div style={{ width: '100%', maxWidth: '1000px', marginLeft: 'auto', paddingRight: '10%' }}>
            <h2 style={{ fontSize: '1rem', marginBottom: '2rem', opacity: 0.5 }}>SELECTED WORKS (04)</h2>
            <ul style={{ display: 'flex', flexDirection: 'column' }}>
                {projects.map((p) => (
                    <li key={p.id} style={{
                        borderTop: '1px solid rgba(255,255,255,0.2)',
                        padding: '2rem 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        cursor: 'pointer',
                        transition: 'padding-left 0.3s'
                    }}
                        onMouseEnter={(e) => { e.currentTarget.style.paddingLeft = '1rem'; e.currentTarget.style.color = 'var(--color-accent)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.paddingLeft = '0'; e.currentTarget.style.color = 'var(--color-text)'; }}
                    >
                        <span style={{ fontSize: '2rem', fontWeight: 300 }}>{p.title}</span>
                        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.8rem', opacity: 0.7 }}>
                            <span>{p.category}</span>
                            <span>{p.year}</span>
                        </div>
                    </li>
                ))}
                <li style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }} />
            </ul>
        </div>
    )
}
