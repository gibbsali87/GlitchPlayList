'use strict';

const logger = require('../utils/logger');
const playlistStore = require('../models/playlist-store.js');

const playlist = {
  index(request, response) {
    const playlistId = request.params.id;
    logger.info('Playlist id = ' + playlistId);
    const viewData = {
      title: 'Playlist',
      playlist: playlistStore.getPlaylist(playlistId),
    };
    response.render('playlist', viewData);
  },
    deleteSong(request, response) {
    const playlistId = request.params.id;
    const songId = request.params.songid;
    logger.debug(`Deleting Song ${songId} from Playlist ${playlistId}`);
    playlistStore.removeSong(playlistId, songId);
    response.redirect('/playlist/' + playlistId);
  },
};

module.exports = playlist;