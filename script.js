$(document).ready(function() {
    var score = 0;
    var stopWatch = 75;
    var shuffledQuestion;

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
        $('#stop-watch').text(stopWatch);

            setInterval(function() {
            stopWatch--;
            $('#stop-watch').text(stopWatch);
            if(stopWatch == 0) {
                clearInterval();
                alert('Times Up!');
            };
        }, 1000);
    };

    function randQuestion() {
        currentQuestion = questions[Math.floor(Math.random() * questions.length)];
        $('#question-cont').text(currentQuestion.question);
    };

    function nextQuestion() {
        shuffledQuestion = parseInt(currentQuestion.question) - .5;
        $('#question-cont').text(shuffledQuestion);
    };

    function generateChoices() {
        for(var i = 0; i < currentQuestion.choices.length; i++) {
            var choiceBtn = $('<button>');
            choiceBtn.addClass('btn btn-primary btn-lg');
            choiceBtn.addClass('options')
            choiceBtn.css('margin', '15px');
            choiceBtn.text(currentQuestion.choices[i]);
            $('#choices').append(choiceBtn);
            $('#counter').text('Score: ' + score)
        };
    };

    function selectAnswer() {
        $('.options').on('click', function() {
            if($(this).text() === currentQuestion.answer) {
                score++;
                $('#counter').text('Score: ' + score);
            } else {
                score--;
                $('#counter').text('Score: ' + score);
            };
            nextQuestion();
        });
    };

    function startGame() {
        $('#startBtn').on('click', function() {
            randQuestion();
            generateChoices();
            selectAnswer();
            timer();
        });
    };


    startGame();
});