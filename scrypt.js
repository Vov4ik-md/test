//! prima lectie

//?Prima varianta

// let vadimsWeight = 78

// let vadimsHeight = 1.68

// let alexWeight = 92

// let alexHeight = 1.95

// let vadimsBMI = vadimsWeight / vadimsHeight ** 2

// let alexBMI = alexWeight / alexHeight ** 2

// let markHigherBMI = vadimsBMI > alexBMI

// console.log('Prima varianta')

// console.log('Vadim are BMI ' + vadimsBMI)

// console.log('Alex are BMI ' + alexBMI)

// console.log('BMI al lui Vadim este mai mare decat al lui Alex? ' + markHigherBMI)

//?A doua varianta

// let vadimsWeight1 = 95

// let vadimsHeight1 = 1.88

// let alexWeight1 = 85

// let alexHeight1 = 1.76

// let vadimsBMI1 = vadimsWeight1 / vadimsHeight1 ** 2

// let alexBMI1 = alexWeight1 / alexHeight1 ** 2

// let markHigherBMI1 = vadimsBMI1 > alexBMI1

// console.log('A doua varianta')

// console.log('Vadim are BMI ' + vadimsBMI1)

// console.log('Alex are BMI ' + alexBMI1)

// console.log('BMI al lui Vadim este mai mare decat al lui Alex? ' + markHigherBMI1)


//?exercitiu 1

// let number1 = 35

// let number2 = 35

// console.log(`Exercitiu 1:`)

// console.log(`Variabila 1 - ${number1}, variabila 2 - ${number2}`)


// console.log(`Care din cele 2 variabile declarate este mai mare:`)

// if (number1 > number2) {
// 	console.log(`Variabila 1 - ${number1} este mai mare`)
// }
// else {
// 	console.log(`Variabila 2 - ${number2}, este mai mare`)
// }

//?exercitiul 2

// console.log("Exercitiul 2:")

// console.log("Declaram 3 variabile (2 numere si un simbol) si afisam doar variabila care este simbol: ")

// let firstVar = 3

// console.log(`Prima variabila : " ${firstVar} "`)

// let secondVar = "-"

// console.log(`A 2 variaila : " ${secondVar} "`)

// let thirdVar = 7

// console.log(`A 3 variabila : " ${thirdVar} "`)

// if (typeof firstVar == "string") {
// 	console.log(`Prima variabila, " ${firstVar} ", este simbol`)
// }
// else if (typeof secondVar == "string") {
// 	console.log(`A 2 variabila, " ${secondVar} ", este simbol`)
// }
// else if (typeof thirdVar == "string"){
// 	console.log(`A 3 variabila, " ${thirdVar} ", este simbol`)
// }
// else {
// 	console.log(`Nici una din variabile nu este simbol`)
// }

//?exercitiul 3

// console.log("Exercitiul 3")

// console.log("Scriem o conditie care va afisa 3 numere in ordere crescatoare")

// let firstNumber = 4

// console.log(`Prima variabila este : " ${firstNumber} "`)

// let secondNumber = 9

// console.log(`A 2 variabila este : " ${secondNumber} "`)

// let thirdNumber = -6

// console.log(`A 3 variabila este : " ${thirdNumber} "`)

// if (firstNumber < secondNumber && firstNumber < thirdNumber && secondNumber < thirdNumber) { console.log
// (`Numerele in ordine crescatoare : ${firstNumber} , ${secondNumber} , ${thirdNumber}`)
// }
// else if (firstNumber < secondNumber && firstNumber < thirdNumber && thirdNumber < secondNumber) {
// 	console.log(`Numerele in ordine crescatoare : ${firstNumber} , ${thirdNumber} , ${secondNumber}`)
// }
// else if (secondNumber < firstNumber && secondNumber < thirdNumber && firstNumber < thirdNumber) {
// 	console.log(`Numerele in ordine crescatoare : ${secondNumber} , ${firstNumber} , ${thirdNumber}`)
// }
// else if (secondNumber < firstNumber && secondNumber < thirdNumber && thirdNumber < firstNumber) {
// 	console.log(`Numerele in ordine crescatoare : ${secondNumber} , ${thirdNumber} , ${firstNumber}`)
// }
// else if (thirdNumber < firstNumber && thirdNumber < secondNumber && secondNumber < firstNumber) {
// 	console.log(`Numerele in ordine crescatoare : ${thirdNumber} , ${secondNumber} , ${firstNumber}`)
// }
// else {
// 	console.log(`Numerele in ordine crescatoare : ${thirdNumber} , ${firstNumber} , ${secondNumber}`)
// }

