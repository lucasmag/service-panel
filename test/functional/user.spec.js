'use strict'

const { test, trait } = use('Test/Suite')('User registration')
const User = use('App/Models/User');

trait('Test/ApiClient')

test('Criação de usuário', async ({ client }) => {
    // Usuário que será criado
    const user_to_create = {
        name: 'Lucas Magalhães',
        username: 'lucasmag',
        password: '123456'
    }

    const response = await client.post('/register').send(user_to_create).end();
    const user = await User.findBy('username', 'lucasmag');

    response.assertStatus(200);
    // Teste se body do response çontém as mesmas informações do usuário criado no banco
    response.assertJSONSubset({name: user.name, username: user.username})
})
