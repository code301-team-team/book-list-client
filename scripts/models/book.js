'use strict';

var app = app || {};
let __API_URL__ = 'https://fr-pc-dm-booklist.herokuapp.com';

(function (module) {

  function getMessage() {
    console.log('Requesting data from server.js');
    $.get(`${__API_URL__}/test`)
      .done((data) => {
        console.log(data)
      })
      .fail(() => {
        console.log('Failure in Proof of Life')
      })
  }

  function testDatabase() {
    $.get(`${__API_URL__}/api/v1/books`)
      .done((data) => {
        console.log(data)
      })
      .fail(() => {
        console.log('Failure connecting to database.')
      })
  }

  function Book(bookObject) {
    Object.keys(bookObject).forEach(key => this[key] = bookObject[key]);
  }

  Book.prototype.toHtml = function () {
    let template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  };

  Book.all = [];

  Book.loadAll = rows => {
  rows.sort((a, b) => a[title] > b[title] ? (a[title] === b[title] ? 0 : -1) : 1);
  Book.all = rows.map(row => new Book(row));
  };

  Book.fetchAll = callback => {
      $.get(`${__API_URL__}/api/v1/books`)
        .then(results => Book.loadAll(results))
        .then(callback)
        .catch(errorView.errorCallback)
    };

  module.Book = Book;

})(app);

$(document).ready(app.Book.fetchAll(app.bookView.initIndexPage));
