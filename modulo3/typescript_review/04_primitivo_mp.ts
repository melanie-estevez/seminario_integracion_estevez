const precioCafe: number      = 2.50;
const numeroMesa: number      = 12;
const temperaturaHorno: number = -5.3;
const colorMenu: number    = 0xff5733;

const emailCliente: string    = "cliente@sweetcoffee.com";
const metodoPago: string = 'EFECTIVO';
const rutaPedido: string     = `/menu/v2/platos`;

const restauranteAbierto: boolean  = true;
const requiereReservacion: boolean = false;
const esClienteVip: boolean      = false;

const subtotal = 15.00;
const descuento = 1.50;
const total = subtotal - descuento;

const cliente = "  ana@sweetcoffee.com  ";
console.log(cliente.trim().toLowerCase());
console.log(emailCliente.includes("sweetcoffee"));
console.log(emailCliente.split("@"));
console.log(emailCliente.split("@")[1]);
let datosPedido: string = "Latte;Brownie;2;12-12-2012";
console.log(datosPedido.split(";"));
const puedeOrdenar: boolean = restauranteAbierto && !requiereReservacion;
console.log(puedeOrdenar);
