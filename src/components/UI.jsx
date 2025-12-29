import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const pageVariants = {
    initial: { opacity: 0, y: 10, filter: 'blur(5px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -10, filter: 'blur(5px)' }
}

export default function UI({ children }) {
    const location = useLocation()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true)
        }, 1200) // Reduced delay
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="fullscreen ui-container">
            {/* Loading State */}
            <AnimatePresence>
                {!loaded && (
                    <motion.div
                        initial={{ opacity: 1, x: "-50%", y: "-50%" }}
                        exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            color: 'var(--color-accent)',
                            fontSize: '0.8rem',
                            letterSpacing: '0.2em',
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        INITIALIZING_
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main UI */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: loaded ? 1 : 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}
            >
                {/* Header */}
                <header className="ui-header">
                    <Link to="/" className="ui-text-header">
                        SEBIN DAVIS<span className="text-accent">_</span>
                    </Link>

                    <nav style={{ width: '100%', maxWidth: 'max-content' }}>
                        <ul className="ui-nav-list">
                            <li><Link to="/works" className="glitch-hover" data-text="WORKS">WORKS</Link></li>
                            <li><Link to="/about" className="glitch-hover" data-text="PROFILE">PROFILE</Link></li>
                            <li><Link to="/contact" className="glitch-hover" data-text="CONTACT">CONTACT</Link></li>
                        </ul>
                    </nav>
                </header>

                {/* Dynamic Content */}
                <main className="ui-main">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "anticipate" }}
                            style={{ width: '100%', pointerEvents: 'auto' }}
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </main>

                {/* Footer / Status */}
                <footer className="ui-footer">
                    <div>FULL STACK DEVELOPER</div>
                    <div>Always with Love.</div>
                </footer>
            </motion.div>
        </div>
    )
}
