'use strict';

var app = app || {};

(function (module) {

  const bookListView = {};

  bookListView.initIndexPage = function () {
    console.log('bookListView');
    $('.container').hide();
    $('.book-list-view').show();
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };

  module.bookListView = bookListView;

  // const bookDetailView = {};
  //
  // bookDetailView.initIndexPage = function () {
  //   $('.container').hide();
  //   $('.book-detailed-view').show();
  //   Book.all.book.toHtml();
  // };
  //
  // module.bookDetailView = bookDetailView;

})(app)