//?Ordine descrescatoare

// console.log(`Ordine descrescatoare:`)

// if (firstNumber > secondNumber && firstNumber > thirdNumber && secondNumber > thirdNumber) { console.log
// (`Numerele in ordine descrescatoare : ${firstNumber} , ${secondNumber} , ${thirdNumber}`)
// }
// else if (firstNumber > secondNumber && firstNumber > thirdNumber && thirdNumber > secondNumber) {
// 	console.log(`Numerele in ordine descrescatoare : ${firstNumber} , ${thirdNumber} , ${secondNumber}`)
// }
// else if (secondNumber > firstNumber && secondNumber > thirdNumber && firstNumber > thirdNumber) {
// 	console.log(`Numerele in ordine descrescatoare : ${secondNumber} , ${firstNumber} , ${thirdNumber}`)
// }
// else if (secondNumber > firstNumber && secondNumber > thirdNumber && thirdNumber > firstNumber) {
// 	console.log(`Numerele in ordine descrescatoare : ${secondNumber} , ${thirdNumber} , ${firstNumber}`)
// }
// else if (thirdNumber > firstNumber && thirdNumber > secondNumber && secondNumber > firstNumber) {
// 	console.log(`Numerele in ordine descrescatoare : ${thirdNumber} , ${secondNumber} , ${firstNumber}`)
// }
// else {
// 	console.log(`Numerele in ordine descrescatoare : ${thirdNumber} , ${firstNumber} , ${secondNumber}`)
// }

//?Exercitiul 4

// console.log("Exercitiul 4")

// console.log("Scriem o conditie cara va afisa doar cel mai mare numar:")

// let firstNum = -7

// console.log(`Primul numar este : ${firstNum}`)

// let secondNum = -3

// console.log(`Al 2-lea numar este : ${secondNum}`)

// let thirdNum = 258

// console.log(`Al 3-lea numar este : ${thirdNum}`)

// let fourthNum = 258

// console.log(`Al 4-lea numar este : ${fourthNum}`)

// let fifthNum = 0

// console.log(`Al 5-lea numar este : ${fifthNum}`)

// if (firstNum >= secondNum && firstNum >= thirdNum && firstNum >= fourthNum && firstNum >= fifthNum) {
// 	console.log(`Cel mai mare numar este ${firstNum}`)
// }
// else if (secondNum >= thirdNum && secondNum >= fourthNum && secondNum >= fifthNum) {
// 	console.log(`Cel mai mare numar este ${secondNum}`)
// }
// else if (thirdNum >= fourthNum && thirdNum >= fifthNum) {
// 	console.log(`Cel mai mare numar este ${thirdNum}`)
// }
// else if (fourthNum >= fifthNum) {
// 	console.log(`Cel mai mare numar este ${fourthNum}`)
// }
// else {
// 	console.log(`Cel mai mare numar este ${fifthNum}`)
// }

//? exercitiu - Equality operator

// const favoriteNumber = Number(prompt('Care este numarul preferat?'))

// //const favoriteNumber = 56

// console.log(favoriteNumber)

// console.log(typeof favoriteNumber)

// if (favoriteNumber == 23) { //nu avem nevoie de strict equality deoarece favoriteNumber a primit valoarea 'Number' inainte de prompt
// 	console.log('23 este numar favorit')
// } else if (favoriteNumber === 56) {
// 	console.log(favoriteNumber, 'este numar frumos')
// } else {
// 	console.log('nu cunosc asa numar')
// }

// if (favoriteNumber != 23) {
// 	console.log('de ce nu 23?');
// }


//! logical operators

// const hasDriverLicense = true

// const hasGoodVision = true

// const isTired = true

//* AND operator (&&)

