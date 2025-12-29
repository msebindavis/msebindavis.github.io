import { Canvas } from '@react-three/fiber'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Experience from './components/Experience'
import UI from './components/UI'
import Home from './pages/Home'
import Works from './pages/Works'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      {/* 3D Background */}
      <div className="fullscreen" style={{ zIndex: 0 }}>
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </Canvas>
      </div>

      {/* UI Overlay */}
      <BrowserRouter>
        <UI>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </UI>
      </BrowserRouter>
    </>
  )
}
