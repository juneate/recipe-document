'use strict'

// Reviews loaded from a data file?
// 		Discuss this as the bridge from websites, to apps (not covered, of course - but let's fake it for now)

// Stick the title in the top?

/*
<figure class="gallery">
	<img src="img/1.jpeg" alt="Some dough" class="gallery-img active" id="one">
	<img src="img/2.jpeg" alt="Some dough" class="gallery-img" id="two">
	<img src="img/3.jpeg" alt="Some dough" class="gallery-img" id="three">
	<img src="img/5.jpeg" alt="Some dough" class="gallery-img" id="four">
	<ul class="gallery-controls">
		<li><button aria-controls="one" class="gallery-btn active">1</button></li>
		<li><button aria-controls="two" class="gallery-btn">2</button></li>
		<li><button aria-controls="three" class="gallery-btn">3</button></li>
		<li><button aria-controls="four" class="gallery-btn">4</button></li>
	</ul>
</figure>
*/


// Can be done in two ways: one listener, or individual listeners
document.querySelector('.gallery-controls').addEventListener('click', event => {
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
	
})

// Maybe use data-?? here??
