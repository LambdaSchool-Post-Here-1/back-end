const supertest = require("supertest")
const server = require('../api/server')
const jwt = require("jsonwebtoken")
const configVars = require('../config/vars')

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoibGFycyIsImlhdCI6MTU5MDYxNzYwNCwiZXhwIjoxNTkwNzA0MDA0fQ.OYn8A2ukafm0ySjtJ4ly49lBhAEGWNRil6lLuPrY5OQ"

const token = createToken({username:'lars',password:'drums'})


describe('GET to /api/reddit', ()=>{
  it('should send authentication instructions', ()=>{
    return supertest(server).get('/api/reddit')
    .then(response =>{ 
      // console.log("response body",response.body)
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
      console.log("Response Body of GET request", response.body)
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