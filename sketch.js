//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dog = loadImage("Dog.png")
  happyDog = loadImage("happydog.png")
}

function foodstock(){
  foodStock.database.ref('Food')
  foodStock.on("value", readStock)
}

function setup() {
  createCanvas(500, 500);
  
}


function draw() {
  background(46, 139, 87) 
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
  }

  text("Food stock"+foodS,width-150,100)
  textSize("250")


  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x+1;
  }

  database.ref('/').update({
    Food:x
  })
}