type Plato = {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
  existencias: number;
};

const menu: Plato[] = [
  { id: 1, nombre: "Café Americano", precio: 1.50, disponible: true,  existencias: 50 },
  { id: 2, nombre: "Café Latte",     precio: 2.50, disponible: true,  existencias: 40 },
  { id: 3, nombre: "Capuccino",      precio: 2.75, disponible: false, existencias: 10 },
  { id: 4, nombre: "Brownie",        precio: 3.00, disponible: false, existencias: 15 },
  { id: 5, nombre: "Cheesecake",     precio: 4.50, disponible: true,  existencias: 20 },
  { id: 6, nombre: "Muffin",         precio: 2.00, disponible: false, existencias: 8  },
];

const disponibles: Plato[] = menu.filter((p) => p.disponible);
const nombres: string[] = menu.map((p) => p.nombre);
const masBarato: Plato | undefined = menu.reduce((min, p) =>
  p.precio < min.precio ? p : min
);

console.log(nombres);
console.log(masBarato?.nombre);
console.log(disponibles.length);
console.log(disponibles.map((p) => p.nombre));
console.log(menu[3]);
