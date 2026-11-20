/*
Escribe una **función con nombre** `getFullName(name, lastName)` que devuelva el nombre completo separado por un espacio.
2. Escribe una **arrow function** `greet(name, language = 'es')` que devuelva:
   - `'Hola, <name>'` si el idioma es `'es'`.
   - `'Hello, <name>'` si es `'en'`.
   - `'Bonjour, <name>'` si es `'fr'`.
   - El saludo en español para cualquier otro idioma.

| Llamada | Resultado |
|---|---|
| `getFullName('Godofredo', 'Pérez')` | `'Godofredo Pérez'` |
| `greet('Godofredo')` | `'Hola, Godofredo'` |
| `greet('Rodofasio', 'en')` | `'Hello, Rodofasio'` |
| `greet('Ruperto', 'fr')` | `'Bonjour, Ruperto'` |
| `greet('Gutufacio', 'de')` | `'Hola, Gutufacio'` |
| `greet(getFullName('Godofredo', 'Pérez'), 'en')` | `'Hello, Godofredo Pérez'` |
*/

function getFullName(name, lastName) {
    return `${name} ${lastName}`
}

function greet(name, language) {
    if(language === 'en'){
        return `Hello, I'm ${name}`
    }else if(language === 'es'){
        return `Hola, soy ${name}`       
    }else if(language === 'fr'){
        return `Bonjour, je m'apelle ${name}`       
    }else if(language === 'it'){
        return `Salve, io sono ${name}`       
    }else if(language === 'jpn'){
        return `Watashi wa, ${name} desu`       
    }else if(language === 'krn'){
        return `Nae ireumeun, ${name}`       
    }else{
        return `Hola, soy ${name}`
    }
}
console.log(getFullName('Godofredo', 'Pérez'))
console.log(greet('Maria', 'krn'))
