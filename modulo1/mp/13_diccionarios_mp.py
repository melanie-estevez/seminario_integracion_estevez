vacio = {}

cliente = {
    "nombre": "Ana",
    "edad": 28,
    "ciudad": "Quito"
}

cafeteria = dict(nombre="Sweet Coffee", mesas=20, abierto=True)

print(cliente["nombre"])
print(cliente.get("telefono"))
print(cliente.get("telefono", "No registrado"))

cliente["email"] = "ana@email.com"
cliente["edad"] = 29

del cliente["ciudad"]

valor = cliente.pop("email")

print(cliente)

print("nombre" in cliente)
print("ciudad" in cliente)

print(cliente.keys())
print(cliente.values())
print(cliente.items())


for clave, valor in cliente.items():
    print(f"{clave}: {valor}")


cliente.update({
    "ciudad": "Guayaquil",
    "telefono": "0991234567"
})

print(cliente)


extra = {
    "cliente_frecuente": True,
    "puntos": 150
}

completo = cliente | extra
print(completo)


sweet_coffee = {
    "nombre": "Sweet Coffee",
    "empleados": {
        1: {"nombre": "Ana", "cargo": "Barista"},
        2: {"nombre": "Luis", "cargo": "Cajero"}
    },
    "productos": [
        "Cafe Americano",
        "Capuccino",
        "Brownie"
    ]
}

print(sweet_coffee["empleados"][1]["nombre"])

sweet_coffee["empleados"][3] = {
    "nombre": "Maria",
    "cargo": "Mesera"
}

print(sweet_coffee)


cliente.setdefault("pais", "Ecuador")
cliente.setdefault("nombre", "Otro")

print(cliente)