'use strict';
page('/', ctx => app.Book.fetchAll(app.bookListView.initIndexPage));
page('/books/:book_id', ctx => {
  app.Book.fetchOne(ctx, app.bookDetailView.initIndexPage)
});
page('/new', ctx => app.Book.addOne(app.bookView.initIndexPage));
page();