// if (hasDriverLicense && hasGoodVision && !isTired) {
// 	console.log('Ana can drive')
// } else {
// 	console.log('Ana can not drive')
// }

//* OR operator (||)

// if (!hasDriverLicense || !hasGoodVision || isTired) {
// 	console.log('Ana can not drive')
// } else {
// 	console.log('Ana can drive')
// }


//! switch statement

// const myDay = "thuesday"

// switch (myDay) {
// 	case "monday":
// 		console.log('Curs FE')
// 		break
// 	case "thuesday":
// 	case "wednesday":
// 		console.log('lectii de pian')
// 		break
// 	case "thursday":
// 		console.log('sala de forta')
// 		break
// 	case "friday":
// 		console.log('curs FE')
// 		break
// 	case "saturday":
// 	case "sunday":
// 		console.log('weekend!!!')
// 		break
// 	default:
// 		console.log('nu exista asa zi')
// }

//! The conditional (Ternary) Operator

// variabile = expression1 ? expression2 : expression3

// const yourAge = 16

// yourAge >= 18 ? console.log('drink wine') : console.log('drink water')

// let drink2

// if (yourAge >= 18) {
// 	drink2 = 'wine'
// } else {
// 	drink2 = 'water'
// }

// console.log(`You can ${yourAge >= 18 ? 'drink wine' : 'drink water'}`);

//? Exercitiu 1

//console.log('Exercitiu #1 - calculatorul scorului')


//* Varianta 1

// console.log('Varianta 1')

// let scoreDelfinii1 = 96

// let scoreDelfinii2 = 108

// let scoreDelfinii3 = 89

// let scoreKoalas1 = 88

// let scoreKoalas2 = 91

// let scoreKoalas3 = 110

// let mediumScoreDelfini = (scoreDelfinii1 + scoreDelfinii2 + scoreDelfinii3) / 3

// console.log(`Scorul mediu al echipei Delfinii este : ${mediumScoreDelfini} puncte`)

// let mediumScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3

// console.log(`Scorul mediu al echipei Koalas este : ${mediumScoreKoalas} puncte`)

// if (mediumScoreDelfini > 100 || mediumScoreKoalas > 100) {
// 	if (mediumScoreDelfini === mediumScoreKoalas) {
// 		console.log('Remiza - ambele echipe au acumulat acelasi scor mediu!')
// 	}
// 	else if (mediumScoreDelfini > mediumScoreKoalas) {
// 		console.log("Echipa Delfinii este castigatoare!")
// 	} else {
// 		console.log("Echipa Koalas este castigatoare!")
// 	}
// } else {
// 	console.log('Nici o echipa nu a atins scorul mediu de 100 de puncte')
// }

//* Varianta 2

// console.log('Varianta 2')

// scoreDelfinii1 = 97

// scoreDelfinii2 = 112

// scoreDelfinii3 = 101

// scoreKoalas1 = 109

// scoreKoalas2 = 95

// scoreKoalas3 = 123

// mediumScoreDelfini = (scoreDelfinii1 + scoreDelfinii2 + scoreDelfinii3) / 3

// console.log(`Scorul mediu al echipei Delfinii este : ${mediumScoreDelfini} puncte`)

// mediumScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3

// console.log(`Scorul mediu al echipei Koalas este : ${mediumScoreKoalas} puncte`)

// if (mediumScoreDelfini > 100 || mediumScoreKoalas > 100) {
// 	if (mediumScoreDelfini === mediumScoreKoalas) {
// 		console.log('Remiza - ambele echipe au acumulat acelasi scor mediu!')
// 	}
// 	else if (mediumScoreDelfini > mediumScoreKoalas) {
// 		console.log("Echipa Delfinii este castigatoare!")
// 	} else {
// 		console.log("Echipa Koalas este castigatoare!")
// 	}
// } else {
// 	console.log('Nici o echipa nu a atins scorul mediu de 100 de puncte')
// }

//* Varianta 3

// console.log('Varianta 3')

// scoreKoalas3 = 106

// mediumScoreDelfini = (scoreDelfinii1 + scoreDelfinii2 + scoreDelfinii3) / 3

