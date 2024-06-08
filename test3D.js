let firstShader

function preload() {
    firstShader = loadShader('shader.vert', 'shader.frag')
}

function setup() {
    //use windowWidth and windowHeight later
    createCanvas(200, 200, WEBGL);

}

//audioPlayer = document.querySelector('#song')


function draw() {
    shader(firstShader)
    rect(0,0,width,height)

    /*
    const bpm = 138
    const demoTime = getTime() * bpm / 60

    background('orange')

    const mainCamera = createCamera()

    orbitControl()

    box()
    */
}