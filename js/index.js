'use strict'

// Reviews loaded from a data file?
// 		Discuss this as the bridge from websites, to apps (not covered, of course - but let's fake it for now)

// Stick the title in the top?


// Booleans, best to write the variable in the form of a question
let isMetric = true  // true is G, false is OZ


let unit = "metric"
let flour = 500

// let water = 400
// let salt = 10
// let yeast = 7.5

/* let Ingredient = function (n, a) {
	this.name = n
	this.amount = a
	this.print = () => {
		return `We have ${this.amount} ${this.name}${(this.amount > 1)?'s':''}`
	}
}

const app = new Ingredient('apple', 1)
console.log(app.print())
 */

/* 
// Or this?
let ingredients = {
	flour: 500,
}

// Or thiiiis?
let ingredients = [
	{ name: "flour", qty: 500 },
] 
*/


document.querySelector('#toggle').addEventListener('change', (event) => {
	// isMetric = event.target.checked

	// Is a radio button better here?!

	let amtFlour = document.querySelector(`#flour`)

	if (event.target.checked) {
		unit = "metric"
		amtFlour.textContent = `${flour} g`
	} else {
		unit = "imperial"
		amtFlour.textContent = toImperial(flour)
	}
	
	let unitLabel = document.querySelector('#unit')
	unitLabel.textContent = unit
})


// Start by just returning the number, then realize the oz conversion
let toImperial = (g) => {
	let oz = g / 28.34952
	if (oz > 16) {
		return `${Math.floor(oz/16)} lb, ${(oz % 16).toFixed(2)} oz`
	}
	return `${oz.toFixed(2)} oz`
	// return `${oz.toFixed(2)}oz`
}

console.log(toImperial(100))


// Use a slide to show how this works!!!!
let toOunces = (g) => {
	return g / 28.34952
}

let getWeightStringFromOz = (oz) => {
	// Then later, we'll remove the "lb" if less than 16!!
	// return `${Math.floor(oz/16)} lb, ${(oz % 16).toFixed(2)} oz`
	return `${oz / 16} lb, ${oz % 16} oz`
}

// Remember, strings work inside out!!
const ingredientName = `flour`
const ingredientQty = 500
console.log(`${getWeightStringFromOz(toOunces(ingredientQty))} of ${ingredientName}`)




const imgPath = 'img/'
const images = [
	{
		url: '1.jpeg',
		caption: 'Some caption'
	}, 	{
		url: '2.jpeg',
		caption: 'Some caption'
	}, 	{
		url: '3.jpeg',
		caption: 'Some caption'
	}
]

const gal = document.querySelector('#gallery')
// <img src="img/1.jpeg" alt="Some dough" class="gallery-img active" id="one">
const con = document.querySelector('#controls')
// <li><button aria-controls="one" class="gallery-btn active">1</button></li>

// These are "images", but more so they're data!
images.forEach((img, i) => {
	const newImage = document.createElement('img')
	newImage.setAttribute('src', imgPath + img.url)
	newImage.setAttribute('alt', img.caption)
	newImage.classList.add('gallery-img')  // This can also use setAttribute
	gal.append(newImage)
	// no id?
	// Because the elements are not pre-existing, and being crated on the fly, it's much easier to assign a listener directly to them!
	// Now this runs contrary to how it was done with delegation!!!

	const newBtn = document.createElement('button')
	newBtn.classList.add('gallery-btn')
	newBtn.addEventListener('click', (event) => {

		// Deactive current active tab
		document.querySelector('.gallery-btn.active').classList.remove('active')
		// Deactive current active pane
		document.querySelector('.gallery-img.active').classList.remove('active')

		newImage.classList.add('active')
		newBtn.classList.add('active')
	})
	const newControl = document.createElement('li')
	newControl.append(newBtn)
	con.append(newControl)

	// Start on the outside, then explain why it's better not to assume dom order?
	if (i == 0) {
		newImage.classList.add('active')
		newBtn.classList.add('active')
	}
})


// Set the first one to be "active"? Here or in the loop. Here requires no if statement



// Can be done in two ways: one listener, or individual listeners
// Delegation needs to be explained!!!!
/* document.querySelector('.gallery-controls').addEventListener('click', event => {
	// Leave if a button wasn't clicked
	if (!event.target.matches('button')) return // ? button[aria-controls]
	
	// Deactive current active tab
	document.querySelector('.gallery-btn.active').classList.remove('active')
	// Deactive current active pane
	document.querySelector('.gallery-img.active').classList.remove('active')
	// NOTE: If one of those was not '.active', it creates a problem, could this be part two?
	
	// Set the tab to active
	event.target.classList.add('active')
	// Which panel should be active?
	let panelId = event.target.getAttribute('aria-controls')
	// Set the panel to active
	document.getElementById(panelId).classList.add('active')
	
}) */


