const supertest = require("supertest")
const server = require('../api/server')

describe('POST to /api/auth/register', ()=>{
  it('should send register user', ()=>{
    return supertest(server).post('/api/auth/register')
    .send({username:"john", password:"what"})
    .then(response =>{ 
      console.log("response body",response.body)
      expect(response.status).toBe(201 || 200)
      expect(response.body.data).toHaveProperty("password") // object that requests authentication information
      // expect(response.body) // object that requests authentication information

    })
  })
})

describe('POST to /api/auth/login', ()=>{
  it('should login user', ()=>{
    return supertest(server).post('/api/auth/login')
    .send({username:"lars", password:"drums"})
    .then(response =>{ 
      console.log("response body",response.body)
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty("token") // object that requests authentication information
      // expect(response.body) // object that requests authentication information

    })
  })
})