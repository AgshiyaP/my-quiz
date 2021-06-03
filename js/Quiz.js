class Quiz{
    constructor(){

    }


getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",(data)=>{
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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
        
      }

}
      question = new Question()
      question.display();
}
play(){
    question.hide();
    background("lightpurple");
    fill(0);
    textSize(30);
    text("Results", 340,65);

    if(contestant.answer == "D"){
      fill("green")
      this.correct.html("CORRECT");
      this.correct.position (360,260)
    }
    else{
        fill ("red")
     //   this.correct.html("WRONG")
     //   this.correct.position(360,260)
    }
  }
}


