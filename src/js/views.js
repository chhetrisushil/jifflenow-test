/*
 * views.js
 * Copyright (C) 2017 Sushil Chhetri <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
/*jshint esnext: true*/
import {
  TemplateEngine
}
from './TemplateEngine.js';
import {
  QuizTemplate,
  AnswerChoices,
  ResultTemplate
}
from './template.js';
import {
  choiceHandler
}
from './handlers.js';

function* questionView(questions) {
  questions.rightAnswerCount = 0;
  let answeredCount = 0;
  let correctAnswerCount = 0;
  let totalCount = questions.length;
  let domParser = new DOMParser();
  let correctAnswer = false;
  let renderer = function() {
    let quiz = questions[answeredCount];

    quiz.answeredCount = answeredCount + 1;
    quiz.totalCount = totalCount;

    let html = TemplateEngine(QuizTemplate, quiz);

    document.querySelector('.quiz-wrapper').innerHTML = domParser.parseFromString(html, 'text/html').body.innerHTML;

    ++answeredCount;

    return questions;
  };

  while (answeredCount < totalCount) {
    let choice =
      yield renderer();
    let quiz = questions[answeredCount - 1];

    correctAnswer = quiz.answer === choice;
    correctAnswer && ++questions.rightAnswerCount;
    quiz.isRightAnswer = correctAnswer;
    quiz.choice = choice;
  }
}

function quizView(questions) {
  let questionRenderer = questionView(questions);

  document.querySelector('.multi-choice').innerHTML = AnswerChoices;

  questionRenderer.next();

  let answers = document.querySelector('#answers');

  answers.addEventListener('click', choiceHandler.bind(this, answers, questions, questionRenderer, resultsView), false);
}

function resultsView(result) {
  let domParser = new DOMParser();

  document.body.innerHTML = '';

  let html = TemplateEngine(ResultTemplate, result);

  document.body.innerHTML = domParser.parseFromString(html, 'text/html').body.innerHTML;
}

export {
  quizView
};
