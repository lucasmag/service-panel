'use strict';

const { PasswordMisMatchException, UserNotFoundException } = require('@adonisjs/auth/src/Exceptions');

const User = use('App/Models/User');

class AuthController {
    async register({ request }) {
        const data = request.all();
        // data = Object{name, username and password}
        return User.create(data);
    }

    async authenticate({ request, auth, response }) {
        const { username, password } = request.only(['username', 'password']);
        let attemptResult = {};

        try {
            attemptResult = await auth.attempt(username, password);

        } catch (e) {
            if (e instanceof PasswordMisMatchException || e instanceof UserNotFoundException) {
                return response.unauthorized({
                    error: 'Invalid username or password'
                })
            }
            return e;
        }
        const { name, id } = await User.findBy('username', username)

        return {
            user: {
                id: id,
                name: name,
                username: username,
            },
            token: attemptResult.token,
        }
    }
}

module.exports = AuthController;
