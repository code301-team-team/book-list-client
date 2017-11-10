'use strict';
page('/', ctx => app.Book.fetchAll(app.taskView.initIndexPage));
page('/books/:book_id', ctx => app.Book.fetchAll(app.taskView.initIndexPage));
page('/new', ctx => app.Book.fetchAll(app.taskView.initIndexPage));
page();
