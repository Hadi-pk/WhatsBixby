/* Copyright (C) 2023 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const config = require('../../config');
const { DataTypes } = require('sequelize');

const NotesDB = config.DATABASE.define('notes', {
    note: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});


async function getNotes() {
    const Notes = await NotesDB.findAll()

    return Notes
}

async function saveNote(note) {
    return await NotesDB.create({ note });
}

async function deleteAllNotes() {
    return await NotesDB.destroy({
        where: {},
        truncate: true
    })
}

module.exports = {
    NotesDB,
    getNotes,
    saveNote,
    deleteAllNotes
};
