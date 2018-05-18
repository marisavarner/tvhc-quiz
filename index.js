'use strict';

//Feedback to incorporate: Be careful about what ends up in the DOM and when. There's an empty fieldset lingering in your form, and it shouldn't cause any UX problems, but cleaning it up is a matter of good housekeeping.

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
            <button type="button" class="select" tabindex="1" value="${QUESTIONS[number].option1}">
              <span>${QUESTIONS[number].option1}</span>
            </button>
            <button type="button" class="select" tabindex="2" value="${QUESTIONS[number].option2}">
              <span>${QUESTIONS[number].option2}</span>
            </button>
            <button type="button" class="select" tabindex="3" value="${QUESTIONS[number].option3}">
              <span>${QUESTIONS[number].option3}</span>
            </button>
            <button type="button" class="select" tabindex="4" value="${QUESTIONS[number].option4}">
              <span>${QUESTIONS[number].option4}</span>
            </button>`;
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

function selectAnswer() {
  $('.question').on('click', '.select', function (event){
    
    $('.question').hide();
    $('.answer').show();
    $('.answer').html(renderAnswer());
    
    const answer = $( this ).val();
    
    if(answer == ANSWERS[number]) {
      score++;
      scoreQuiz();
      $('.checkAnswer').text('Yes!');
      $('.checkAnswer').parent().addClass('correct');
    } else {
      $('.checkAnswer').text('No.');
      $('.checkAnswer').parent().addClass('incorrect');
    }
  });
}

function renderAnswer() {
  return `<legend><span class="checkAnswer"></span> ${QUESTIONS[number].answer}</legend>
            <img src="${QUESTIONS[number].imgSrc}" alt="${QUESTIONS[number].imgAlt}" />
            
              <button type="button" class="advance" name="advance" value="${QUESTIONS[number].advance}">
              <span>${QUESTIONS[number].advance}</span>
            </button>`;
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
// refactor to reset quiz without reloading page    
  $('.page').on('click', '.reset', function (event){
      location.reload();
  } );
}

function handleQuiz() {
  renderPage();
  renderQuiz();
  beginQuiz();
  questionTotal();
  selectAnswer();
  scoreQuiz();
  quizPosition();
  advanceQuiz();
}

$(handleQuiz);