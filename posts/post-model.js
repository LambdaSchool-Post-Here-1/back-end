const db = require("../data/dbconfig")

module.exports = {
  find, findBy, add, findById, deleteById
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
    return findById("users",id)
  }
  catch(error){
    throw error
  }
}

function findById(table,id){
  return db(table).where({id}).first()
}

function deleteById(table, id){
  return db(table).where({id}).first().delete()
}