// console.log(`Scorul mediu al echipei Delfinii este : ${mediumScoreDelfini} puncte`)

// mediumScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3

// console.log(`Scorul mediu al echipei Koalas este : ${mediumScoreKoalas} puncte`)

// if (mediumScoreDelfini > 100 || mediumScoreKoalas > 100) {
// 	if (mediumScoreDelfini === mediumScoreKoalas) {
// 		console.log('Remiza - ambele echipe au acumulat acelasi scor mediu!')
// 	}
// 	else if (mediumScoreDelfini > mediumScoreKoalas) {
// 		console.log("Echipa Delfinii este castigatoare!")
// 	} else {
// 		console.log("Echipa Koalas este castigatoare!")
// 	}
// } else {
// 	console.log('Nici o echipa nu a atins scorul mediu de 100 de puncte')
// }

//? Exercitiu 2

//* Varianta 1

// console.log('Exercitiu #2 - calculator de bacsis')

// console.log('Varianta 1')

// let cashReceipt = 275

// cashReceipt >= 50 || cashReceipt <= 300 ? (tips = cashReceipt * 0.15) : (tips = cashReceipt * 0.2)

// let finalValue = cashReceipt + tips

// console.log(`Nota de plata este de ${cashReceipt}, bacsisul este de ${tips} si valoarea totala este de ${finalValue}`)

//* Varianta 2

// console.log('Varianta 2')

// cashReceipt = 40

// cashReceipt >= 50 && cashReceipt <= 300 ? (tips = cashReceipt * 0.15) : (tips = cashReceipt * 0.2)

// finalValue = cashReceipt + tips

// console.log(`Nota de plata este de ${cashReceipt}, bacsisul este de ${tips} si valoarea totala este de ${finalValue}`)

//* Varianta 3

// console.log('Varianta 3')

// cashReceipt = 430

// cashReceipt >= 50 && cashReceipt <= 300 ? (tips = cashReceipt * 0.15) : (tips = cashReceipt * 0.2)

// finalValue = cashReceipt + tips

// console.log(`Nota de plata este de ${cashReceipt}, bacsisul este de ${tips} si valoarea totala este de ${finalValue}`)

//! Function

// function printName(name) {
// 	console.log(name)
// }

// printName('Alexandra')
// printName('Elena')
// printName(true)
// printName(2569)

// function multiply(a, b) {
// 	const total = a * b //local variabile
// 	console.log(total) //print result
// 	return multiplyResult = total
// }

// multiply(56, 75)
// console.log(multiplyResult)

// function calcVirsta(anulNasterii) {
// 	console.log(2023 - anulNasterii) //print result
// 	return age = 2023 - anulNasterii //returnam variabila age
// }

// calcVirsta(1989)

// console.log(age)


// function calcVirsta2(anulCurent, anulNasterii) {
// 	console.log(anulCurent - anulNasterii) //print result
// 	return age2 = anulCurent - anulNasterii //returnam variabila age
// }

// calcVirsta2(2023, 1989)

// console.log(age2)

// function juiceMaker(fruct1, fruct2, fruct3) {
// 	const juice = `suc din ${fruct1}, ${fruct2} si ${fruct3}`
// 	//return juice = `Suc din ${fruct1}, ${fruct2} si ${fruct3}`
// 	console.log(juice)
	
// }

// juiceMaker('morcov', 'portocale', 'cirese')

// function juiceMaker2(fruct1, fruct2, fruct3) {
// 	const juice = `suc din ${fruct1} cirese, ${fruct2} portocale si ${fruct3} mere`
// 	//return juice = `Suc din ${fruct1}, ${fruct2} si ${fruct3}`
// 	console.log(juice)
	
// }

// juiceMaker2(5, 3, 8)

// // function declaration and expresion

// // function declaration
// console.log(calcVirsta4(1980))


// function calcVirsta4(anulNasterii) {
// 	return age = 2023 - anulNasterii //returnam variabila age
// }

// // expresion
// const calcVirsta3 = function (anulNasterii) {
// 	return age = 2023 - anulNasterii //returnam variabila age
// }

// console.log(calcVirsta3(1989))

