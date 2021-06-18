import * as THREE from 'three';

export const inwidth = window.innerWidth;
export const inheight = window.innerHeight;
export const ringMaterial = {
    color: 0x800000
};
export const pointsMaterial = {
    size: 0.005
};
export const starMaterial = {
    color: 0xffffff
};


export const textGeometryParameters = {
    font: new THREE.FontLoader().load( 'fonts/helvetiker_regular.typeface.json'),
    size: 80,
    height: 5,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 8,
    bevelOffset: 0,
    bevelSegments: 5
};