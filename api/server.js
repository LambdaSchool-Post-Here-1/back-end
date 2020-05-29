const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const session = require('express-session')

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const postsRouter = require('../posts/post-router');

const sessionConfig = {
  cookie:{
    maxAge: 1000 *60*60,
    secure: false, //send only over https (set as true in production)
    httpOnly: true, // means client JS cannot access cookie
  },
  resave: false,
  saveUninitialized: process.env.USER_ALLOWED_COOKIES || true, // in development set as true, in prodcution false gdr compliance 
  name: 'monster',
  secret: process.env.COOKIE_SECRET || 'keepitsecret, keepitsafe',

}

const server = express()
server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(session(sessionConfig))

server.get('/', (req, res)=>{
  res.status(200).json("Server up and running")
})

// server.use('/api/auth', authRouter)
// server.use('/api/reddit', authenticate, postsRouter)
server.use('/api/reddit', authenticate, postsRouter)
server.use('/api/auth', authRouter)

module.exports = server