// var squareLimit=16;

// $(document).ready(function(){
// 	for (var i = 1; i <= squareLimit; i++){
// 		$('.squareWrapper').append('<div>');

// 			for (var j = 1; j <= squareLimit; j++) {
// 				$('.squareWrapper').append('<div id="square' + i + '" class="squareStyle"></div>')
// 			}

// 		$('.squareWrapper').append('</div>');
// }
// });


$(document).ready(function() {
	
	//sets initial 16 x 16 grid
	var divs = "";
	for (var i = 1; i <= 256; i++){
		divs += '<div class="squares"></div>';
	};

	$(".wrapper").append(divs);
	//mouse enter event
	$('.squares').mouseenter(function(){
		$(this).addClass("visited");
	});


	//Click event to change grid size
	$('#gridSize').click(function(){
		populate();
		$('.squares').mouseenter(function(){
			$(this).addClass("visited");
		});
	});

	//Click event to fade grid color
	$('#colorFade').click(function(){
		$('.squares').mouseenter(function(){
			$(this).animate({opacity: 0}).addClass("visited");
		});
	});

	$('#clearGrid').click(function(){
		clearGrid();
	});

	//Click event to generate random color on mouse-over
	$('#randomColor').click(function(){
		$('.squares').mouseenter(function(){
			var color = '#' + Math.random().toString(16).substring(2, 8);
			$(this).css("background-color", color);
		});
	});

});

	//Prompts the user for grid size and populates new ScratchPad
	function populate() {
		var temp = "";
		var div = '<div class="squares"></div>';
		var input = parseInt(prompt("Choose a new grid size!"), 10);
		$('.squares').remove();
		for (var i = 1;  i <= input * input;  i++) {
			temp += div;
		};
		$(".wrapper").append(temp);
		var height = 640 / input;
		$('.squares').css('height', height);
		$('.squares').css('width', height);
	}

	function clearGrid() {
	
	$('.squares').css('background-color', '#383838');


}