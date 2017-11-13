'use strict';

(function (module) {

  const addView = {};


  addView.renderAddView = function () {

    $('.container').hide();
    $('.book-add').show();

    $('#book-add-form').off('submit');
    $('#book-add-form').on('submit', function(event) {

      event.preventDefault();

      let book = {
        title: event.target.title.value,
        author: event.target.author.value,
        isbn: event.target.isbn.value,
        description: event.target.description.value,
        image_url: event.target.image_url.value
      };
      module.Book.addOne(book);
    })
  };

  module.addView = addView;

})(app)
