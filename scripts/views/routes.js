'use strict';

page('/book-list-client/', () => app.Book.fetchAll(app.bookView.renderBookList));
page('/book-list-client/books/:id', context => app.Book.fetchOne(context, app.bookView.renderBook));
page('/book-list-client/new',() => app.addView.renderAddView());

page.start();
