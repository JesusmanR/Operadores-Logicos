# 📘 Operadores Lógicos y Estructuras Condicionales en JavaScript

**Programa:** Tecnología en Análisis y Desarrollo de Software — SENA  
**Actividad:** Introducción a los operadores lógicos y condicionales  
**Formato:** GFPI-F-135 V04

---

## 🗂️ Estructura del repositorio

```
📁 condicionales-js/
├── 📁 apropiacion/
│   ├── 01_comparaciones_basicas.js
│   ├── 02_operadores_logicos.js
│   ├── 03_condicional_simple.js
│   ├── 04_condicional_multiple.js
│   └── 05_switch_mes.js
├── 📁 transferencia/
│   ├── 01_acceso_sistema.js
│   ├── 02_precio_cine.js
│   ├── 03_clasificacion_numeros.js
│   ├── 04_menu_cajero.js
│   └── 05_sistema_calificaciones.js
└── README.md
```

---

## 🎯 Objetivo

Aplicar operadores de comparación, operadores lógicos y estructuras condicionales (`if`, `else if`, `else`, `switch`) en ejercicios prácticos, fortaleciendo la comprensión del tema y la capacidad para resolver problemas básicos en programación.

---

## C. Apropiación del Conocimiento

### Ejercicio 1 — Comparaciones básicas

Evalúa y describe el comportamiento de cada expresión de comparación:

| Expresión | Resultado | Describe el comportamiento |
|---|---|---|
| `10 > 5` | | |
| `8 <= 8` | | |
| `7 != "7"` | | |
| `4 === 4` | | |
| `6 == "6"` | | |

> 📂 Archivo: `apropiacion/01_comparaciones_basicas.js`

---

### Ejercicio 2 — Operadores lógicos

Determina el resultado (`true` o `false`) de cada expresión lógica:

| Expresión | Resultado | Describe el comportamiento |
|---|---|---|
| `(true && true) \|\| false` | | |
| `(5 > 2) && (10 < 8)` | | |
| `!(4 === "4")` | | |
| `(3 <= 3) \|\| (7 > 10)` | | |

> 📂 Archivo: `apropiacion/02_operadores_logicos.js`

---

### Ejercicio 3 — Condicional simple (`if / else`)

Programa que solicita la temperatura de una ciudad y muestra un mensaje según el valor ingresado.

| Condición | Mensaje de salida |
|---|---|
| Temperatura `>= 30` | `"Hace calor"` |
| Temperatura `< 30` | `"Clima agradable"` |

- Entrada: temperatura ingresada por el usuario con `prompt()`
- Estructura a usar: `if / else`

> 📂 Archivo: `apropiacion/03_condicional_simple.js`

---

### Ejercicio 4 — Condicional múltiple (`if / else if / else`)

Programa que clasifica la velocidad de un vehículo según el valor ingresado.

| Velocidad (km/h) | Clasificación |
|---|---|
| Menor a 30 | `"Muy lento"` |
| Entre 30 y 60 | `"Velocidad moderada"` |
| Entre 61 y 100 | `"Rápido"` |
| Mayor a 100 | `"Muy rápido"` |

- Entrada: velocidad ingresada por el usuario
- Estructura a usar: `if / else if / else`

> 📂 Archivo: `apropiacion/04_condicional_multiple.js`

---

### Ejercicio 5 — Switch: mes del año

Programa que recibe un número del 1 al 12 y muestra el mes correspondiente.

| Número | Mes |
|---|---|
| 1 | Enero |
| 2 | Febrero |
| 3 | Marzo |
| 4 | Abril |
| 5 | Mayo |
| 6 | Junio |
| 7 | Julio |
| 8 | Agosto |
| 9 | Septiembre |
| 10 | Octubre |
| 11 | Noviembre |
| 12 | Diciembre |

- Entrada: número del mes ingresado por el usuario
- Estructura a usar: `switch / case / default`

> 📂 Archivo: `apropiacion/05_switch_mes.js`

---

## D. Transferencia del Conocimiento

### Ejercicio 1 — Acceso a un sistema

Un sistema valida el acceso de un usuario verificando dos condiciones simultáneamente:

- Usuario: `"admin"`
- Contraseña: `"1234"`

Si no se cumplen ambas condiciones → `"Acceso denegado"`.

**Pregunta de análisis:** ¿Qué operador lógico usarías para verificar que ambas condiciones se cumplan al mismo tiempo?

- Estructura a usar: `if / else` con operador lógico `&&`

