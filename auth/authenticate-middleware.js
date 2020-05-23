function restricted(req, res, next){
  if (req.session && req.session.loggedIn){
    next()
  }
  else {
    res.status(400).json({you:"Must log in"})
  }
}

module.exports = restricted