// function calcTips(factura) {
// 	bacsis = factura <= 300 && factura >= 50 ? factura * 0.15 : factura * 0.2
// 	console.log(`Factura este de ${factura}, bacsisul este de ${bacsis} si total spre plata ${factura + bacsis}`)
// }

// calcTips(275)
// calcTips(40)
// calcTips(430)

// //other method

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

// function calcAverage(score1, score2, score3) {
// 	return (score1 + score2 + score3) / 3
// }

// let avgDolphins = calcAverage(44, 23, 71)

// console.log(`Scorul mediu al echipei Delfinii este de ${avgDolphins} de puncte`)

// let avgKoalas = calcAverage(65, 54, 49)

// console.log(`Scorul mediu al echipei Delfinii este de ${avgKoalas} de puncte`)

// function chekWinner(avgDolphins, avgKoalas) {
// 	if (avgDolphins > avgKoalas * 2) {
// 		console.log("Echipa Delfinii a castigat")
// 	} else if (avgKoalas > avgDolphins * 2) {
// 		console.log("Echipa Koalas a castigat")
// 	} else {
// 		console.log("Nu au fost indeplinite conditiile pentru a alege un castigator")
// 	}
// }

// chekWinner(avgDolphins, avgKoalas)

// console.log("Runda 2")

// avgDolphins = calcAverage(85, 54, 41)

// console.log(`Scorul mediu al echipei Delfinii este de ${avgDolphins} de puncte`)

// avgKoalas = calcAverage(23, 34, 27)

// console.log(`Scorul mediu al echipei Delfinii este de ${avgKoalas} de puncte`)

// chekWinner(avgDolphins, avgKoalas)


// function helloWorld(language) {
// 	if (language === "es") {
// 		return "Hola Mundo!";
// 	} else if (language === "de") {
// 		return "Hallo Welt!";
// 	} else if (language === "jp") {
// 		return "こんにちは世界!";
// 	} else {
// 		return "Hello, World!";
// 	}
// }

// console.log(helloWorld("es"));
// console.log(helloWorld("de"));
// console.log(helloWorld("jp"));
// console.log(helloWorld());

// function numbersAnimals(number, name) {
// 	if (number === 1 || name === "sheep") {
// 		return (`I have ${number} ${name}`)
// 	} else if (number !== 1 && name === "goose") {
// 		return (`I have ${number} geese`)
// 	} else {
// 		return (`I have ${number} ${name}s`)
// 	}
// }

// console.log(numbersAnimals(6, "pig"));
// console.log(numbersAnimals(0, "hamster"));
// console.log(numbersAnimals(1, "parrot"));
// console.log(numbersAnimals(5, "sheep"));
// console.log(numbersAnimals(1, "goose"));
// console.log(numbersAnimals(3, "goose"));

// let pret

// let anulDeNastere = prompt("introduceti anul de nastere")

// function age(birthYear) {
// 	console.log(2023 - anulDeNastere)
// }

// age()
// function cost(anulDeNastere) {
// 	let virsta = age(anulDeNastere)
// 	if (virsta < 12) {
// 		pret = 5
// 	} else if (virsta >= 12 && virsta < 18) {
// 		pret = 10
// 	} else if (virsta >= 18 && virsta < 65) {
// 		pret = 20
// 	} else {
// 		pret = 15
// 	}
// 	console.log(`Pretul biletului este de ${pret} lei iar virsta e de ${virsta} ani`);
// }

// cost(2015)
// cost(1985)
// cost(1957)
// cost(2008)
/*let numele = prompt("Introduceti numele dvs")



//! Virsta de pensionare




function nameOfPerson(name) {
	return numele
}

let anulDeNastere = prompt("Introduceti anul de nastere")

function ageOfPerson(birthYear) {
	return 2023 - anulDeNastere
}

let genderOfPerson = prompt("Introduceti gen")

function isF(maleFemale) {
	let virsta = ageOfPerson()
	genderOfPerson === "M" ? aniRamasi = 67 - virsta : aniRamasi = 64 - virsta
	return aniRamasi
}

function virstaDePensionare() {
	let name = nameOfPerson()
	let age = ageOfPerson()
	let remainingYears = isF()
	if (age >= 18) {
		console.log(`${name} are virsta de ${age} de ani, i-au mai ramas ${remainingYears} de ani pana la pensionare`)
	} else {
		console.log(`${name} are virsta de ${age} de ani, inca nu a implinit majoratul`)
	}
}

let sergiu = virstaDePensionare() */

