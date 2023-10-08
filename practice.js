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