var noseX= 0;
var noseY= 0;
var left_wrist_x= 0;
var right_wrist_x= 0;
var difference= 0;
function preload() {
}
function setup() {
    video=createCapture(VIDEO);
    video.size(600,380);
    canvas=createCanvas(600,380);
    canvas.position(570,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}
function draw() {
    background("#fca4ca");
    document.getElementById("square_size").innerHTML="Width and Height of the square will be : "+difference+" PX";
    fill("#e2adff");
    stroke("#af71d1")
    square(noseX,noseY,difference);
}
function modelLoaded() {
    console.log("Posenet Model Intialized/Loaded");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X = "+noseX+" and Nose Y = "+noseY);
        left_wrist_x=results[0].pose.leftWrist.x;
        right_wrist_x=results[0].pose.rightWrist.x;
        console.log("Left Wrist X = "+left_wrist_x+" and Right Wrist X = "+right_wrist_x);
        difference=floor(left_wrist_x-right_wrist_x);
        console.log("The Difference Is = "+difference);
    }
}
