//! Coding challenge de la lectia Data Types - 6 sept

//?  ---Prima varianta---
/*
let vadimsWeight = 78
let vadimsHeight = 1.68
let alexWeight = 92
let alexHeight = 1.95
let vadimsBMI = vadimsWeight / vadimsHeight ** 2
let alexBMI = alexWeight / alexHeight ** 2
let markHigherBMI = vadimsBMI > alexBMI

console.log('Prima varianta')
console.log('Vadim are BMI ' + vadimsBMI)
console.log('Alex are BMI ' + alexBMI)
console.log('BMI al lui Vadim este mai mare decat al lui Alex? ' + markHigherBMI)
*/

//?  ---A doua varianta---
/*
let vadimsWeight1 = 95
let vadimsHeight1 = 1.88
let alexWeight1 = 85
let alexHeight1 = 1.76
let vadimsBMI1 = vadimsWeight1 / vadimsHeight1 ** 2
let alexBMI1 = alexWeight1 / alexHeight1 ** 2
let markHigherBMI1 = vadimsBMI1 > alexBMI1

console.log('A doua varianta')
console.log('Vadim are BMI ' + vadimsBMI1)
console.log('Alex are BMI ' + alexBMI1)
console.log('BMI al lui Vadim este mai mare decat al lui Alex? ' + markHigherBMI1)
*/

//!  ---4 exerciții de la lecția if/else statement - 8 sept---

//?   ---exercitiu 1---
/*
console.log(`Exercitiu 1:`)
let number1 = 35
let number2 = 35
console.log(`Variabila 1 - ${number1}, variabila 2 - ${number2}`)
console.log(`Care din cele 2 variabile declarate este mai mare:`)

if (number1 > number2) {
	console.log(`Variabila 1 - ${number1} este mai mare`)
}
else {
	console.log(`Variabila 2 - ${number2}, este mai mare`)
}
*/

//?   ---exercitiul 2---
/*
console.log("Exercitiul 2:")
console.log("Declaram 3 variabile (2 numere si un simbol) si afisam doar variabila care este simbol: ")

let firstVar = 3
let secondVar = "-"
let thirdVar = 7

console.log(`Prima variabila : " ${firstVar} "`)
console.log(`A 2 variaila : " ${secondVar} "`)
console.log(`A 3 variabila : " ${thirdVar} "`)

if (typeof firstVar == "string") {
	console.log(`Prima variabila, " ${firstVar} ", este simbol`)
}
else if (typeof secondVar == "string") {
	console.log(`A 2 variabila, " ${secondVar} ", este simbol`)
}
else if (typeof thirdVar == "string"){
	console.log(`A 3 variabila, " ${thirdVar} ", este simbol`)
}
else {
	console.log(`Nici una din variabile nu este simbol`)
}
*/
//?exercitiul 3
/*
console.log("Exercitiul 3")
console.log("Scriem o conditie care va afisa 3 numere in ordere crescatoare")

let firstNumber = 4
let secondNumber = 9
let thirdNumber = -6

console.log(`Prima variabila este : " ${firstNumber} "`)
console.log(`A 2 variabila este : " ${secondNumber} "`)
console.log(`A 3 variabila este : " ${thirdNumber} "`)

if (firstNumber < secondNumber && firstNumber < thirdNumber && secondNumber < thirdNumber) { console.log
(`Numerele in ordine crescatoare : ${firstNumber} , ${secondNumber} , ${thirdNumber}`)
}
else if (firstNumber < secondNumber && firstNumber < thirdNumber && thirdNumber < secondNumber) {
	console.log(`Numerele in ordine crescatoare : ${firstNumber} , ${thirdNumber} , ${secondNumber}`)
}
else if (secondNumber < firstNumber && secondNumber < thirdNumber && firstNumber < thirdNumber) {
	console.log(`Numerele in ordine crescatoare : ${secondNumber} , ${firstNumber} , ${thirdNumber}`)
}
else if (secondNumber < firstNumber && secondNumber < thirdNumber && thirdNumber < firstNumber) {
	console.log(`Numerele in ordine crescatoare : ${secondNumber} , ${thirdNumber} , ${firstNumber}`)
}
else if (thirdNumber < firstNumber && thirdNumber < secondNumber && secondNumber < firstNumber) {
	console.log(`Numerele in ordine crescatoare : ${thirdNumber} , ${secondNumber} , ${firstNumber}`)
}
else {
	console.log(`Numerele in ordine crescatoare : ${thirdNumber} , ${firstNumber} , ${secondNumber}`)
}
*/
//?  ---Ordine descrescatoare---
/*
console.log(`Ordine descrescatoare:`)

if (firstNumber > secondNumber && firstNumber > thirdNumber && secondNumber > thirdNumber) { console.log
(`Numerele in ordine descrescatoare : ${firstNumber} , ${secondNumber} , ${thirdNumber}`)
}
else if (firstNumber > secondNumber && firstNumber > thirdNumber && thirdNumber > secondNumber) {
	console.log(`Numerele in ordine descrescatoare : ${firstNumber} , ${thirdNumber} , ${secondNumber}`)
}
else if (secondNumber > firstNumber && secondNumber > thirdNumber && firstNumber > thirdNumber) {
	console.log(`Numerele in ordine descrescatoare : ${secondNumber} , ${firstNumber} , ${thirdNumber}`)
}
else if (secondNumber > firstNumber && secondNumber > thirdNumber && thirdNumber > firstNumber) {
	console.log(`Numerele in ordine descrescatoare : ${secondNumber} , ${thirdNumber} , ${firstNumber}`)
}
else if (thirdNumber > firstNumber && thirdNumber > secondNumber && secondNumber > firstNumber) {
	console.log(`Numerele in ordine descrescatoare : ${thirdNumber} , ${secondNumber} , ${firstNumber}`)
}
else {
	console.log(`Numerele in ordine descrescatoare : ${thirdNumber} , ${firstNumber} , ${secondNumber}`)
}
*/

