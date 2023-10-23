//? exercitiu - Equality operator
/*
const favoriteNumber = Number(prompt('Care este numarul preferat?'))
console.log(favoriteNumber)
console.log(typeof favoriteNumber)

if (favoriteNumber == 23) { //nu avem nevoie de strict equality deoarece favoriteNumber a primit valoarea 'Number' inainte de prompt
	console.log('23 este numar favorit')
} else if (favoriteNumber === 56) {
	console.log(favoriteNumber, 'este numar frumos')
} else {
	console.log('nu cunosc asa numar')
}

if (favoriteNumber != 23) {
	console.log('de ce nu 23?');
}
*/

//! logical operators
/*
const hasDriverLicense = true
const hasGoodVision = true
const isTired = true

* AND operator (&&)

if (hasDriverLicense && hasGoodVision && !isTired) {
	console.log('Ana can drive')
} else {
	console.log('Ana can not drive')
}

* OR operator (||)

if (!hasDriverLicense || !hasGoodVision || isTired) {
	console.log('Ana can not drive')
} else {
	console.log('Ana can drive')
}
*/
//! switch statement
/*
const myDay = "thuesday"

switch (myDay) {
	case "monday":
		console.log('Curs FE')
		break
	case "thuesday":
	case "wednesday":
		console.log('lectii de pian')
		break
	case "thursday":
		console.log('sala de forta')
		break
	case "friday":
		console.log('curs FE')
		break
	case "saturday":
	case "sunday":
		console.log('weekend!!!')
		break
	default:
		console.log('nu exista asa zi')
}
*/

//! The conditional (Ternary) Operator
/*
variabile = expression1 ? expression2 : expression3

const yourAge = 16

yourAge >= 18 ? console.log('drink wine') : console.log('drink water')

let drink2

if (yourAge >= 18) {
	drink2 = 'wine'
} else {
	drink2 = 'water'
}

console.log(`You can ${yourAge >= 18 ? 'drink wine' : 'drink water'}`);
*/

//! Function
/*
function printName(name) {
	console.log(name)
}

printName('Alexandra')
printName('Elena')
printName(true)
printName(2569)

function multiply(a, b) {
	const total = a * b //local variabile
	console.log(total) //print result
	return multiplyResult = total
}

multiply(56, 75)
console.log(multiplyResult)

function calcVirsta(anulNasterii) {
	console.log(2023 - anulNasterii) //print result
	return age = 2023 - anulNasterii //returnam variabila age
}

calcVirsta(1989)

console.log(age)
*/

/*
function calcVirsta2(anulCurent, anulNasterii) {
	console.log(anulCurent - anulNasterii) //print result
	return age2 = anulCurent - anulNasterii //returnam variabila age
}

calcVirsta2(2023, 1989)

console.log(age2)

function juiceMaker(fruct1, fruct2, fruct3) {
	const juice = `suc din ${fruct1}, ${fruct2} si ${fruct3}`
	//return juice = `Suc din ${fruct1}, ${fruct2} si ${fruct3}`
	console.log(juice)
	
}

juiceMaker('morcov', 'portocale', 'cirese')

function juiceMaker2(fruct1, fruct2, fruct3) {
	const juice = `suc din ${fruct1} cirese, ${fruct2} portocale si ${fruct3} mere`
	//return juice = `Suc din ${fruct1}, ${fruct2} si ${fruct3}`
	console.log(juice)
	
}

juiceMaker2(5, 3, 8)
*/

// function declaration and expresion

// function declaration

// console.log(calcVirsta4(1980))


// function calcVirsta4(anulNasterii) {
// 	return age = 2023 - anulNasterii //returnam variabila age
// }

// expresion
// const calcVirsta3 = function (anulNasterii) {
// 	return age = 2023 - anulNasterii //returnam variabila age
// }

// console.log(calcVirsta3(1989))

/*function calcTips(factura) {
	bacsis = factura <= 300 && factura >= 50 ? factura * 0.15 : factura * 0.2
	console.log(`Factura este de ${factura}, bacsisul este de ${bacsis} si total spre plata ${factura + bacsis}`)
}

calcTips(275)
calcTips(40)
calcTips(430)
*/

//other method

// function calcTips1(factura) {
// 	bacsis = factura <= 300 && factura >= 50 ? factura * 0.15 : factura * 0.2
// 	return `Factura este de ${factura}, bacsisul este de ${bacsis} si total spre plata ${factura + bacsis}`
// }

// console.log(calcTips1(420))
// console.log(calcTips1(150))
// console.log(calcTips1(45))

// // function simpleFunction() {
// // 	alert('e prea usoara aceasta functie')
// // }

// // simpleFunction()

// function simpleFunction() {
// 	console.log('e prea usoara aceasta functie')
// }

// simpleFunction()




// //function in funtion

// function virstaPinaLaPensie(pensia, anulMeuDeNastere) {
// 	const virstaActuala = calcVirsta4(anulMeuDeNastere)
// 	return pensia - virstaActuala
// }

// console.log(`Pana la pensie au mai ramas ${virstaPinaLaPensie(64, 1975)} ani`)

