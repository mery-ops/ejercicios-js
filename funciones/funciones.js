//declarar e invocar
function isNum1GreatherThanNum2(num1, num2) {
    //codigo de la función
    console.log(num1 > num2);
}

isNum1GreatherThanNum2(2, 5);   //false
isNum1GreatherThanNum2(22, 5);  //true


function suma(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}

suma(2, 2, 6);

//--------------------------------

const username = 'xindasvinto_2025';

const isValidUsername = username.length >= 3 && username.length <= 15 && !username.includes('_') && !username.includes(' ');
console.log(isValidUsername);

function isValidUsername(username) {
    return username.length >= 3 && username.length <= 15 && !username.includes('_') && !username.includes(' ');
}

console.log(isValidUsername('godo'));               //true
console.log(isValidUsername('_rodofasio'));         //false
console.log(isValidUsername('gu'));                 //false
console.log(isValidUsername('ruperto el grande'));  //false
console.log(isValidUsername('abc'));                //true
console.log(isValidUsername('xindasvinto_2025'));   //false

//--------------------------------

const hasCourt = false;
const players = 5;
const isRaining = false;

const canPlay = hasCourt && players == 4 && !isRaining;
const needsMorePlayers = players < 4;
console.log(canPlay, needsMorePlayers)

function canPlay(hasCourt, players, isRaining) {
   return hasCourt && players === 4 && !isRaining;
}

function needsMorePlayers(players) {
   return players < 4;
}

console.log(canPlay(true, 4, false), needsMorePlayers(4));