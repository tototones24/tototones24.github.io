$(document).ready(function(){
	
	$("#about").click(function(){
		alert("heloo");
	});

	$(".title").fadeIn(5000);

	// $("#aboutimage").rotate(45);

	// $("#aboutimage").click(function(){
	// 	alert("doope");
	// });
	var topOfDiv = $("#aboutsection").offset().top;

	$(window).scroll(function(){
		if($(window).scrollTop() < topOfDiv) {
			// alert("it's working");
			$("#aboutimage").fadeIn(2000);
		};
	});


});