
let firstShader
audioPlayer = document.querySelector('#song')


function preload() {
    firstShader = loadShader('shader.vert', 'shader.frag')
}

function setup() {
    //use windowWidth and windowHeight later
    createCanvas(windowWidth, windowHeight, WEBGL);

}




function draw() {
    shader(firstShader)
    rect(0,0,width,height)

    
    const bpm = 138
    const demoTime = getTime() * bpm / 60
    

    //background(20, 70, 90)

    const mainCamera = createCamera()

    //the bass starts at demoTime 16
    if (demoTime < 16) {
        firstScene(demoTime)
    } else {
        bassScene(demoTime)
    }
    
}


function firstScene(demoTime) {
    let axis1 = createVector(0.5, 0, 0.5);
    let axis2 = createVector(0, 1, 0);
    const speed = 0.3
    
    rotate(QUARTER_PI + demoTime * speed, axis2);
    rotate(1, axis1);
    box(70, 70)
}

function bassScene(demoTime) {
    let axis1 = createVector(0.5, 0, 0.5);
    let axis2 = createVector(0, 1, 0);
    const speed = 0.3
    
    const radius = map(1 + demoTime * speed, 0, 1, 0, 100)
    
    rotate(-1, axis1);
    ellipse(0, 0, radius, radius, 40)


    rotate(1, axis1);
    rotate(QUARTER_PI + demoTime * speed, axis2);
    rotate(1, axis1);
    box(70, 70)
}
