var squareLimit=16;

$(document).ready(function(){
	for (var i = 1; i <= squareLimit; i++) {
		$('#squareContainer').append('<div id="square' + i + '" class="squareStyle"></div>')
	}
});