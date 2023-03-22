import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const club = new Clube();
const quadraFutebol = new QuadraFutebol();
const quadraTenis = new QuadraTenis();

club.adicionarQuadra(quadraFutebol);
const reserverQuadraFutebol = club.buscarQuadra<QuadraFutebol>(0).reservar(new Date('2023-03-23'));
console.log(reserverQuadraFutebol);

club.adicionarQuadra(quadraTenis);
const reservarQuadraTenis = club.buscarQuadra<QuadraTenis>(1).reservar(new Date('2023-03-21'));
console.log(reservarQuadraTenis);