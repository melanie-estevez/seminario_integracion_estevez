print("Listas")
print("Crear listas")
vacia=[]
print(vacia)
numeros=[1,2,3,4,5,6,7]
print(numeros)
nombres=["Juan", "Pedro", "Carlos", "Maria", "Petra", "Juana"]
print(nombres)
mixta=[1, "Hola", "Mundo", True, None, 3.4]
print(mixta)
anidada=[1, [5,5,[6,4,4]],5,7]
print(anidada)
print("Acceso a los elementos")
print(nombres[0])
print(nombres[-1])
print(nombres[1:3])
print(nombres[::-1])

print("Crud de una lista")
frutas=["manzana", "pera", "melon", "banana"]
#agregar
frutas.append("durazno")
print(frutas)
frutas.insert(1, "naranja")
print(frutas)
frutas.extend(["kiwi", "mango"])
print(frutas)
#modificar
frutas[0]="toronja"
print(frutas)
#eliminar elementos
frutas.remove("banana")
print(frutas)
eliminado= frutas.pop()
print(frutas)
eliminado= frutas.pop(0)
print(frutas)
del frutas[0]
print(frutas)

print("Buscar valores en los elementos de una lista")
print("kiwi" in frutas)
print(frutas.index("kiwi"))
print(frutas.count("kiwi"))

print("Ordenar una lista")
numeros_desordenados=[3,2,6,34,9,0,1,2]
print(numeros_desordenados)
numeros_desordenados.sort()
print(numeros_desordenados)
numeros_desordenados.sort(reverse=True)
print(numeros_desordenados)
ordenada=sorted(numeros_desordenados)
print(ordenada)