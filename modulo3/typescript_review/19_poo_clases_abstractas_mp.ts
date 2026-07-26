abstract class ItemMenu {
  abstract precio(): number;
  abstract descripcion(): string;

  presentar(): string {
    return (
      `${this.descripcion()} | ` +
      `Precio: $${this.precio().toFixed(2)}`
    );
  }
}

class Bebida extends ItemMenu {
  constructor(private nombre: string, private costo: number) {
    super();
  }

  override precio(): number {
    return this.costo;
  }

  override descripcion(): string {
    return `Bebida: ${this.nombre}`;
  }
}

class Postre extends ItemMenu {
  constructor(private nombre: string, private costo: number) {
    super();
  }

  override precio(): number {
    return this.costo;
  }

  override descripcion(): string {
    return `Postre: ${this.nombre}`;
  }
}

const latte = new Bebida("Café Latte", 2.50);
const cheesecake = new Postre("Cheesecake", 4.50);

console.log(latte.presentar());
console.log(cheesecake.presentar());
