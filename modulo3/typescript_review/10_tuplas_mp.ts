type CoordenadaMesa = [number, number];
type RGB = [number, number, number];
type Entrada = [string, number];

const ubicacionMesa: CoordenadaMesa = [2, 4];
const colorLogo: RGB = [255, 128, 0];
const par: Entrada = ["temperaturaCafe", 65.5];

const [fila, columna] = ubicacionMesa;
const [rojo, verde, azul] = colorLogo;
const [clave, valor] = par;

console.log(`Mesa: fila=${fila}, columna=${columna}`);
console.log(`Color logo: rgb(${rojo},${verde},${azul})`);

type Rango = [inicio: number, fin: number];
const horario: Rango = [8, 20];
