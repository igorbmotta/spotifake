const User = require('../src/user');
const Music = require('../src/music');
const Playlist = require('../src/playlist');

describe('Teste de Integração', () => {
    beforeEach(() => {
        User.users = [];
    });

    test('deve permitir que um usuário cadastre uma música, crie uma playlist, adicione músicas, remova uma música e liste todas as músicas', () => {
        
        const user = new User('João', 'joao@example.com', '1990-05-15');
        
        const music1 = new Music('Song 1', 'Artist 1', 'Album 1', '3:45', 'Pop');
        const music2 = new Music('Song 2', 'Artist 2', 'Album 2', '4:00', 'Rock');

        const playlist = new Playlist('Minha Playlist', 'Playlist para testar');
        user.playlists.push(playlist);

        playlist.addSong(music1);
        playlist.addSong(music2);
        expect(playlist.songs.length).toBe(2);

        playlist.removeSong('Song 1');
        expect(playlist.songs.length).toBe(1);
        expect(playlist.songs[0].title).toBe('Song 2');

        const songs = playlist.listSongs();
        expect(songs.length).toBe(1);
        expect(songs[0].title).toBe('Song 2');
    });
});
