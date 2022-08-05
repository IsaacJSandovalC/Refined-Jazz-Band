// @codekit-prepend "/vendor/TweenLite.min.js";
// @codekit-prepend "/vendor/TimelineLite.min.js";
// @codekit-prepend "/vendor/CSSPlugin.min.js";
// @codekit-prepend "/vendor/CSSRulePlugin.min.js";
// @codekit-prepend "/vendor/ScrollToPlugin.min.js";
// @codekit-prepend "/vendor/jquery.gsap.min.js";
// @codekit-prepend "/vendor/ScrollMagic.min.js";
// @codekit-prepend "/vendor/animation.gsap.min.js";
// @codekit-prepend "/vendor/jquery.ScrollMagic.min.js";

$(document).ready(function() {
	
	/***************** Splashscreen ******************/
	
	$(window).load(function() {
		
		$('.splashscreen').addClass('splashscreen--is-hidden');
		
		setTimeout(function() {
			$('.splashscreen').css( {'display': 'none'} );
			
			/* Introduction Animation */
			var $name = $('.introduction__content-el--name'),
	  			$job = $('.introduction__content-el--job');
			TweenLite.to([$name, $job], 0.8, {x: 0, opacity: 1, ease: Power1.easeOut});
		}, 800);
		
	});
	
	/***************** Responsive Nav ******************/

  $('.navigation__burger').click(function() {
	  
	  navigationToggle();
	  
  });
  
  function navigationToggle() {
	  
	  $('.navigation__burger').toggleClass('navigation__burger--is-open');
	  $('.navigation__container').toggleClass('navigation__container--is-open');
	  $('html, body').toggleClass('scroll-lock');
	  
  }
  
  /***************** Smooth Scroll ******************/
  
  $('a[href*="#"]:not([href="#0"])').click(function(ev) {
	  
	  ev.preventDefault();
		
		if ($('.navigation__container').hasClass('navigation__container--is-open')) {
			navigationToggle();
		}
			
		var target = $(this).attr('href');
		
		TweenLite.to(window, 1, {scrollTo: target});
		
	});
});
