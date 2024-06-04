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
        'question': '2. Which one is the correct sequence of HTML tags:?',
        'answer_1': 'A / head, body, title, html',
        'answer_2': 'B / html, head, title, body',
        'answer_3': 'C / html, title, head, body',
        'answer_4': 'D / None of the above',
        "right_answer": 2
    },
    {
        'question': '3. Which tag is used to make the underlined text?',
        'answer_1': 'A / <b> ',
        'answer_2': 'B / <ul> ',
        'answer_3': 'C / <u> ',
        'answer_4': 'D / <line> ',
        "right_answer": 3
    },
    {
        'question': '4. How to create a checkbox in HTML?',
        'answer_1': 'A / <input type = "checkbox">',
        'answer_2': 'B / <input type = "button">',
        'answer_3': 'C / <checkbox>',
        'answer_4': 'D / <input type = "check">',
        "right_answer": 1
    },
    {
        'question': '5. Which HTML tag is used to make the text bold in HTML?',
        'answer_1': 'A / <pre>',
        'answer_2': 'B / <br>',
        'answer_3': 'C / <b>',
        'answer_4': 'D /  None',
        "right_answer": 3
    }
];
let currentQuestion = 0;

function renderQuestions() {
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
    displaysButton();
}


function nextQuestion() {
    currentQuestion++;
    renderQuestions();
    resetAnswerButtons();
    let progressBar = document.getElementById("progress-bar");
    let widthPercent = 0;
    let progressPercent = widthPercent + 25;
    widthPercent = progressPercent;
    progressBar.innerHTML = /*html*/`
    <div class="progress mt-4 mb-2">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style='width: ${widthPercent}%'
                        aria-valuenow="${widthPercent}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
`;
}

function resetAnswerButtons() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer-${i}`).parentNode.classList.remove('bg-success');
        document.getElementById(`answer-${i}`).parentNode.classList.remove('bg-danger');
    }
}


function replay() {
    currentQuestion = 0;
    renderQuestions();
}


function lastQuestion() {
    currentQuestion--;
    renderQuestions();
}

function displaysButton() {
    // let nextIcon = document.getElementById("next-question") ;
    let lastIcon = document.getElementById("last-question");
    if (currentQuestion === questions.length + 1) {
        let cardBody = document.getElementById("card-body");
        cardBody.innerHTML =/*html*/`
            <div class="congratulation">
                <img class="congrat-image mb-4" src="/img/logo-congrat.png" alt="">
                <p class="rubik-bold"> COMPLETE <br> HTML QUIZ </p>
                <div class="score mb-4">
                    <p class ="blue-color rubik-bold" >YOUR SCORE </p>
                    <p class="rubik-bold" > 10/10 </p>
                </div>
                <button type="button " class="btn btn-danger mb-3 btn-danger-orange">Share</button>

                <a onclick="replay(${currentQuestion})" class="replay">Replay </a>
            </div>
        `
    }
    if (currentQuestion = 0) {
        lastIcon.classList.add("d-none");
    }
    else {
        lastIcon.classList.remove("d-none");
    }
}


function answer(selection) {
    let answer = document.getElementById(selection);
    let selectionAnswerNumber = selection.slice(-1);
    let rightAnswer = questions[currentQuestion]['right_answer'];
    let idOfRightElement = `answer-${rightAnswer}`;
    let nextIcon = document.getElementById("next-question");
    nextIcon.classList.add("d-none");
    if (selectionAnswerNumber == rightAnswer) {
        answer.parentNode.classList.add('bg-success');
        nextIcon.classList.remove("d-none");

    }
    else {
        answer.parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightElement).parentNode.classList.add('bg-success');
    }

}