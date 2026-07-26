type EstadoPedido = "pendiente" | "preparando" | "entregado" | "cancelado";
type Prioridad = "baja" | "media" | "alta";

function procesarPedido(id: number, estado: EstadoPedido): void {
  console.log(`Pedido #${id}: ${estado}`);
}

procesarPedido(1, "preparando");

type PrioridadMesa = "baja" | "media" | "alta" | "critica";

interface SolicitudMesa {
  id: number;
  titulo: string;
  prioridad: PrioridadMesa;
  resuelto: boolean;
}

function etiquetarSolicitud(t: SolicitudMesa): string {
  const prefijos: Record<PrioridadMesa, string> = {
    baja:    "⚪",
    media:   "🟡",
    alta:    "🟠",
    critica: "🔴",
  };
  const estado = t.resuelto ? "✅" : "⏳";
  return `${estado} ${prefijos[t.prioridad]} [#${t.id}] ${t.titulo}`;
}

const solicitudes: SolicitudMesa[] = [
  { id: 1, titulo: "Falta azúcar en mesa 3", prioridad: "baja",    resuelto: true  },
  { id: 2, titulo: "Pedido quemado",         prioridad: "critica", resuelto: false },
  { id: 3, titulo: "Demora en café",         prioridad: "media",   resuelto: false },
];

for (const t of solicitudes) {
  console.log(etiquetarSolicitud(t));
}
