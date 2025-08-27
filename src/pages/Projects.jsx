import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

function CarModel() {
  const car = useGLTF("/car_model.glb"); // ton modèle 3D de voiture
  return <primitive object={car.scene} scale={0.8} />;
}

export default function Landing() {
  return (
    <div className="w-full h-screen bg-[#1C1C1C] flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl md:text-6xl font-bold mb-8">Bienvenue dans mon Hangar</h1>
      <p className="mb-12 text-xl text-[#FF9500]">Découvrez mes projets et compétences</p>

      <div className="w-full h-[60vh]">
        <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[5, 5, 5]} angle={0.3} />
          <Stage environment="city" intensity={0.6}>
            <CarModel />
          </Stage>
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>

      <motion.a
        href="/about"
        className="mt-12 px-6 py-3 bg-[#E10600] hover:bg-[#FF9500] rounded-lg text-lg font-semibold transition-colors"
        whileHover={{ scale: 1.05 }}
      >
        Découvrir
      </motion.a>
    </div>
  );
}
