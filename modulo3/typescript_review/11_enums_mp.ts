enum ZonaSalon {
  Terraza,
  Interior,
  Barra,
  Privado,
}

const zona: ZonaSalon = ZonaSalon.Terraza;
console.log(zona);
console.log(ZonaSalon[0]);

enum CodigoPedido {
  Recibido = 200,
  NoEncontrado = 404,
  ErrorCocina = 500,
}

enum RolEmpleado {
  Admin    = "ADMIN",
  Mesero   = "MESERO",
  Cocinero = "COCINERO",
}

const miRol: RolEmpleado = RolEmpleado.Mesero;
console.log(miRol);
