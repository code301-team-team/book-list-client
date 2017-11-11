'use strict';

page('/', () => app.Book.fetchAll(app.bookView.renderBookList));
//page('/books:book_id', () => app.Book.fetchOne(app.bookView.renderBook));
//page('/new' => app.Book.addOne(app.bookView.initIndexPage));
page();
