var hyponoticBall, database;
var position;

function setup(){
   
    createCanvas(500,500); database = firebase.database();
    hyponoticBall = createSprite(250,250,10,10);
    hyponoticBall.shapeColor = "red";

    var hyponoticBallPosition = database.ref('ball/position');
    hyponoticBallPosition.on("value",readPosition, showError);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}


function readPosition(data){
position = data.val();
console.log(position.x);
hyponoticBall.x= position.x;
hyponoticBall.y = position.y;
}

function writePosition(x,y){
database.ref('ball/position').set({
    'x': position.x + x,
    'y': position.y + y
})
}



function showError(){
    console.log("error in writing database");

}
