
exports.seed = function(knex) {
  // Deletes ALL existing entries

const mop = "End of passion play Crumbling away I'm your source of self-destruction Veins that pump with fear Sucking darkest clear Leading on your death's construction"

  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts1').insert([
        {title: 'master of puppets', content: mop, author_id: 1},
        {title: 'fade to black', content:"Life it seems will fade away", author_id: 2},
        {title: 'one', content:'Lorem Ipsum lks;jdfa;lkdsjfa;ldksfja;sldkfja;lsdkjfa;lkdsjf', author_id: 1},
        {title: 'whiskey in the jar', content:'As I was going over the far famed Kerry Mountains I met with Captain Farrell and his money he was a countin', author_id: 2}
      ]);
    });
};
