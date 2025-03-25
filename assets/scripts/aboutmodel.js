import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const canvas = document.getElementById('model-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const loader = new GLTFLoader();
loader.load('/public/homebg/tenhun_falling_spaceman_fanart/scene.gltf', (gltf) => {
    const model = gltf.scene;
    model.position.set(0, -0.5, 0);
    model.scale.set(1.5, 1.5, 1.5);

    scene.add(model);

    // Mouse movement
    document.addEventListener('mousemove', (event) => {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        model.rotation.y = x * Math.PI * 0.5;
        model.rotation.x = y * Math.PI * 0.5;
    });

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
});

camera.position.z = 3;

// Resize canvas dynamically
window.addEventListener('resize', () => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
});