//? ---Exercitiul 4---
/*
console.log("Exercitiul 4")
console.log("Scriem o conditie cara va afisa doar cel mai mare numar:")

let firstNum = -7
let secondNum = -3
let thirdNum = 258
let fourthNum = 258
let fifthNum = 0

console.log(`Primul numar este : ${firstNum}`)
console.log(`Al 2-lea numar este : ${secondNum}`)
console.log(`Al 3-lea numar este : ${thirdNum}`)
console.log(`Al 4-lea numar este : ${fourthNum}`)
console.log(`Al 5-lea numar este : ${fifthNum}`)

if (firstNum >= secondNum && firstNum >= thirdNum && firstNum >= fourthNum && firstNum >= fifthNum) {
	console.log(`Cel mai mare numar este ${firstNum}`)
}
else if (secondNum >= thirdNum && secondNum >= fourthNum && secondNum >= fifthNum) {
	console.log(`Cel mai mare numar este ${secondNum}`)
}
else if (thirdNum >= fourthNum && thirdNum >= fifthNum) {
	console.log(`Cel mai mare numar este ${thirdNum}`)
}
else if (fourthNum >= fifthNum) {
	console.log(`Cel mai mare numar este ${fourthNum}`)
}
else {
	console.log(`Cel mai mare numar este ${fifthNum}`)
}
*/

//! ---Echipele de sport v.1 (Switch statement 11 sept.)---

//?  ---Exercitiu 1---

//console.log('Exercitiu #1 - calculatorul scorului')

//* Varianta 1
/*
console.log('Varianta 1')

let scoreDelfinii1 = 96
let scoreDelfinii2 = 108
let scoreDelfinii3 = 89
let scoreKoalas1 = 88
let scoreKoalas2 = 91
let scoreKoalas3 = 110

let mediumScoreDelfini = (scoreDelfinii1 + scoreDelfinii2 + scoreDelfinii3) / 3
let mediumScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3

console.log(`Scorul mediu al echipei Delfinii este : ${mediumScoreDelfini} puncte`)
console.log(`Scorul mediu al echipei Koalas este : ${mediumScoreKoalas} puncte`)

if (mediumScoreDelfini > 100 || mediumScoreKoalas > 100) {
	if (mediumScoreDelfini === mediumScoreKoalas) {
		console.log('Remiza - ambele echipe au acumulat acelasi scor mediu!')
	}
	else if (mediumScoreDelfini > mediumScoreKoalas) {
		console.log("Echipa Delfinii este castigatoare!")
	} else {
		console.log("Echipa Koalas este castigatoare!")
	}
} else {
	console.log('Nici o echipa nu a atins scorul mediu de 100 de puncte')
}
*/


