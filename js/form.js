class Form{
    constructor(){
    }
display(){
var title=createElement('h1');
title.html("Racing Champions");
title.position(230,40);
var input=createInput("Enter your name");
input.position(230,200);
var button=createButton("Hit me");
button.position(230,240);
var greeting=createElement('h2');
button.mousePressed(function(){
    input.hide();
    button.hide();
    var nameplayer=input.value();
    playercount=playercount+1;
    player.countupdate(playercount);
    player.updatename(nameplayer);
    greeting.html("Helloo there"+nameplayer);
    greeting.position(260,250);
})
}

}