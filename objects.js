(function(){
    "use strict";

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
function Admin (...args) {
    User.apply(this, args);

    this.role = 'administrator';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.delete = function(user) {
    users = users.filter(u => {
        return u.email != user.email;
    })
}

let userOne = new User('marc@mail.com', 'Papi');

let userTwo = new User('e@mail.com', 'eeezy');

let admin = new Admin('admin@mail.com', 'sleazy');

let users = [userOne, userTwo, admin];

// userOne.login();

admin.login();

})();