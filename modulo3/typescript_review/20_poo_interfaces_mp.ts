interface Serializable {
  serializar(): string;
}

interface Validable {
  esValido(): boolean;
}

class PedidoCafe implements Serializable, Validable {
  constructor(
    public id: string,
    public productos: string[],
    public total: number
  ) {}

  serializar(): string {
    return JSON.stringify({ id: this.id, productos: this.productos, total: this.total });
  }

  esValido(): boolean {
    return this.productos.length > 0 && this.total > 0;
  }
}

const pedido = new PedidoCafe("SC-001", ["Café Latte", "Brownie"], 5.50);
console.log(pedido.esValido());
console.log(pedido.serializar());
