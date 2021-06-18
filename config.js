import * as three from 'three';
import * as C from './constants';

export const configureRenderer = () => {
  const renderer = new three.WebGLRenderer(
    {
      canvas: document.querySelector('#bg'),
    }
  );
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(C.inwidth, C.inheight);

  return renderer;
}
export const configureRingObject = () => {
  const geometry = new three.TorusGeometry(10, 3, 16, 100);
  const material = new three.PointsMaterial(C.pointsMaterial);
  const mesh = new three.Points(geometry, material);
  return mesh;

}

export const rotateObject = obj => {
  obj.rotation.y += 0.005;
}

export const addStar = scene => {
  const geometry = new three.SphereGeometry(0.25, 24, 24);
  const material = new three.MeshStandardMaterial(C.starMaterial);
  const star = new three.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => three.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);
}

export const addStars = scene => {
  Array(300).fill().forEach(() => addStar(scene));
}

