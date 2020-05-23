const router = require("express").Router()

const Posts = require('./post-model')

router.get("/", (req, res) =>{
  Posts.find("posts")
  .then(posts =>{
    res.status(200).json(posts)
  })
  .catch(error =>{
    res.status(500).json(error)
  })
})

module.exports = router