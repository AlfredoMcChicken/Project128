var musicfile1 = "";
var musicfile2 = "";
var leftWristX = 0;
var rightWristX = 0;
var rightWristY = 0;
var leftWristY = 0;
function preload() {

}

function draw() {
    image(video, 0, 0, 800, 600)
}

function setup() {
    canvas = createCanvas(800, 600)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Model is Loaded')
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
        
    }
}