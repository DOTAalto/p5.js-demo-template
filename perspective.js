/*
 * To see the contents of this scene change the .js source file in index.html
 */
audioPlayer = document.querySelector('#song')


function draw() {
    const bpm = 132
    const demoTime = getTime() * bpm / 60

    textFont('Londrina Solid')
    colorMode(HSL) // Hue (0..360), Saturation (0..100), Lightness (0..100)

    if (demoTime === 0) {
        instructionsScene(demoTime)

    } else if (demoTime < 120) {
        stickScene(demoTime)
    } else {
        endDemo()
    }
}



function instructionsScene(sceneTime) {
    background(35, 100, 50) // orange
    textAlign(CENTER, CENTER)
    textSize(64)
    fill(0, 0, 0) // black
    noStroke()
    text('Press F to go fullscreen and space to start', width/2, height/2)
}


function stickScene(sceneTime) {
    background('black')

    translate(width/2, height/2) 

    fill('white') // black
    noStroke()
    // https://www.w3schools.com/jsref/jsref_tofixed.asp
    text(sceneTime.toFixed(2), 0, 0)

    stroke('white') // black
    strokeWeight(10)

    // https://p5js.org/reference/#/p5/rotate
    //rotate(sceneTime)
    const lenght = map(50, 0, 1, 0, 100)
    const speed = 100
    const vector1 = new p5.Vector(10, 50, speed)
    const vector2 = new p5.Vector(-300, 50, speed)
    line(0 - sceneTime * vector1.normalize().x * speed, 100 - sceneTime * vector1.normalize().y * speed, 0 - sceneTime * vector1.normalize().x * speed, 300 + sceneTime * vector1.normalize().y * speed)
    
    stroke('white')
    line(0, 100, 0 + sceneTime * speed, 0, 300, 0 + sceneTime * speed)
    line(0 - sceneTime * vector2.normalize().x * speed, 100 - sceneTime * vector2.normalize().y * speed, 0 - sceneTime * vector2.normalize().x * speed, 300 + sceneTime * vector2.normalize().y * speed)

}
