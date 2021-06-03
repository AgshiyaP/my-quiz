var canva;
var gameState = 0
var contestantCount, database
var quiz, question, contestant, answer, allContestants

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}


function draw(){
  background("lightblue");
  if(contestantCount ===4){
    quiz.update(1);
  }
  if(gameState ===1){
    clear();
    quiz.play();
  }
  
}
