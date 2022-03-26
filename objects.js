"use strict"

function User(email, username, online) {
    this.email = email;
    this.username = username;
    this.online = false;

}
User.prototype.login = function () {
    this.online = true;
    document.querySelector('#greet').innerHTML = "Welcome, " + this.username
}

User.prototype.logout = function () {
    this.online = false;
    document.querySelector('#greet').innerHTML = ""
}


let userOne = new User('marc@mail.com', 'Papi');

let userTwo = new User('e@mail.com', 'eeezy');

userOne.login();

console.table(userOne);

setTimeout(userOne.logout, 10000);

console.table(userOne);