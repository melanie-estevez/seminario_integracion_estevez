print("Sweet Coffee")

edad = input("¿Cuál es tu edad? ")

if int(edad) >= 18:
    print("Puedes comprar café especial.")

total = input("Ingrese el valor de su compra: ")

if float(total) >= 20:
    print("Obtienes un postre gratis ")
else:
    print("Gracias por tu compra ")

calificacion = input("Califica nuestro servicio (0-100): ")

if int(calificacion) >= 90:
    print("Excelente")
elif int(calificacion) >= 80:
    print("Muy bueno")
elif int(calificacion) >= 70:
    print("Bueno")
else:
    print("Necesitamos mejorar")

tiene_reserva = True
dinero = 25
producto = "cafe"

if tiene_reserva:
    if dinero >= 20:
        if producto == "cafe":
            print("Tu café cuesta $20. Pedido confirmado")
        else:
            print("Producto no disponible")
    else:
        print("Dinero insuficiente")
else:
    print("No tienes reserva")