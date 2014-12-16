$(document).ready(function(){

	var owl = $("#main_courses_slider"); // save reference to variable
  	owl.owlCarousel({
        items:1,
        loop: true,
        center: true,
        URLhashListener: true,
        autoplay: true,
	    nav: true,
	    navText: ["<",">"],
	    autoplayTimeout: 10000,
	    dots: true, 
    });
    $("#main_courses_slider .owl-dot").on('click',function(){
  		owl.trigger('stop.owl.autoplay');
  		//console.log("Hola");
	});


    // Navigation Events
    $('#testimonials_slider').owlCarousel({
    	items:1,
	    loop:true,
	    margin:10,
	    autoplay: true,
	    nav: false,
	    dots: true,
	    autoplayTimeout: 10000,
	});

	//Add classes each dot
	$("#main_courses_slider .owl-dot").attr('id', function(i) {
			return 'slide'+(i+1);
	});

	//Print slide name
	$("#main_courses_slider #slide1").prepend('<p>Cursos</p>');
	$("#main_courses_slider #slide2").prepend('<p>Básico</p>');
	$("#main_courses_slider #slide3").prepend('<p>Gráficas</p>');
	$("#main_courses_slider #slide4").prepend('<p>Tablas Dinámicas</p>');
	$("#main_courses_slider #slide5").prepend('<p>Macros</p>');




});//End doc ready