const path = require('path')
const express = require('express')
const socketIO = require('socket.io')
const http = require('http')

const publicPath = path.join(__dirname,'../public')
const port = process.env.PORT || 3000
const app = express();
let server = http.createServer(app)
let io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('A new user just connected')

    socket.on('disconnect', () => {
        console.log('User was Disconnected.')
    })
})


server.listen( port, () => {
    console.log(`Server is running on port ${port}`)
})

