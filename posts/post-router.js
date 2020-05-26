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

  req.body.author = req.session.user.username

  db('posts').insert(req.body)
  .then(post =>{
    res.status(200).json(post)
  })
  .catch(error =>{
    res.status(500).json(error)
  })
})

router.delete('/:id', (req,res)=>{
  Posts.deleteById('posts', req.params.id)
  .then(obj =>{
    res.status(200).json(obj)
  })
  .catch(err => res.status(500).json(err))
})

module.exports = router