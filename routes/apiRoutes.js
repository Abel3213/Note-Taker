const express = require('express');
const uuid = require('uuid');
const fs = require('fs');
const router = express.Router();

// get all notes
router.get('/notes', (req, res) => {
    const notes = fs.readFileSync("./db/db.json")
    res.json(JSON.parse(notes));
});

// create new notes
router.post('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const addNote = req.body;
    notes.push(addNote);
    addNote.id = uuid.v4();
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
});

// delete unwanted notes
router.delete('/notes/:id', (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const foundNote = notes.filter((delNote) => delNote.id !== req.params.id)
    fs.writeFileSync('./db/db.json', JSON.stringify(foundNote));

    res.json(foundNote)
})


module.exports = router;