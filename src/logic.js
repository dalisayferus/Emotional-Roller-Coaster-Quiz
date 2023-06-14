window.onload = function () {
  const startButton = document.getElementById("start-button");
  console.log("start game", startButton);
  let game;
  const questionTag = document.getElementById("question");
  const choiceAbtn = document.getElementById("choiceA");
  const choiceBbtn = document.getElementById("choiceB");
  const choiceCbtn = document.getElementById("choiceC");
  const choiceDbtn = document.getElementById("choiceD");

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
    questionTag.innerHTML = game.questions[game.currentQuestion].question;
    choiceAbtn.innerText = game.questions[game.currentQuestion].choiceA;
    choiceBbtn.innerText = game.questions[game.currentQuestion].choiceB;
    choiceCbtn.innerText = game.questions[game.currentQuestion].choiceC;
    choiceDbtn.innerText = game.questions[game.currentQuestion].choiceD;
  }

  function allQuestions(questions) {}

  const choiceButtons = [
    questionTag,
    choiceAbtn,
    choiceBbtn,
    choiceCbtn,
    choiceDbtn,
  ];

  choiceButtons.forEach((e) => {
    e.addEventListener("click", (e) => {
      console.log(
        e.target.innerText === game.questions[game.currentQuestion].correct
      );
      // game.nextQuestion();
      // questionTag.innerHTML = game.questions[game.currentQuestion].question;
      // choiceAbtn.innerText = game.questions[game.currentQuestion].choiceA;
      // choiceBbtn.innerText = game.questions[game.currentQuestion].choiceB;
      // choiceCbtn.innerText = game.questions[game.currentQuestion].choiceC;
      // choiceDbtn.innerText = game.questions[game.currentQuestion].choiceD;
    });
  });

  // game.PlayerScore = document.getElementsByTagName("current-score");
  // if (click === game.currentQuestion.correct) {
  //   game.PlayerScore += 10;
  // } else {
  //   game.PlayerScore -= 10;
  // }
};
