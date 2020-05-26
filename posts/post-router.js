const router = require("express").Router()
const Posts = require('./post-model')
const db = require("../data/dbconfig")

router.get("/", (req, res) =>{
  Posts.find("posts")
  .then(posts =>{
    res.status(200).json(posts)
  })
  .catch(error =>{
    res.status(500).json(error)
  })
})

router.get("/:id", (req, res) =>{
  Posts.findById("posts", req.params.id)
  .then(posts =>{
    res.status(200).json(posts)
  })
  .catch(error =>{
    res.status(500).json(error)
  })
})

router.post("/", (req, res) =>{
  // TODO change req.body.author to user that's logged in
  req.body.author = req.session.user.username
  // console.log("req.session.user.username", req.session)
  db('posts').insert(req.body)
  .then(post =>{
    res.status(200).json(posts)
  })
  .catch(error =>{
    res.status(500).json(error)
  })
})


module.exports = router