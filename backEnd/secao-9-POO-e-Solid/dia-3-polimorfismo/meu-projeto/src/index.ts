import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";

const club = new Clube();
const quadraFutebol = new QuadraFutebol();

club.adicionarQuadra(quadraFutebol);
const reserverQuadraFutebol = club.buscarQuadra<QuadraFutebol>(0).reservar(new Date('2023-03-23'));
console.log(reserverQuadraFutebol);