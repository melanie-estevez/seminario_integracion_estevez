vacia = ()
producto_destacado = ("Cafe Latte",)
mesa = (3, 4)
color_logo = (255, 128, 0)
cliente = ("Ana", 28, "Quito")


pedido = "Capuccino", "Brownie"
print(type(pedido))


print(cliente[0])      
print(cliente[-1])     
print(cliente[1:])     


nombre, edad, ciudad = cliente
print(nombre, edad, ciudad)

primero, *resto = ("Cafe", "Te", "Brownie", "Cheesecake")
print(primero)
print(resto)

*inicio, ultimo = ("Cafe", "Te", "Brownie", "Cheesecake")
print(inicio)
print(ultimo)


def calcular_cuenta(subtotal, impuesto):
    total = subtotal + impuesto
    return total, None

total, error = calcular_cuenta(10, 2)

if error:
    print(f"Error: {error}")
else:
    print(f"Total a pagar: ${total}")


mesas = {
    (1, 1): "Disponible",
    (1, 2): "Ocupada",
    (2, 1): "Reservada"
}

print(mesas[(1, 1)])

