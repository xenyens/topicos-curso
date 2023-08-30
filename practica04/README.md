# PRÁCTICA 05

Eliminar elementos del DOM generados cuando se presiona la palabra Funciones

## Adecuaciones

Crear la interfaz acorde al ejercicio revisar que no existan errores en la consola.

Formas de recorrer un array

```
const estudiantes = ['Ricardo', 'Julio', 'Daniela', 'Arlete'];

// FORMA CLÁSICA ITERAR
for (let i = 0; i < estudiantes.length; i++) {
  console.log(estudiantes[i]);
}

// in devuelve el index
for (let estudiante in estudiantes) {
  console.log(estudiantes[estudiante]);
}

for (let estudiante of estudiantes) {
  console.log(estudiante);
}
```

Formas de escribir una función en JS ES6

```
// CLASSIC FUNCTION
function saludar01 () {
    console.log('hola')
}

// ARROW FUNCTION
const saludar02 = () => {
  console.log('hola');
};
```
