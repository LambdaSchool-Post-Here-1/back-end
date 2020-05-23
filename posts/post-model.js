const db = require("../data/dbconfig")

module.exports = {
  find, findBy, add, findById
}

function find(table){
  return db(table)
}

function findBy(table, filter){
  return db(table).where(filter).orderBy("id")
}

async function add(table, user){
  try {
    const [id] = await db(table).insert(user, "id")
    return findById(id)
  }
  catch(error){
    throw error
  }
}

function findById(id){
  return db("users").where({id}).first()
}