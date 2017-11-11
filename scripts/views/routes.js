'use strict';
page('/', () => app.Book.fetchAll( app.bookListView.initIndexPage));
page('/books:book_id', () => {
  app.Book.fetchOne( app.bookDetailView.initIndexPage)
});
page('/new', () => app.Book.addOne(app.bookView.initIndexPage));
page();
