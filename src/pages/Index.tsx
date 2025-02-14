import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { Helmet } from "react-helmet";
import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhatIsNeftit } from "@/components/home/WhatIsNeftit";
import { TaskTypes } from "@/components/home/TaskTypes";
import { Footer } from "@/components/home/Footer";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

const Index = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearAlpha(0);

    const cubes: THREE.Mesh[] = [];
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    
    for (let i = 0; i < 10; i++) {
      const cubeMaterial = new THREE.MeshPhongMaterial({
        color: new THREE.Color(`hsl(${Math.random() * 360}, 70%, 50%)`),
        opacity: 0.7,
        transparent: true,
        shininess: 100,
      });
      
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      cubes.push(cube);
      scene.add(cube);
    }

    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x8B5CF6, 1);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xD946EF, 1);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    camera.position.z = 15;

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      cubes.forEach((cube, i) => {
        cube.rotation.x += 0.01 * (i % 2 ? 1 : -1);
        cube.rotation.y += 0.01 * (i % 3 ? 1 : -1);
        cube.position.x += Math.sin(Date.now() * 0.001 + i) * 0.02;
        cube.position.y += Math.cos(Date.now() * 0.001 + i) * 0.02;
      });

      camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>NEFTIT - Discover, Collect, and Trade NFTs</title>
        <meta 
          name="description" 
          content="Join the future of digital collectibles with our curated marketplace. Discover unique NFTs, connect your wallet, and start collecting today." 
        />
      </Helmet>

      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      <div className="min-h-screen font-['Inter'] overflow-x-hidden bg-[#111111]">
        <StarryBackground />
        <MainNav />
        
        <main className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="pt-24 pb-16 space-y-20 md:space-y-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Hero />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <FeaturedProjects />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <WhatIsNeftit />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <TaskTypes />
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
