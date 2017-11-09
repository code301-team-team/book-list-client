'use strict';

//var app = app || {};

let __API_URL__ = 'https://fr-pc-dm-booklist.herokuapp.com';

let getMessage = () => {
  console.log('Requesting data from server.js');
  $.get(`${__API_URL__}/test`)
    .done((data) => {
      console.log(data)
    })
    .fail(() => {
      console.log('Failure in Proof of Life')
    })
}

let testDatabase = () => {
  $.get(`${__API_URL__}/api/v1/books`)
    .done((data) => {
      console.log(data)
    })
    .fail(() => {
      console.log('Failure connecting to database.')
    })
}

function book(bookObject) {
  Object.keys(bookObject).forEach(key => this[key] = bookObject[key]);
  return template(this);
}

Book.prototype.toHtml = function () {
  let template = Handlebars.compile($('#task-template').text());
};

Book.all = [];

Book.loadAll = function(rows) {
rows.sort((a, b) => a[title] > b[title] ? -1 : 1); //Improve later//
Book.all = rows.map(row => new Book(row));
};

Book.fetchAll = callback => {
    $.get(`${__API_URL__}/api/v1/books`)
      .then(results => {
        Book.loadAll(results);
        callback();
      })
  };
  
$(document).ready(Book.fetchAll(bookView.initIndexPage()));
