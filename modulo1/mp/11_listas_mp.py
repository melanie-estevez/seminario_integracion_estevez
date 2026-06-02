print("Listas")

print("Crear listas")

vacia = []
print(vacia)

precios = [1, 2, 3, 4, 5, 6, 7]
print(precios)

productos = ["Cafe Americano", "Cafe Latte", "Capuccino", "Brownie", "Cheesecake"]
print(productos)

mixta = [1, "Cafe", True, None, 3.50]
print(mixta)

anidada = ["Bebidas", ["Cafe", "Te", ["Latte", "Capuccino"]], "Postres"]
print(anidada)

print("Acceso a los elementos")

print(productos[0])
print(productos[-1])
print(productos[1:3])
print(productos[::-1])

print("CRUD de una lista")

menu = ["Cafe", "Te", "Brownie", "Cheesecake"]

# Agregar
menu.append("Muffin")
print(menu)

menu.insert(1, "Chocolate Caliente")
print(menu)

menu.extend(["Galletas", "Cupcake"])
print(menu)

# Modificar
menu[0] = "Cafe Latte"
print(menu)

# Eliminar elementos
menu.remove("Brownie")
print(menu)

eliminado = menu.pop()
print(menu)

eliminado = menu.pop(0)
print(menu)

del menu[0]
print(menu)

print("Buscar valores en los elementos de una lista")

print("Galletas" in menu)
print(menu.index("Galletas"))
print(menu.count("Galletas"))

print("Ordenar una lista")

ventas = [300, 150, 450, 200, 100, 500]

print(ventas)

ventas.sort()
print(ventas)

ventas.sort(reverse=True)
print(ventas)

ordenada = sorted(ventas)
print(ordenada)