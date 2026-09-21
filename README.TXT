Entregables

Momento 1:
Validar la comprensión y aplicación de las estructuras de control lógicas (variables, condicionales, ciclos) y la encapsulación (funciones) para resolver un problema de flujo secuencial en JavaScript puro (solo consola).
Requisitos del Producto

Deberás crear un único archivo .js que, al ser ejecutado en la consola del navegador, simule un proceso de inicio de sesión.

Requerimientos Lógicos:
Archivo de Lógica Pura: Un script de JavaScript donde modelen las reglas principales de su proyecto utilizando variables, condicionales y ciclos

1.	Configuración:
o	Debes "quemar" (hardcodear) un usuario y una contraseña correctos dentro de tu código usando const. (Ej. const USUARIO_CORRECTO = "admin";)
2.	Captura de Datos:
o	Debes usar la función prompt() para pedirle al usuario su "usuario".
o	Debes usar la función prompt() para pedirle al usuario su "contraseña".
3.	Lógica de Intentos:
o	El usuario tendrá un máximo de 3 intentos para ingresar las credenciales correctas.
o	Debes usar un ciclo (while o for) para controlar el número de intentos. (Se recomienda while).
4.	Validación (Lógica de Condicionales):
o	Si el usuario y la contraseña son correctos: El ciclo debe terminar. Debes mostrar un mensaje de bienvenida en la consola (ej. console.log("¡Bienvenido al sistema!");).
o	Si las credenciales son incorrectas (pero quedan intentos): Debes informar al usuario (ej. console.log("Datos incorrectos. Intento 2 de 3.");) y el ciclo debe volver a pedir los datos.
o	Si se agotan los 3 intentos: El ciclo debe terminar. Debes mostrar un mensaje de bloqueo (ej. console.log("Usuario bloqueado. Ha superado el número de intentos.");).
5.	Encapsulación:
o	Toda la lógica anterior (variables, ciclo, condicionales) debe estar contenida dentro de una función (ej. function validarAcceso() o const validarAcceso = () => {}).
o	Al final de tu archivo, debes llamar a esa función para que el programa se ejecute.

Criterios de Logro Esperados:
•	El programa se ejecuta sin errores en la consola.
•	El programa pide correctamente el usuario y la contraseña.
•	El programa valida correctamente el éxito (===).
•	El programa gestiona correctamente los 3 intentos (ciclo).
•	El programa muestra el mensaje de bienvenida o el de bloqueo según corresponda (condicionales).
•	El código está organizado dentro de, al menos, una función.
