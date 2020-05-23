const router = require("express").Router()

const Posts = require('./post-model')

router.get("/", (req, res) =>{
  Posts.find()
  .then(posts =>{
    res.status(200).json(posts)
  })
  .catch(err =>{
    res.status(500).json(error)
  })
})

module.exports = router