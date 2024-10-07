const Music = require('../src/music');

describe('Módulo de Músicas', () => {
    test('deve criar uma música com todos os campos obrigatórios', () => {
        const music = new Music('Song 1', 'Artist 1', 'Album 1', '3:45', 'Pop');
        expect(music.title).toBe('Song 1');
        expect(music.artist).toBe('Artist 1');
        expect(music.album).toBe('Album 1');
        expect(music.duration).toBe('3:45');
        expect(music.genre).toBe('Pop');
    });

    test('deve falhar ao criar uma música sem todos os campos obrigatórios', () => {
        expect(() => {
            new Music('Song 1', 'Artist 1');
        }).toThrow('Todos os campos são obrigatórios.');
    });

    test('deve armazenar a duração corretamente', () => {
        const music = new Music('Song 1', 'Artist 1', 'Album 1', '4:30', 'Rock');
        expect(music.duration).toBe('4:30');
    });
});
