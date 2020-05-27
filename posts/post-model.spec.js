const db = require('../data/dbconfig')
const posts = require("./post-model")

// describe('posts model', () =>{
//   beforeEach(async()=>{
//     await db(posts).truncate();
//   })
// })

// describe('add function', ()=>{
//   it('inserts new post in db', async () =>{
//     let postnumber
//     postnumber = await db('posts')
//     expect(postnumber).toHaveLength(11)
//     await posts.add('posts', {title:"this", content:"is a test", author:'jimmy'})
//     postnumber = await db('posts')
//     expect(postnumber).toHaveLength(12)

//   });
// })