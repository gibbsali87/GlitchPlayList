const _ = require('lodash');
'use strict';

const playlistStore={

playlistCollection: require('./playlist-store.json').playlistCollection,
  
  getAllPlaylists(){
    return this.playlistCollection;
  },
  
  getPlaylist(id) {
    return _.find(this.playlistCollection, { id: id });
  },
  
  removeSong(id, songId) {
    const playlist = this.getPlaylist(id);
    _.remove(playlist.songs, { id: songId });
  },

};

module.exports = playlistStore;
