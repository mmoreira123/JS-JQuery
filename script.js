var sideSize = 16;
var pix = 700;

$(document).ready(function(){
	gridInit(sideSize);
	draw();

	$('button').click(function(){
		clearGrid();
		sideSize=prompt("How many sides on the new grid?");
		console.log(sideSize);
		gridInit();
		draw();
	});
});


function gridInit(size){
	for(var i=0; i<size*size; i++){
			$("#wrapper").append($('<div class="grid"></div>'));
	}
}

function clearGrid(){
	$("div.grid").remove();
	console.log("cleared");
}

function draw(){
	$("div.grid").hover(function(){
		$(this).addClass('touch');
		$("div.touch").css("opacity", "+=0.5");
	});
}