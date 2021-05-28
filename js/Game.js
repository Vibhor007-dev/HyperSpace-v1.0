class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        player.getCount();
        
        form = new Form()
        form.display();
        spaceship1 = createSprite(100,200);
        alien = createSprite(100,40);
        alienBoss = createSprite(150,40);
        spaceship2 = createSprite(500,200);
        
        objects=[spaceship1,spaceship2];
        villains=[alien,alienBoss];
        spaceship1.addImage(spaceship1Img);
        spaceship2.addImage(spaceship2Img);
        alien.addImage(alienImg);
        alienBoss.addImage(alienBossImg);
      
        }
     
    }
    updateState(){
      database.ref("/").update({gameState:data});
    }
  
    play(){
      background("brown");
      image(bgImg,0,-displayHeight*4,displayWidth,displayHeight*5);
      form.hide();
  
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 0;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          objects[index-1].x = x;
          objects[index-1].y = y;
  
          if (index === player.index){
            objects[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = objects[index-1].y
            rectMode(CENTER);
                    fill("red");
                    textSize(20);
                    text(allPlayers[plr].name,objects[index-1].x-20, objects[index-1].y+100);
                    ellipse(objects[index-1].x, objects[index-1].y, 60,60);
                    
                }
                else{
                    fill("black")
                    textSize(20);
                    text(allPlayers[plr].name,objects[index-1].x-10, objects[index-1].y+100);
                }
          
              
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance = player.distance+50;
        player.update();
      }
  
      drawSprites();
    }
    end(){
        
      background("yellow");
      form.hide();
      fill("red");
      textSize(20);
      text("Thank you for playing the HyperSpace! Hope you enjoyed", displayWidth/2-200, 300);
     Player.getPlayerInfo();
     console.log(allPlayers);
    }

  }
  