//Ej 1 --------------------------------
/*
Con dos variables, `batteryLevel` (número del 0 al 100) e `isCharging` (booleano), muestra por consola:

- Si está cargando: `Cargando (X %)`, sea cual sea el nivel.
- Si no está cargando y el nivel es 5 o menos: `Batería crítica: el móvil se apagará pronto`.
- Si no está cargando y el nivel es 20 o menos: `Batería baja`.
- En cualquier otro caso: `Batería correcta`.

| `batteryLevel` | `isCharging` | Salida |
|---|---|---|
| 50 | `true` | `Cargando (50 %)` |
| 3 | `false` | `Batería crítica: el móvil se apagará pronto` |
| 20 | `false` | `Batería baja` |
| 21 | `false` | `Batería correcta` |
*/

function loading(batteryLevel, isCharging) {

    if(isCharging){
        return `Cargando(${batteryLevel}%)`;
    }else if(!isCharging && batteryLevel <= 5){
        return 'Batería crítica: el móvil se apagará pronto'
    }else if(!isCharging && batteryLevel <= 20){
        return 'Batería baja'
    }else{
        return 'Batería correcta'
    }
}

console.log(loading(50, true));
console.log(loading(3, false));
console.log(loading(20, false));
console.log(loading(21, false));


//Ej 2 --------------------------------
/*
Con las variables `age`, `withAdult` (booleano) y `rating` (texto), muestra `Puede entrar`, `No puede entrar` o `Clasificación desconocida` según estas reglas:

- `'TP'` (todos los públicos): puede entrar cualquiera.
- `'+12'`: puede entrar si tiene 12 años o más, o si tiene 7 o más y va con un adulto.
- `'+16'`: 16 años o más.
- `'+18'`: 18 años o más. Ir con un adulto no cambia nada.
- Cualquier otro valor: `Clasificación desconocida`.

| `age` | `withAdult` | `rating` | Salida |
|---|---|---|---|
| 10 | `false` | `'TP'` | `Puede entrar` |
| 10 | `true` | `'+12'` | `Puede entrar` |
| 10 | `false` | `'+12'` | `No puede entrar` |
| 6 | `true` | `'+12'` | `No puede entrar` |
| 16 | `false` | `'+16'` | `Puede entrar` |
| 17 | `true` | `'+18'` | `No puede entrar` |
| 20 | `false` | `'X'` | `Clasificación desconocida` |
*/

// 3 variables
// 3 Textos diferentes
// 'TP' / '+12' / '+16' / '+18' / 'x'

function checkMovieEntrance(age, withAdult, rating){
    if(rating === 'TP'){
        return 'Puede entrar'
    }else if(rating === '+12' && (age >= 12 || age >= 7 && withAdult)){ // paréntesis para q después de q se cumpla +12 ejecute la otra condición
        return 'Puede entrar'
    }else if(rating === '+16' && age >= 16){
        return 'Puede entrar'
    }else if(rating === '+18' && age >= 18) {
        return 'Puede entrar'
    }else if(rating !== 'TP' && rating !== '+12' && rating !== '+16' && rating !== '+18'){
        return 'Clasificación desconocida'
    }else{
        return 'No puede entrar'
    }
}

console.log(checkMovieEntrance(10, false,'TP'));
console.log(checkMovieEntrance(10, true,'+12'));
console.log(checkMovieEntrance(10, false,'+12'));
console.log(checkMovieEntrance(6, true,'+12'));
console.log(checkMovieEntrance(16, false,'+16'));
console.log(checkMovieEntrance(17, true,'+18'));
console.log(checkMovieEntrance(20, false,'X'));


//Ej 3  --------------------------------
/*
Calcula el precio de un parking a partir de `minutes` (minutos de estancia) e `isResident` (booleano):

- Los primeros 30 minutos son gratis.
- A partir del minuto 31, cada minuto cuesta 5 céntimos.
- El precio máximo es de 15 €.
- Los residentes pagan la mitad del precio resultante, después de aplicar el máximo.
- Si `minutes` es negativo, se muestra `Tiempo no válido`.

La salida debe ser `Precio: X €`.

| `minutes` | `isResident` | Salida |
|---|---|---|
| 20 | `false` | `Precio: 0 €` |
| 90 | `false` | `Precio: 3 €` |
| 90 | `true` | `Precio: 1.5 €` |
| 600 | `false` | `Precio: 15 €` |
| 600 | `true` | `Precio: 7.5 €` |
| -5 | `false` | `Tiempo no válido` |

**Antes del código**, escribe los pasos en castellano en un comentario.
*/