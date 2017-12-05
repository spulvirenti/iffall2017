$(document).ready(function(){
	$("h1").fadeIn(2000);
	})
	$(document).ready(function(){
		$(".button_container").fadeIn(5000);
	})
$(document).ready(function() {
	$('body').css('display', 'none');
	$('body').fadeIn(500);
	$('a').click(function() {
		event.preventDefault();
		newLocation = this.href;
		$('body').fadeOut(500, newpage);
	});
	function newpage() {
		window.location = newLocation;
	}
});