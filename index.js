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
    const wHeight = 6.5;
    const wThickness = 0.5;
    const wLength = 10.5;

    const wbackLength = 4.5;

    const wBack1 = BABYLON.MeshBuilder.CreateBox("wBack1", { width: wbackLength, height: wHeight, depth: wThickness }, scene);
    wBack1.position.z = -5, wBack1.position.y = 3.25, wBack1.position.x = 3;
    const wBack2 = BABYLON.MeshBuilder.CreateBox("wBack2", { width: wbackLength, height: wHeight, depth: wThickness }, scene);
    wBack2.position.z = -5, wBack2.position.y = 3.25, wBack2.position.x = -3;
    const wfront = BABYLON.MeshBuilder.CreateBox("wfront", { width: wLength, height: wHeight, depth: wThickness }, scene);
    wfront.position.z = 5, wfront.position.y = 3.25;
    const wLeft = BABYLON.MeshBuilder.CreateBox("wLeft", {  depth: wLength,  height: wHeight , width: wThickness}, scene);
    wLeft.position.x = -5, wLeft.position.y = 3.25;
    const wRight = BABYLON.MeshBuilder.CreateBox("wRight", {  depth: wLength , height: wHeight, width: wThickness }, scene);
    wRight.position.x = 5, wRight.position.y = 3.25;

