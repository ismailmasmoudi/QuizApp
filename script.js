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

currentQuestion = 0;
function renderQuestions() {
    let questionText = document.getElementById("question");
    let answerTextA = document.getElementById("answer-a");
    let answerTextB = document.getElementById("answer-b");
    let answerTextC = document.getElementById("answer-c");
    let answerTextD = document.getElementById("answer-d");

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

function nextQuestion() {
    let nextQuestion = currentQuestion + 1;
    let actuelWidth = 10 ;
    let ProcentWidth = actuelWidth +25 ;
    actuelWidth = ProcentWidth ;
    let progressBar = document.getElementById("progress-bar");
    progressBar.style = `width: ${actuelWidth}% ` ;
    if (currentQuestion = questions.length) {
        actuelWidth = 100 ;
        let cardBody = document.getElementById("card-body") ;
        cardBody.innerHTML=/*html*/`
            <div class="congratulation">
                <img src="" alt="">
            </div>
        `

    } else {
        currentQuestion = nextQuestion;
    }
    renderQuestions();
}

function lastQuestion() {
    let lastQuestion = currentQuestion - 1;
    if (currentQuestion = 0) {

    }
    else {
        currentQuestion = lastQuestion;
    }
    renderQuestions();
}