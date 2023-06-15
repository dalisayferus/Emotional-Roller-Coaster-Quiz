window.onload = function () {
  const startButton = document.getElementById("start-button");
  console.log("start game", startButton);
  let game;
  const questionTag = document.getElementById("question");
  const choiceAbtn = document.getElementById("choiceA");
  const choiceBbtn = document.getElementById("choiceB");
  const choiceCbtn = document.getElementById("choiceC");
  const choiceDbtn = document.getElementById("choiceD");
  const currentScore = document.getElementById("current-score");
  const progress = document.getElementById("progress");
  const loadBar = document.getElementById("load-bar-container");

  loadBar.style.display = "none";

  const startBtn = document.querySelector("#start-button");
  startBtn.addEventListener("click", () => {
    loadBar.style.display = "flex";
  });

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
    progress.innerHTML = `${game.currentQuestion + 1} of ${
      game.questions.length
    }`;
  }
  const choiceButtons = [
    questionTag,
    choiceAbtn,
    choiceBbtn,
    choiceCbtn,
    choiceDbtn,
  ];

  choiceButtons.forEach((e) => {
    e.addEventListener("click", (e) => {
      if (e.target.innerText === game.questions[game.currentQuestion].correct) {
        game.upgradeScore();
        currentScore.innerHTML = game.PlayerScore;
        game.loadBar.style.height = `${game.PlayerScore}%`;
        console.log(game.PlayerScore);
      } else {
        game.downgradeScore();
        currentScore.innerHTML = game.PlayerScore;
        game.loadBar.style.height = `${game.PlayerScore}%`;
        console.log(game.PlayerScore);
      }

      if (game.currentQuestion >= game.questions.length - 1) {
        game.endGame();
      } else {
        progress.innerHTML = `${game.currentQuestion + 2} of ${
          game.questions.length
        }`;
        game.nextQuestion();
        questionTag.innerHTML = game.questions[game.currentQuestion].question;
        choiceAbtn.innerText = game.questions[game.currentQuestion].choiceA;
        choiceBbtn.innerText = game.questions[game.currentQuestion].choiceB;
        choiceCbtn.innerText = game.questions[game.currentQuestion].choiceC;
        choiceDbtn.innerText = game.questions[game.currentQuestion].choiceD;
      }
    });
  });
};
