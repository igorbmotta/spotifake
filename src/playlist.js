class Playlist {
    constructor(name, description) {
        if (!name || !description) {
            throw new Error('Nome e descrição são obrigatórios.');
        }
        this.name = name;
        this.description = description;
        this.songs = [];
    }

    addSong(song) {
        this.songs.push(song);
    }

    removeSong(songTitle) {
        this.songs = this.songs.filter(song => song.title !== songTitle);
    }

    listSongs() {
        return this.songs;
    }
}

module.exports = Playlist;
