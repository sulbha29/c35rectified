class Game{
    constructor(){

    }
readState(){
    var gamestateref=database.ref('Gamestate');
    gamestateref.on("value",function(data){
        gamestate=data.val();
    })
}
updatestate(state){
database.ref('/').update({
Gamestate:state
})
}
start(){
    if(gamestate==0){
        player=new Player();
        player.playercount();
        form=new Form();
        form.display();
    }
}

}