print("Sweet Coffee")

print("Match - Selección de bebida")

bebida = input("Seleccione una bebida (cafe/te/chocolate): ")

match bebida:
    case "cafe":
        print("Has pedido un café ")
    case "te":
        print("Has pedido un té ")
    case "chocolate":
        print("Has pedido un chocolate caliente ")
    case _:
        print(f"La bebida '{bebida}' no está disponible")

print("\nMatch con condiciones")

cantidad = 7

match cantidad:
    case n if n < 0:
        print(f"{n} es una cantidad inválida")
    case 0:
        print("No hay productos en el pedido")
    case n if n % 2 == 0:
        print(f"{n} productos en el pedido (cantidad par)")
    case n:
        print(f"{n} productos en el pedido (cantidad impar)")