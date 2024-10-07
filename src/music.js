class Music {
    constructor(title, artist, album, duration, genre) {
        if (!title || !artist || !album || !duration || !genre) {
            throw new Error('Todos os campos são obrigatórios.');
        }
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.duration = duration;
        this.genre = genre;
    }
}

module.exports = Music;
