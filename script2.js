
/*Modifica el anterior script de manera que si los números que se proporcionan 
son iguales deberá pedir de nuevo el segundo hasta que el usuario introduzca 
uno diferente al primero.*/

//2

    let num1 = parseInt(prompt("Introduce un número"));
    let num2 = parseInt(prompt("Introduce otro número"));
    
    do{
       if(num1 == num2) num2 = parseInt(prompt("Elige un tercer numero"));
    }while(num2 >= num1 && num2<= num1);
    console.log(`los numeros son: ${num1} y ${num2}`);
  
