/*
This server is used for development purposes. It helps to emulate github server by running express on http://localhost:3000/
It also make better use of 
*/

const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.use((req, res) => {
    const path = req.path
    
    if(path.startsWith('/antichess-russia/src/')) {
        var modifiedPath = path.replace('/antichess-russia', '')
        res.sendFile(__dirname + '/' + modifiedPath)
    }
})

server.listen(3000)