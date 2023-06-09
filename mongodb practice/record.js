const express = require('express');
const fs = require('fs')


const record = (req, res, next) => {
    const id = req.params.id;
    const method = req.method;
    if (method === 'PUT' && id) {
        fs.appendFile('records.txt', `The document with id:${id} has been updated.\n`, 'utf-8', (err) => {
            if (err) return err.message;
            else return next();

        })
    }
    else if (method === 'DELETE' && id) {
        fs.appendFile('records.txt', `The document with id:${id} has been Deleted.\n`, 'utf-8', (err) => {
            if (err) return err.message;
            else return next();
        })
    }
}

module.exports = { record }