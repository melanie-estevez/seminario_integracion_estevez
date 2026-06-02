class Cliente:

    restaurante = "Sweet Coffee"

    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def saludar(self):
        return f"Bienvenido a {self.restaurante}, {self.nombre}."

    def cumplir_anios(self):
        self.edad += 1
        print(f"Feliz cumpleaños, {self.nombre}. Ahora tienes {self.edad} años.")

    def __str__(self):
        return f"Cliente({self.nombre}, {self.edad})"

    def __repr__(self):
        return f"Cliente(nombre={self.nombre!r}, edad={self.edad!r})"


cliente1 = Cliente("Ana Garcia", 28)
cliente2 = Cliente("Luis Perez", 31)

print(cliente1.saludar())
print(cliente2.saludar())

cliente1.cumplir_anios()

print(str(cliente1))
print(repr(cliente1))

print(Cliente.restaurante)