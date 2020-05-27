const router = require('express').Router();
const bcryptjs = require('bcryptjs')
const jwt = require("jsonwebtoken")
const configVars = require("../config/vars")
const db = require('../data/dbconfig')
const Users = require('../posts/post-model') // need to rename these files


router.post('/register', (req, res) =>
{
  const credentials = req.body

  if (isValid(credentials))
  {
    const rounds = process.env.BCRYPT_ROUNDS || 8
    const hash = bcryptjs.hashSync(credentials.password, rounds)
    credentials.password = hash

    // add user to db
    Users.add("users", credentials).then(user =>
    {
      res.status(201).json({ data: user })
    }).catch(err => { res.status(500).json({ message: err }) })
  }
  else
  {
    res.status(401).json({ message: "Please log in with correct credentials" })
  }
})

router.post('/login', (req, res) =>
{
  const { username, password } = req.body
  if (isValid(req.body))
  {
    Users.findBy('users', { username: username })
      .then(([user]) =>
      {
        if (user && bcryptjs.compareSync(password, user.password) || user.password === password)
        { // added plaintext option- TEMPORARY

          // req.session.loggedIn = true
          // req.session.user = user
          const token = createToken(user)

          res.status(200).json({message: `Welcome to our API. Token = ${token}`, token})
        }
        else
        {
          res.status(401).json({ message: "Invalid Credentials. You shall not pass" })
        }
      })
      .catch(err =>
      {
        res.status(500).json(err)
      })
  }
  else
  {
    res.status(400).json({ message: "Please provide valid credentials or you shall not pass (username and password)" })
  }
})
router.get('/logout', (req, res) =>
{
  if (req.session)
  {
    req.session.destroy(err =>
    {
      if (err)
      {
        res.status(500).json({ message: "we could not log you out" })
      }
      else
      {
        res.status(204).end()
      }
    })
  }
  else
  {
    res.status(204).end()
  }
})




function createToken(user)
{
  const payload = {
    sub: user.id,
    username: user.username
  }
  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, configVars.jwtSecret, options)
}

function isValid(user)
{
  return Boolean(user.username && typeof user.password === 'string')
}

module.exports =router;
