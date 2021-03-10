var cat1, cat2, cat3, cat4, garden, mouse1, mouse2, mouse3, mouse4 ; 

function preload() {
    //load the images here
    cat1 = loadImage("cat1.png") ;
    cat2 = loadImage("cat2.png") ; 
    cat3 = loadImage("cat3.png") ; 
    cat4 = loadImage("cat4.png") ;
    garden = loadImage("garden.png") ; 
    mouse1 = loadImage("mouse1.png") ; 
    mouse2 = loadImage("mouse2.png") ; 
    mouse3 = loadImage("mouse3.png") ; 
    mouse4 = loadImage("mouse4.png") ; 

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat1 = createSprite(200,200,50,50) ; 
    cat1.addImage("cat", cat1)
    cat2 = createSprite(100,200,50,50) ;
    cat2.addImage("cat", cat2) ;
    cat3 = createSprite(50,200,50,50) ; 
    cat3.addImage("cat", cat3) ; 
    cat4 = createSprite(70,200,50,50);
    cat4.addImage("cat", cat4)
    garden = createSprite(500,500,100,100) ; 
    garden.addImage("grd", garden) ; 


    



}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
   



    drawSprites();
}


function keyPressed(){
    
    if(keyCode === LEFT_ARROW) {
        cat.velocityX = -5 ; 
        cat.addAnimation("catRunning", catImg2) ; 
        cat.changeAnimation("catRunning") ; 
    }

    if(cat.x - mouse1.x < (cat.width - mouse1.width)/2)
{

  //For moving and changing animation write code here

}
  
  cat.addAnimation("catLastImage", catImg3) ; 
  cat.changeAnimation("catLastImage") ; 


}
