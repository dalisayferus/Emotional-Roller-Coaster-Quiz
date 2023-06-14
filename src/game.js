class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreenWinner = document.getElementById("game-end-winner");
    this.gameEndScreenLoser = document.getElementById("game-end-loser");

    this.PlayerScore = 0;
    this.currentQuestion = 0;
    this.progress = document.getElementById("progress");

    this.optionA = document.getElementById("choiceA");
    this.optionB = document.getElementById("choiceB");
    this.optionC = document.getElementById("choiceC");
    this.optionD = document.getElementById("choiceD");

    this.questions = [
      {
        question: "Which HTML tag is used to create a hyperlink?",
        choiceA: '<link rel="" href=""/>',
        choiceB: "<a>",
        choiceC: "<h1>",
        choiceD: "<p>",
        correct: "<a>",
      },
      {
        question:
          "Which CSS property is used to change the background color of an element?",
        choiceA: "text-color",
        choiceB: "color",
        choiceC: "background-color",
        choiceD: "font-color",
        correct: "background-color",
      },
      {
        question:
          "How do you add an external JavaScript file to an HTML document?",
        choiceA: '<script src="script.js"></script>',
        choiceB: '<script href="script.js"></script>',
        choiceC: '<script link="script.js"></script>',
        choiceD: '<script import="script.js"></script>',
        correct: '<script src="script.js"></script>',
      },
      {
        question: 'What is the purpose of the CSS property "float"?',
        choiceA: "It makes an element float on water.",
        choiceB: "It determines the width of an element.",
        choiceC: "It changes the font style of an element.",
        choiceD:
          "It controls the positioning of an element in relation to its parent.",
        correct:
          "It controls the positioning of an element in relation to its parent.",
      },
      {
        question: "Which JavaScript keyword is used to declare a variable?",
        choiceA: "let",
        choiceB: "float",
        choiceC: "varName",
        choiceD: "int",
        correct: "let",
      },
      {
        question:
          'How can you select an element with the id "myElement" using CSS?',
        choiceA: ".myElement",
        choiceB: "#myElement",
        choiceC: "element=myElement",
        choiceD: "@myElement",
        correct: "#myElement",
      },
      {
        question: "What is the correct syntax for a comment in JavaScript?",
        choiceA: "<!-- This is a comment -->",
        choiceB: "// This is a comment",
        choiceC: "/* This is a comment",
        choiceD: "# This is a comment",
        correct: "// This is a comment",
      },
      {
        question: "Which HTML tag is used to create a numbered list?",
        choiceA: "<ol>",
        choiceB: "<ul>",
        choiceC: "<li>",
        choiceD: "<list>",
        correct: "<ol>",
      },
      {
        question: "How can you apply a border to an HTML element using CSS?",
        choiceA: "border: black",
        choiceB: "border-width: 1px; border-style: solid; border-color: black",
        choiceC: "border: 1px solid black",
        choiceD: "border-style: solid",
        correct: "border: 1px solid black",
      },
      {
        question:
          "Which JavaScript method is used to add an element to the end of an array?",
        choiceA: "push()",
        choiceB: "pop()",
        choiceC: "shift()",
        choiceD: "unshift()",
        correct: "push()",
      },
    ];
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameEndScreenWinner.style.display = "none";
    this.gameEndScreenLoser.style.display = "none";
  }

  nextQuestion() {
    this.currentQuestion += 1;
  }

  upgradeScore() {
    this.PlayerScore += 10;
  }

  downgradeScore() {
    if (this.PlayerScore !== 0) {
      this.PlayerScore -= 10;
    }
  }

  endGame() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "none";

    if (this.PlayerScore >= 60) {
      this.gameEndScreenWinner.style.display = "block";
    } else {
      this.gameEndScreenLoser.style.display = "block";
    }
  }
}
