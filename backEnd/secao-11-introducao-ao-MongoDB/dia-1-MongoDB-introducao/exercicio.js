use('bios');

// primeiro exercicio 
db.bios.findOne({_id: 8});

// segundo exercicio 
db.bios.findOne({_id: 8}, {_id:1, name:1});