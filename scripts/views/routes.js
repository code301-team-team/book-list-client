'use strict';
<<<<<<< HEAD

page('/', () => app.Book.fetchAll(app.bookListView.initIndexPage));
//page('/books:book_id', () => {
//  app.Book.fetchOne(ctx, app.bookDetailView.initIndexPage)
//});
//page('/new', ctx => app.Book.addOne(app.bookView.initIndexPage));

=======
page('/', () => app.Book.fetchAll(app.bookView.renderBookList));
page('/home/', () => app.Book.fetchAll(app.bookView.renderBookList));
//page('/books:book_id', () => app.Book.fetchOne(app.bookView.renderBook));
//page('/new' => app.Book.addOne(app.bookView.initIndexPage));
>>>>>>> 8f5e4131e6b8566ede299a7f15449df91c6b071b
page();
