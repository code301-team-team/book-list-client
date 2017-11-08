'use strict';

let __API_URL__ = 'http://127.0.0.1:3000';

let getMessage = ()=> {
  console.log('Requesting data from server.js');
  $.get('http://127.0.0.1:3000/test')
    .done((data) => {console.log(data)})
    .fail(()=> {console.log('failure')})
}
