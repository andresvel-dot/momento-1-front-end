
const USUARIO_CORRECTO = "admin";
const CONTRASENA = 1234;
let usuario;
let contrasena = 1234;
let intentos = 3;


function acessoValido(usuario, contrasena) {
     return usuario === USUARIO_CORRECTO && contrasena === CONTRASENA;
}

do {

    usuario = prompt("Ingrese el usuario");
    contrasena = parseInt (prompt("Ingrese la contraseña"));

   if (acessoValido(usuario,contrasena)) {
       console.log("!Bienvenido al sistema¡");
       break;
 } else {
         intentos --;
 } if (intentos === 2){
      console.log("Datos incorrectos. Intento 2 de 3.");
  
    } else if (intentos === 1){
       console.log("Datos incorrectos. Intento 1 de 3.");

    } else {
        console.log("Usuario bloqueado. Ha superado el número de intentos.");
    }

} while (intentos > 0); 

