const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const { connection } = require('./db');

const app = express();
const server = http.Server(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('User connected');
  
    socket.on('join-room', async (roomName) => {
      console.log(`User joined room ${roomName}`);
      socket.join(roomName);
  
      const document = await Document.findOne({ name: roomName });
  
      if (document) {
        socket.emit('document-state', document.content);
      } else {
        const newDocument = new Document({
          name: roomName,
          content: ''
        });
  
        await newDocument.save();
  
        socket.emit('document-state', '');
      }
    });

    socket.on('request-document-state', async (roomName) => {
        console.log(`User requested document state for ${roomName}`);
    
        const document = await Document.findOne({ name: roomName });
    
        if (document) {
          socket.emit('document-state', document.content);
        }
      });
    
      socket.on('update-document', async (documentName, documentContent) => {
        console.log(`User updated document ${documentName}`);
    
        const document = await Document.findOne({ name: documentName });
    
        if (document) {
          document.content = documentContent;
          await document.save();
    
          socket.to(documentName).emit('document-updated', documentContent);
        }
      });
      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });
    
    app.listen(5000, async ()=>{
        try{
            await connection
        console.log('connected to db');
        }catch(error){
            console.log(error);
            console.log('cant ');
        }
    })