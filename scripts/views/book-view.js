'use strict';

(function (module) {

  const bookView = {};

  bookView.renderBookList = function () {
    console.log('bookView.renderBookList');
    $('.container').hide();
    $('.book-list-view').show();
    app.Book.all.forEach(book => $('#book-list').append(book.toHtml('#book-list-template')));
  };

  bookView.renderBook = function () {
    console.log('bookView.renderBook');
    $('.container').hide();
    $('.book-detail-view').show();
    app.Book.all.forEach(book => $('#book-list').append(book.toHtml('#book-detail-template')));
  };

  module.bookView = bookView;

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
