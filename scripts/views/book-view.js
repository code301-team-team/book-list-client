'use strict';

var app = app || {};

(function (module) {

  const bookView = {};

  bookView.initIndexPage = function () {
    $('.container').hide();
    $('.book-view').show();
    Book.all.map(book => $('#book-list').append(book.toHtml()));
  };

  module.bookView = bookView;

})(app)
