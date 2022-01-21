class Game {

    constructor(){
        this.resetButton = createButton("");
        this.resetButton.position(width/2 + 500, height/2 - 400);
    
    }

    getState() {

        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val()
        })
    }

    update(state) {

        database.ref("/").update({

            gameState : state
        })
    }
    

    start() {

    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
       
      
    }

   play() {
    
    
    this.handleElements();
    this.handleResetButton();
       
    lion = createSprite(width/2 , height/2);
    lion.addImage(lionImage);


    image(trackImage , 0, -height * 5, width, height * 6);
    
    

}

handleResetButton() {

   this.resetButton.mousePressed(() =>{
    
    game.start();
  
    

    database.ref("/").set({

        playerCount : 0,
        gameState : 0,
        player : {}
    })
   })
}

handleElements()  {
    
    form.hide();
    this.resetButton.class("resetButton");

}
  
}
