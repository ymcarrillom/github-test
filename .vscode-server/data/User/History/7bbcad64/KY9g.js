/* 📌 Local Scope o Variables Locales
	- Son las variables declaradas dentro de una función.
	- Solo podemos acceder a ellas desde dentro de la función.
*/

var obtenerNumeroLetras = (nombre) => {
	var numero = nombre.length;

	// Podemos acceder dentro de la función al numero
	console.log('Carlos tiene ' + numero + ' letras');

	// Podemos acceder a numero dentro desde cualquier parte DENTRO de la función
	// Incluso otra funcion
	var funcionAnidada = () => {
		// Podemos acceder a numero porque sigue estando dentro de la funcion donde fue definida.
		console.log(numero);
	};
	funcionAnidada();
};

obtenerNumeroLetras('carlos');

// Fuera de la funcion no podemos acceder a la variable numero.
console.log(numero); // variable not defined

/* 📌 Block Scope o Alcance de tipo bloque
	- Son las variables declaradas con const o let dentro de un bloque { }
	- Solo podemos acceder a ellas dentro del bloque
*/

let edad = 19;
if (edad >= 18) {
	const accesoPermitido = true;

	console.log(accesoPermitido); // Dentro del bloque si podemos acceder a la variable

	// Incluso dentro de otros bloques.
	if (true) {
		// Podemos acceder a la variable
		console.log(accesoPermitido);
	}

	// Otro tipo de bloques son las funciones
	const miFuncion = () => {
		// Podemos acceder a la variable
		console.log(accesoPermitido);
	};

	miFuncion();
}

console.log(accesoPermitido); // No podemos acceder a la variable. Estamos fuera del bloque.

/*
	Debemos procurar utilizar solamente const y let porque son las que nos proporcionan un scope de tipo bloque.
	Este scope es mejor que el global porque nos permitira evitar bugs ya
	 que las variables solo se podran acceder dentro del bloque y evitaremos que otras funciones las modifiquen.
*/

if (true) {
	var nombre = 'Arturo';
	console.log(nombre); // Podemos acceder a la variable.
}

console.log(nombre); // Tambien podemos acceder a la variable.

// La mayoria del tiempo no queremos esto, ya que las funciones muchas veces necesitaran sus propias varibles.
// Lo mejor es trabajar con const y let para evitar que fuera del bloque se puedan acceder a las variables.

if (true) {
	const nombre = 'Carlos';
	console.log(nombre); // Podemos acceder a la variable.
}
console.log(nombre); // No podemos acceder a la variable.