//* Varianta 2
/*
console.log('Varianta 2')

let scoreDelfinii1 = 97
let scoreDelfinii2 = 112
let scoreDelfinii3 = 101
let scoreKoalas1 = 109
let scoreKoalas2 = 95
let scoreKoalas3 = 123

let mediumScoreDelfini = (scoreDelfinii1 + scoreDelfinii2 + scoreDelfinii3) / 3
let mediumScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3

console.log(`Scorul mediu al echipei Delfinii este : ${mediumScoreDelfini} puncte`)
console.log(`Scorul mediu al echipei Koalas este : ${mediumScoreKoalas} puncte`)

if (mediumScoreDelfini > 100 || mediumScoreKoalas > 100) {
	if (mediumScoreDelfini === mediumScoreKoalas) {
		console.log('Remiza - ambele echipe au acumulat acelasi scor mediu!')
	}
	else if (mediumScoreDelfini > mediumScoreKoalas) {
		console.log("Echipa Delfinii este castigatoare!")
	} else {
		console.log("Echipa Koalas este castigatoare!")
	}
} else {
	console.log('Nici o echipa nu a atins scorul mediu de 100 de puncte')
}
*/

//* Varianta 3
/*
console.log('Varianta 3')

let scoreDelfinii1 = 97
let scoreDelfinii2 = 112
let scoreDelfinii3 = 101
let scoreKoalas1 = 109
let scoreKoalas2 = 95
let scoreKoalas3 = 106

let mediumScoreDelfini = (scoreDelfinii1 + scoreDelfinii2 + scoreDelfinii3) / 3
let mediumScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3

console.log(`Scorul mediu al echipei Delfinii este : ${mediumScoreDelfini} puncte`)
console.log(`Scorul mediu al echipei Koalas este : ${mediumScoreKoalas} puncte`)

if (mediumScoreDelfini > 100 || mediumScoreKoalas > 100) {
	if (mediumScoreDelfini === mediumScoreKoalas) {
		console.log('Remiza - ambele echipe au acumulat acelasi scor mediu!')
	}
	else if (mediumScoreDelfini > mediumScoreKoalas) {
		console.log("Echipa Delfinii este castigatoare!")
	} else {
		console.log("Echipa Koalas este castigatoare!")
	}
} else {
	console.log('Nici o echipa nu a atins scorul mediu de 100 de puncte')
}
*/

//! ---Ana’s calculator v.1 - (Switch statement 11 sept.)---


//?   ---Exercitiu 2---

//* Varianta 1
/*
console.log('Exercitiu #2 - calculator de bacsis')
console.log('Varianta 1')

let cashReceipt = 275
cashReceipt >= 50 || cashReceipt <= 300 ? (tips = cashReceipt * 0.15) : (tips = cashReceipt * 0.2)
let finalValue = cashReceipt + tips

console.log(`Nota de plata este de ${cashReceipt}, bacsisul este de ${tips} si valoarea totala este de ${finalValue}`)

//* Varianta 2

console.log('Varianta 2')

cashReceipt = 40
cashReceipt >= 50 && cashReceipt <= 300 ? (tips = cashReceipt * 0.15) : (tips = cashReceipt * 0.2)
finalValue = cashReceipt + tips

console.log(`Nota de plata este de ${cashReceipt}, bacsisul este de ${tips} si valoarea totala este de ${finalValue}`)

//* Varianta 3

console.log('Varianta 3')

cashReceipt = 430
cashReceipt >= 50 && cashReceipt <= 300 ? (tips = cashReceipt * 0.15) : (tips = cashReceipt * 0.2)
finalValue = cashReceipt + tips

console.log(`Nota de plata este de ${cashReceipt}, bacsisul este de ${tips} si valoarea totala este de ${finalValue}`)
*/

//!  ---Exercitiu: echipele de sport v.2 (lectia functii - 20 sept)---

/*
function calcAverage(score1, score2, score3) {
	return (score1 + score2 + score3) / 3
}

let avgDolphins = calcAverage(44, 23, 71)
let avgKoalas = calcAverage(65, 54, 49)

console.log(`Scorul mediu al echipei Delfinii este de ${avgDolphins} de puncte`)
console.log(`Scorul mediu al echipei Delfinii este de ${avgKoalas} de puncte`)

function chekWinner(avgDolphins, avgKoalas) {
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
avgKoalas = calcAverage(23, 34, 27)

console.log(`Scorul mediu al echipei Delfinii este de ${avgDolphins} de puncte`)
console.log(`Scorul mediu al echipei Delfinii este de ${avgKoalas} de puncte`)

chekWinner(avgDolphins, avgKoalas)
*/

//!  ---4 Exercitii de la coding day (22 sept)---

//? ---ex 1---
//! Scrieți o funcție de traducere numită helloWorld
/*
function helloWorld(language) {
	if (language === "es") {
		return "Hola Mundo!"
	} else if (language === "de") {
		return "Hallo Welt!"
	} else if (language === "jp") {
		return "こんにちは世界!"
	} else {
		return "Hello, World!"
	}
}

console.log(helloWorld("es"));
console.log(helloWorld("de"))
console.log(helloWorld("jp"))
console.log(helloWorld())
*/

