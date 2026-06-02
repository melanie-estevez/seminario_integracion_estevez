print("Sweet Coffee")

print("Ciclo for")
postres = ["Cheesecake", "Brownie", "Cupcake"]

for postre in postres:
    print(postre)

print("Recorrer palabras")
for letra in "Sweet":
    print(letra)

print("Recorre rangos")
for mesa in range(1, 6):
    print("Mesa", mesa)

print("Recorre rango configurando pasos")
for mesa in range(1, 10, 2):
    print("Mesa", mesa)

print("Enumerar lista")
for i, postre in enumerate(postres):
    print(i, postre)

print("Dos listas a la vez")
clientes = ["Ana", "Luis"]
mesas = [20, 25]

for cliente, mesa in zip(clientes, mesas):
    print(cliente, mesa)

print("Control del ciclo")

print("Break")
for pedido in range(5):
    if pedido == 3:
        break
    print("Pedido", pedido)

print("Continue")
for pedido in range(5):
    if pedido == 2:
        continue
    print("Pedido", pedido)

print("For anidado")
for mesa in range(3):
    for pedido in range(2):
        print("Mesa", mesa, "Pedido", pedido)

print("Lista comprehension")
precios = [x * 2 for x in range(5)]
print(precios)

# Ventas de Sweet Coffee
ventas = [120, 80, 200, 50, 300]

ventas_validas = 0
bono_total = 0

for venta in ventas:
    if venta > 100:
        ventas_validas += 1

        if venta > 250:
            bono_total += 30
        else:
            bono_total += 10

print("Total de ventas válidas:", ventas_validas)
print("Total de bono acumulado: $", bono_total)