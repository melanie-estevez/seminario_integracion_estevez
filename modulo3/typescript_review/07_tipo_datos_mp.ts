const entero: number = 42;
const decimal: number = 3.14;
const negativo: number = -100;
const hexadecimal: number = 0xff;
const binario: number = 0b1010;
const octal: number = 0o17;
const grande: number = 1_000_000;

console.log(hexadecimal);
console.log(binario);
console.log(grande);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isFinite(1 / 0));
console.log(Number.isNaN(0 / 0));


const simple: string = "Bienvenido a Sweet Coffee";
const doble: string = 'También funciona';
const template: string = `Hola ${"cliente"}`;

const nombre: string = "Ana";
const edad: number = 28;

export const saludo: string = `Hola, ${nombre}. Tienes ${edad} años. Bienvenida a Sweet Coffee.`;
const mayoria: string = `Eres ${edad >= 18 ? "mayor" : "menor"} de edad.`;

const mensaje: string = `
  Mesa 5
  Café Latte
  Brownie
`.trim();

console.log("  latte  ".trim());
console.log("latte".toUpperCase());
console.log("LATTE".toLowerCase());
console.log("2024-06-15".split("-"));
console.log("error: sin stock".includes("error"));
console.log("menu.ts".startsWith(".ts"));

const abierto: boolean = true;
const cerrado: boolean = false;

const esMayor = 25 >= 18;
const tieneStock = 0 > 0;

if (!tieneStock) {
  console.log("Sin stock de café disponible");
}

let sinAsignar: undefined = undefined;
let sinValor: null = null;

function buscarCliente(id: number): string | null {
  if (id === 1) return "Ana";
  return null;
}

const cliente = buscarCliente(5);

const nombreCliente = cliente ?? "Invitado";
console.log(nombreCliente);

const longitud = cliente?.length;
console.log(longitud);
