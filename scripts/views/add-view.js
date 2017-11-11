'use strict';

(function (module) {

  const addView = {};


  addView.renderAddView = function () {
    $('.container').hide;
    $('.book-insert').show;
    $('#book-insert-form').on('submit',(eventData) => {
      eventData.preventDefault();

      console.log(`event: ${event}`);
      console.log(`eventData: ${eventData}`);

      let book = {
        title: eventData.target.title.value,
        author: eventData.target.author.value,
        isbn: eventData.target.isbn.value,
        description: eventData.target.description.value,
        image_url: eventData.target.image_url.value
      };
      console.log(`book: ${book}`)

      module.Book.addOne(book);
    })
  };

  module.addView = addView;

})(app)
