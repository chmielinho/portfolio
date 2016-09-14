$(document).ready(function() {
    $('#fullpage').fullpage({
	showActiveTooltip: true,
	menu: '#menu',
    anchors: ['about', 'about', 'abilities', 'portfolio', 'contact'],
	slidesNavigation: true,
	slidesNavPosition: 'bottom',
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopHorizontal: true,
	touchSensitivity: 15,
	normalScrollElementTouchThreshold: 5,
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,
	controlArrows: true,
	verticalCentered: true,
	sectionSelector: '.section',
	slideSelector: '.slide',
	});
});


/* resizing element .description marign */
$(window).resize(function() {
	var heightDescription = parseInt($('.description')[0].getBoundingClientRect().height);
	heightDescription = heightDescription/2;
	$('.description').css('margin-top', '40vh').css('margin-top', '-=' + heightDescription);
	var marginTop = parseInt($('.description').css('margin-top'), 10);
	if (marginTop>200) {
		$('.description').css('margin-top', 'auto');
	}	
});