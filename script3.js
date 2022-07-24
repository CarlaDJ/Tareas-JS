
/*Dado un vector de números, escribe un programa que te devuelva por 
consola el total de números impares y el total de números mayores que 100.*/

//mirar los numeros
//que te los impares
//que te de los mayores de 100
//3

    let arrayOfNumber =[0,3,4,5,10,12,15,17,18,20,25,33,34,35,42,45,48,55,58,60,64,67,71,74,78,83,85,94,97,99,100,105,111,118,120,125,126];
    //console.log(ArrayOfNumber);
    let arrayImpar,array100;

    for(let i=0; i<= arrayOfNumber.length; i++){  //arrayOfNumber.length me da error: script3.js:14 Uncaught TypeError: Cannot read properties of undefined (reading 'length')
        if(arrayOfNumber % 2 != 0) arrayOfNumber=arrayImpar;
        if(arrayOfNumber >100) arrayOfNumber=array100;
    }
    console.log(`Los numeros impares son: ${arrayImpar}`);
    console.log(`Los numeros mayores de 100 son: ${array100}`);
