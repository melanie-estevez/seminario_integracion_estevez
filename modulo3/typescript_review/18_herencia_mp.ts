class Empleado {
  constructor(public nombre: string) {}

  saludar(): string {
    return `${this.nombre} saluda al cliente.`;
  }
}

class Mesero extends Empleado {
  constructor(nombre: string, public zona: string) {
    super(nombre);
  }

  override saludar(): string {
    return `${this.nombre} atiende la zona ${this.zona}: ¡Bienvenido a Sweet Coffee!`;
  }

  tomarPedido(plato: string): string {
    return `${this.nombre} toma el pedido: ${plato}.`;
  }
}

const e = new Empleado("Trabajador");
const m = new Mesero("Luis", "Terraza");

console.log(e.saludar());
console.log(m.saludar());
console.log(m.tomarPedido("Latte"));
console.log(m.zona);