> 📂 Archivo: `transferencia/01_acceso_sistema.js`

---

### Ejercicio 2 — Precio de entradas al cine

Un cine aplica tarifas según la edad del cliente y si es estudiante:

| Edad | Precio base |
|---|---|
| Menor de 12 años | $5.000 |
| Entre 12 y 18 años | $8.000 |
| Mayor de 18 años | $10.000 |

Condición adicional: si el cliente es **estudiante**, se aplica un **descuento del 20%** sobre el precio base.

**Pregunta de análisis:** ¿Qué estructura condicional usarías para resolver este caso: `if-else if-else` o `switch`? ¿Por qué?

- Estructura a usar: `if / else if / else` anidado

> 📂 Archivo: `transferencia/02_precio_cine.js`

---

### Ejercicio 3 — Clasificación de números

Programa que pide un número entero y lo clasifica según su valor:

| Condición | Mensaje |
|---|---|
| Mayor que 0 | `"Número positivo"` |
| Menor que 0 | `"Número negativo"` |
| Igual a 0 | `"Cero"` |

**Extensión:** ¿Cómo cambiaría la solución si además se quiere verificar si el número es **par o impar**?

- Estructura a usar: `if / else if / else`
- Operador de extensión sugerido: `%` (módulo)

> 📂 Archivo: `transferencia/03_clasificacion_numeros.js`

---

### Ejercicio 4 — Menú de cajero automático

Programa que simula el menú de un cajero automático con `switch`:

| Opción | Acción |
|---|---|
| 1 | Consultar saldo |
| 2 | Retirar dinero |
| 3 | Depositar dinero |
| 4 | Salir |

**Pregunta de análisis:** ¿Qué pasaría si el usuario ingresa un número que no está entre 1 y 4? ¿Cómo se maneja ese caso con `default`?

- Estructura a usar: `switch / case / default`

> 📂 Archivo: `transferencia/04_menu_cajero.js`

---

### Ejercicio 5 — Sistema de calificaciones con condiciones lógicas

Un estudiante aprueba una materia únicamente si cumple **ambas** condiciones:

| Condición | Requisito mínimo |
|---|---|
| Nota final | Mayor o igual a 60 |
| Asistencia | Mayor o igual al 80% |

Si no cumple las dos condiciones → `"Reprobado"`.

**Pregunta de análisis:** ¿Qué operador lógico garantiza que ambas condiciones se evalúen al mismo tiempo?

- Operador a usar: `&&`
- Estructura a usar: `if / else`

> 📂 Archivo: `transferencia/05_sistema_calificaciones.js`

---

## 📚 Conceptos aplicados

| Concepto | Descripción | Ejemplo |
|---|---|---|
| `>` `<` `>=` `<=` | Comparación de magnitud | `10 > 5` → `true` |
| `==` | Igualdad con conversión de tipo | `6 == "6"` → `true` |
| `===` | Igualdad estricta (tipo y valor) | `4 === 4` → `true` |
| `!=` | Desigualdad con conversión | `7 != "7"` → `false` |
| `&&` | AND: ambas condiciones verdaderas | `true && false` → `false` |
| `\|\|` | OR: al menos una verdadera | `true \|\| false` → `true` |
| `!` | NOT: invierte el valor booleano | `!true` → `false` |
| `if / else` | Condicional de dos caminos | Temperatura, acceso |
| `if / else if / else` | Condicional de múltiples caminos | Velocidad, cine, notas |
| `switch` | Selección por valor exacto | Mes del año, cajero |

---

## 🛠️ Herramientas utilizadas

| Herramienta | Uso |
|---|---|
| Visual Studio Code | Editor de código |
| Navegador web + DevTools | Ejecución y depuración con `prompt()` y `console.log()` |
| Git / GitHub | Control de versiones y entrega de evidencias |

---

## 📋 Evidencias de aprendizaje

- [x] 5 archivos `.js` de apropiación con tablas de comparación resueltas y comentadas
- [x] 5 archivos `.js` de transferencia con solución, análisis y comentarios
- [x] Documento Word con respuestas a las preguntas de análisis
- [x] Commits descriptivos por cada ejercicio en GitHub
- [x] Retroalimentación con un compañero realizada

---

## 🏫 Información académica

**Institución:** SENA  
**Programa:** Tecnología en Análisis y Desarrollo de Software — Código 3234206  
**Actividad:** Introducción a los operadores lógicos y condicionales  
**Instructor:** John Freddy Becerra Castellanos  
**Formato:** GFPI-F-135 V04
