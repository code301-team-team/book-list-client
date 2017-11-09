'use strict';

//var app = app || {};

let __API_URL__ = 'https://fr-pc-dm-booklist.herokuapp.com';

let getMessage = () => {
  console.log('Requesting data from server.js');
  $.get(`${__API_URL__}/test`)
    .done((data) => {console.log(data)})
    .fail(()=> {console.log('Failure in Proof of Life')})
}

let testDatabase = () => {
  $.get(`${__API_URL__}/api/v1/books`)
  .done((data) => {console.log(data)})
  .fail(()=> {console.log('Failure connecting to database.')})
}