// function maruntinFructe(fruct) {
// 	return fruct * 4
// }

// function juiceMaker2(fruct1, fruct2, fruct3) {
// 	const juice = `suc din ${maruntinFructe(fruct1)} de bucatele de cirese, ${maruntinFructe(fruct2)} de felii de portocale si ${maruntinFructe(fruct3)} de felii de mere`
// 	console.log(juice)
// }

// juiceMaker2(5, 3, 8)

// console.log("Runda 1")


/*
const numelePersoanei = prompt('numele')
const anulNasterii = Number(prompt('Anul nasterii'))
const isF = Boolean(prompt('Introduceti 1 pentru femeie sau lasati gol (FALSE) pentru barbat'))

function virsta(a) {
	return 2023 - a
}

function virstaPensionarii(b) {
		return  b ? 64 : 67
}

function chekPension(e, c, d) {
	let age = virsta(c)
	let pensie = virstaPensionarii(d)
	let aniPanaLaPensionare = pensie - age
	console.log(`${age} ${pensie} ${aniPanaLaPensionare}`)
	
	if (age < 18) {
		console.log(`${e} Persoana este minora`);
	} else if (age >= pensie) {
		console.log(`${e}Deja este pensionar`);
	} else {
		console.log(`${e} au ramas ${aniPanaLaPensionare}`)
		
	}
}

chekPension(numelePersoanei, anulNasterii, isF)
console.log(virstaPensionarii(isF))*/


//! ARRAY - ARRAY - ARRAY - ARRAY - ARRAY




/*const friend1 = 'Monica'
const friend2 = 'Ross'
const friend3 = 'Rachel'
const friend4 = 'Phoebe'
const friend5 = 'Chandler'
const friend6 = 'Joey'*/


//? Array literal



/*const friends = ['Monica', 'Ross', 'Rachel', 'Phoebe', 'Chandler', 'Joey']
console.log(friends);

const numbers = [1, 2, 3, 4, 5]
console.log(numbers)

const mixed = [1, 'Hello', [1, 2, 3], false]
console.log(mixed)*/


//? Array constructor  -  const array = new Array()


/*const numbers2 = new Array(1, 2, 3, 4, 5)
console.log(numbers2)

const mixed2 = new Array(1, 'Hello', [1, 2, 3], true, 2.5)
console.log(mixed2)*/


//? Proprietatea lenght


/*console.log(mixed2[2])
console.log(friends[4])
console.log(mixed.length)
function deletaArray(a) {
	a.length = 0
}

deletaArray(mixed)
console.log(mixed)
console.log(friends[friends.length -3])*/

/*console.log(friends.sort())
console.log(friends.reverse())
let deletedfriend = friends.pop()
console.log(friends.push(deletedfriend))
console.log(friends)*/



/*const myArray = [15, 56, -12, 56, 1, true, 'eu', 58, 69]
console.log(myArray)
for (let i = 0; i < myArray.length; i++) {
	console.log('elementul ' + myArray[i] + ' are pozitia ' + i)
}*/


//! objects

/*let myCar = [2016, 'Ford', 2, 'gri', 'automat']

let myNewCar = {
	anul: 2016,
	marca: 'Ford',
	capacitatea: 2,
	culoarea: 'gri',
	cutie: 'automat',
	accidente: [2018, 2020, 2021, 2023],
	proprietari: {
		numele: 'Vasile',
		anulNasterii: 1980,
		proprietar: 2019 - 2016
	}
}


console.log(myNewCar)

//console.log(`Culoarea masinii in array este ` + myCar[3])
//console.log(`Culoarea masinii in obiect este ` + myNewCar.culoarea)
if (myNewCar.culoarea === "gri") {
	console.log('culoare nemodificata')
}

myNewCar.culoarea = 'alba'
console.log(`Culoarea masinii in obiect este ` + myNewCar.culoarea)

myNewCar.accidente = 0
console.log(myNewCar.accidente)
delete myNewCar.accidente
console.log(myNewCar.accidente)
myNewCar.proprietari.anulNasterii = 2010
console.log(myNewCar)
*/

//! ex1
/*
let carte = {
	titlu: 'Abecedar',
	autor: 'Grigore VIeru',
	imprumuta: function(cititor) {
		return console.log(`${cititor.nume} a imprumutat cartea ${this.titlu}`)
	}
}
carte.imprumuta()

let cititor = {
	nume: 'Ion Antonescu',
	imprumutaCarte: function(carte) {
		carte.imprumuta(this)
	}
}

cititor.imprumutaCarte(carte)
*/

//? ex 2 - calculator
/*
let calculator = {
	valoare: 0,

	adauga: function (num) {
		this.valoare += num
		return this
	},
	scade: function (num) {
		this.valoare -= num
		return this
	},
	inmulteste: function (num) {
		this.valoare *= num
		return this
	},
	imparte: function (num) {
		if (num !== 0) {
			this.valoare /= num
		} else {
			console.error('Nu se imparte la 0');
		}
		return this
	}
}
*/