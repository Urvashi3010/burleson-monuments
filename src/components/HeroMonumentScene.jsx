import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function HeroMonumentScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext('webgl2', {
      alpha: true,
      antialias: true
    });

    if (!context) {
      return undefined;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas,
      context,
      alpha: true,
      antialias: true,
      powerPreference: 'low-power'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 40);
    camera.position.set(0, 0, 5.8);

    scene.add(new THREE.AmbientLight(0xfff7eb, 1.8));

    const keyLight = new THREE.DirectionalLight(0xf7e7ce, 3.2);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    const roseLight = new THREE.PointLight(0xdb7093, 2.2, 10);
    roseLight.position.set(-2.2, 1.4, 2.5);
    scene.add(roseLight);

    const monument = new THREE.Group();
    scene.add(monument);

    const stoneShape = new THREE.Shape();
    stoneShape.moveTo(-0.78, -1.08);
    stoneShape.lineTo(-0.78, 0.45);
    stoneShape.quadraticCurveTo(-0.78, 1.08, 0, 1.08);
    stoneShape.quadraticCurveTo(0.78, 1.08, 0.78, 0.45);
    stoneShape.lineTo(0.78, -1.08);
    stoneShape.closePath();

    const stoneGeometry = new THREE.ExtrudeGeometry(stoneShape, {
      depth: 0.22,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.045,
      bevelThickness: 0.045,
      curveSegments: 16
    });
    stoneGeometry.center();

    const stoneMaterial = new THREE.MeshStandardMaterial({
      color: 0x71818a,
      roughness: 0.48,
      metalness: 0.24
    });

    const stone = new THREE.Mesh(stoneGeometry, stoneMaterial);
    stone.position.y = 0.15;
    monument.add(stone);

    const trimMaterial = new THREE.MeshStandardMaterial({
      color: 0xf7e7ce,
      emissive: 0x69543a,
      emissiveIntensity: 0.28,
      metalness: 0.62,
      roughness: 0.3
    });

    const addTrim = (width, height, x, y, z = 0.16) => {
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(width, height, 0.025),
        trimMaterial
      );
      mesh.position.set(x, y, z);
      monument.add(mesh);
    };

    addTrim(1.08, 0.025, 0, 0.52);
    addTrim(1.08, 0.025, 0, -0.54);
    addTrim(0.025, 1.05, -0.57, -0.01);
    addTrim(0.025, 1.05, 0.57, -0.01);

    const base = new THREE.Mesh(
      new THREE.BoxGeometry(1.35, 0.2, 0.42),
      stoneMaterial
    );
    base.position.y = -1.12;
    monument.add(base);

    const foot = new THREE.Mesh(
      new THREE.BoxGeometry(1.52, 0.16, 0.56),
      stoneMaterial
    );
    foot.position.y = -1.3;
    monument.add(foot);

    const medallion = new THREE.Mesh(
      new THREE.TorusGeometry(0.15, 0.012, 8, 48),
      trimMaterial
    );
    medallion.position.set(0, 0.15, 0.17);
    monument.add(medallion);

    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(1.62, 0.012, 8, 112),
      new THREE.MeshBasicMaterial({
        color: 0xdb7093,
        transparent: true,
        opacity: 0.45
      })
    );
    halo.position.set(0, 0.08, -0.48);
    halo.rotation.x = -0.12;
    scene.add(halo);

    const particlePositions = new Float32Array(84);
    for (let index = 0; index < particlePositions.length / 3; index += 1) {
      const angle = (index / 28) * Math.PI * 2;
      const radius = 1.8 + (index % 4) * 0.09;
      particlePositions[index * 3] = Math.cos(angle) * radius;
      particlePositions[index * 3 + 1] = Math.sin(angle) * radius * 0.72;
      particlePositions[index * 3 + 2] = -0.2 + (index % 3) * 0.14;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xf7e7ce,
      size: 0.035,
      transparent: true,
      opacity: 0.8,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    let animationFrame = null;
    let isVisible = !('IntersectionObserver' in window);

    const renderFrame = (time = 0) => {
      monument.rotation.y = Math.sin(time * 0.00022) * 0.13;
      monument.position.y = Math.sin(time * 0.00048) * 0.035;
      halo.rotation.z = time * 0.000035;
      particles.rotation.y = time * 0.000055;
      renderer.render(scene, camera);
    };

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (width === 0 || height === 0) {
        return;
      }

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderFrame();
    };

    const animate = (time) => {
      animationFrame = requestAnimationFrame(animate);
      renderFrame(time);
    };

    const startAnimation = () => {
      if (!reducedMotion && isVisible && animationFrame === null) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const stopAnimation = () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
    };

    const resizeObserver = typeof ResizeObserver === 'undefined'
      ? null
      : new ResizeObserver(resize);
    resizeObserver?.observe(canvas);
    window.addEventListener('resize', resize);
    resize();

    const visibilityObserver = 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            startAnimation();
          } else {
            stopAnimation();
          }
        })
      : null;
    visibilityObserver?.observe(canvas);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    startAnimation();

    return () => {
      stopAnimation();
      resizeObserver?.disconnect();
      visibilityObserver?.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      const geometries = new Set();
      const materials = new Set();
      scene.traverse((object) => {
        if (object.geometry) {
          geometries.add(object.geometry);
        }

        if (Array.isArray(object.material)) {
          object.material.forEach((material) => materials.add(material));
        } else if (object.material) {
          materials.add(object.material);
        }
      });
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());

      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-monument-canvas" />;
}

export default HeroMonumentScene;
