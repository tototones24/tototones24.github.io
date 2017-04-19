$(document).ready(function(){
	
	// $("#about").click(function(){
	// 	alert("heloo");
	// });

	$(".title").fadeIn(2500);



	$("#about").click(function(){
		$('html, body').animate({
			scrollTop: $("#aboutsection").offset().top
		}, 2000);
	});

	$("#experience").click(function(){
		$('html, body').animate({
			scrollTop: $("#experiencesection").offset().top
		}, 2000);
	});

	$("#contact").click(function(){
		$('html, body').animate({
			scrollTop: $("#contactsection").offset().top
		}, 2000);
	});



	var topOfDiv = $("#aboutsection").offset().top;
	$(window).scroll(function(){
		if($(window).scrollTop() < topOfDiv) {
			// alert("it's working");
			$("#aboutimage").fadeIn(2000);
		};
	});

	// //this does not work
	// $("#aboutimage").hover(function(){
	// 	$("#aboutimage").animate({right: '300px'});
	// });


	//stuff for the contact section
	$('#email').mouseover(function(){
		$("#emaildescription").show();
		$("#emailimage").css("opacity", 0.25);
	});
	$('#email').mouseout(function(){
		$("#emaildescription").hide();
		$("#emailimage").css("opacity", 1);
	});

	
	$('#github').mouseover(function(){
		$("#githubdescription").show();
		$("#githubimage").css("opacity", 0.25);
	});
	$('#github').mouseout(function(){
		$("#githubdescription").hide();
		$("#githubimage").css("opacity", 1);
	});

	
	$('#linkedin').mouseover(function(){
		$("#linkedindescription").show();
		$("#linkedinimage").css("opacity", 0.25);
	});
	$('#linkedin').mouseout(function(){
		$("#linkedindescription").hide();
		$("#linkedinimage").css("opacity", 1);
	});


});