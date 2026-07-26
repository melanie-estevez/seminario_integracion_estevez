export const mesaDefault = 5;
const sucursal: string = "Centro";
const abierto: boolean = true;

const mesaDefault2 = 5;
const sucursal2 = "Centro";
const abierto2 = true;

let tiempoEspera: number;
tiempoEspera = 15;

let codigoPedido: number | string = 101;
codigoPedido = "PED-OK";

function consultarMesa(mesa: string, intentos: number): string {
  return `Consulta mesa ${mesa} — ${intentos} intento(s)`;
}


const NOMBRE_LOCAL = "Sweet Coffee Centro";
const MESAS_TOTALES  = 28;
const ES_HORARIO_PICO   = true;

let pedidosAtendidos: number = 0;
let ultimoErrorCocina: string | null = null;

function registrarPedido(plato: string, mesa: number): void {
  pedidosAtendidos++;
  console.log(`[${NOMBRE_LOCAL}] Mesa ${mesa} — ${plato} — total: ${pedidosAtendidos}`);
}

registrarPedido("Café Latte", 5);
registrarPedido("Cheesecake", 12);
