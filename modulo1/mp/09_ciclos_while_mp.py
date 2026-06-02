print("Sweet Coffee")

mesa = 1

while mesa <= 4:
    print(f"Mesa: {mesa}")
    mesa += 1

print("Control del ciclo")
print("Continue")

pedido = 1

while pedido <= 3:
    pedido += 1

    if pedido == 3:
        continue

    print(f"Pedido: {pedido}")

print("\nBreak")

pedido = 1

while pedido <= 4:
    pedido += 1

    if pedido == 3:
        break

    print(f"Pedido: {pedido}")


venta = int(input("Ingrese el valor de la venta (0 para salir): "))

while venta != 0:
    print("Venta registrada: $", venta)
    venta = int(input("Ingrese el valor de la venta (0 para salir): "))


contador = 1

while contador <= 3:
    print(f"Cliente #{contador}")
    contador += 1
else:
    print("Fin de la atención")


pswd = int(input("\nIngrese la clave de acceso: "))

while pswd != 123:
    print("Contraseña incorrecta")
    pswd = int(input("Ingrese la clave de acceso: "))
else:
    print("Acceso permitido al sistema de Sweet Coffee ")