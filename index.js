'use strict';

function renderPage() {
  $('.title').text(title);
  $('.center').html(footer);
  $('.page').html(renderQuiz());
  $('.quizProgress').hide();
}  
  
function renderQuiz() {
  return `<legend>${PAGES[page].text}</legend>
            <img src="${PAGES[page].imgSrc}" alt="${PAGES[page].imgAlt}" />
            <button type="button" name="begin" class="${PAGES[page].buttonClass}">
              <span>${PAGES[page].button}</span>
            </button>`; 
}
  
function renderQuestion() {
  return `<legend>${QUESTIONS[number].text}</legend>
            <div class="option" tabindex="1">
              <input type="radio" id="option1" name="choice" value="${QUESTIONS[number].option1}">
              <label for="option1">${QUESTIONS[number].option1}</label>
            </div>
            <div class="option" tabindex="2">
              <input type="radio" id="option2" name="choice" value="${QUESTIONS[number].option2}">
              <label for="option2">${QUESTIONS[number].option2}</label>
            </div>
            <div class="option" tabindex="3">
              <input type="radio" id="option3" name="choice" value="${QUESTIONS[number].option3}">
              <label for="option3">${QUESTIONS[number].option3}</label>
            </div>
            <div class="option" tabindex="4">
              <input type="radio" id="option4" name="choice" value="${QUESTIONS[number].option4}">
              <label for="option4">${QUESTIONS[number].option4}</label>
            </div>`;
}

function beginQuiz() {
  $('.page').on('click', '.begin', function (event){
      $('.page').hide();
      $('.question').html(renderQuestion());
      $('.quizProgress').show();
  } );
}

function scoreQuiz() {
 $('.scoreTally').text(score); 
}

function renderAnswer() {
  return `<legend><span class="checkAnswer"></span> ${QUESTIONS[number].answer}</legend>
            <img src="${QUESTIONS[number].imgSrc}" alt="${QUESTIONS[number].imgAlt}" />
            
              <button type="button" class="advance" name="advance" value="${QUESTIONS[number].advance}">
              <span>${QUESTIONS[number].advance}</span>
            </button>`;
}

function selectAnswer() {
  
  $('.question').on('click keypress', 'input[name="choice"]', function (event){
    $('.option').prop( "checked" );
    $('.question').hide();
    $('.answer').show();
    $('.answer').html(renderAnswer());
    
    //let selected = $('input:checked');
    let answer = $('input[name=choice]:checked').val(); //selected.val();
    alert("hi"+answer); 
    let isCorrect = checkAnswer(answer);
    
    if(isCorrect) {
      correctAnswer();
    } else {
      $('.checkAnswer').text('No.');
    }
  });
}

function dynamicRadio(){
 $('.question').keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
    {
      alert("xyxy");
    }
  }); 
}
//function dynamicRadio(){
 // $("div").delegate(".question","keydown",function(e){
 //       alert("xxx");
 //   });
//}

function checkAnswer(answer) {
  if(answer === ANSWERS[number]) {
    return true;
  } else {
    return false;
  }
}

function correctAnswer() {
  
  score++;
  $('.scoreTally').text(score);
  $('.checkAnswer').text('Yes!');
}

function advanceQuiz() {
  $('.answer').on('click', '.advance', function (event){ 
    $('.answer').hide();
    if (number == QUESTIONS.length-1) {
      $('.page').show();
      $('.page').html(renderQuiz(page++));
      resetQuiz();
    }
    else {
      $('.question').show();
      $('.question').html(renderQuestion(number++));
      pageQuiz();
    }
  });
}

function quizPosition() {
  let position = QUESTIONS[number].number;
  $('.quizPosition').text(position); 
}

function questionTotal() {
  let total = QUESTIONS.length;
  $('.questionTotal').text(total);
}

function pageQuiz() {
  $('.quizPosition').text(number+1);
}

function resetQuiz() {
  $('.page').on('click', '.reset', function (event){
      location.reload();
  } );
}


function handleQuiz() {
  // this is the callback function responsible for rendering the quiz, responding to user input, tallying score, and paginating
  renderPage();
  renderQuiz();
  beginQuiz();
  questionTotal();
  dynamicRadio();
  selectAnswer();
  scoreQuiz();
  quizPosition();
  advanceQuiz();

}

// when the page loads, call `handleQuiz`
$(handleQuiz);
