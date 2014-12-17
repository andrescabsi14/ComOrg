$(document).ready(function(){


$('#carousel-example-generic').carousel()

	owl_ppal();
	owl_testimonial();
	fixes_slider_ppal();
	console.log("Hola");
});//End doc ready

function owl_ppal(){
	var owl = $("#main_courses_slider"); // save reference to variable
  	owl.owlCarousel({
        items:1,
        loop: true,
        center: true,
        URLhashListener: true,
        startPosition: 'URLHash',
        autoplay: true,
	    nav: true,
	    navText: ["<",">"],
	    autoplayTimeout: 10000,
	    dots: true,
	    autoplayHoverPause:true,
    });




	var hash = window.location.hash.substr(1);
	console.log(hash); // alerts the hash tag at the end of the URL
	console.log(hash.length);
	if (hash.length >= 0) {
		console.log("Verdaderooo");
		owl.trigger('owl.jumpTo', hash)
	};





}
// Navigation Events
function owl_testimonial(){
    $('#testimonials_slider').owlCarousel({
    	items:1,
	    loop:true,
	    margin:10,
	    autoplay: true,
	    nav: false,
	    dots: true,
	    autoplayTimeout: 10000,
	});
}

function fixes_slider_ppal(){
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
}
	



