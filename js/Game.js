class Game{
    constructor(){}

    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        console.log("In start");
        if(gameState===0){
            image(bg1img,0,0,width,height);
            player = new Player();           
            player.getCount();
            
            form = new Form();
            form.display();
        }
        player1=createSprite(900,200);
        player1.addImage(bowimg);
        
        player2=createSprite(900,400);
        player2.addImage(bowimg);
        players=[player1,player2];
    }

    play(){
        Player.getPlayerInfo();
        form.hide();
        image(bg2img,0,0,width,height);
        var x=100;
        var y=200;
        var index=0;
       

        for(var plr in allPlayers){
        
            index = index+1;
            y=500+allPlayers[plr].distance;
            x=500;
            
            //players[index-1].x = x;
            players[index-1].y = y;

            if(index===player.index){
                fill("black");
                textSize(20);
                text(player.name + " score : "+player.score,50,40);

                stroke("red")
                ellipse(players[index-1].x,players[index-1].y,50,50)
            }
        }

        if(keyDown(UP_ARROW)){
            player.distance-=10;
            player.update();
        }

        if(keyDown(DOWN_ARROW)){
            player.distance+=10;
            player.update();
        }

        if(keyDown("space")){
            arrow=createSprite(200,player.distance);
            arrow.addImage(arrowimg);
            arrow.velocityX=-4;
            arrow.lifetime=350;
            arrowg.add(arrow);
        }
        drawSprites();
    }

    end(){}
}