class TemperaturaCafe {
  valorCelsius: number;
  valorFahrenheit: number;

  constructor(celsius: number, fahrenheit?: number) {
    this.valorCelsius = celsius ?? 0;
    this.valorFahrenheit = fahrenheit ?? 0;
  }

  aFahrenheit(): number {
    return this.valorCelsius * 9 / 5 + 32;
  }

  aCelsius(): void {
    this.valorCelsius = (this.valorFahrenheit - 32) * 5 / 9;
  }

  aKelvin(): number {
    return this.valorCelsius + 273.15;
  }

  describir(): string {
    return (
      `${this.valorCelsius}°C = ` +
      `${this.aFahrenheit()}°F = ` +
      `${this.aKelvin()}K`
    );
  }
}

const cafeHervido = new TemperaturaCafe(100, 0);
const cafeFrio = new TemperaturaCafe(0, 0);
const convertirACelsius = new TemperaturaCafe(0, 50);

console.log(cafeHervido.describir());
console.log(cafeFrio.describir());
console.log(convertirACelsius.aCelsius());
