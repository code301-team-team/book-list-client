'use strict';

(function (module) {

  const bookView = {};


  bookView.renderBookList = function () {

    console.log('Entering bookView.renderBookList...');

    $('.container').hide();
    $('.book-list-view').show();


    $('#book-list').empty();
    app.Book.all.forEach(book => $('#book-list').append(book.toHtml('#book-list-template')));

    $('.book-list > img').off('click');
    $('.book-list > img').on('click', event => {
      let book_id = $(event.target).data("bookId");
      page(`/books/${book_id}`);
    });

    $('#newBookButton').off('click');
    $('#newBookButton').on('click', () => page('/new'))
    $('#homeButton').off('click');
    $('#homeButton').on('click', () => page('/'))

    console.log('...Leaving bookView.renderBookList');

  };

  bookView.renderBook = function () {
    console.log('bookView.renderBook');
    $('.container').hide();
    $('.book-detail-view').show();
    $('#book-detail-hook').append(app.Book.all[0].toHtml('#book-detail-template'));
  };

  module.bookView = bookView;

})(app)