// adding the roof
    const roofHeight = 10.5;
    const roofThickness = 0.5;
    const roofLength = 10.5;
    const roofFlat = BABYLON.MeshBuilder.CreateBox("wRight", {  depth: roofLength , height: roofHeight, width: roofThickness }, scene);
    roofFlat.rotation.z = Math.PI / 2;
    roofFlat.position = new BABYLON.Vector3(0, 6.5, 0);

    const rooftriangleH = 9.5;
    const rooftriangltT = 0.5;
    const rooftraingleL = 10.5;
    
    const roofTraingle1 = BABYLON.MeshBuilder.CreateBox("wRight", {  depth: rooftraingleL , height: rooftriangleH, width: rooftriangltT }, scene);
    roofTraingle1.rotation.z = Math.PI / 3;
    roofTraingle1.position = new BABYLON.Vector3(4, 7.5, 0);
    
    const roofTraingle2 = BABYLON.MeshBuilder.CreateBox("wRight", {  depth: rooftraingleL , height: rooftriangleH, width: rooftriangltT }, scene);
    roofTraingle2.rotation.z = Math.PI / -3;
    roofTraingle2.position = new BABYLON.Vector3(-4, 7.5, 0);


    // adding the chandelier model 
    BABYLON.SceneLoader.ImportMesh(
        null,      
        "./",      
        "Elisa SP12 Purple.gltf",
        scene,
        function (meshes) {
            meshes.forEach((mesh) => {
                mesh.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
                mesh.position = new BABYLON.Vector3(0, 2.5, 0);

            });
        },
        function (error) { 
            console.error(error);
        }
    );
    // adding the tables
    BABYLON.SceneLoader.ImportMesh(
        null,      
        "./",      
        "scene.gltf", 
        scene,
        function (meshes) {
            console.log("Meshes loaded:", meshes);
            meshes.forEach((mesh) => {
                mesh.scaling = new BABYLON.Vector3(0.25, 0.25, 0.25);
                mesh.position = new BABYLON.Vector3(3, -0.5, 1.5);
            });
        },
        function (error) { 
            console.error("Error loading mesh:", error);
        },
        BABYLON.SceneLoader.ImportMesh(
            null,      
            "./",      
            "scene.gltf", 
            scene,
            function (meshes) {
                console.log("Meshes loaded:", meshes);
                meshes.forEach((mesh) => {
                    mesh.scaling = new BABYLON.Vector3(0.25, 0.25, 0.25);
                    mesh.position = new BABYLON.Vector3(-3, 0.3, -1.5);
                });
            },
        function (error) { 
            console.error("Error loading mesh:", error);
            },

        // Adding the chairs
    )
    );
    // Chair one further table
    BABYLON.SceneLoader.ImportMesh(
        null,      
        "./",      
        "black_leather_chair.gltf", 
        scene,
        function (meshes) {
            console.log("Meshes loaded:", meshes);
            meshes.forEach((mesh) => {
                mesh.scaling = new BABYLON.Vector3(1.35, 1.35, 1.35);
                mesh.position = new BABYLON.Vector3(-10, 0, -6);
            });
        },
    function (error) { 
        console.error("Error loading mesh:", error);
        },
        // Chair two further table
        BABYLON.SceneLoader.ImportMesh(
            null,      
            "./",      
            "black_leather_chair.gltf", 
            scene,
            function (meshes) {
                console.log("Meshes loaded:", meshes);
                meshes.forEach((mesh) => {
                    mesh.scaling = new BABYLON.Vector3(1.35, 1.35, 1.35);
                    mesh.position = new BABYLON.Vector3(-3, 0, -2);
                    mesh.rotation.y = Math.PI;
                });
            },
        function (error) { 
            console.error("Error loading mesh:", error);
            }
        ),
        // first chair with near table
        BABYLON.SceneLoader.ImportMesh(
            null,      
            "./",      
            "black_leather_chair.gltf", 
            scene,
            function (meshes) {
                console.log("Meshes loaded:", meshes);
                meshes.forEach((mesh) => {
                    mesh.scaling = new BABYLON.Vector3(1.35, 1.35, 1.35);
                    mesh.position = new BABYLON.Vector3(3, 0, 2);
                });
            },
        function (error) { 
            console.error("Error loading mesh:", error);
            }
        ),
        // second chair with near table
        BABYLON.SceneLoader.ImportMesh(
            null,      
            "./",      
            "black_leather_chair.gltf", 
            scene,
            function (meshes) {
                console.log("Meshes loaded:", meshes);
                meshes.forEach((mesh) => {
                    mesh.scaling = new BABYLON.Vector3(1.35, 1.35, 1.35);
                    mesh.position = new BABYLON.Vector3(10, 0, 6);
                    mesh.rotation.y = Math.PI;
                });
            },
        function (error) { 
            console.error("Error loading mesh:", error);
            }
        ),
        // adding the menus on top of the table
        BABYLON.SceneLoader.ImportMesh(
            null,      
            "./",      
            "LegalPad.glb", 
            scene,
            function (meshes) {
                console.log("Meshes loaded:", meshes);
                meshes.forEach((mesh) => {
                    mesh.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);
                    mesh.position = new BABYLON.Vector3(5, 0.85, 3);
                    mesh.rotation.y = Math.PI;
                });
            },
        function (error) { 
            console.error("Error loading mesh:", error);
            }
        ),
        BABYLON.SceneLoader.ImportMesh(
            null,      
            "./",      
            "LegalPad.glb", 
            scene,
            function (meshes) {
                console.log("Meshes loaded:", meshes);
                meshes.forEach((mesh) => {
                    mesh.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);
                    mesh.position = new BABYLON.Vector3(-5, 0.9, -3);
                    mesh.rotation.y = Math.PI;
                });
            },
        function (error) { 
            console.error("Error loading mesh:", error);
            }
        ),
        // adding the doir
        BABYLON.SceneLoader.ImportMesh(
            null,      
            "./",      
            "DOOR.glb", 
            scene,
            function (meshes) {
                console.log("Meshes loaded:", meshes);
                meshes.forEach((mesh) => {
                    mesh.scaling = new BABYLON.Vector3(1, 1, 1);
                    mesh.position = new BABYLON.Vector3(1 , 1, 1);
                    mesh.rotation.y = Math.PI;
                });
            },
        function (error) { 
            console.error("Error loading mesh:", error);
            }
        )

);
    return scene;
};

const scene = createScene();
engine.runRenderLoop(() => scene.render());
window.addEventListener("resize", () => engine.resize());
