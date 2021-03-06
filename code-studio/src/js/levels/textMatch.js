import $ from 'jquery';

window.levelGroup = window.levelGroup || {levels: {}};

var TextMatch = window.TextMatch = function (levelId, id, standalone, answers, lastAttempt) {

  // The dashboard levelId.
  this.levelId = levelId;

  // The DOM id.
  this.id = id;

  this.standalone = standalone;

  this.lastAttempt = lastAttempt;

  this.answers = answers;

  $(document).ready($.proxy(function () {
    this.ready();
  }, this));
};

// called on $.ready
TextMatch.prototype.ready = function () {
  // Pre-fill text area with previous response content
  $("#" + this.id + " textarea.response").val(this.lastAttempt);

  // If we are relying on the containing page's submission buttons/dialog, then
  // we need to provide a window.getResult function.
  if (this.standalone) {
    window.getResult = $.proxy(this.getResult, this);
  }


  $("#" + this.id + " textarea.response").blur(function () {
    if (window.levelGroup && window.levelGroup.answerChangedFn) {
      window.levelGroup.answerChangedFn(this.levelId);
    }
  });
};

TextMatch.prototype.getResult = function () {
  var response = $("#" + this.id + " textarea.response").val();
  var answers = this.answers;
  if (answers && answers.length > 0) {
    response = response.replace(/\s+/g, '');
    var result = answers.some(function (element) {
      return response === element.replace(/\s+/g, '');
    });
    return {
      response: encodeURIComponent(response),
      result: result,
      valid: response.length > 0
    };
  } else {
    // Always succeed for any non-empty response to open-ended question without answer(s)
    return {
      response: encodeURIComponent(response),
      result: response.length > 0,
      valid: response.length > 0
    };
  }
};
