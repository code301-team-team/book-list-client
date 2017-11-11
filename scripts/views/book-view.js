'use strict';

var app = app || {};

(function (module) {

  const bookListView = {};

  bookListView.initIndexPage = function () {
    console.log('initIndexPage')
    $('.container').hide();
    $('.book-list-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
    console.log('bookListView');
  };

  module.bookListView = bookListView;

  const bookDetailView = {};

  bookDetailView.initIndexPage = function () {
    $('.container').hide();
    $('.book-detailed-view').show();
    Book.all.book.toHtml();
  };

  module.bookDetailView = bookDetailView;

})(app)
