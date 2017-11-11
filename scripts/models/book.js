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
    rows.sort((a, b) => a.title < b.title ? (a.title === b.title ? 0 : -1) : 1);
    console.log(rows);
    Book.all = rows.map(row => new Book(row));
    console.log('output.all');
  };

  Book.fetchAll = callback => {
<<<<<<< HEAD
    console.log('fetchAll!', callback);
=======
    //console.log('fetchAll!')
>>>>>>> 8f5e4131e6b8566ede299a7f15449df91c6b071b
    $.get(`${__API_URL__}/api/v1/books`)
    .then(results => Book.loadAll(results))
    .then(callback)
    .catch(app.errorView.errorCallback)
  };

  Book.fetchOne = callback => {
    $.get(`${(__API_URL__)}/api/v1/books/:book_id`)
    .then(results => Book.loadAll(results))
    .catch(app.errorView.errorCallback)
  }

  Book.addOne = book => {
    $.post(`${(__API_URL__)}/api/v1/books/add`, book)
    .then(() => page('/'))
    .catch(errorView.errorCallback);
  }

  module.Book = Book;
  console.log('book.js finished!');
})(app);

// $(document).ready(app.Book.fetchAll(app.bookView.initIndexPage));
