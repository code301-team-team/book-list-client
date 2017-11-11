'use strict';

page('/', () => app.Book.fetchAll(app.bookView.renderBookList));
page('/books/:id', context => app.Book.fetchOne(context, app.bookView.renderBook));
page('/new',() => app.Book.addOne();
page.start();
