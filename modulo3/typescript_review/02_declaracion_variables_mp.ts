const CAPACIDAD_MESAS: number = 28;
const NOMBRE_RESTAURANTE: string = "Sweet Coffee";
const PROMOCION_ACTIVA: boolean = false;

let pedidosHoy: number = 0;
let estadoCaja: string = "cerrada";
let cocinaAbierta: boolean = false;
console.log(`pedidosHoy:${pedidosHoy}
    estado caja:${estadoCaja}
    cocina abierta:${cocinaAbierta}`);


pedidosHoy++;
estadoCaja = "abierta";
cocinaAbierta = true;
