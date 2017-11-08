'use strict';

var app = app || {};
// TODO: hard coded this for now because I wasn't paying attention the day they taught how to set vaiables in terminal.
var __API_URL__ = 'http://127.0.0.1:3000';

(function(module) {
  function errorCallback(err) {
    console.log('Task.fetchAll failed to retrieve data from the server.js.');
    console.log(err);
    module.errorView.initErrorPage(err);
  }

  function Task(taskObject) {
    Object.keys(taskObject).forEach(key => this[key] = taskObject[key]);
  }

  Task.prototype.toHtml = function() {
    let template = Handlebars.compile($('#task-template').text());
    return template(this);
  }

  Task.all = [];

  Task.loadAll = rows => {
   Task.all = rows.map(task => new Task(task));
  }

  Task.fetchAll = callback =>
    $.get(`${__API_URL__}/tasks`)
      .then(Task.loadAll)
      .then(callback)
      .catch(errorCallback);

  module.Task = Task;
})(app)
