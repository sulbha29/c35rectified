var gamestate=0,database,playercount,game,form,player;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
   gamestate;
    game=new Game();
    game.readState();
    game.start();
   
}

function draw(){
   
   
    
}


