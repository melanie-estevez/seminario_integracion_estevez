class TazaCafe {
  private _capacidadMl: number;

  constructor(capacidadMl: number) {
    this._capacidadMl = capacidadMl;
  }

  get capacidadMl(): number {
    return this._capacidadMl;
  }

  set capacidadMl(valor: number) {
    if (valor <= 0) throw new Error("La capacidad debe ser positiva");
    this._capacidadMl = valor;
  }

  get precioEstimado(): number {
    return this._capacidadMl * 0.02;
  }
}

const taza = new TazaCafe(250);
console.log(taza.capacidadMl);
console.log(taza.precioEstimado.toFixed(2));

taza.capacidadMl = 350;
console.log(taza.precioEstimado.toFixed(2));
