objects = [];
status = "";
function preload() {

}

function setup() {
    video=createCapture(VIDEO);
    canvas=createCanvas(550,550);
    canvas.center();
    video.size(550,550);
    video.hide();
    
}



function draw() {
    image(video,0,0,550,550)

    if(status!=""){
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML="status: object detected";
            fill("red");
            percent=floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            if(objects[i].label==objectname){
            video.stop();
            objectDetector.detect(gotResult);
            document.getElementById("status").innerHTML=objectname + "found";
            synth=window.speechSynthesis;
            utterThis=new SpeechSynthesisUtterance(objectname + "found")
            synth.speak(utterThis);
            }
            else{
                document.getElementById(objectname + "not found")
            }
    
    
          }
    }
}





function start()
{
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="status: dectecting objects.";
    objectname=document.getElementById("object_name").value;
}

function modelLoaded()
{
    console.log("model loaded.");
    status=true;
}

function gotResult(error, results)
{
    if(error){
        console.log(error);
    }
     
    console.log(results);
    objects=results;
}
