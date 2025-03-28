// get the canvas element
const canvas = document.getElementById("renderCanvas");
// create the babylom 3D engine
const engine = new BABYLON.Engine(canvas, true);

// create the scene
const createScene = function() {
    const scene = new BABYLON.Scene(engine);
    // creating a camera
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    // creating the lighting
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
    
    // creating a ground
    const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 10, height: 10 }, scene);
   // creating the chess like ground
    const groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
    const groundDesign = new BABYLON.Texture("images/10071154.jpg", scene);
   
    groundMaterial.diffuseTexture = groundDesign;
    ground.material = groundMaterial;

    // adding walls to the scene
    const wHeight = 2;
    const wThickness = 0.5;
    const wLength = 10.5;

    const wBack = BABYLON.MeshBuilder.CreateBox("wBack", { width: wLength, height: wHeight, depth: wThickness }, scene);
    wBack.position.z = -3.5, wBack.position.y = 1;
    const wfront = BABYLON.MeshBuilder.CreateBox("wfront", { width: wLength, height: wHeight, depth: wThickness }, scene);
    wfront.position.z = 5, wfront.position.y = 1;
    const wLeft = BABYLON.MeshBuilder.CreateBox("wLeft", {  depth: wLength,  height: wHeight , width: wThickness}, scene);
    wLeft.position.x = -5, wLeft.position.y = 1;
    const wRight = BABYLON.MeshBuilder.CreateBox("wRight", {  depth: wLength , height: wHeight, width: wThickness }, scene);
    wRight.position.x = 5, wRight.position.y = 1;

    
    return scene;
};

const scene = createScene();
engine.runRenderLoop(() => scene.render());
window.addEventListener("resize", () => engine.resize());
