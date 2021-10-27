/* eslint-disable no-var */
/**
 * @Author yejiang1015
 * @Date 2020-11-16 17:23:06
 * @Last Modified by: yejiang1015
 * @Last Modified time: 2020-11-20 14:38:46
 * @Message https://threejs.org/examples/webgl_points_waves.html
 */

import * as THREE from 'three';

import React, { useRef } from 'react';

import Stats from 'three/examples/jsm/libs/stats.module';

const SEPARATION = 100;
const AMOUNTX = 50;
const AMOUNTY = 50;

let container: HTMLDivElement, stats;
let camera, scene, renderer;
let particles;
let count = 0;
let mouseX = 0;
let mouseY = -200;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
const ParticleColor = 0x4faaff;
let isInit = false;
export default (props) => {
  const ThreeREF = useRef<HTMLDivElement>(null);
  const Init = () => {
    isInit = true;
    container = document.createElement('div');
    ThreeREF.current?.appendChild(container);
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100000);
    camera.position.z = 1000;
    scene = new THREE.Scene();
    const numParticles = AMOUNTX * AMOUNTY;
    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);
    let i = 0;
    let j = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2; // x
        positions[i + 1] = 0; // y
        positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2; // z
        scales[j] = 1;
        i += 3;
        j++;
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(ParticleColor) }
      },
      vertexShader: window.document.getElementById('vertexshader')?.textContent || undefined,
      fragmentShader: document.getElementById('fragmentshader')?.textContent || undefined
    });
    particles = new THREE.Points(geometry, material);
    scene.add(particles);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    stats = Stats();
    // container.appendChild(stats.dom);
    container.style.touchAction = 'none';
    /** 鼠标移动 */
    // container.addEventListener('pointermove', onPointerMove, false);
    window.addEventListener('resize', onWindowResize, false);
  };
  function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  function onPointerMove(event) {
    if (event.isPrimary === false) return;
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  }
  function animate() {
    requestAnimationFrame(animate);
    render();
    stats.update();
  }
  function render() {
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    const positions = particles.geometry.attributes.position.array;
    const scales = particles.geometry.attributes.scale.array;
    let i = 0;
    let j = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i + 1] = Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;
        scales[j] = (Math.sin((ix + count) * 0.3) + 1) * 20 + (Math.sin((iy + count) * 0.5) + 1) * 20;
        i += 3;
        j++;
      }
    }
    particles.geometry.attributes.position.needsUpdate = true;
    particles.geometry.attributes.scale.needsUpdate = true;
    renderer.render(scene, camera);
    count += 0.1;
  }
  const Animate = () => {
    requestAnimationFrame(animate);
    render();
    stats.update();
  };

  React.useEffect(() => {
    if (!ThreeREF) return;
    if (isInit) return;
    Init();
    Animate();
    return () => {
      isInit = false;
    };
  }, [ThreeREF]);
  return (
    <section className="ui-p-r ui-w-100 ui-h-100">
      <div className="three" ref={ThreeREF}></div>
      <div className="inner">{props.children}</div>
      <style jsx>{`
        .three,
        .inner {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
        }
        .three {
          z-index: 1;
        }
        .inner {
          z-index: 2;
          background: transparent;
        }
      `}</style>
    </section>
  );
};
