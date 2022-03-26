"use strict";

// let userOne = {
//     name: 'Eazy', //default value
//     email: 'eazy.mail.com',

//     login() {
//         console.log(this.name + ' logged in');
//         document.querySelector('#greet').innerHTML = "Hello " + this.name;
//     },

//     logout() {
//         // alert(this.name + ' logged out');
//         console.log(this.name, ' logged out');
//         document.querySelector('#greet').innerHTML = "";
//     }
// }

// userOne.name = "March" // current value

// console.log(userOne["name"]);
// userOne.age = 3;

// let prop = 'name';


// let userTwo = new userOne();

// console.log(userOne[prop] + ' using []');


// userOne.login();
// // userOne.logout();

// setTimeout(userOne.logout, 10000);

class User {
    constructor(email, username) {
        this.email = email;
        this.username = username;
    }

    login() {
        document.querySelector('#greet').innerHTML = "Hello " + this.username;
        return this;
    }

    logout() {
        document.querySelector('#greet').innerHTML = "";
        return this;
    }
}

class Admin extends User{
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

let userOne = new User('marc@mail.com', 'papi');

let userTwo = new User('e@mail.com', 'eeezy');

let admin = new Admin('3re@mail.com', '3zy');

// userOne.login();
// userTwo.login();
// setTimeout(userOne.logout, 3000);



let users = [userOne, userTwo, admin];

console.table(users);

admin.deleteUser(userTwo);

console.table(users);