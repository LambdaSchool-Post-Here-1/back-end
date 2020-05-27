const supertest = require("supertest")
const server = require('../api/server')

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoibGFycyIsImlhdCI6MTU5MDYxNzYwNCwiZXhwIjoxNTkwNzA0MDA0fQ.OYn8A2ukafm0ySjtJ4ly49lBhAEGWNRil6lLuPrY5OQ"

describe('GET to /api/reddit', ()=>{
  it('should send authentication instructions', ()=>{
    return supertest(server).get('/api/reddit')
    .then(response =>{ 
      console.log("response body",response.body)
      expect(response.body).toHaveProperty("message", "Please provide authentication information") // object that requests authentication information
      // expect(response.body) // object that requests authentication information

    })
  })

  it('should return an array', ()=>{
    return supertest(server).get('/api/reddit')
    .set('Authorization', token)
    .then(response =>{ 
      expect(Array.isArray(response.body)).toBe(true) // object that requests authentication information
      expect(response.body).toHaveLength(4)
    })
  })

  it('should return an array', ()=>{
    return supertest(server).get('/api/reddit/3')
    .set('Authorization', token)
    .then(response =>{ 
      expect(typeof response.body).toBe("object")
      expect(response.body).toHaveProperty("author")

    })
  })
})