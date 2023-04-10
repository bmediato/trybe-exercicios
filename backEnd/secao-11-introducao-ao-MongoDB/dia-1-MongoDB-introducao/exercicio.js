use('bios');

// primeiro exercicio 
db.bios.findOne({_id: 8});

// segundo exercicio 
db.bios.findOne({_id: 8}, {_id:1, name:1});

// terceiro exercicio 
db.bios.findOne({_id: 8}, {_id: 0,birth:1, name:1});

// quarto exercicio 
db.bios.find({'name.first': 'John'}).pretty();

// quinto exercicio 
db.bios.find().pretty().limit(3);


// sexto exercicio 
db.bios.find().pretty().skip(5).limit(2);