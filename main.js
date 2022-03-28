mustacheX=0;
mustacheY=0;

function preload(){
    mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png')


}

function setup(){
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', GotPoses);}


function draw(){
image(video, 0, 0, 300, 300)
image(mustache, mustacheX-15, mustacheY-15, 60, 45)

}


function modelLoaded(){

    console.log('PoseNet is initialized');
}

function GotPoses(results)
{
if(results.length>0)
{
console.log(results);
console.log("nose_x="+results[0].pose.nose.x);
console.log("nose_y=" +results[0].pose.nose.y);

mustacheX=results[0].pose.nose.x-30;
mustacheY=results[0].pose.nose.y;

}
}

function take_snapshot(){

    save("MyFilterPicture.png")
}