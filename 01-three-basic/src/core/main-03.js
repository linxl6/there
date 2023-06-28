/**
 * 坐标辅助器
 * 红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴.
 */
import * as THREE from 'three';
// 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// 定义一个场景
const scene = new THREE.Scene()
// 定义坐标系
const axesHelper = new THREE.AxesHelper(5);
// 添加坐标系
scene.add(axesHelper);
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
// 创建轨道控制器 相机 监听的HTML元素
const controls = new OrbitControls(camera, renderer.domElement)

function animate() {
    // 渲染器渲染场景及相机
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera);
}
animate();