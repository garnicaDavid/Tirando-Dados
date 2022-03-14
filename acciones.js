let imagen1 = "img/dado1.jpg";
let imagen2 = "img/dado2.jpg";
let imagen3 = "img/dado3.jpg";
let imagen4 = "img/dado4.jpg";
let imagen5 = "img/dado5.jpg";
let imagen6 = "img/dado6.jpg";




function cambiar(){
	let elemento1 = document.getElementById("uno");
	let elemento2 = document.getElementById("tres");
	let num1 = 1 + Math.floor(Math.random()*6);
	let num2 = 1 + Math.floor(Math.random()*6);
	elemento1.src = eleguirDado1(num1);
	elemento2.src = eleguirDado2(num2);
	elemento1.value = valorDelDado1(num1);
	elemento2.value = valorDelDado2(num2);
	/*console.log("Girar dados")
	console.log("| Dado 1: [" + num1+"] | Dado 2 : ["+ num2+"] |");
*/
	mostrar();

}

function eleguirDado1(num1){
	switch(num1){
		case 1: var elemento1 = "img/dado1.jpg";
		break;
		case 2: var elemento1 = "img/dado2.jpg";
		break;
		case 3: var elemento1 = "img/dado3.jpg";
		break;
		case 4: var elemento1 = "img/dado4.jpg";
		break;
		case 5: var elemento1 = "img/dado5.jpg";
		break;
		case 6: var elemento1 = "img/dado6.jpg";
		break;
	}

	return elemento1;
}

function eleguirDado2(num2){
	switch(num2){
		case 1: var elemento2 = "img/dado1.jpg";
		break;
		case 2: var elemento2 = "img/dado2.jpg";
		break;
		case 3: var elemento2 = "img/dado3.jpg";
		break;
		case 4: var elemento2 = "img/dado4.jpg";
		break;
		case 5: var elemento2 = "img/dado5.jpg";
		break;
		case 6: var elemento2 = "img/dado6.jpg";
		break;
	}

	return elemento2;
}

function valorDelDado1(num1){
	switch(num1){
		case 1: var value  = 1;
		break;
		case 2: var value  = 2;
		break;
		case 3: var value  = 3;
		break;
		case 4: var value  = 4;
		break;
		case 5: var value  = 5;
		break;
		case 6: var value  = 6;
		break;
	}

	return value;
}

function valorDelDado2(num2){
	switch(num2){
		case 1: var value = 1;
		break;
		case 2: var value = 2;
		break;
		case 3: var value = 3;
		break;
		case 4: var value = 4;
		break;
		case 5: var value = 5;
		break;
		case 6: var value = 6;
		break;
	}

	return value;
}

function mostrar(){
document.getElementById("hojaCalculo").style.display = "block";
document.getElementById("p").innerHTML = "";
}



/*-----------------------------------------------------
H O J A   D E   C Á L C U L O 
------------------------------------------------------*/



function operacionSumar(){
var name1 = document.getElementById("uno");
var name2 = document.getElementById("tres");
var calculo = document.getElementById("cuenta");

 let num1 = Number(name1.value);
 let num2 = Number(name2.value);
 let operacion = (num1+num2);
console.log(`${num1} + ${num2} = ${operacion}`);
document.getElementById("p").innerHTML = (`${num1} + ${num2} = ${operacion}`);
}

function operacionRestar(){
var name1 = document.getElementById("uno");
var name2 = document.getElementById("tres");
var calculo = document.getElementById("cuenta");

 let num1 = Number(name1.value);
 let num2 = Number(name2.value);
 let operacion = (num1-num2);
console.log(`${num1} - ${num2} = ${operacion}`);
document.getElementById("p").innerHTML = (`${num1} - ${num2} = ${operacion}`);
}

function operacionMultiplicar(){
var name1 = document.getElementById("uno");
var name2 = document.getElementById("tres");
var calculo = document.getElementById("cuenta");

 let num1 = Number(name1.value);
 let num2 = Number(name2.value);
 let operacion = (num1*num2);
console.log(`${num1} × ${num2} = ${operacion}`);
document.getElementById("p").innerHTML = (`${num1} × ${num2} = ${operacion}`);
}

function operacionDividir(){
var name1 = document.getElementById("uno");
var name2 = document.getElementById("tres");
var calculo = document.getElementById("cuenta");

 let num1 = Number(name1.value);
 let num2 = Number(name2.value);
 let operacion = Number((num1/num2).toFixed(2));
console.log(`${num1} / ${num2} = ${operacion}`);
document.getElementById("p").innerHTML = (`${num1} / ${num2} = ${operacion}`);
}
