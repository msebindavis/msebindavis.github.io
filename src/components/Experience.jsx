import { useRef, useMemo } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import { PerspectiveCamera, Stars, Float, shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

const RepulsionMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector2(0, 0),
    uAspect: 1.0,
    uRadius: 0.4,
    uStrength: 2.0,
  },
  // Vertex Shader
  `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uAspect;
    uniform float uRadius;
    uniform float uStrength;
    
    attribute vec3 color;
    varying vec3 vColor;

    void main() {
      vColor = color;
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vec4 viewPosition = viewMatrix * worldPosition;
      vec4 clipPosition = projectionMatrix * viewPosition;
      
      vec3 projected = clipPosition.xyz / clipPosition.w;
      vec2 ndc = projected.xy;
      
      // Calculate screen space distance (corrected for aspect ratio)
      vec2 distVec = ndc - uMouse;
      distVec.x *= uAspect;
      float dist = length(distVec);
      
      if(dist < uRadius) {
         float intensity = (1.0 - dist / uRadius);
         intensity = pow(intensity, 2.0);
         
         // Direction in View Space
         // We want to push the particle away from the mouse ray
         vec2 dir = normalize(ndc - uMouse);
         
         // Apply to View XY
         viewPosition.xy += dir * intensity * uStrength;
      }

      gl_Position = projectionMatrix * viewPosition;
      
      // Size attenuation
      gl_PointSize = 4.0 * (20.0 / -viewPosition.z);
    }
  `,
  // Fragment Shader
  `
    varying vec3 vColor;
    void main() {
      // Circular particle
      float r = distance(gl_PointCoord, vec2(0.5));
      if (r > 0.5) discard;
      
      // Glow/Soft edge
      float strength = 1.0 - (r * 2.0);
      strength = pow(strength, 2.0);

      gl_FragColor = vec4(vColor, strength);
    }
  `
)

extend({ RepulsionMaterial })

function ParticleStorm() {
  const points = useRef()
  const materialRef = useRef()

  // Particle Storm Parameters
  const parameters = {
    count: 70000,
    size: 0.02,
    xRange: 40, // Wide spread
    yRange: 20, // Tall spread
    zRange: 20, // Deep spread
    insideColor: '#00E5FF',
    outsideColor: '#7000FF'
  }

  const geometryData = useMemo(() => {
    const positions = new Float32Array(parameters.count * 3)
    const colors = new Float32Array(parameters.count * 3)

    const colorInside = new THREE.Color(parameters.insideColor)
    const colorOutside = new THREE.Color(parameters.outsideColor)

    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3

      // Random "Cloud/Sandstorm" distribution
      const x = (Math.random() - 0.5) * parameters.xRange
      const y = (Math.random() - 0.5) * parameters.yRange
      const z = (Math.random() - 0.5) * parameters.zRange

      positions[i3] = x
      positions[i3 + 1] = y
      positions[i3 + 2] = z

      // Color variation: 30% White, Rest Mixed
      if (Math.random() < 0.3) {
        colors[i3] = 1.0
        colors[i3 + 1] = 1.0
        colors[i3 + 2] = 1.0
      } else {
        const mixedColor = colorInside.clone()
        mixedColor.lerp(colorOutside, Math.random())

        colors[i3] = mixedColor.r
        colors[i3 + 1] = mixedColor.g
        colors[i3 + 2] = mixedColor.b
      }
    }

    return { positions, colors }
  }, [])

  useFrame((state, delta) => {
    if (points.current) {
      // Gentle Drift
      points.current.rotation.y += delta * 0.02
    }

    if (materialRef.current) {
      materialRef.current.uTime += delta
      materialRef.current.uAspect = state.viewport.aspect

      // "Grand Marvellous" Logic:
      // Check for fine pointer (Mouse/Trackpad) to detect Desktop-like behavior
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches

      if (hasFinePointer) {
        // Desktop/Laptop -> Always follow mouse with ZERO LAG
        materialRef.current.uMouse.set(state.pointer.x, state.pointer.y)
      } else {
        // Mobile/Touch-only -> Auto-Wander (Cosmic Pulse)
        const time = state.clock.elapsedTime
        const autoX = Math.sin(time * 0.5) * 0.4
        const autoY = Math.cos(time * 0.3) * 0.3

        materialRef.current.uMouse.x += (autoX - materialRef.current.uMouse.x) * delta * 2.0
        materialRef.current.uMouse.y += (autoY - materialRef.current.uMouse.y) * delta * 2.0
      }
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={parameters.count}
          array={geometryData.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={parameters.count}
          array={geometryData.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <repulsionMaterial
        ref={materialRef}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

export default function Experience() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />

      <color attach="background" args={['#000000']} />

      {/* Deep Space Background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      {/* The Particle Storm */}
      <Float position={[0, 0, 0]} speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
        <ParticleStorm />
      </Float>
    </>
  )
}
