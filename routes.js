"use strict";

const express = require("express");
const router = express.Router();

const dashboard = require("./controllers/dashboard.js");
const about = {
  index(request, response) {
    const viewData = {
      title: 'About Playlist Maker',
    };
    response.render('about', viewData);
  },
};
const playlist = require('./controllers/playlist.js');


router.get("/", dashboard.index);
router.get("/dashboard", dashboard.index);
router.get("/about", about.index);

router.get('/playlist/:id', playlist.index);
router.get('/playlist/:id/deletesong/:songid', playlist.deleteSong);


module.exports = router;
