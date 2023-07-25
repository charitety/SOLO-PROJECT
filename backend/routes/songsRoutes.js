const express = require('express');
const router = express.Router();
const SongModel = require('../models/ChildrenSongs');

//GET song
//Mongoose provides the find methods
router.get('/api', async function(req, res, next) {
  try {
    const songs = await SongModel.find({});
    if (songs.length === 0) {
      return res.status(404).send({ message: "No songs found." });
    }
    return res.status(200).send({ message: "Songs have been found!", data: songs });
  } catch (error) {
    return res.status(400).send({ message: "Error occurred!", error: error.message });
  }
});
  

//GET song by country
//Ex.http://localhost:3000/api/country/Cuba
router.get('/api/country/:country', async function(req, res, next) {
  try {
    let country = req.params.country.toLowerCase(); // Convert to lowercase
    country = country.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    const song = await SongModel.findOne({ Country: country });

    if (!song) {
      return res.status(404).send({ message: "Country was not found." });
    }

    return res.status(200).send({ message: "A song for this country has been found!", data: song });
  } catch (error) {
    return res.status(400).send({ message: "Error occurred!", error: error.message });
  }
});


//POST song
//In Postman, choose raw and JSON format
router.post('/api', async function(req, res, next) {
  try {
    const { Country, Song } = req.body;
    const newSong = new SongModel({ Country, Song });
    await newSong.save();

    return res.status(200).send({ message: "Data has been added!", data: newSong });
  } catch (error) {
    return res.status(400).send({ message: "Error occurred!", error: error.message });
  }
});

//DELETE song
router.delete('/:songId', async function(req, res, next) {
    try {
      const songId = req.params.songId;
      const deletedSong = await SongModel.findByIdAndDelete(songId);
  
      if (!deletedSong) {
        return res.status(404).send({ message: "Song not found!" });
      }
  
      return res.status(200).send({ message: "Song has been deleted!" });
    } catch (error) {
      return res.status(400).send({ message: "Error occurred in deletion!", error: error.message });
    }
  });

//UPDATE songs
router.put('/:songId', async function(req, res, next) {
    try {
      const songId = req.params.songId;
      const { Country, Name } = req.body;
      const updatedSong = await SongModel.findByIdAndUpdate(songId, { Country, Name }, { new: true });
  
      if (!updatedSong) {
        return res.status(404).send({ message: "Song not found!" });
      }
  
      return res.status(200).send({ message: "Song has been updated!", data: updatedSong });
    } catch (error) {
      return res.status(400).send({ message: "Error occurred in update!", error: error.message });
    }
  });

module.exports = router;