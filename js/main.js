// WebGL 3D Initialization
const init3DViewer = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('3d-car-container').appendChild(renderer.domElement);

    // Load Car Model
    const loader = new THREE.GLTFLoader();
    loader.load('3d-models/xpander.glb', function(gltf) {
        const car = gltf.scene;
        scene.add(car);
        animate();
    });

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
}

// AR Implementation
const launchAR = async () => {
    try {
        const XR = await navigator.xr.requestSession('immersive-ar');
        const canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
        const gl = canvas.getContext('webgl', { xrCompatible: true });
        
        // Render AR Content
        const renderLoop = () => {
            const frame = XR.requestAnimationFrame(renderLoop);
            gl.bindFramebuffer(gl.FRAMEBUFFER, frame.session.baseLayer.framebuffer);
            // Render 3D model here
        };
    } catch(e) {
        console.error('AR tidak didukung:', e);
    }
}

// Real-time Credit Calculator
const updateCalculation = () => {
    const harga = document.getElementById('harga').value;
    const tenor = document.getElementById('tenor').value;
    const bunga = 0.08;
    
    const cicilan = (harga * (1 + bunga)) / tenor;
    document.getElementById('hasil-cicilan').innerHTML = 
        `Cicilan: Rp${cicilan.toLocaleString()}/bulan`;
}

// AI Recommendation Engine
const aiRecommendation = () => {
    const answers = {};
    let currentStep = 1;
    
    document.querySelectorAll('.ai-options button').forEach(btn => {
        btn.addEventListener('click', () => {
            answers[`step${currentStep}`] = btn.dataset.answer;
            currentStep++;
            showNextStep();
        });
    });
}

// 3D Model Interaction
let carRotation = 0;
const rotateCar = (direction) => {
    carRotation += direction === 'left' ? 0.1 : -0.1;
    // Update 3D model rotation
}

// Dynamic Theme Switching
const toggleTheme = () => {
    document.documentElement.setAttribute('data-theme', 
        document.documentElement.getAttribute('data-theme') === 'dark' 
        ? 'light' 
        : 'dark'
    );
}
