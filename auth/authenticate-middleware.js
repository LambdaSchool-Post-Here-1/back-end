const jwt = require('jsonwebtoken')
const secret = require('../config/vars')

module.exports = (req, res, next) =>
{

  const token = req.headers.authorization
  if (token)
  {
    jwt.verify(token, secret.jwtSecret, (error, decodedToken) =>
    {
      if (error)
      {
        // the token is invalid
        res.status(401).json({ you: "Must log in" })
      }
      else
      {
        req.jwt = decodedToken
        next()
      }
    })
  }
  else
  {
    res.status(400).json({ message: "Please provide authentication information" })
  }
}




// SESSION METHOD
// function restricted(req, res, next){
//   if (req.session && req.session.loggedIn){
//     next()
//   }
//   else {
//     res.status(400).json({you:"Must log in"})
//   }
// }

// module.exports = restricted