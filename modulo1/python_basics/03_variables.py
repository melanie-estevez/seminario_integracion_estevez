# Enteros, Cadena de caracteres, booleana, none
nombre = "Ana Garcia"
edad = 28
altura = 1.50
activo= True
nulo=None

print(type(nombre))
print(type(edad))
print(type(altura))
print(type(activo))
print(type(nulo))

#Asignar varias variables en una línea
a, b, c = 12, 13, 14
print(a)
print(b)
print(c)

#Asignar el mismo valor a varias variables
a = b= c =0
print(a)
print(b)
print(c)

#Intercambiar valores
x, y = 10, 20
print(x, y)
x,y =y, x
print (x,y)

#Convenciones de nombres
nombre_completo = "Melanie Estevez" #snake_case
nombreCompleto="Melanie Estevez" #no usa camelCase
MAX_REINTENTOS=5 #mayusculas sostenidad para las constantes
_variable_interna="privada" #para uso interno

#Manejo de Enteros
pequeno =42
negativo= -17
grande=1_000_000_000_000
enorme=2 ** 100

print(pequeno)
print(negativo)
print(grande)
print(enorme)

#Bases Númericas
binario=0b1010
octal=0o17
hexadecimal=0xFF
print(binario, octal,hexadecimal)

#Convertir de decimal a otras bases
print(bin(255))
print(oct(144))
print(hex(139))

