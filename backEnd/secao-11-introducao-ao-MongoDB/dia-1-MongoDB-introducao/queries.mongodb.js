use('movies');

// 1
// db.filmes.find({ano: {$lt: 2000}}).pretty();

// 2
// db.filmes.find({ano: {$lte: 2000}}).pretty();

// 3
// db.filmes.find({ano: {$gt: 1993}}).pretty();

// 4
// db.filmes.find({ano: {$gte: 1993}}).pretty();

//5 
// db.filmes.find({ano: {$gte:1993, $lte: 2000}});

// 6 
// db.filmes.find({ano: 1993});

// 7 
// db.filmes.find({'avaliacao.bom': {$ne: 7}});

// 8 
// db.filmes.find({ano: {$in: [1995, 1968, 2001]}});

// 9 
db.filmes.find({ano: {$nin: [2013, 2008]}});