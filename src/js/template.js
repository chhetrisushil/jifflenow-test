/*
 * template.js
 * Copyright (C) 2017 Sushil Chhetri <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
/*jshint esnext: true*/
let QuizTemplate = `<div>Javascript Quiz <%this.answeredCount%> of <%this.totalCount%></div>
<div class="question"><%this.text%></div>
  <ul class="choices">
    <%for (var i = 0; i < this.options.length; i++) {%>
      <li><%this.options[i]%></li>
    <%}%>
  </ul>`;

let AnswerChoices = `<ul id="answers">
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
  </ul>`;

let ResultTemplate = `<table cellspacing="0" cellpadding="0" border="0">
  <thead>
    <tr>
      <th>Question</th>
      <th>Correct Answer</th>
      <th>Your Choice</th>
    </tr>
  </thead>
  <tbody>
    <%for (var i = 0; i < this.length; i++) {%>
      <%if (this[i].isRightAnswer) {%>
        <tr class="correct">
      <%} else {%>
        <tr class="wrong">
      <%}%>
        <td><%this[i].text%></td>
        <td><%this[i].options[this[i].answer]%></td>
        <td><%this[i].options[this[i].choice]%></td>
      </tr>
    <%}%>
  </tbody>
  <tfoot>
    <tr><td colspan="3" align="right"><%this.rightAnswerCount%>/<%this.length%> correct</td></tr>
  </tfoot>
</table>`;

export {QuizTemplate};
export {AnswerChoices};
export {ResultTemplate};
