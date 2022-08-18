import gsap from 'gsap';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
/***
 * 监听画面的变化 更新渲染画面
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
// 设置控制器阻尼
controls.enableDamping = true
// 设置动画
const animate = gsap.to(cube.position, {
    x: 5,
    duration: 5,
    ease: 'power1.inOut',
    // 重复次数 -1 为不限制
    repeat: -1,
    // 往返运动
    yoyo: true,
    // 延时 秒
    delay: 2,
    onComplete: () => {
        // 完成回调
        console.log('finish')
    },
    onStart: () => {
        // 动画开始
        console.log('start')
    }
})
gsap.to(cube.rotation, { x: Math.PI * 2, duration: 5, ease: 'power1.inOut' })

window.addEventListener("click", () => {
    if (animate.isActive()) {
        animate.pause()
    } else {
        animate.resume()
    }
})

// 监听画面的变化，更新渲染画面
window.addEventListener('resize', () => {
    // 更新摄像机
    camera.aspect = window.innerWidth / window.innerHeight
    // 更新摄像机的投影矩阵
    camera.updateProjectionMatrix()
    // 更新渲染器
    renderer.setSize(window.innerWidth, window.innerHeight)
    // 设置渲染器像素比例
    renderer.setPixelRatio(window.devicePixelRatio)
})

function render() {
    requestAnimationFrame(render);
    controls.update();
    renderer.render(scene, camera)
}

render()

