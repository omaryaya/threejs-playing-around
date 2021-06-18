import './style.css'
import * as three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import * as config from './config';

// Scene | Camera | Renderer
const scene = new three.Scene();

const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.setZ(30);

// Lighting
const pointLight = new three.PointLight(0xFFFFFF);
const ambientLight = new three.AmbientLight(0xFFFFFF);
pointLight.position.set(0,0,0);

const lightHelper = new three.PointLightHelper(pointLight);
scene.add(pointLight, ambientLight);
scene.add(lightHelper);

// Grid
const gridHelper = new three.GridHelper(200, 100);
scene.add(gridHelper);


// Scene Objects
let ring = config.configureRingObject();
scene.add(ring);
config.addStars(scene);
const spaceTexture = new three.TextureLoader().load('assets/space.jpg');
scene.background = spaceTexture;

const renderer = config.configureRenderer(three);
// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);

const animate = () => {
  requestAnimationFrame(animate);
  config.rotateObject(ring);
  controls.update();
  renderer.render(scene, camera);
}

animate();


