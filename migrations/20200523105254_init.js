
exports.up = function(knex) {
  return knex.schema

  .createTable('users', tbl=>{
    tbl.increments()
    tbl.string("username", 128).unique().notNullable().index()
    tbl.string("password", 128).notNullable()
  })
  .createTable("posts", tbl =>{
    tbl.increments()
    tbl.string("title",128).notNullable()
    tbl.string("content", 3000).notNullable()  
    tbl.string("author").notNullable().unsigned().references('users.username').onDelete('RESTRICT').onUpdate('CASCADE')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('posts').dropTableIfExists('users')
};
