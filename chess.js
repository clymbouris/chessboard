
function chessBoard(){
	var board = $('#board');
	for(var i = 0; i < 8; i++) {
		board.append(chessRow());
	}

	function chessRow(){
		var row = '<div class="row">';
		for(var i = 0; i < 8; i++) {
			row += '<div class="tile"></div>';
		}
		row += '</div>';

		return row;
	}
}

chessBoard();