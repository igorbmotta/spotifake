const Music = require('./music');
const User = require('./user');
const Playlist = require('./playlist');

const user1 = new User('João', 'joao@example.com', '1990-05-15');
const music1 = new Music('Song 1', 'Artist 1', 'Album 1', '3:45', 'Pop');

const playlist1 = new Playlist('Minha Playlist', 'Playlist de músicas favoritas');
playlist1.addSong(music1);

user1.playlists.push(playlist1);
console.log(user1);
