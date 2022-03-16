nose_x = 0;
nose_y = 0;

left_wrist = 0;
right_wrist = 0;
size = 0;

function preload(){
}

function setup(){
    canvas = createCanvas(500, 480);
    canvas.position(1200, 150);
    video = createCapture(VIDEO);
    video.position(500, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("#4cd43f");
    text("K.Thanu" , nose_x, nose_y);
    fill("red");
    textSize(size);
}

function modelLoaded(){
    console.log('Posenet is loaded');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;

        left_wrist = results[0].pose.leftWrist.x;
        right_wrist = results[0].pose.rightWrist.x;
        size = Math.floor(left_wrist - right_wrist);
    }
}