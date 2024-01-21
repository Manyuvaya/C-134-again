img = ""
status = ""
objects=[]
function preload() {
    img = loadImage("dog_cat.jpg")

}

function setup() {
    canvas = createCanvas(640, 420)
    canvas.position(320, 130)
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML = "status:Detecting Objects"
}

function draw() {
    image(img, 0, 0, 640, 420)
    if (status != "") {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "status:objects Detected"
            fill("red")
            textSize(20)
            text(objects[i].label, objects[i].x,objects[i].y)
           
            noFill()
            stroke("red")
            rect(objects[i].x, objects[i].y,objects[i].width,objects[i].height)
        
            

        }
    }
    


}

function modelLoaded() {
    console.log("model Loaded")
    status = true
    objectDetector.detect(img, got_result)
}

function got_result(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        objects = results
    }
}