const server = require("./server")
const supertest = require("supertest")

describe('GET /', () =>{
  it('has process.env.DB_ENV as "testing"', ()=>{
    expect (process.env.DB_ENV).toBe('testing')
  })

  it('returns 200 OK', () =>{
    return supertest(server).get('/')
    .then(response =>{
      expect(response.status).toBe(200)
      expect(response.body).toMatch(/Server up and running/)
    })


  })
})