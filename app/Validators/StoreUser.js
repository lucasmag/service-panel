'use strict';

class StoreUser {
    get rules() {
        return {
            username: 'required|alphaNumeric|min:4|max:10|unique:users',
            password: 'required|min:6|max:15',
            name: 'required|min:3',
        };
    }

    get messages() {
        return {
            'name.required': 'Missing name',
            'password.required': 'Missing password',
            'username.required': 'Missing username',
            'name.min': 'Name must have at least 3characters',
            'username.unique': 'Username already exists on database',
            'password.min': 'Password must have at least 6 characters',
            'username.min': 'Username must have at least 4 characters',
            'username.max': 'Username cannot have more than 10 characters',
            'password.max': 'Password cannot have more than 15 characters',
            'username.alphaNumeric':
                'Username only accept lowercase characters and numbers',
        };
    }
}

module.exports = StoreUser;
