LipsX=0;
LipsY=0;

function preload(){
Lips = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}


function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
    image(video,0,0,300,300);
    image(Lips,LipsX,LipsY, 50, 30)
}

function take_snapshot(){
    save("my_picture.png");
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        LipsX = results[0].pose.nose.x-20;
        LipsY = results[0].pose.nose.y+20;
     //console.log("Lips x: "+results[0].pose.Lips.x);
     //console.log("Lips y: "+results[0].pose.Lips.y);
    };
}