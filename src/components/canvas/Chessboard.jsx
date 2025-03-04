import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Chessboard = ({ isMobile }) => {
  const chessboard = useGLTF(`${import.meta.env.BASE_URL}chessboard/scene.gltf`);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={chessboard.scene}
        scale={0.5}
        position={[0, -2.25, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </mesh>
  );
};

const ChessCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Don't render anything on mobile
  if (isMobile) {
    return null;
  }

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Chessboard isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

// Only preload on desktop
if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia("(min-width: 501px)").matches) {
  useGLTF.preload(`${import.meta.env.BASE_URL}chessboard/scene.gltf`);
}

export default ChessCanvas;