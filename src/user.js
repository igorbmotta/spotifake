class User {
    static users = []; 

    constructor(name, email, birthDate) {
        if (!name || !email || !birthDate) {
            throw new Error('Todos os campos são obrigatórios.');
        }
        if (!this.validateEmail(email)) {
            throw new Error('Email inválido.');
        }
        if (User.users.some(user => user.name === name)) {
            throw new Error('Nome de usuário já existe.');
        }
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.playlists = [];
        User.users.push(this);
    }

    validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
}

module.exports = User;
