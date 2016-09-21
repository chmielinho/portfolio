$(document).ready(function() {
    $('#fullpage').fullpage({
	showActiveTooltip: true,
	menu: '#menu',
    anchors: ['about', '', 'abilities', 'portfolio', 'contact'],
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


	function imgPosition() {
		var winSize = $(window).width();
		console.log(winSize);
		if (winSize <= 767) {
			var widthDesc = $('.description').width();
			var widthImg = $('.myPhoto', '.description').width();
			var marginS = widthDesc - widthImg + 8;
			var marginMp = marginS + 2;
			$('.myPhoto', '.description').css('left', marginMp);
			$('.space', '.description').css('left', marginS);
		} else {
			$('.myPhoto', '.description').css('left', '-200px');
		}
	}
	$(function() {
		imgPosition();
	});
	$(window).resize(imgPosition);
	
});