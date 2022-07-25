let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem-vinda, ' + info.personagem);

  info['recorrente'] = 'Sim';

  for (let key in info) {
    console.log(info[key]);
  }

  let dados = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178 ",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  console.log( info.personagem + ' e ' + dados.personagem);
  console.log(info.origem + ' e ' + dados.origem);
  console.log(info.nota + ' e ' + dados.nota);
  console.log(info.recorrente + ' e ' + dados.recorrente);