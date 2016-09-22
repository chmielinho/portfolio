$(document).ready(function() {
    $('#fullpage').fullpage({
	showActiveTooltip: true,
	menu: '#menu',
    anchors: ['about', 'abouts', 'abilities', 'portfolio', 'contact'],
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
	onLeave: function(index, nextIndex, direction){
		setTimeout(function(){
  			if (index == 1 || nextIndex == 2) {
				$('li:first', '#menu').addClass('active');
			}
		}, 1)},
	});
	

	function imgPosition() {
		var winSize = $(window).width();
		console.log(winSize);
		if (winSize <= 767) {
			var widthDesc = $('.description', '#about-section').width();
			var widthImg = $('.myPhoto', '#about-section .description').width();
			var marginS = widthDesc - widthImg + 8;
			var marginMp = marginS + 2;
			$('.myPhoto', '#about-section .description').css('left', marginMp);
			$('.space', '#about-section .description').css('left', marginS);
		} else {
			$('.myPhoto', '#about-section .description').css('left', '-200px');
		}
	}
	$(function() {
		imgPosition();
	});
	$(window).resize(imgPosition);
});