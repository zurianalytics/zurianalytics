import './particles.js';
import './bootstrap.native.min.js';
import './rotate-text';
import TxtRotate from './rotate-text'

window.onload = () => {

	/* Rotate text */
	var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
	}
	


	/* Particle.js */
	(function(){
		if (typeof particlesJS === 'undefined')
			return
		/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
		particlesJS.load('particles', '/config/particles.json', function() {
			console.log('callback - particles.js config loaded');
		});
	})();



	// Smooth scroll to link
	document.querySelectorAll('.page-scroll').forEach(link => link.addEventListener('click', e =>
	{
		if(!(window.location.pathname.length > 1))
			e.preventDefault()
		
		// Get the reference
		let link = e.currentTarget
		let goto = link.getAttribute('href').replace("/", "")

		// Scroll
		document.querySelector(goto).scrollIntoView({ behavior: 'smooth' });
	}))



	// Remove long focus on links 
	document.querySelectorAll('a').forEach(link => link.addEventListener('click', e => e.currentTarget.blur()))


	//Collapse the navbar on scroll
	function collapse()
	{
		if (window.scrollY > 20) 
			document.querySelector('.fixed-top').classList.add('top-nav-collapse')
		else 
			document.querySelector('.fixed-top').classList.remove('top-nav-collapse')
	}
	document.addEventListener('scroll', collapse)
	collapse();


	// Rotate text 
	(function(){
		var elements = document.getElementsByClassName('txt-rotate');
		for (var i=0; i<elements.length; i++) {
			var toRotate = elements[i].getAttribute('data-rotate');
			var period = elements[i].getAttribute('data-period');
			if (toRotate) {
				new TxtRotate(elements[i], JSON.parse(toRotate), period);
			}
		}
	}())
}