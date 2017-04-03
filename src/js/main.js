/*
 * main.js
 * Copyright (C) 2017 Sushil Chhetri <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
/*jshint esnext: true*/
import '../style/style.css';
import {
  quizView
}
from './views.js';
import {
  getQuestions
}
from './datasource.js';

async function init() {
  let questions = await getQuestions();

  quizView(questions);
}

init();
