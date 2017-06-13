$(document).ready(function() {
		
	$('.div-class').mouseenter(function() {
		$(this).animate({
			height: '+=10px'
		});
	});
	$('.div-class').mouseleave(function() {
		$(this).animate({
			height: '-=10px'
		}); 
	});
	$('.div-class').click(function() {
		$(this).toggle(1000);
	}); 
	
	$('.button-class').mouseenter(function() {
		$('.div-class').animate({
			height: '-=10px'
		}); 
	});
	
});