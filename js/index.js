$(document).ready(function(){
	
  	$("#main_courses_slider").owlCarousel({
        items:1,
        loop: true,
        center: true,
        URLhashListener: true,
        autoplay: true,
	    nav: true,
	    navText: ["<",">"],
	    autoplayTimeout: 16000,
	    dots: true,
    });
    /*// Navigation Events
    $('#testimonials_slider').owlCarousel({
    	items:1,
	    loop:true,
	    margin:10,
	    autoplay: true,
	    nav: true,
	    navText: ["prev","next"],
	    pagination: true,
	    paginationNumbers: true,
	    stopOnHover : true
	    /*responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:3,
	            nav:false
	        },
	        1000:{
	            items:5,
	            nav:true,
	            loop:false
	        }
	    }/
	});*/

	//Add classes each dot
	$('#main_courses_slider .owl-dot').attr('id', function(i) {
			return 'slide'+(i+1);
	});

	//Print slide name
	$("#main_courses_slider #slide1").prepend('<p>Cursos</p>');
	$("#main_courses_slider #slide2").prepend('<p>Básico</p>');
	$("#main_courses_slider #slide3").prepend('<p>Gráficas</p>');
	$("#main_courses_slider #slide4").prepend('<p>Tablas Dinámicas</p>');
	$("#main_courses_slider #slide5").prepend('<p>Macros</p>');

});//End doc ready