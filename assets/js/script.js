$(document).ready(function(){
	

	$(".title").fadeIn(2500);


	$("#about").click(function(){
		$('html, body').animate({
			scrollTop: $("#aboutsection").offset().top
		}, 1500);
	});

	$("#experience").click(function(){
		$('html, body').animate({
			scrollTop: $("#experiencesection").offset().top
		}, 1500);
	});

	$("#contact").click(function(){
		$('html, body').animate({
			scrollTop: $("#contactsection").offset().top
		}, 1500);
	});



	var topOfDiv = $("#aboutsection").offset().top;
	$(window).scroll(function(){
		if($(window).scrollTop() < topOfDiv) {
			// alert("it's working");
			$("#aboutimage").fadeIn(1500);
		};
	});

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


	$("#arrowimage").click(function(){
		$('html, body').animate({
			scrollTop: $("#header").offset().top
		}, 1000);
	});



});