# Sprint 3 IT Academy | Video management tool

## Introducción

Esta aplicación contiene toda la lógica para filtrar y ordenar películas, usando tests Jest para checkear su correcto funcionamiento.

<br>

## Requisitos

1. Clonar el repo

```bash
$ git clone https://github.com/IT-Academy-BCN/starter-code-frontend-sprint-3-movies
```

2. Desconectar repo del original

```bash
$ git remote rm origin
```

3. Conectar el repo a un repositorio propio

```bash
$ git remote add origin <your repo name!>
```

<br>

## Tests!

```shell
$ npm install
$ npm run test:watch
```

Los resultados se pueden ver en el archivo `test-results.html` generado por Jest en el Live Server the VSCode.

Los tests están en el archivo `tests/films.spec.js`.

<br>

## Ejercicios

- Ejercicio 1

La función utiliza el método map para crear un nuevo array con los nombres de los directores.

- Ejercicio 2

La función utiliza el método map para filtrar todas las películas de un director en particular pasado como parámetro a la función.

- Ejercicio 3

La función filtra las películas de un director en particular y luego utiliza map para crear un nuevo array de la puntuación de la película. Finalmente se utiliza reduce para encontrar el promedio de puntuación

- Ejercicio 4

La función utiliza un map para crear un nuevo array con los títulos de las peliculas y luego sort para ordenar alfabéticamente. Se utiliza splice para encontrar los primeros 20 resultados en caso de que haya más que 20.

- Ejercicio 5
  La función utiliza sort para ordenar por año ascendentemente. Hay un operador ternario en caso de que la películas con mismo año sean ordenadas alfabeticamente por el título usando localeCompare.

- Ejercicio 6

La función calcula el promedio de puntuación de las películas de un género en particular. Primero se utiliza un filter para encontrar las películas que incluyan el parámetro de género. Si no hay películas con ese género la función devuelve 0. Si hay películas se utiliza reduce para sumar todas las puntuaciónes y luego se devuelve el promedio.

- Ejercicio 7

La función utiliza map para devolver la duración de cada película en minutos (a diferencia del formato Xh Xmin)y calcula el total utilizando parseInt para encontrar sólo el número (por ej "1h" es 1 y "33min" es 33). En caso de que la película no tenga minutos se calculan los minutos en función de la cantidad de horas. La función devuelve un nuevo array con los mismos datos de la película pero con la duración modificada.

- Ejercicio 8
  La función recibe el array y un año y luego utiliza filter para encontrar las películas de ese año y luego las ordena por su resultado de mayor a menor. Luego devolvemos el primer resultado con index 0, que sería la mejor película.
