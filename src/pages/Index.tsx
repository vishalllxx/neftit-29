
import { MainNav } from "@/components/layout/MainNav";
import { Helmet } from "react-helmet";
import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhatIsNeftit } from "@/components/home/WhatIsNeftit";
import { TaskTypes } from "@/components/home/TaskTypes";
import { Footer } from "@/components/home/Footer";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Interactive 3D background
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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearAlpha(0);

    // Create an array of different geometries
    const geometries = [
      new THREE.TorusKnotGeometry(1, 0.3, 100, 16),
      new THREE.OctahedronGeometry(1),
      new THREE.TetrahedronGeometry(1),
      new THREE.IcosahedronGeometry(1),
      new THREE.DodecahedronGeometry(1)
    ];

    // Create floating objects with different materials
    const objects: THREE.Mesh[] = [];
    const count = 15;

    for (let i = 0; i < count; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(`hsl(${Math.random() * 360}, 70%, 50%)`),
        opacity: 0.7,
        transparent: true,
        shininess: 100,
        specular: new THREE.Color(0x8B5CF6),
        wireframe: Math.random() > 0.5,
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      mesh.scale.setScalar(Math.random() * 0.5 + 0.5);
      objects.push(mesh);
      scene.add(mesh);
    }

    // Add dynamic lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const pointLights: THREE.PointLight[] = [];
    const pointLightColors = [0x8B5CF6, 0xD946EF, 0x0EA5E9];

    pointLightColors.forEach((color, i) => {
      const light = new THREE.PointLight(color, 1);
      light.position.set(
        Math.cos(i * Math.PI * 2 / 3) * 5,
        Math.sin(i * Math.PI * 2 / 3) * 5,
        2
      );
      pointLights.push(light);
      scene.add(light);
    });

    camera.position.z = 15;

    // Animation loop with dynamic effects
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Rotate objects
      objects.forEach((obj, i) => {
        obj.rotation.x += 0.002 * (i % 2 ? 1 : -1);
        obj.rotation.y += 0.003 * (i % 3 ? 1 : -1);
        obj.position.y += Math.sin(elapsedTime * 0.5 + i) * 0.005;
        obj.position.x += Math.cos(elapsedTime * 0.5 + i) * 0.005;
      });

      // Move lights
      pointLights.forEach((light, i) => {
        light.position.x = Math.cos(elapsedTime * 0.5 + i * Math.PI * 2 / 3) * 5;
        light.position.y = Math.sin(elapsedTime * 0.5 + i * Math.PI * 2 / 3) * 5;
      });

      // Camera movement based on mouse position
      camera.position.x += (mousePosition.x * 2 - camera.position.x) * 0.05;
      camera.position.y += (-mousePosition.y * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      objects.forEach(obj => {
        obj.geometry.dispose();
        (obj.material as THREE.Material).dispose();
      });
      scene.clear();
    };
  }, [mousePosition]);

  return (
    <div ref={containerRef} className="relative">
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

      <div className="min-h-screen font-['Inter'] overflow-x-hidden bg-gradient-to-b from-[#111111] via-[#1a1a1a] to-[#111111] relative">
        {/* Enhanced background effects */}
        <div className="fixed inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-blue-500/5" 
               style={{
                 transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
                 transition: 'transform 0.1s ease-out'
               }}
          />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-20"
               style={{
                 transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
                 transition: 'transform 0.1s ease-out'
               }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"
               style={{
                 transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
                 transition: 'transform 0.1s ease-out'
               }}
          />
        </div>
        
        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform origin-left z-50"
          style={{ scaleX }}
        />
        
        <MainNav />
        
        <main className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="pt-24 pb-16 space-y-20 md:space-y-40">
            {/* Hero Section with enhanced animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9]
              }}
              className="relative"
            >
              <Hero />
            </motion.div>

            {/* Featured Projects with parallax and animations */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
              style={{
                transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="absolute -inset-x-4 top-0 h-96 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 blur-3xl opacity-30" />
              <FeaturedProjects />
            </motion.div>

            {/* What is Neftit section with scale effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9]
              }}
              className="relative"
              style={{
                transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <WhatIsNeftit />
            </motion.div>

            {/* Task Types with enhanced parallax */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
              style={{
                transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="absolute -inset-x-4 top-0 h-96 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 blur-3xl opacity-30" />
              <TaskTypes />
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
