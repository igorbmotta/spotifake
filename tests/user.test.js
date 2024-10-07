const User = require('../src/user');

describe('Módulo de Usuários', () => {
    beforeEach(() => {
        User.users = []; 
    });

    test('deve criar um usuário com email válido', () => {
        const user = new User('João', 'joao@example.com', '1990-05-15');
        expect(user.name).toBe('João');
        expect(user.email).toBe('joao@example.com');
    });

    test('deve falhar ao criar um usuário com email inválido', () => {
        expect(() => {
            new User('João', 'email_invalido', '1990-05-15');
        }).toThrow('Email inválido.');
    });

    test('deve impedir a criação de dois usuários com o mesmo nome', () => {
        new User('João', 'joao@example.com', '1990-05-15');
        expect(() => {
            new User('João', 'joao2@example.com', '1992-07-21');
        }).toThrow('Nome de usuário já existe.');
    });
});
