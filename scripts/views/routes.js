'use strict';
page('/book-list-client/', ctx => {console.log('first page route fired')});
page('/books:book_id', ctx => {
  app.Book.fetchOne(ctx, app.bookDetailView.initIndexPage)
});
page('/new', ctx => app.Book.addOne(app.bookView.initIndexPage));
page();
