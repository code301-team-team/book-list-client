'use strict';

let bookView = {};

bookView.initIndexPage = function () {
  $('#container').hide();
  $('.book-view').show();
  Book.all.map(book => $('#book-list').append(book.toHtml()));
};
