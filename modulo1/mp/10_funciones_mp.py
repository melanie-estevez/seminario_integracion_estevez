print("Funciones")

print("Funcion basica")
def bienvenida():
    print("Bienvenido a Sweet Coffee")

bienvenida()

print("Funcion con parametro")
def saludar_cliente(nombre):
    print(f"Hola {nombre}, gracias por visitarnos")

saludar_cliente("Melanie")

print("Funcion que devuelve un valor")
def calcular_total(cafe, pastel):
    return cafe + pastel

print(calcular_total(3, 5))

print("Funcion parametros por posicion")
def pedido(cliente, producto, mesa):
    print(f"{cliente}, {producto}, Mesa {mesa}")

pedido("Ana", "Cafe Latte", 5)
pedido(cliente="Luis", producto="Brownie", mesa=8)

print("Funcion con parametros por defecto")
def saludo(nombre, mensaje="Bienvenido"):
    print(f"{mensaje}, {nombre}")

saludo("Pedro")
saludo("Juan", "Buenas tardes")

print("Funcion parametros variables")
def sumar_ventas(*ventas):
    print(f"Ventas recibidas: {ventas}")
    return sum(ventas)

print(sumar_ventas(10, 20, 30))
print(sumar_ventas(5, 15, 25, 35))

print("Funcion parametros combinados")
def mostrar_menu(categoria, *productos):
    print(categoria)
    for producto in productos:
        print("-", producto)

mostrar_menu("Postres", "Brownie", "Cheesecake", "Cupcake")

print("Funcion parametros clave valor")
def cliente(**datos):
    print(f"Datos recibidos: {datos}")
    for clave, valor in datos.items():
        print(f"{clave}: {valor}")

cliente(nombre="Ana", edad=26, ciudad="Quito")

print("Funcion con todos los tipos de parametros")
def configurar_cafeteria(nombre, *mesas, abierto=True, **opciones):
    print(f"Nombre: {nombre}")
    print(f"Mesas: {mesas}")
    print(f"Abierto: {abierto}")
    print(f"Opciones: {opciones}")

configurar_cafeteria(
    "Sweet Coffee",
    1, 2, 3,
    abierto=True,
    wifi=True,
    delivery=True
)

print("Devolver multiples valores")
def precio_min_max(precios):
    return min(precios), max(precios)

minimo, maximo = precio_min_max([2, 4, 6, 8, 10])
print(f"Minimo: {minimo}")
print(f"Maximo: {maximo}")

print("Devolver diccionario")
def analizar_ventas(ventas):
    n = len(ventas)
    total = sum(ventas)

    return {
        "total": total,
        "promedio": total / n if n > 0 else 0,
        "minimo": min(ventas) if ventas else None,
        "maximo": max(ventas) if ventas else None
    }

ventas = [120, 80, 200, 150]
datos = analizar_ventas(ventas)

print(f"Total: {datos['total']}")
print(f"Promedio: {datos['promedio']:.2f}")
print(f"Minimo: {datos['minimo']}")
print(f"Maximo: {datos['maximo']}")

print("Funciones lambda")

doble_precio = lambda x: x * 2
print(doble_precio(5))

descuento = lambda precio, porcentaje: precio - (precio * porcentaje / 100)
print(descuento(10, 20))