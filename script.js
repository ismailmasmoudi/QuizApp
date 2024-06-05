let questions = [
    {
        'question': '1. What is the full form of HTML?',
        'answer_1': 'A / Hypertext Markup Language',
        'answer_2': 'B / Hyperlink Markup Language',
        'answer_3': 'C / Hypertext Market and Text Markup Language',
        'answer_4': 'D / None of the Above',
        "right_answer": 1
    },
    {
        'question': '2. Which one is the correct sequence of HTML tags:',
        'answer_1': 'A / head, body, title, html',
        'answer_2': 'B / html, head, title, body',
        'answer_3': 'C / html, title, head, body',
        'answer_4': 'D / None of the above',
        "right_answer": 2
    },
    {
        'question': '3. Which tag is used to make the underlined text?',
        'answer_1': 'A / < b > ',
        'answer_2': 'B / < ul > ',
        'answer_3': 'C / < u > ',
        'answer_4': 'D / < line > ',
        "right_answer": 3
    },
    {
        'question': '4. How to create a checkbox in HTML?',
        'answer_1': 'A / < input type = "checkbox" >',
        'answer_2': 'B / < input type = "button" >',
        'answer_3': 'C / < checkbox  >',
        'answer_4': 'D / < input type = "check" >',
        "right_answer": 1
    },
    {
        'question': '5. Which HTML tag is used to make the text bold in HTML?',
        'answer_1': 'A / < pre >',
        'answer_2': 'B / < br >',
        'answer_3': 'C / < b >',
        'answer_4': 'D / None',
        "right_answer": 3
    },
    {
        'question': '6. Correct syntax to include external CSS in HTML?',
        'answer_1': 'A / < link href="style.css" >',
        'answer_2': 'B / < link rel="sheet" href="style.css" >',
        'answer_3': 'C / < link rel="stylesheet" src="style.css" >',
        'answer_4': 'D / < link rel="stylesheet" href="style.css" >',
        "right_answer": 4
    },
    {
        'question': '7. Which HTML tag attribute is used to provide a unique name to an element?',
        'answer_1': 'A / class',
        'answer_2': 'B / id ',
        'answer_3': 'C / type',
        'answer_4': 'D / All of the above',
        "right_answer": 2
    },
    {
        'question': '8. Which HTML tag is used to display the text with scrolling effect?',
        'answer_1': 'A / < scroll >',
        'answer_2': 'B / < run >',
        'answer_3': 'C / < marquee >',
        'answer_4': 'D / None',
        "right_answer": 3
    },
    {
        'question': '9. Correct way to send mail in HTML?',
        'answer_1': 'A / < mail xy@y</mail >',
        'answer_2': 'B / < a href = "xy@y" >',
        'answer_3': 'C / < a href = "mailto: xyz@gmail.com" >',
        'answer_4': 'D / None',
        "right_answer": 3
    },
    {
        'question': '10. Which HTML tag is used to insert the largest heading in HTML?',
        'answer_1': 'A / < h6 >',
        'answer_2': 'B / < h4 >',
        'answer_3': 'C / < h1 >',
        'answer_4': 'D / None',
        "right_answer": 3
    }
];

let currentQuestion = 0;
let NumberOfRightAnswers = 0;
let AUDIO_CORRECT = new Audio('sounds/correct.mp3');
let AUDIO_WRONG = new Audio('sounds/wrong.mp3');

function renderQuestions() {
    numberOfQuestion = questions.length;
    document.getElementById("result").innerHTML = `${NumberOfRightAnswers} / ${numberOfQuestion}`;
    displaysButtonNextLast();
    if (currentQuestion >= questions.length) {
        document.getElementById("congrat-page").classList.remove("d-none");
        document.getElementById("card-body").classList.add("d-none");
        document.getElementById("start-page").classList.add("d-none");
    } else {
        progressBarAnimations();
        showQuestions();
    }
}


function showQuestions() {
    let questionText = document.getElementById("question");
    let answerTextA = document.getElementById("answer-1");
    let answerTextB = document.getElementById("answer-2");
    let answerTextC = document.getElementById("answer-3");
    let answerTextD = document.getElementById("answer-4");

    const question = questions[currentQuestion]["question"];
    const answerA = questions[currentQuestion]["answer_1"];
    const answerb = questions[currentQuestion]["answer_2"];
    const answerc = questions[currentQuestion]["answer_3"];
    const answerd = questions[currentQuestion]["answer_4"];

    questionText.innerHTML = `${question}`;
    answerTextA.innerHTML = `${answerA}`;
    answerTextB.innerHTML = `${answerb}`;
    answerTextC.innerHTML = `${answerc}`;
    answerTextD.innerHTML = `${answerd}`;
}


function startQuiz() {
    document.getElementById("congrat-page").classList.add("d-none");
    document.getElementById("start-page").classList.add("d-none");
    document.getElementById("card-body").classList.remove("d-none");
    renderQuestions();
}


function displaysButtonNextLast() {
    let nextIcon = document.getElementById("next-question"); //  button 'next' undisplays
    nextIcon.classList.add("d-none");
    let lastIcon = document.getElementById("last-question");
    let QuestionFooter = document.getElementById("question-footer");
    if (currentQuestion === 0) {
        lastIcon.classList.add("d-none");
        QuestionFooter.classList.add("right");
    } else {
        lastIcon.classList.remove("d-none");
        QuestionFooter.classList.remove("right");
    }
}


function progressBarAnimations() {
    let progressBar = document.getElementById("progress-bar");
    let widthPercent = (currentQuestion + 1) * 100 / questions.length;
    progressBar.innerHTML = /*html*/`
        <div class="progress mt-4 mb-2">
        <div class="progress-bar progress-bar-animated progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="${widthPercent}" aria-valuemin="0" aria-valuemax="100" style="width: ${widthPercent}%"></div>
         </div>
         `;
}

function startPage() {
    document.getElementById("congrat-page").classList.add("d-none");
    document.getElementById("start-page").classList.remove("d-none");
    document.getElementById("card-body").classList.add("d-none");
}


function nextQuestion() {
    currentQuestion++;
    renderQuestions();
    resetAnswerButtons();
}


function resetAnswerButtons() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer-${i}`).parentNode.classList.remove('bg-success');
        document.getElementById(`answer-${i}`).parentNode.classList.remove('bg-danger');
    }
}


function replay() {
    currentQuestion = 0;
    NumberOfRightAnswers = 0;
    document.getElementById("congrat-page").classList.add("d-none");
    document.getElementById("start-page").classList.remove("d-none");
}


function lastQuestion() {
    currentQuestion--;
    renderQuestions();
}


function answer(selection) {
    let answer = document.getElementById(selection);
    let selectionAnswerNumber = selection.slice(-1);
    let rightAnswer = questions[currentQuestion]['right_answer'];
    let idOfRightElement = `answer-${rightAnswer}`;
    let nextIcon = document.getElementById("next-question");
    nextIcon.classList.remove("d-none");
    if (selectionAnswerNumber == rightAnswer) {
        answer.parentNode.classList.add('bg-success');
        NumberOfRightAnswers++;
        AUDIO_CORRECT.play();
    }
    else {
        answer.parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightElement).parentNode.classList.add('bg-success');
        AUDIO_WRONG.play();
    }
}


function alertNotnow() {
    alert("it is not available right now .");
}