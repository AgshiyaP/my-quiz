class Question{
    constructor(){
        this.input1 = createInput("Name");
        this.input2 = createInput("Enter Your Answer")
        this.button = createButton('Submit');
        this.title = createElement('h2');
        this.question = createElement("h3");
        this.a = createElement("h4");
        this.b = createElement("h5");
        this.c = createElement("h6");
        this.d = createElement("h7");
        this.correct = createElement ("h8");

    }

    hide(){
        this.button.hide();
      //  this.input.hide();
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
    }

    display(){
        this.title.html("My Quiz");
    this.title.position(displayWidth/2 - 50, 0);

    this.input1.position(displayWidth/2 - 200 , displayHeight/2 - 200);
    this.input2.position(displayWidth/2 - 200, displayHeight/2 - 150)
    this.button.position(displayWidth/2 - 200, displayHeight/2 - 100);

    

   
    this.question.html("Which Country Has The Most Islands?")
    this.question.position(150,60)

    this.a.html("A) Greese");
    this.a.position(150,80)

    this.b.html("B) Cuba");
    this.b.position(150,100)

    this.c.html("C) India");
    this.c.position(150,120)

    this.d.html("D) Sweden");
    this.d.position(150,160)

    this.button.mousePressed(()=>{
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value
      contestantCount+=1;
      contestant.index = contestantCount;
    //  contestant.update();
      contestant.updateCount(contestantCount);

    
    
    });
    }
}