$(document).ready(function() {
    var score = 0;
    var stopWatch = 75;
    var currentQuestion;
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
            setInterval(function() {
            stopWatch--;
            $('#stop-watch').innerHTML(stopWatch);
            $('#stop-watch').append(stopWatch);
            
            if(stopWatch === 0) {
                alert('Times Up!');
            };
        });
    };

    function randQuestion() {
        currentQuestion = questions[Math.floor(Math.random() * questions.length)];
        $('#question-cont').text(currentQuestion.question);
    };

    function generateChoices() {
        for(var i = 0; i < currentQuestion.choices.length; i++) {
            var choiceBtn = $('<button>');
            choiceBtn.addClass('btn btn-primary btn-lg');
            choiceBtn.css('margin', '15px')
            choiceBtn.text(currentQuestion.choices[i]);
            $('#choices').append(choiceBtn);
        };
    };

    function selectAnswer() {
        if(answer === questions[currentQuestion].answer) {
            $('#pTag').innerHTML('Correct!');
        } else {
            $('#pTag').innerHTML('Wrong');
        };
    };

    function startGame() {
        $('#startBtn').on('click', function() {
            randQuestion();
            generateChoices();
            selectAnswer();
        });
    };


    startGame();
});