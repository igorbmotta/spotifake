const Playlist = require('../src/playlist');
const Music = require('../src/music');

describe('Módulo de Playlists', () => {
    test('deve criar uma playlist e adicionar uma música corretamente', () => {
        const playlist = new Playlist('Minha Playlist', 'Descrição da playlist');
        const music = new Music('Song 1', 'Artist 1', 'Album 1', '3:45', 'Pop');
        playlist.addSong(music);
        expect(playlist.songs.length).toBe(1);
        expect(playlist.songs[0].title).toBe('Song 1');
    });

    test('deve remover uma música da playlist corretamente', () => {
        const playlist = new Playlist('Minha Playlist', 'Descrição da playlist');
        const music = new Music('Song 1', 'Artist 1', 'Album 1', '3:45', 'Pop');
        playlist.addSong(music);
        playlist.removeSong('Song 1');
        expect(playlist.songs.length).toBe(0);
    });

    test('deve listar todas as músicas da playlist', () => {
        const playlist = new Playlist('Minha Playlist', 'Descrição da playlist');
        const music1 = new Music('Song 1', 'Artist 1', 'Album 1', '3:45', 'Pop');
        const music2 = new Music('Song 2', 'Artist 2', 'Album 2', '4:00', 'Rock');
        playlist.addSong(music1);
        playlist.addSong(music2);

        const songs = playlist.listSongs();
        expect(songs.length).toBe(2);
        expect(songs[0].title).toBe('Song 1');
        expect(songs[1].title).toBe('Song 2');
    });
});
