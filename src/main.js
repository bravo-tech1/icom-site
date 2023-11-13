/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'

import { m } from "./m-labs";

window.axios = axios.create({
    baseURL: 'https://icom-agency.com/api',
});
window.axios.defaults.headers.common['accept-language'] = 'en';


$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I
        return false;
    }
});

$(document).on("contextmenu", function (e) {
    e.preventDefault();
});

createApp(App).use(store).use(router).use(m).mount("#app");

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

/**
 * Base
 */
let canvas,
    renderer,
    camera,
    scene,
    sizes,
    loader,
    ready = false,
    gamma,
    flag = false;
let repeatedNum = 0;
sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

setTimeout(async () => {
    // Canvas
    canvas = document.querySelector("canvas.webgl");

    /**
     * Sizes
     */

    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
    });

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        35,
        sizes.width / sizes.height,
        0.1,
        100
    );
    camera.position.z = 9;
    camera.position.x = 0;
    camera.position.y = -0.5;

    scene.add(camera);

    let isMobile = false;
    if (sizes.width < 800) {




        isMobile = true;

        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        // Update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();
        camera.position.x -= 0.3;
        camera.rotation.x -= 0.121;

        // Update renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /**
     * Objects
     */

    loader = new GLTFLoader();
    await loader.load("/components/computer.glb", function async(gltf) {
        let obj = gltf.scene;
        if (isMobile) obj.scale.set(gamma * 100, gamma * 100, gamma * 100);
        else obj.scale.set(gamma * 103, gamma * 103, gamma * 103);
        for (let index = 0; index < obj.children.length; index++) {
            obj.children[index].clone();

            if (isMobile) {
                obj.children[index].position.x = -4.319;
                obj.children[index].position.y = -10;
            } else {
                obj.children[index].position.x = -0.49;
                obj.children[index].position.y = 0;
            }
            if (sizes.width < 900) {
                obj.children[index].position.x += 4;
                obj.children[index].position.y += 10;
            }
            oldPosZ = obj.children[index].position.z - 200;
        }
        obj.name = "";
        scene.add(obj);
    });
    // Base camera

    var textureLoaderBack = new THREE.TextureLoader();
    var backgroundTexture = textureLoaderBack.load(
        "background/background_image.png"
    );

    if (sizes.width < 900) {
        gamma = 0.01;

        scene.add(camera);

        repeatedNum = 30;
    } else {
        gamma = 0.02;
    }
    flag = false;
    ready = true;
    setTimeout(() => {
        repeatedNum = 10;
        init();
    }, 400);

    flag = true;
}, 1);

async function init() {
    await loader.load("/components/logo1.glb", function async(gltf) {
        let obj = gltf.scene;
        obj.scale.set(gamma * 4, gamma * 4, gamma * 4);
        for (let index = 0; index < obj.children.length; index++) {
            obj.children[index].clone();
            obj.children[index].material.metalness = -1;
            obj.children[index].position.x -= 30;
            obj.children[index].position.y += 8;
            if (sizes.width < 900) {
                obj.children[index].position.x += 3;
            }
            oldPosZ = obj.children[index].position.z - 2;
            obj.children[index].position.z = 16 * repeatedNum;
        }
        obj.name = "logo";
        scene.add(obj);
    });
    await loader.load("components/back3.glb", function async(gltf) {
        let obj = gltf.scene;
        obj.scale.set(gamma * 4.6, gamma * 4.6, gamma * 4.6);

        for (let index = 0; index < obj.children.length; index++) {
            obj.children[index].clone();
            obj.children[index].material.metalness = -1.5;
            obj.children[index].position.x -= 30;
            obj.children[index].position.y -= 4;

            oldPosZ = obj.children[index].position.z - 2;

            if (sizes.width < 900) {
                obj.children[index].position.x += 3;
                obj.children[index].position.y -= 0.2;

            }

            obj.children[index].position.z = 13 * repeatedNum;
        }
        obj.traverse(function (child) {
            if (child instanceof THREE.Mesh) child.material.color.setHex(0x4b2b84);
        });
        obj.name = "back";
        scene.add(obj);
        const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
        scene.add(light);
    });
}

let oldPosZ = 0;
let companyName;

/**
 * Lights
 */

window.addEventListener("resize", () => {
    if (ready) {
        // Update sizes

        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        // Update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        // Update renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
});

/**
 * Cursor
 */
const cursor = {};
cursor.x = 0;
cursor.y = 0;

/**
 * Animate
 */
let changed = false;
let runCount = 0;

const tick = () => {



    if (ready) {
        let backSpeed = 0;
        let logoSpeed = 0;
        if (sizes.width > 800) {
            backSpeed = 1;
            logoSpeed = 3.2;
        } else {
            backSpeed = 1.5;
            logoSpeed = 2;
        }
        runCount = runCount + 1;
        if (runCount >= 1) {
            runCount = 0;
            for (let index = 0; index < scene.children.length; index++) {
                if (scene.children[index].name == "back") {
                    for (let m = 0; m < scene.children[index].children.length; m++) {
                        if (scene.children[index].children[m].position.z > -15) {
                            scene.children[index].children[m].position.z -=
                                Math.random() * backSpeed;
                        } else {
                            scene.children[index].children[m].position.z = -15;
                        }
                    }
                } else {
                    changed = true;

                    if (flag) {
                        for (let s = 0; s < scene.children.length; s++) {
                            if (scene.children[s].name == "logo") {
                                for (let m = 0; m < scene.children[s].children.length; m++) {
                                    if (scene.children[s].children[m].position.z > -13) {
                                        scene.children[s].children[m].position.z -=
                                            Math.random() / logoSpeed;
                                    } else {
                                        scene.children[s].children[m].position.z = -13;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        // Render
        renderer.render(scene, camera);
    }
    window.requestAnimationFrame(tick);
};

tick();




window.addEventListener('popstate', function (event) {


    if (!(this.window.location.href.indexOf('#') > -1)) {
        this.window.location.href = '/';
    }

}, false);


