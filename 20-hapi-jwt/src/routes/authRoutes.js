const BaseRoute = require('./base/baseRoute');
const Joi = require('joi');
const Boom = require('boom');
//npm i jsonwebtoken
const failAction = (request, headers, error) => {
    throw error;
}
const USER = {
    username: 'fcoviana',
    passeord: '123'
}

class AuthRoutes extends BaseRoute {
    constructor(db) {
        super();
        this.db = db;
    }

    login() {
        return {
            path: '/login',
            method: 'POST',
            config: {
                tags: ['api'],
                description: 'Obter token',
                notes: 'faz login com user e senha do banco',
                validate: {
                    failAction,
                    payload: {
                        username: Joi.string().required(),
                        password: Joi.string().required()
                    }
                }
            },
            handler: async (request) => {
                const { username, password } = request.payload;
                if (username.toLowerCase() !== USER.username ||
                    password !== USER.password) return Boom.unauthorized();

                return {

                }
            }
        }
    }
}

module.exports = AuthRoutes;