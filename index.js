const fetch = require('node-fetch');

async function callApi(){
    //apiを叩く
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);
}

callApi();
