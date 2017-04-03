/*
 * handlers.js
 * Copyright (C) 2017 Sushil Chhetri <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
/*jshint esnext: true*/
function choiceHandler(answers, questions, renderer, resultsView, e) {
  let choice = Array.prototype.indexOf.call(answers.children, e.target);

  if (renderer.next(choice).done) {
    resultsView(questions);
  }
}

export {
  choiceHandler
};