//Sergiu 1979
//Anastasia 1963
//Andreea 2010

// const numelePersoanei = prompt('numele')
// const anulNasterii = Number(prompt('Anul nasterii'))
// const isF = Boolean(prompt('Introduceti 1 pentru femeie sau lasati gol (FALSE) pentru barbat'))

// function virsta(a) {
// 	return 2023 - a
// }

// function virstaPensionarii(b) {
// 	/*if (b) {
// 		console.log('persoana noastra este femeie si virsta de pensionare e de 64 de ani')
// 	} else {
// 		console.log('Persoana este barbat si virsta de pensionare e de 67 de ani')
// 	}*/
// 	return  b ? 64 : 67
// }

// function chekPension(e, c, d) {
// 	let age = virsta(c)
// 	let pensie = virstaPensionarii(d)
// 	let aniPanaLaPensionare = pensie - age
// 	console.log(`${age} ${pensie} ${aniPanaLaPensionare}`)
	
// 	if (age < 18) {
// 		console.log(`${e} Persoana este minora`);
// 	} else if (age >= pensie) {
// 		console.log(`${e}Deja este pensionar`);
// 	} else {
// 		console.log(`${e} au ramas ${aniPanaLaPensionare}`)
		
// 	}
// }

// chekPension(numelePersoanei, anulNasterii, isF)
//console.log(virstaPensionarii(isF))




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


//!const bills = [125, 555, 44]

/*function calcBacsis(a) {
	return a < 300 && a >= 50 ? a * 0.15 : a * 0.2
}

const tips = [calcBacsis(bills[0]), calcBacsis(bills[1]), calcBacsis(bills[2])]

console.log(tips)

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(totals)

console.log(friends.sort())
console.log(friends.reverse())
let deletedfriend = friends.pop()
console.log(friends.push(deletedfriend))
console.log(friends)*/

//? exercitiul 1

/*console.log(`Exercitiu 1 - array si array reverse`)

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
console.log('array')
console.log(letters)
console.log('array reverse')
console.log(letters.reverse())*/

//? exercitiul 2

/*console.log('Exercitiul 2 - rotirea array cu 1 pozitie la stinga')

letters.shift()
letters.push('h')
console.log(letters)*/

//? exercitiul 3

/*console.log('Exercitiu 3 - creem si chemam functia de imbinare a 2 array-uri in unul nou')

const numbers = [999, 888, 777, 666, 555, 444, 333, 222, 111]
console.log(numbers)

function newArray() {
	const lettersAndNumbers = numbers.concat(letters)
	return lettersAndNumbers
}
console.log(newArray()) */

//?exercitiul 4

/*console.log('Exercitiul 4 - creem functia care intoarce doar valorile pozitive din array')

const numbers2 = [-1, 5, 22 - 75, 18, 69, -68, -56, 99, 10, -10]
console.log(`Creem array-ul :`)
console.log(numbers2)

function positiveValues() {
	const result = numbers2.filter(item => item > 0)
	return result
}
function negativeValues() {
	const result = numbers2.filter(item => item < 0)
	return result
}
console.log(`Array cu valorile pozitive:`)
console.log(positiveValues())
console.log(`Array cu valorile negaive:`)
console.log(negativeValues()) */

//? exercitiul 5

