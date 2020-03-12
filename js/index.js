

console.log("SI FUNCIONO");

/*----------ARRAY THAT STORES ALL THE INFORMATION FOR CALCULATE--------------------*/
let Result=[];

function Operadores(){

	//OPERATIONS
	document.getElementById("addButton").addEventListener("click",add);
	document.getElementById("substractButton").addEventListener("click",subs);
	document.getElementById("multiplicationButton").addEventListener("click",multi);
	document.getElementById("divisionButton").addEventListener("click",divi);

	//EQUAL AND RESET

	document.getElementById("resetB").addEventListener("click",res);
	document.getElementById("equalB").addEventListener("click",equ);
}

//OPERATORS-------------------------------------------------------------------

function add(){


	console.log("ADD");
	let num1 = document.getElementById("inputNumber").value;
	Result.push(num1);
	Result.push("+");

	document.getElementById("inputNumber").value = "";



}

function subs(){

	console.log("SUBS");
	let num1 = document.getElementById("inputNumber").value;
	Result.push(num1);
	Result.push("-");
	
	document.getElementById("inputNumber").value = "";
}

function multi(){

	console.log("MULTI");
	let num1 = document.getElementById("inputNumber").value;
	Result.push(num1);
	Result.push("*");
	
	document.getElementById("inputNumber").value = "";
}

function divi(){

	console.log("DIVI");
	let num1 = document.getElementById("inputNumber").value;
	Result.push(num1);
	Result.push("/");

	document.getElementById("inputNumber").value = "";
	
}

//---------------EQUAL AND RESET-------------------------------------------------------------------

function res(){

	console.log("RESET");
	document.location.reload(true);	
}

function equ(){

	console.log("EQUAL");

/*---------------------------TO WRITE THE INFO IN THE DISPLAY -------------------------------*/
	let num1 = document.getElementById("inputNumber").value;
	Number(num1);
	Result.push(num1);
	Result.push("=");

	let size = Result.length;	
	console.log(size);
	let display = ("");

	for(let i=0; i < size; i++){


			display += Result[i];

	}
	

/*---------------------------TO CALCULATE THE RESULT -------------------------------*/
	
	let finalVal=0;

	for(let i=0; i < size; i++){

		if ( Result[i] == "+"){

			let val1 = Result[i-1];
			let val2 = Result[i+1];
			finalVal = Number(val1) + Number(val2);

			let pos = i+1;

			Result.splice(pos,1,finalVal);

		}

		if ( Result[i] == "-"){

			let val1 = Result[i-1];
			let val2 = Result[i+1];
			finalVal = Number(val1) - Number(val2);

			let pos = i+1;

			Result.splice(pos,1,finalVal);

		}

		if ( Result[i] == "*"){

			let val1 = Result[i-1];
			let val2 = Result[i+1];
			finalVal = Number(val1) * Number(val2);

			let pos = i+1;

			Result.splice(pos,1,finalVal);

		}

		if ( Result[i] == "/"){

			let val1 = Result[i-1];
			let val2 = Result[i+1];
			finalVal = Number(val1) / Number(val2);

			let pos = i+1;

			Result.splice(pos,1,finalVal);

		}

	}

	document.getElementById("resultValue").value = finalVal;
	display += finalVal;
	document.getElementById("logInformation").value = display;
	document.getElementById("inputNumber").value = "";

}


/*--------------INITIALIZER--------------------------------*/

function init(){

	Operadores();
	

}

init();

