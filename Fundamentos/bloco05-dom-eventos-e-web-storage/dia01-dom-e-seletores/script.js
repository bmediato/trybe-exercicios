const header = document.getElementById('header-container').style.backgroundColor = 'rgb(0, 176, 105)';

const emergencia = document.getElementsByClassName('emergency-tasks')[0];
emergencia.style.backgroundColor = 'rgb(255, 159, 132)';

const emergenciaHeader = document.querySelectorAll('.emergency-tasks h3');

for (let index = 0; index < emergenciaHeader.length; index +=1) {
    emergenciaHeader[index].style.backgroundColor = 'rgb(165,0,243)';
}

const rodaPe = document.getElementById('footer-container').style.backgroundColor = 'rgb(0, 53, 51)';

const naoEmergencia = document.getElementsByClassName('no-emergency-tasks')[0];
naoEmergencia.style.backgroundColor= 'yellow';

const nEmergenciaT = document.querySelectorAll('.no-emergency-tasks h3');
for (let index =0; index < nEmergenciaT.length; index +=1) {
    nEmergenciaT[index.style.backgroundColor = 'black'];
}
