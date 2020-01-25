

var stopWatch = 75;


var questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },
    {
        question: 'The condition in an if / else statement is enclosed with ____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses'
    },
    {
        question: 'What tag is used to define the bottom of an HTML doc?',
        choices: ['p', 'h1-h6', 'footer', 'body'],
        answer: 'footer'   
    },
    {
        question: 'What is a JavaScript element that represents either TRUE or FALSE values?',
        choices: ['condition', 'event', 'boolean', 'function'],
        answer: 'boolean'
    },
    {
        question: 'CSS stands for ____ Style Sheets.',
        choices: ['cascading', 'concept', 'concave', 'curious'],
        answer: 'cascading'
    },
];

function timer() {
    var timerInterval = setInterval(function() {
        stopWatch--;
        $('#stop-watch').text(stopWatch);
    });
};

function randQuestion() {
    var randomQuestion = questions.question[Math.floor(Math.random() * questions.question)];
    $('#question-cont').text(questions[randomQuestion].question);
}

function generateChoices() {
    for(var i = 0; i < questions.choices; i++) {
        var choiceBtn = $('<button>');
        choiceBtn.addClass('btn btn-primary btn-lg');
        choiceBtn.text(questions.choices[i]);
        $('#choices').append(choiceBtn);
    };
};

function startGame() {
    $('#startBtn').on('click', function() {
        randQuestion();
        generateChoices();
        timer()
    });
    return;
};


startGame();
