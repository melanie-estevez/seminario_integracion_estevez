const nombre: string = "Ana";
const rol: string    = "mesera";
const mesasAtendidas: number = 42;

const bienvenida: string = `Bienvenida, ${nombre}. Rol: ${rol}. Mesas: ${mesasAtendidas}.`;
console.log(bienvenida);

export const precio: number = 12.00;
const iva: number    = 0.19;
const total: string  = `Precio con IVA: $${(precio * (1 + iva)).toFixed(2)}`;
console.log(total);


let sucursal: string = "Sweet Coffee Norte";
let estadoLocal: boolean = true;
let ocupacion: number = 85.5;
const reporte: string = `
=== Reporte del restaurante ===
Sucursal : Sweet Coffee Centro
Estado   : abierto
Ocupación: 90.0%
`;
console.log(reporte);

const reporte2: string = `
=== Reporte del restaurante ===
Sucursal : ${sucursal}
Estado   : ${estadoLocal ? "Abierto" : "Cerrado"}
Ocupación: ${ocupacion}%
`;
console.log(reporte2);
