class ItemCarta {
  nombre(): string { return "Item"; }
  precio(): number { return 0; }
}

class BebidaCarta extends ItemCarta {
  constructor(private costo: number) { super(); }
  override nombre(): string { return "Bebida"; }
  override precio(): number { return this.costo; }
}

class PostreCarta extends ItemCarta {
  constructor(private costo: number) { super(); }
  override nombre(): string { return "Postre"; }
  override precio(): number { return this.costo; }
}

class ComboCarta extends ItemCarta {
  constructor(private costo: number) { super(); }
  override nombre(): string { return "Combo"; }
  override precio(): number { return this.costo; }
}

const carta: ItemCarta[] = [
  new BebidaCarta(2.50),
  new PostreCarta(4.00),
  new ComboCarta(6.50),
];

for (const item of carta) {
  console.log(`${item.nombre()}: precio = $${item.precio().toFixed(2)}`);
}
