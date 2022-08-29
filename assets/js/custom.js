/*
Theme Name: Rims - MULTIPURPOSE HTML5 Template.
Author: Slidesigma
Author URL: https://themeforest.net/user/slidesigma
Version: 1.0.0
*/
(function ($) {
  'use strict';
  	// preloader
  	$(window).on('load', function(){
      $('.preloader').hide();
      $('.loader').removeClass();
      $('html').addClass('overflow');
    });
    // nice select
    $(document).ready(function() {
        $('.custom-select').niceSelect();
        $(".customdropdown").click(function(){
	    	$(".dropdown-menu").toggleClass("show");
	  	});
    });
    $(document).on("click", function (event) {
		var $trigger = $(".customdropdown");
		if ($trigger !== event.target && !$trigger.has(event.target).length) {
			$(".dropdown-menu").removeClass("show");
		}
	});
    $('.menu-item-has-children>a').append('<span class="arrow"></span>');
    $('.menu-item-has-megamenu>a').append('<span class="arrow"></span>');
    // navigation
    $(document).ready(function () {
	    $('.main-navigation li.menu-item-has-children>a, .main-navigation li.menu-item-has-megamenu>a').on('click', function () {
	      $(this).removeAttr('href');
	      var element = $(this).parent('li');
	      if (element.hasClass('open')) {
	        element.removeClass('open');
	        element.find('li').removeClass('open');
	        element.find('ul, .megamenu').slideUp();
	      } else {
	        element.addClass('open');
	        element.children('ul, .megamenu').slideDown();
	        element.siblings('li').children('ul, .megamenu').slideUp();
	        element.siblings('li').removeClass('open');
	        element.siblings('li').find('li').removeClass('open');
	        element.siblings('li').find('ul, .megamenu').slideUp();
	      }
	    });
	  });
	
	// main-banner
	var swiper = new Swiper('.main-banner', {
		slidesPerView: 1,
	    loop: true,
	    effect: 'fade',
	    autoplay: {
	      delay: 2500,
	      disableOnInteraction: false,
	    },
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
    });
    // main-banner-2
	var swiper = new Swiper('.main-banner-2', {
		slidesPerView: 1,
	    loop: true,
	    effect: 'fade',
	    autoplay: {
	      delay: 2500,
	      disableOnInteraction: false,
	    },
	    pagination: {
	      el: '.swiper-pagination',
	      clickable: true,
	    },
    });
    // range slider
    $("#price_range").slider({});
    $("#price_range_2").slider({});
    $("#price_range_3").slider({});
    // recent listing
    var swiper = new Swiper('.recent-listing-slider', {
	    slidesPerView: 1,
	    spaceBetween: 30,
	    loop: true,
	    autoplay: {
	      delay: 2500,
	      disableOnInteraction: false,
	    },
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	    breakpoints: {
	      768: {
	        slidesPerView: 2,
	        spaceBetween: 30,
	      },
	      1200: {
	        slidesPerView: 3,
	        spaceBetween: 30,
	      },
	    }
  	});
  	// recent listing
    var swiper = new Swiper('.blog-slider', {
	    slidesPerView: 1,
	    spaceBetween: 30,
	    loop: true,
	    autoplay: {
	      delay: 2500,
	      disableOnInteraction: false,
	    },
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	    breakpoints: {
	      768: {
	        slidesPerView: 2,
	        spaceBetween: 30,
	      },
	      1200: {
	        slidesPerView: 3,
	        spaceBetween: 30,
	      },
	    }
  	});
  	// recent listing
    var swiper = new Swiper('.testimonial-slider', {
	    slidesPerView: 1,
	    spaceBetween: 30,
	    loop: true,
	    autoplay: {
	      delay: 2500,
	      disableOnInteraction: false,
	    },
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	    breakpoints: {
	      768: {
	        slidesPerView: 2,
	        spaceBetween: 30,
	      },
	      1200: {
	        slidesPerView: 3,
	        spaceBetween: 30,
	      },
	    }
  	});
  	// faqs collaps
  	$(document).ready(function () {
		$('.custom-accordion .card .card-header').on('click', function () {
			$(this).removeAttr('href');
			var element = $(this).parent('.card');
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('.card').removeClass('open');
				element.find('.card-body').slideUp();
			} else {
				element.addClass('open');
				element.children('.card-body').slideDown();
				element.siblings('.card').children('.card-body').slideUp();
				element.siblings('.card').removeClass('open');
				element.siblings('.card').find('.card').removeClass('open');
				element.siblings('.card').find('.card-body').slideUp();
			}
		});
		$('.custom-accordion .card .card-header .title').append('<span class="icon"></span>');
	});
	// time counter
	function makeTimer() {
		var endTime = new Date("01 January 2020 00:00:00 GMT+05:30");
		endTime = (Date.parse(endTime) / 1000);
		var now = new Date();
		now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400);
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") {
			hours = "0" + hours;
		}
		if (minutes < "10") {
			minutes = "0" + minutes;
		}
		if (seconds < "10") {
			seconds = "0" + seconds;
		}
		$("#cvdays").html(days);
		$("#cvhours").html(hours);
		$("#cvminutes").html(minutes);
		$("#cvseconds").html(seconds);
	}
	setInterval(function () {
		makeTimer();
	}, 1000);
	// detail gallery
	var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 15,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 15,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
    // blog-slider-inner
	var swiper = new Swiper('.blog-slider-inner', {
		slidesPerView: 1,
	    loop: true,
	    autoplay: {
	      delay: 2500,
	      disableOnInteraction: false,
	    },
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
    });
    // counter
    $('.count').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 4000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
	// gallery
	$('.grid').masonry({
		itemSelector: '.grid-item',	
		columnWidth: '.grid-sizer',
	});
	$('.magnific-gallery').magnificPopup({
		delegate: 'a', 
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-fade',
		gallery:{
			enabled: true
		}
	});
	// back to top
	var offset = 220;
	  var duration = 500;
	  $(window).on('scroll', function() {
	      if ($(this).scrollTop() > offset) {
	          $('.back-top').fadeIn(duration);
	      } else {
	          $('.back-top').fadeOut(duration);
	      }
	  });

	  $('.back-top').on('click', function(event) {
	      event.preventDefault();
	      $('html, body').animate({scrollTop: 0}, "slow");
	      return false;
	  });

	  if($(window).scrollTop() > offset) {
	      $('.back-top').fadeOut(0);
	  }
	  $('a[href="#"]').click(function(e) {
	    e.preventDefault ? e.preventDefault() : e.returnValue = false;
	});
})(jQuery);