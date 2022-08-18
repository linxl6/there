import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// 导入UI库
import * as dat from 'dat.gui';
import gsap from 'gsap';

/***
 * 参数调试图形化界面
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
controls.update()

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera)
}

animate()

// 初始化GUI界面

const GUI = new dat.GUI()
// 属性
GUI.add(cube.position, "x").min(0).max(5).step(0.01).name('x').onChange(value => {

}).onFinishChange(value => {

});
const params = {
    color: '#FFF',
    fn: () => {
        console.log('回调函数')
        gsap.to(cube.position, { x: 5, duration: 5 })
    }
}
// 添加颜色
GUI.addColor(params, 'color').onChange(value => {
    cube.material.color.set(value)
})
// 添加属性
GUI.add(cube, "visible")
// 添加事件
GUI.add(params, 'fn')
// 添加文件夹
const folder = GUI.addFolder('文件夹')
// 设置线框 在文件夹中添加属性
folder.add(cube.material, 'wireframe')