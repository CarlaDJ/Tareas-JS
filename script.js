/*Escribe un programa que pida dos números al usuario, los compare y 
devuelva por consola el mayor de ellos. 
Ni en este programa, ni en los siguientes tienes que comprobar que lo que 
introduce el usuario efectivamente son números, confiaremos en que sí, pero sí 
que debes recordar que cuando se introducen datos por el prompt se 
consideran texto siempre.*/

//1

function Ejercicio1(){
    let num1 = parseInt(prompt("Introduce un número"));
    let num2 = parseInt(prompt("Introduce otro número"));

    if(num1 > num2) console.log(num1);
    if(num2 > num1) console.log(num2);
}