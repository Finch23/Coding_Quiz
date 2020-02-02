$(document).ready(function() {
    var score = 0;
    var stopWatch = 75;
    var currentIndex = 0;

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
        if(currentIndex == 4) {
            clearInterval();
        };
    };

    function Question() {
        currentQuestion = questions[currentIndex];
        $('#question-cont').text(currentQuestion.question);
        for(var i = 0; i < currentQuestion.choices.length; i++) {
            var choiceBtn = $('<button>');
            choiceBtn.addClass('btn btn-secondary btn-lg');
            choiceBtn.addClass('options')
            choiceBtn.css('margin', '15px');
            choiceBtn.text(currentQuestion.choices[i]);
            $('#choices').append(choiceBtn);
            $('#counter').text('Score: ' + score)
        }
    }

        $(document).on('click', '.options', function() {
            console.log(currentIndex);
            if($(this).text() === currentQuestion.answer) {
                score++;
                $('#counter').text('Score: ' + score);
            } else {
                score--;
                $('#counter').text('Score: ' + score);
            };
            $('#choices').empty();
            currentIndex++;
            Question();
            if(currentIndex == 4) {
                newDiv = $('<div>');
                newDiv.text = ('Your score is ' + score + '/5');
                $('#question-cont').append(newDiv);
            };
        });

        $('#startBtn').on('click', function() {
            $('#startBtn').css('display', 'none');
            $('#pTag').css('display', 'none');
            Question();
            timer();
        });



    
});