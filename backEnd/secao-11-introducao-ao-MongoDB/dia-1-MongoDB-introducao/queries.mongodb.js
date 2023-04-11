use('movies');

// db.filmes.find({ano: {$lt: 2000}}).pretty();

// db.filmes.find({ano: {$lte: 2000}}).pretty();

db.filmes.find({ano: {$gt: 1993}}).pretty();