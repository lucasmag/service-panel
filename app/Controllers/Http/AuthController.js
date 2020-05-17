'use strict';

const User = use('App/Models/User');

class AuthController {
    async register({ request }) {
        const data = request.all();

        return User.create(data);
    }

    async authenticate({ request, auth }) {
        const { username, password } = request.only(['username', 'password']);

        return await auth.attempt(username, password);
    }
}

module.exports = AuthController;
