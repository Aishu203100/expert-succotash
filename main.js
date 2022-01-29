function setup(){
video = createCapture(VIDEO);
video.size(654,500);

canvas = createCanvas(500,500);

poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose', gotPoses)
}
function gotPoses(results) {
if(results.length > 0)
{
console.log(results)
}
}
function modelLoaded()
{
    console.log('PoseNet is initialized!');
}