/*let listaCumparaturi = ['oua', 'piine', 'mere', 'banane', 'cartofi', 'unt', 'inghetata', 'smintina', 'maioneza']
console.log('Lista de cumparaturi:')
console.log(listaCumparaturi)

function sorteazaAlfabetic() {
	let listaCumparaturi1 = [...listaCumparaturi]
	console.log(listaCumparaturi1.sort())
}
console.log("Lista de cumparaturi in ordine alfabetica:");
sorteazaAlfabetic()

//! elimina produs

function eliminaProdus(produs) {
	let listaCumparaturi1 = [...listaCumparaturi]
	produs = listaCumparaturi1.indexOf(produs)
	listaCumparaturi1.splice(produs, 1)
	console.log(listaCumparaturi1)
}
console.log(`Lista de cumparaturi dupa chemarea functiei eliminaProdus`)
eliminaProdus('cartofi')

//! gaseste produs


function cautaProdus(produs) {
	let listaCumparaturi1 = [...listaCumparaturi]
	index = listaCumparaturi1.indexOf(produs)
	listaCumparaturi1.indexOf(produs) != -1 ? console.log(`produsul cautat este ${produs}`) : console.log(`${produs} nu este in lista`)
}
cautaProdus('pere')

//! adaugaProdus

function adaugaProdus(produsulAdaugat) {
	let listaCumparaturi1 = [...listaCumparaturi]
	listaCumparaturi1.includes(produsulAdaugat) ? console.log('Acest produs este deja in lista de cumparaturi') :
	listaCumparaturi1.push(produsulAdaugat)
	console.log(listaCumparaturi1)
}
adaugaProdus('harbuz')

console.log(`Bonus`)


function bonus(produs) {
	const pozitia = listaCumparaturi.indexOf(produs)
	if (pozitia >= 0) {
		console.log(`${produs} este deja in lista, il stergem`)
		listaCumparaturi.splice(pozitia, 1)
		console.log(listaCumparaturi)
	} else {
		console.log(`${produs} nu exista in lista, il adaugam`)
		listaCumparaturi.push(produs)
		console.log(listaCumparaturi)
	}
}
console.log(listaCumparaturi)

bonus('banane')	
bonus('lapte')
bonus('ceapa')
bonus('ulei')
bonus('unt')*/


//! FOR LOOP   -   29.09.2023

/*const myArray = [15, 56, -12, 56, 1, true, 'eu', 58, 69]
console.log(myArray)
for (let i = 0; i < myArray.length; i++) {
	console.log('elementul ' + myArray[i] + ' are pozitia ' + i)
}

for (i = 1; i <= 10; i++){
	console.log(i)
}*/

//afisati numere impare pana la 100

/*for (i = 1; i < 100; i = i + 2){
	console.log(i)
}*/

//afisati tablita inmultirii la 7

/*console.log('tabla inmultirii la 7')

for (i = 1; i <= 10; i = i + 1){
	console.log(i*7)
}*/

//Suma numerelor de la 1 la 10
/*console.log('Suma numerelor de la 1 la 10')



let total = 0

for (i = 1; i <= 10; i++){
	total = total + i
	console.log(total)
}
console.log(`suma cifrelor de la 1 la 10 este egala ${total}`)

let total1 = 0
for (i = 10; i <= 30; i = i + 2){
	total1 = total1 + i
	console.log(total1)
}*/

//calculati si afisati media numerelor din array

/*let sumArray = 0
const newArray = [25, 56, 21, 47, 256, 145, -12, -489, 56, -8, 1453]
for (i = 0; i < newArray.length; i++) {
	sumArray = sumArray + newArray[i]
	console.log('suma cifrelor din array este ' + sumArray)
}

console.log(sumArray/newArray.length, 'este media')*/



//!  WHILE LOOP


//? EX1 Afisam numerele pare pana la 100

/*console.log("Afisam numerele de la 0 la 100 prin while loop")

let i = 0
while (i < 100) {
	console.log(i)
	i+=2
}*/

//? EX2 Afisam un sir Fibonnaci pentru numerele pana la 1000


/*console.log('sir Fibonnaci');

let a = 0
let b = 1

/*while (c < 1000) {
	console.log(c)
	a = b
	b = c
	c = a + b
}*/

//? EX3  Verificarea paritatii

/*let a
while (a !== 'stop') {
	a = prompt('Introduceti numar intreg sau scriti cuvintul STOP')
	if (a % 2 === 0) {
		console.log(`${a} este numar par`)
	} else if (a === 'stop') {
		console.log('A fost introdusa comanda stop')
	} else {
		console.log(`${a} este numar impar`)
	}
}*/


//! Objects

let myCar = [2016, 'Ford', 2, 'gri', 'automat']

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




