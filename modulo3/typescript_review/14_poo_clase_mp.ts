class Plato {
  nombre: string;
  precio: number;
  enStock: boolean;

  constructor(nombre: string, precio: number, enStock: boolean) {
    this.nombre = nombre;
    this.precio = precio;
    this.enStock = enStock;
  }

  describir(): string {
    const estado = this.enStock ? "disponible" : "agotado";
    return `${this.nombre} — $${this.precio} (${estado})`;
  }
}

const latte = new Plato("Café Latte", 2.50, true);
const brownie = new Plato("Brownie", 3.00, false);

console.log(latte.describir());
console.log(brownie.describir());
