$(document).ready(function(){
	
	console.log("Script included!");

	$(".aStrike").click(function(){


		$(this).toggleClass("strike");

	});

	$(".aHighlight").click(function(){

		$(this).attr("id", "highlight");
		$(this).prevAll().removeAttr("id");
		$(this).nextAll().removeAttr("id");
		
	});

});