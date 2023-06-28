/**
 * 第一个场景
 */
import * as THREE from 'three'
// 定义一个场景
const scene = new THREE.Scene()
// 定义一个透视相机 75 FOV 视野角度 宽高比 近截面 远截面
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
// 渲染器
const renderer = new THREE.WebGLRenderer()
// 设置渲染器宽高
renderer.setSize(window.innerWidth, window.innerHeight)
// 添加节点
document.body.appendChild(renderer.domElement)
// 定义一个立方体 长宽高为1
const geometry = new THREE.BoxGeometry(1, 1, 1)
// 定义材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// 定义一个网格对象 包含几何体及材质
const cube = new THREE.Mesh(geometry, material)
// 在场景中添加网格对象
scene.add(cube)
// 设置相机角度
camera.position.z = 5

function animate() {
    //  做循环
    requestAnimationFrame(animate);
    // 渲染器渲染场景及相机
    renderer.render(scene, camera);
    // 网格对象移动
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
animate();