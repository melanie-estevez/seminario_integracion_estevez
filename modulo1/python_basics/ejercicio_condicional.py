
antiguedad=input("Ingrese su tiempo trabajando")
calificacion=input("Ingresa la calificacion")
salario=input("Ingrese su salario")
if(int(antiguedad)>=12):
    if(int(calificacion)>=8):
        print("puede optar a bono")
    else:
        print("Es menor, no recibe bono")
    if (int(salario)<=1000):
        print("su bono es de 200")
    else:
        print("Su bono es de 100")