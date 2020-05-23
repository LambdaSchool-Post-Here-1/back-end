const db = require("../data/dbconfig")

module.exports = {
  find, findBy
}

function find(table){
  return db(table)
}

function findBy(table, filter){
  return db(table).where(filter).orderBy("id")
}