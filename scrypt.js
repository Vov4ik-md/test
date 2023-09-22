// //Prima varianta

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

// // A doua varianta

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


// exercitiu 1

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

//exercitiul 2

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

//exercitiul 3

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

//Ordine descrescatoare

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

// Exercitiul 4

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

// exercitiu - Equality operator

//const favoriteNumber = Number(prompt('Care este numarul preferat?'))

// const favoriteNumber = 56

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


// logical operators

// const hasDriverLicense = true

// const hasGoodVision = true

// const isTired = true

//AND operator (&&)

// if (hasDriverLicense && hasGoodVision && !isTired) {
// 	console.log('Ana can drive')
// } else {
// 	console.log('Ana can not drive')
// }

// OR operator (||)

// if (!hasDriverLicense || !hasGoodVision || isTired) {
// 	console.log('Ana can not drive')
// } else {
// 	console.log('Ana can drive')
// }


// switch statement

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

//The conditional (Ternary) Operator

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

//Exercitiu 1

//console.log('Exercitiu #1 - calculatorul scorului')


//Varianta 1

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

//Varianta 2

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

//Varianta 3

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

//Exercitiu 2

//Varianta 1

// console.log('Exercitiu #2 - calculator de bacsis')

// console.log('Varianta 1')

// let cashReceipt = 275

// cashReceipt >= 50 || cashReceipt <= 300 ? (tips = cashReceipt * 0.15) : (tips = cashReceipt * 0.2)

// let finalValue = cashReceipt + tips

// console.log(`Nota de plata este de ${cashReceipt}, bacsisul este de ${tips} si valoarea totala este de ${finalValue}`)

//Varianta 2

// console.log('Varianta 2')

// cashReceipt = 40

// cashReceipt >= 50 && cashReceipt <= 300 ? (tips = cashReceipt * 0.15) : (tips = cashReceipt * 0.2)

// finalValue = cashReceipt + tips

// console.log(`Nota de plata este de ${cashReceipt}, bacsisul este de ${tips} si valoarea totala este de ${finalValue}`)

//Varianta 3

// console.log('Varianta 3')

// cashReceipt = 430

// cashReceipt >= 50 && cashReceipt <= 300 ? (tips = cashReceipt * 0.15) : (tips = cashReceipt * 0.2)

// finalValue = cashReceipt + tips

// console.log(`Nota de plata este de ${cashReceipt}, bacsisul este de ${tips} si valoarea totala este de ${finalValue}`)

//Function

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

// function declaration and expresion

// function declaration
console.log(calcVirsta4(1980))


function calcVirsta4(anulNasterii) {
	return age = 2023 - anulNasterii //returnam variabila age
}

// expresion
const calcVirsta3 = function (anulNasterii) { 
	return age = 2023 - anulNasterii //returnam variabila age
}

console.log(calcVirsta3(1989))

function calcTips(factura) {
	bacsis = factura <= 300 && factura >= 50 ? factura * 0.15 : factura * 0.2
	console.log(`Factura este de ${factura}, bacsisul este de ${bacsis} si total spre plata ${factura + bacsis}`)
}

calcTips(275)
calcTips(40)
calcTips(430)

//other method

function calcTips1(factura) {
	bacsis = factura <= 300 && factura >= 50 ? factura * 0.15 : factura * 0.2
	return `Factura este de ${factura}, bacsisul este de ${bacsis} si total spre plata ${factura + bacsis}`
}

console.log(calcTips1(420))
console.log(calcTips1(150))
console.log(calcTips1(45))

// function simpleFunction() {
// 	alert('e prea usoara aceasta functie')
// }

// simpleFunction()

function simpleFunction() {
	console.log('e prea usoara aceasta functie')
}

simpleFunction()

//function in funtion

function virstaPinaLaPensie(pensia, anulMeuDeNastere) {
	const virstaActuala = calcVirsta4(anulMeuDeNastere)
	return pensia - virstaActuala
}

console.log(`Pana la pensie au mai ramas ${virstaPinaLaPensie(64, 1975)} ani`)

function maruntinFructe(fruct) {
	return fruct * 4
}

function juiceMaker2(fruct1, fruct2, fruct3) {
	const juice = `suc din ${maruntinFructe(fruct1)} de bucatele de cirese, ${maruntinFructe(fruct2)} de felii de portocale si ${maruntinFructe(fruct3)} de felii de mere`
	console.log(juice)
}

juiceMaker2(5, 3, 8)

console.log("Runda 1")

function calcAverage(score1, score2, score3) {
	return averageScore = (score1 + score2 + score3) / 3
}

let avgDolphins = calcAverage(44, 23, 71)

console.log(`Scorul mediu al echipei Delfinii este de ${avgDolphins} de puncte`)

let avgKoalas = calcAverage(65, 54, 49)

console.log(`Scorul mediu al echipei Delfinii este de ${avgKoalas} de puncte`)

function chekWinner(avgScore1, avgScore2) {
	if (avgDolphins > avgKoalas * 2) {
		console.log("Echipa Delfinii a castigat")
	} else if (avgKoalas > avgDolphins * 2) {
		console.log("Echipa Koalas a castigat")
	} else {
		console.log("Nu au fost indeplinite conditiile pentru a alege un castigator")
	}
}

chekWinner(avgDolphins, avgKoalas)

console.log("Runda 2")

avgDolphins = calcAverage(85, 54, 41)

console.log(`Scorul mediu al echipei Delfinii este de ${avgDolphins} de puncte`)

avgKoalas = calcAverage(23, 34, 27)

console.log(`Scorul mediu al echipei Delfinii este de ${avgKoalas} de puncte`)

chekWinner(avgDolphins, avgKoalas)
