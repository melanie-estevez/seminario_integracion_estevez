type ZonaDelivery = "local" | "nacional" | "internacional";

interface PedidoDelivery {
  descripcion: string;
  pesoKg: number;
  valorDeclarado: number;
  zona: ZonaDelivery;
}

const TARIFAS: Record<ZonaDelivery, number> = {
  local:           1.50,
  nacional:        3.00,
  internacional:   8.00,
};

const SEGURO_PCT = 0.005;

function cotizarDelivery(pedido: PedidoDelivery): string {
  const tarifaBase = TARIFAS[pedido.zona];
  const costoFlete = tarifaBase * pedido.pesoKg;
  const costoSeguro = pedido.valorDeclarado * SEGURO_PCT;
  const total = costoFlete + costoSeguro;

  return `
☕ Cotización de delivery — Sweet Coffee
   Descripción : ${pedido.descripcion}
   Peso        : ${pedido.pesoKg} kg
   Zona        : ${pedido.zona}
   Flete       : $${costoFlete.toFixed(2)}
   Seguro      : $${costoSeguro.toFixed(2)}
   ─────────────────────────
   TOTAL       : $${total.toFixed(2)}
  `.trim();
}

const pedido1: PedidoDelivery = {
  descripcion: "Kit Café Latte + Cheesecake",
  pesoKg: 1.2,
  valorDeclarado: 25,
  zona: "nacional",
};

const pedido2: PedidoDelivery = {
  descripcion: "Caja de Brownies x12",
  pesoKg: 0.8,
  valorDeclarado: 40,
  zona: "internacional",
};

console.log(cotizarDelivery(pedido1));
console.log("---");
console.log(cotizarDelivery(pedido2));
