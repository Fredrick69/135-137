
function preload() {
    video=createCapture(VIDEO);
    video.size(550,550);
    video.hide();

}

function setup() {
    canvas=createCanvas(550,550);
    canvas.center();
    video.hide();
    
}



function draw() {
    image(video,0,0,550,550)
}





function start()
{
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="status: dectecting objects.";
}

function modelLoaded()
{
    console.log("model loaded.");

}