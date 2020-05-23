const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

// const authenticate = require('../auth/authenticate-middleware.js');
// const authRouter = require('../auth/auth-router.js');
const postsRouter = require('../posts/post-router');

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.get('/', (req, res)=>{
  res.status(200).json("Server up and running")
})

// server.use('/api/auth', authRouter)
// server.use('/api/reddit', authenticate, postsRouter)
server.use('/api/reddit', postsRouter)

module.exports = server