$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:1,
		autoplay:true,
		speed:250,
		autoplaySpeed:300,
		fade: true,
		waitForAnimate: false,
		pauseOnHover: false,
		// asNavFor: ('.slider_2'),
	}		
	);
	$('.slider_2').slick({
		arrows:true,
		dots:false,
		slidesToShow:1,
		autoplay:true,
		speed:250,
		autoplaySpeed:300,
		fade: true,
		waitForAnimate: false,
		pauseOnHover: false,
		// asNavFor: ('.slider'),
	}		
	);
});

