$(function () {

	"use strict";

	// =====================================================
	// FORM VALIDATION
	// =====================================================
	$('#form').parsley();

	// Clear parsley empty elements
	if ($('#form').length > 0) {
		$('#form').parsley().on('field:success', function () {
			$('ul.parsley-errors-list').not(':has(li)').remove();
		});
	}

	// =====================================================
	// PRELOADER
	// =====================================================
	function anim1() {
		$('html').removeClass('is-preload');
	}

	function anim2() {
		$('.photo-frame').addClass('active');
		$('.big-menu .photo-frame').removeClass('active');
	}

	function anim3() {
		$('.big-menu .photo-frame').toggleClass('active');
	}
	$(document).ready(function () {
		setTimeout(anim1, 1500);
		$('.loader').addClass('active');
		setTimeout(anim2, 2000);
	});

	// =====================================================
	// SWUP
	// =====================================================
	const options = {
		containers: ['#dynamic-content'],
		animateHistoryBrowsing: true,
		linkSelector: 'a:not([data-no-swup])',
	};
	const swup = new Swup(options);

	// =====================================================
	// FANCYBOX
	// =====================================================
	$('[data-fancybox="gallery"]').fancybox({
		animationEffect: "zoom-in-out",
		animationDuration: 600,
		transitionDuration: 1200,
		backFocus: false
	});
	$.fancybox.defaults.hash = false;

	// =====================================================
	// MOBILE HEIGHT FIX
	// =====================================================	
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	// =====================================================
	// MENU
	// =====================================================
	$('.menu-btn').on('click', function () {
		$('.menu-btn , .big-menu-frame, .big-menu').toggleClass('active');
		$('.top-bar-frame').toggleClass('menu-opened');
		setTimeout(anim3, 300);
	});

	$('.fs-menu .has-children').on('click', function () {
		$('.fs-menu .has-children ul').removeClass('active');
		$(this).children('ul').addClass('active');
	});

	// =====================================================
	// SLIDERS
	// =====================================================	
	var swiper = new Swiper('.slider-1s', {
		slidesPerView: 1,
		speed: 1200,
		parallax: true,
		pagination: {
			el: '.pagination',
			type: "fraction",
		},
		navigation: {
			prevEl: '.prev',
			nextEl: '.next',
		},
	});

	var swiper = new Swiper('.slider-3s', {
		slidesPerView: 3,
		initialSlide: 1,
		speed: 1200,
		centeredSlides: true,
		parallax: true,
		navigation: {
			prevEl: '.prev',
			nextEl: '.next',
		},
		breakpoints: {
			992: {
				slidesPerView: 2,
			},
			768: {
				initialSlide: 0,
				spaceBetween: 40,
				slidesPerView: 1,
			},
		},
	});

	var swiper = new Swiper('.banner-slider', {
		slidesPerView: 1,
		speed: 800,
		parallax: true,
		loop: true,
		effect: 'fade',
		pagination: {
			el: '.pagination',
			clickable: true,
		},
		autoplay: {
			delay: 4000,
		},
		navigation: {
			prevEl: '.prev',
			nextEl: '.next',
		},
	});

	var swiper = new Swiper('.slideshow', {
		slidesPerView: 1,
		speed: 1200,
		parallax: true,
		effect: 'fade',
		pagination: {
			el: '.pagination',
			type: "fraction",
		},
		autoplay: {
			delay: 4000,
		},
		navigation: {
			prevEl: '.prev',
			nextEl: '.next',
		},
	});

	// =====================================================
	// REINIT
	// =====================================================
	document.addEventListener("swup:contentReplaced", function () {

		// =====================================================
		// FORM VALIDATION
		// =====================================================
		$('#form').parsley();

		// Clear parsley empty elements
		if ($('#form').length > 0) {
			$('#form').parsley().on('field:success', function () {
				$('ul.parsley-errors-list').not(':has(li)').remove();
			});
		}

		// =====================================================
		// START ANIMATONS
		// =====================================================
		if ($('html').hasClass('is-rendering')) {
			$("html, body").animate({
				scrollTop: 0
			}, {
				duration: 0,
				complete: function () { }
			});
		}
		$('.photo-frame').removeClass('active');
		setTimeout(anim2, 300);

		// =====================================================
		// FANCYBOX
		// =====================================================
		$('[data-fancybox="gallery"]').fancybox({
			animationEffect: "zoom-in-out",
			animationDuration: 600,
			transitionDuration: 1200,
			backFocus: false
		});
		$.fancybox.defaults.hash = false;

		// =====================================================
		// MOBILE HEIGHT FIX
		// =====================================================
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// =====================================================
		// MENU
		// =====================================================
		$('.menu-btn').on('click', function () {
			$('.menu-btn , .big-menu-frame, .big-menu').toggleClass('active');
			$('.top-bar-frame').toggleClass('menu-opened');
			setTimeout(anim3, 300);
		});

		$('.fs-menu .has-children').on('click', function () {
			$('.fs-menu .has-children ul').removeClass('active');
			$(this).children('ul').addClass('active');
		});

		// =====================================================
		// SLIDERS
		// =====================================================
		var swiper = new Swiper('.slider-1s', {
			slidesPerView: 1,
			speed: 1200,
			parallax: true,
			pagination: {
				el: '.pagination',
				type: "fraction",
			},
			navigation: {
				prevEl: '.prev',
				nextEl: '.next',
			},
		});

		var swiper = new Swiper('.slider-3s', {
			slidesPerView: 3,
			initialSlide: 1,
			speed: 1200,
			centeredSlides: true,
			parallax: true,
			navigation: {
				prevEl: '.prev',
				nextEl: '.next',
			},
			breakpoints: {
				992: {
					slidesPerView: 2,
				},
				768: {
					initialSlide: 0,
					spaceBetween: 40,
					slidesPerView: 1,
				},
			},
		});

		var swiper = new Swiper('.banner-slider', {
			slidesPerView: 1,
			speed: 800,
			parallax: true,
			loop: true,
			effect: 'fade',
			pagination: {
				el: '.pagination',
				clickable: true,
			},
			autoplay: {
				delay: 4000,
			},
			navigation: {
				prevEl: '.prev',
				nextEl: '.next',
			},
		});

		var swiper = new Swiper('.slideshow', {
			slidesPerView: 1,
			speed: 1200,
			parallax: true,
			effect: 'fade',
			pagination: {
				el: '.pagination',
				type: "fraction",
			},
			autoplay: {
				delay: 4000,
			},
			navigation: {
				prevEl: '.prev',
				nextEl: '.next',
			},
		});
	});

});
