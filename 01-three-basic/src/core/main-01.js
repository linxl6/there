import * as THREE from 'three';
/***
 * 使用THREE搭建第一个场景和物体 
 */
// 初始化场景
const scene = new THREE.Scene();
// 创建摄像机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// 设置位置 x,y,z
camera.position.set(0, 0, 10)
// 摄像机添加到场景里面
scene.add(camera)
// 添加物体
// 创建几何体
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
// 创建材质
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xfff000 })
// 创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
// 添加材质
scene.add(cube)
// 初始化渲染器
const renderer = new THREE.WebGLRenderer()
// 设置渲染尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight)
// 添加到页面
document.body.appendChild(renderer.domElement)
// 使用渲染器通过相机将场景渲染进来
renderer.render(scene, camera)

