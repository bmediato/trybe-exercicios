let pecaXadrez = 'Bispo';
let result = pecaXadrez.toLowerCase();
if (result== 'peão') {
    console.log('os peões se movem somente para frente, uma casa por vez')
}
else if (result == 'bispo') {
 console.log('O bispo se move em uma linha reta diagonalmente no tabuleiro. Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça')
}
else if (result == 'torre') {
 console.log('A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.')
}
else if (result == 'cavalo') {
 console.log('O movimento do cavalo forma um “L”')
}
else if (result == 'rainha') {
    console.log('A rainha pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.')
}
else if (result == 'rei') {
    console.log('O rei pode se mover para qualquer casa adjacente')
}
else {
    console.log('Erro')
}