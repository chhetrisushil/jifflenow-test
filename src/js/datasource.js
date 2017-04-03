/*
 * datasource.js
 * Copyright (C) 2017 Sushil Chhetri <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
/*jshint esnext: true*/
async function getQuestions() {
  let url = 'https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json';

  let questions = await fetch(url)
    .then((response) => response.json());

  return questions;
}

export {
  getQuestions
};