//? ---ex 2---
//! Scrieți o funcție cu numele plural
/*
function numbersAnimals(number, name) {
	if (number === 1 || name === "sheep") {
		return (`I have ${number} ${name}`)
	} else if (number !== 1 && name === "goose") {
		return (`I have ${number} geese`)
	} else {
		return (`I have ${number} ${name}s`)
	}
}

console.log(numbersAnimals(6, "pig"))
console.log(numbersAnimals(0, "hamster"))
console.log(numbersAnimals(1, "parrot"))
console.log(numbersAnimals(5, "sheep"))
console.log(numbersAnimals(1, "goose"))
console.log(numbersAnimals(3, "goose"))
*/

//? ---ex 3---
//! pretul biletului la gradina Botanica

/*
let pret
let anulDeNastere = prompt("introduceti anul de nastere")

function age(birthYear) {
	console.log(2023 - anulDeNastere)
}
age()

function cost(anulDeNastere) {
	let virsta = age(anulDeNastere)
	if (virsta < 12) {
		pret = 5
	} else if (virsta >= 12 && virsta < 18) {
		pret = 10
	} else if (virsta >= 18 && virsta < 65) {
		pret = 20
	} else {
		pret = 15
	}
	console.log(`Pretul biletului este de ${pret} lei iar virsta e de ${virsta} ani`);
}

cost(2015)
cost(1985)
cost(1957)
cost(2008)
*/

//? ---ex 4---
//! Virsta de pensionare
/*
let numele = prompt("Introduceti numele dvs")
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

virstaDePensionare() 
*/

//Sergiu 1979
//Anastasia 1963
//Andreea 2010


//! ---Ana’s calculator v.2 (lectia Arrays - 25 sept)---
/*
const bills = [125, 555, 44]

function calcBacsis(a) {
	return a < 300 && a >= 50 ? a * 0.15 : a * 0.2
}

const tips = [calcBacsis(bills[0]), calcBacsis(bills[1]), calcBacsis(bills[2])]
console.log(tips)

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(totals)
*/

//? 4 Exercitii la array (lectia Arrays - 25 sept)

//?  ---exercitiul 1---
/*
console.log(`Exercitiu 1 - array si array reverse`)

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
console.log('array')
console.log(letters)
console.log('array reverse')
console.log(letters.reverse())
*/

//? ---exercitiul 2---
/*
console.log('Exercitiul 2 - rotirea array cu 1 pozitie la stinga')

letters.shift()
letters.push('h')
console.log(letters)
*/

//? ---exercitiul 3---
/*
console.log('Exercitiu 3 - creem si chemam functia de imbinare a 2 array-uri in unul nou')

const numbers = [999, 888, 777, 666, 555, 444, 333, 222, 111]
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
console.log(numbers)
console.log(letters)

function newArray() {
	const lettersAndNumbers = numbers.concat(letters)
	return lettersAndNumbers
}
console.log(newArray()) */

//?  ---exercitiul 4---
/*
console.log('Exercitiul 4 - creem functia care intoarce doar valorile pozitive din array')

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
console.log(negativeValues())
*/


//! ---Gestionarea Listei de Cumpărături (lectia Arrays - 25 sept)---

/*
let listaCumparaturi = ['oua', 'piine', 'mere', 'banane', 'cartofi', 'unt', 'inghetata', 'smintina', 'maioneza']
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
bonus('unt')
*/


//! ---Exercitii for loop: (lectia array loops 29 sept)---


//? ---ex 1---
/*
for (i = 1; i <= 10; i++){
	console.log(i)
}
*/

//? ---ex 2---
/*
for (i = 1; i < 100; i = i + 2){
	console.log(i)
}
*/

//? ---ex 3---

/*
console.log('tabla inmultirii la 7')

for (i = 1; i <= 10; i = i + 1){
	console.log(i*7)
}


(reduce)

let multipleTo7 = numb.reduce((a, b) => {
	a.push (b * 7)
	return a
}, [])
	console.log(multipleTo7)
*/

//? ---ex 4---
/*
console.log('Suma numerelor de la 1 la 10')
const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let total = numb.reduce(function (a, b) {
	return a + b
}, 0)

console.log(`suma numerelor de la 1 la 10 este ${total}`)
*/

