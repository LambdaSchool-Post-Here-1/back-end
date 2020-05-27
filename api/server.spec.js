const server = require("./server")
const supertest = require("supertest")

describe('GET /', () =>{
  it('has process.env.DB_ENV as "testing"', ()=>{
    expect (process.env.DB_ENV).toBe('testing')
  })

  it('returns 200 OK', () =>{
    return supertest(server).get('/')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '23')
    .then(response =>{
      expect(response.status).toBe(200)
    })


  })
})