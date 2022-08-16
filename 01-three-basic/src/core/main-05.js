import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
/***
 * clock 对象 时间参数
 */
// 初始化场景
const scene = new THREE.Scene();
// 创建摄像机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// 设置位置 x,y,z
camera.position.set(10, 0, 0)
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

// 使用轨道控制器，环绕物体进行运动
// 创建轨道控制器
// 添加坐标轴 5 是长度
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

const controls = new OrbitControls(camera, renderer.domElement)
// 设置时钟

const clock = new THREE.Clock()

function animate() {
    // 获取运行总时长
    let time = clock.getElapsedTime()
    // 获取运行间隔时间
    // let delta = clock.getDelta()
    // console.log(`运行总时长${time}，间隔时间${delta}`)
    let t = time % 5
    cube.position.x = t * 1;
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera)
}

animate()