function PlayState() {
  return this;
}

var Neeko = new function(){
  this.x = 350;
  this.y = 250;
  return this;
}

Neeko.Render = function (context) {
  context.drawImage(resourcePreLoader.GetImage("neeko.jpg"), Neeko.x, Neeko.y);
}

Neeko.Update = function (){
  if(inputSystem.isKeyDown('q')){

  } else if(inputSystem.isKeyDown('w')){

  } else if(inputSystem.isKeyDown('e')){

  } else if(inputSystem.isKeyDown('r')){

  } else if(inputSystem.isKeyDown('d')){
    
  }
}

PlayState.prototype.Render = function () {
  var theCanvas = document.getElementById('GameCanvas');
  var Context = theCanvas.getContext('2d');
  Console.log("Rendering");
  Context.drawImage(resourcePreLoader.GetImage("background.jpg"), 0, 0);
  Neeko.Render(Context);

};

PlayState.prototype.Update = function(){

}
