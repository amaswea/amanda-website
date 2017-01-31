$(document).ready(function() {
	$('.fa-clickable').click(function(evt) {
		var nearestLink = $(evt.target).children('.paper')[0];
		nearestLink.click();
	})
});