window.onload = () => {




	/* Particle.js */
	(function(){
		if (typeof particlesJS === 'undefined')
			return
		/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
		particlesJS.load('particles', 'config/particles.json', function() {
			console.log('callback - particles.js config loaded');
		});
	})();




	

	/* Preloader */
	(function(){
		var preloader = document.querySelector('.spinner-wrapper');
		setTimeout(() => { preloader.classList.add('faded'); }, 0);
		setTimeout(() => { preloader.remove(); }, 500);
	})();




	/* Back To Top Button Fade in / Fade out*/
	// create the back to top button
	var amountScrolled = 400;
	window.addEventListener('scroll', event =>
	{
        if (window.scrollY > amountScrolled)
			document.querySelector('a.back-to-top').classList.remove('faded')
		else
			document.querySelector('a.back-to-top').classList.add('faded')
	})



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