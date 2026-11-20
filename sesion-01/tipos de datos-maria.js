//TIPOS DE DATOS 1- Primitivos-practica
//Ej. 1 -------------------------------------------------
console.log(1 + '1');       //11
console.log(typeof '42');   //'string'
console.log(2 + 3 * 4);     //14
console.log(17 % 5);        //2
console.log('Godofredo'.length);//9, length te dice la longitud del objeto
console.log(10 === '10');   //false dos iguales comparación simple y tres iguales exactamente igual
console.log('Ornitorrinco'.toUpperCase().includes('RINCO'));    //true
console.log(typeof (5 > 3));    //'boolean'
console.log(`${2 + 2} manzanas`);   //4 manzanas
console.log(!(3 >= 3) || 'a' !== 'b');  //false o true = true, el || es un corto circuito se queda con el true; si es && seria false


//Ej. 2 ---------------------------------------------------
const title = 'La venganza de Xindasvinto';
const author = 'Ruperto Gil';
const pages = 320;
const isRead = true;

const isLongBook = pages > 300;
const bookCard = `"${title}" de ${author} · ${pages} páginas · Leído: ${isRead}`;
const hasRevengeInTitle = title.toLowerCase().includes('venganza');
const titleLength = title.length;

console.log(bookCard, isLongBook, hasRevengeInTitle, titleLength)


//Ej. 3 ---------------------------------------------------
const username = 'xindasvinto_2025';
/*
'godo'
'_rodofasio'
'gu'
'ruperto el grande'
'abc'
'xindasvinto_2025'
*/
const hasUsernameValidLength= username.length >= 3 && username.length <= 15;
const doesNotStartWith_ = !username.startsWith('_');
const doesNotContainsSpaces = !username.includes(' ');

const isValidUsername = username.length >= 3 && username.length <= 15 && !username.includes('_') && !username.includes(' ');
console.log(isValidUsername);
 


//TIPOS DE DATOS 1- Primitivos-enunciados
//Ej. 1 ---------------------------------------------------
/*La tía Rutofisia tiene 47 caramelos y 6 sobrinos. Quiere darle a cada uno el mismo número de caramelos, el máximo posible, y quedarse con los que sobren (por algo es la tía).

Con dos variables, `candies` y `nephews`, calcula cuántos caramelos recibe cada sobrino y cuántos sobran. Pista: el operador `%` te da el resto de una división, y si al total le quitas el resto, la división ya es exacta.

| `candies` | `nephews` | Salida |
|---|---|---|
| 47 | 6 | `Cada sobrino recibe 7 caramelos y sobran 5` |
| 30 | 6 | `Cada sobrino recibe 5 caramelos y sobran 0` |
| 4 | 6 | `Cada sobrino recibe 0 caramelos y sobran 4` |*/

const candies = 4;
const nephews = 6;

const sobran = candies % nephews;
const caramelos = (candies - sobran) / nephews;

console.log(`Cada sobrino recibe ${caramelos} caramelos y sobran ${sobran}`);


//Ej. 2 ---------------------------------------------------
/* - Tienen pista reservada.
- Son exactamente 4 jugadores.
- No llueve.

Declara `hasCourt`, `players` e `isRaining`, y calcula dos booleanos:

- `canPlay`: si se puede jugar.
- `needsMorePlayers`: si son menos de 4.

| `hasCourt` | `players` | `isRaining` | `canPlay` | `needsMorePlayers` |
|---|---|---|---|---|
| `true` | 4 | `false` | `true` | `false` |
| `true` | 3 | `false` | `false` | `true` |
| `true` | 4 | `true` | `false` | `false` |
| `false` | 5 | `false` | `false` | `false` |

Muestra el resultado con `console.log(canPlay, needsMorePlayers)`. */

const hasCourt = false;
const players = 5;
const isRaining = false;

const canPlay = hasCourt && players == 4 && !isRaining;
const needsMorePlayers = players < 4;
console.log(canPlay, needsMorePlayers)


//Ej. 3 ---------------------------------------------------
// 1. La media de los dos exámenes de Godofredo
const firstExam = 7;
const secondExam = 9;
const average = (firstExam + secondExam) / 2; //la división tiene prioridad, entonces hay que ponerle paréntesis a la suma
console.log(average); // Esperado: 8

// 2. ¿Es administrador?
const role = 'admin';
const isAdmin = role.toLowerCase() === 'Admin';
console.log(isAdmin); // Esperado: true, aunque el rol venga en minúsculas o mayúsculas

// 3. ¿Es mayor de edad?
const age = 18; //cambiar a número
const isAdult = age === 18 || age > 18;
console.log(isAdult); // Esperado: true


//Ej. 4 ---------------------------------------------------
/*- Use comillas invertidas en lugar de concatenar con `+`.
- No compare booleanos con `=== true` ni con `=== false`.
- Use `!==` en lugar de negar una comparación con `!( … === … )`.
*/

const userName = 'Rodofasio';
const unreadMessages = 3;
const isOnline = true;
const isBlocked = false;
const country = 'Francia';

const welcome = `Hola, ${userName}. Tienes ${unreadMessages} mensajes sin leer.`;
const canChat = isOnline === true && isBlocked === false;
const isForeign = !(country === 'España');

console.log(welcome);
console.log(canChat, isForeign);


//Ej. 5 ---------------------------------------------------
/*
El microondas de Gutufacio solo entiende segundos, pero su pantalla tiene que mostrar el tiempo en horas, minutos y segundos. Partiendo de una variable `totalSeconds`, calcula `hours`, `minutes` y `seconds` y muestra el tiempo con el formato de la tabla. Calcula también `isLongerThanAnHour` (`true` si pasa de 3600 segundos).

Pistas: una hora son 3600 segundos y un minuto 60. Usa `%` y el truco del ejercicio 1 para hacer divisiones exactas.

| `totalSeconds` | Salida |
|---|---|
| 135 | `0 h 2 min 15 s · ¿Más de una hora? false` |
| 3725 | `1 h 2 min 5 s · ¿Más de una hora? true` |
| 7200 | `2 h 0 min 0 s · ¿Más de una hora? true` |
| 59 | `0 h 0 min 59 s · ¿Más de una hora? false` |
*/

