
un tren sale de Zaragoza dirección Madrid a las 09.00h velocidad 100 km/h otro sale de Madrid dirección Zaragoza a las 9.10h velocidad 120km/h. en que punto del trayecto se cruza? dame un algoritmo
Para resolver este problema, podemos plantear un algoritmo que calcule el punto de encuentro entre los dos trenes. Supongamos que la distancia entre Zaragoza y Madrid es 
𝐷
 kilómetros (por ejemplo, unos 300 km en la vida real, pero puedes ajustar ese valor). Aquí tienes un algoritmo paso a paso:

🧠 Algoritmo para calcular el punto de encuentro
Variables:

𝐷
: distancia total entre Zaragoza y Madrid (en km)

𝑉
1
=
100
: velocidad del tren que sale de Zaragoza (km/h)

𝑉
2
=
120
: velocidad del tren que sale de Madrid (km/h)

𝑡
: tiempo desde que el primer tren sale hasta que se cruzan (en horas)

Δ
𝑡
=
10
 minutos = 
1
6
 horas: diferencia de salida entre los trenes

📐 Lógica del algoritmo
El tren de Zaragoza empieza a moverse a las 09:00.

El tren de Madrid empieza a moverse a las 09:10, es decir, 
1
6
 horas después.

En ese tiempo, el tren de Zaragoza ha recorrido:

𝑑
1
=
𝑉
1
⋅
Δ
𝑡
=
100
⋅
1
6
=
16.67
 km
A partir de las 09:10, ambos trenes se acercan uno al otro. La velocidad relativa es:

𝑉
rel
=
𝑉
1
+
𝑉
2
=
220
 km/h
La distancia restante entre ellos es:

𝐷
restante
=
𝐷
−
𝑑
1
El tiempo que tardan en encontrarse desde las 09:10 es:

𝑡
encuentro
=
𝐷
−
𝑑
1
𝑉
rel
La distancia desde Zaragoza al punto de encuentro es:

𝑥
=
𝑉
1
⋅
(
𝑡
encuentro
+
Δ
𝑡
)
🧮 Ejemplo en pseudocódigo
python
def punto_de_encuentro(D):
    V1 = 100  # km/h
    V2 = 120  # km/h
    delta_t = 1/6  # horas (10 minutos)

    d1 = V1 * delta_t
    distancia_restante = D - d1
    velocidad_relativa = V1 + V2

    t_encuentro = distancia_restante / velocidad_relativa
    x = V1 * (t_encuentro + delta_t)

    return x  # distancia desde Zaragoza al punto de encuentro
📍 Resultado con D = 300 km
Si ejecutas punto_de_encuentro(300), obtendrás aproximadamente:

𝑥
≈
136.36
 km desde Zaragoza

Tiempo de encuentro: alrededor de las 10:06 h

¿Quieres que te lo convierta en código Python ejecutable o que lo visualicemos en un gráfico?