//? ---ex 5---
/*
let number = []
for (let i = 10; i <= 30; i++){
	number.push(i)
}
console.log(number)

let total = number.reduce(function(a, b){
	return a + b
}, 0)

console.log(`Suma numerelor de la 10 la 30 este egala cu ${total}`)
*/


//? ---ex 6---

//calculati si afisati media numerelor din array

/*
let sumArray = 0
const newArray = [25, 56, 21, 47, 256, 145, -12, -489, 56, -8, 1453]
const newAverage = newArray.reduce((a, b) => {
	return a + b
}, )
console.log(newAverage/newArray.length)
*/


//!  WHILE LOOP

//? Exercitii while loop: (lectia array loops 29 sept)


//? ---EX1 Afisam un sir Fibonnaci pentru numerele pana la 1000---

/*
let arr = [0, 1];
let next = 1;

while (next <= 1000) {
	next = arr[arr.length - 1] + arr[arr.length - 2];
	if (next <= 1000) {
		arr.push(next);
	}
}

console.log(arr);
*/


//? ---EX2  Verificarea paritatii---

/*
let a
while (a !== 'stop') {
	a = prompt('Introduceti numar intreg sau scriti cuvintul STOP')
	if (a % 2 === 0) {
		console.log(`${a} este numar par`)
	} else if (a === 'stop') {
		console.log('A fost introdusa comanda stop')
	} else {
		console.log(`${a} este numar impar`)
	}
}
*/


//? ---ex3 cautarea unui element intr-un array prin ciclul WHILE---
/*
let newArray = [25, 17, 'Arina', 56, 'Olga']
let arrElement = prompt('Ce element cautati')
let arrElementFound = false
let i = 0

while (i < newArray.length && !arrElementFound) {
	if (newArray[i] == arrElement) {
		console.log(`Elementul ${arrElement} a fost gasit la pozitia ${i}`)
		arrElementFound = true
	}
	i++
}

if (!arrElementFound) {
	console.log(`Elemenul ${arrElement} nu a fost gasit`)
	
}
*/


//! ---Ana’s calculator v.3 (lectia array loops 29 sept)---

//! ex Calcul bacsis + media facuri prin ciclu for cu adaugarea a 2 array-uri care includ lista de bacsis si facturi totale

/*let facturi = [22, 295, 176, 440, 37, 105, 10, 1100, 56, 82]
let bacsis
let tips = []
let totals = []

function calcTips(factura) {
	bacsis = factura <= 300 && factura >= 50 ? bacsis = factura * 0.15 : bacsis = factura * 0.2
	return bacsis
}

for (i = 0; i < facturi.length; i++){
	bacsis = calcTips(facturi[i])
	tips.push(bacsis)
	totals.push(bacsis + facturi[i])
}

console.log(tips)
console.log(totals)

function calcAverageTotals(arr) {
	let suma = 0
	for (let i = 0; i < arr.length; i++){
		suma += arr[i]
	}
	return suma / arr.length
}

const mediaTotals = calcAverageTotals(totals)
console.log(`media pentru 10 facturi este ${mediaTotals}`)*/


//? ---Calcularea economiilor și a dobânzii compuse(lectia array loops 29 sept)---
//! ex3 calcularea dobinzii compuse

/*
function calculateInterest(principal, rate, years) {
	let amount = principal
	for (let i = 0; i < years; i++){
		amount += amount * rate / 100
	}
	return amount
}

function calculateMonthlyContribution(contribution, rate, years) {
	let amount = 0
	for (let i = 0; i < years * 12; i++){
		amount += contribution
		amount += amount * rate / 100 / 12
	}
	return amount
}

function printSavings(name, principal, rate, years, monthlyContribution) {
	const interest = calculateInterest(principal, rate, years)
	const contribution = calculateMonthlyContribution(monthlyContribution, rate, years)
	const total = interest + contribution
	console.log(`${name}, suma totala care va fi in contul tau de depozit peste ${years} ani este de ${total.toFixed(2)}`);
}

printSavings('Ioana', 1000, 5, 10, 50)
*/

//! oiecte - metode / exrecitii

//! ex1
/*
let carte = {
	titlu: 'Abecedar',
	autor: 'Grigore VIeru',
	imprumuta: function (cititor) {
		return console.log(`${cititor.nume} a imprumutat cartea ${this.titlu}`)
	}
}
console.log(carte.imprumuta(cititor))

let cititor = {
	nume: 'Ion Antonescu',
	imprumutaCarte: function (carte) {
		carte.imprumuta(this)
	}
}

cititor.imprumutaCarte(carte)


//? ex 2 - calculator

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

