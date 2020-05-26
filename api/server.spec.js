const server = require("./server")
const request = require("supertest")

describe('GET /', () =>{
  // it('has process.env.DB_ENV as "testing"', ()=>{
  //   expect (process.env.DB_ENV).toBe('testing')
  // })

  it('returns 200 OK', () =>{
    return request(server).get('/')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect('Content-Length', '23')

  })
})