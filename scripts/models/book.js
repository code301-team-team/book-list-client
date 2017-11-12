'use strict';

var app = app || {};
//let __API_URL__ = 'https://fr-pc-dm-booklist.herokuapp.com';
let __API_URL__ = 'https://fr-pc-dm-booklist.herokuapp.com';

(function (module) {
  // console.log('book.js is loading');
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

  //$('#routeTest').on('click', () => page('/home'));

  function Book(bookObject) {
    Object.keys(bookObject).forEach(key => this[key] = bookObject[key]);
  }

  Book.prototype.toHtml = function (elementId) {
    //console.log(elementId);
    let template = Handlebars.compile($(elementId).text());
    //console.log(template);
    return template(this);
  };

  Book.all = [];

  Book.loadAll = rows => {
    console.log('Entering loadAll...');
    console.log('Book.all.length: ' + Book.all.length);
    rows.sort((a, b) => a.title < b.title ? (a.title === b.title ? 0 : -1) : 1);
    Book.all = rows.map(row => new Book(row));
    console.log('Book.all: ' + Book.all);
    console.log('...Leaving loadAll');
  };

  Book.fetchAll = callback => {
    $.get(`${__API_URL__}/api/v1/books`)
    .then(results => Book.loadAll(results))
    .then(callback)
    .catch(app.errorView.errorCallback)
  };

  Book.fetchOne = (context, callback) => {
    const id = context.params.id;
    $.get(`${(__API_URL__)}/api/v1/books/${id}`)
    .then(results => Book.loadAll(results))
    .then(callback)
    .catch(app.errorView.errorCallback)
  }

  Book.addOne = book => {
    $.post(`${(__API_URL__)}/api/v1/books/add`, book)
    .then(console.log('Successfully posted new Book'))
    .then(() => page('/'))
    .catch(module.errorView.errorCallback);
  }

  module.Book = Book;

})(app);
