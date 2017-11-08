'use strict';

let __API_URL__ = 'https://fr-pc-dm-booklist.herokuapp.com';

let getMessage = ()=> {
  console.log('Requesting data from server.js');
  $.get(`${__API_URL__}/test`)
    .done((data) => {console.log(data)})
    .fail(()=> {console.log('failure')})
}
