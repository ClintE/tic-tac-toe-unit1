
$(document).ready(function () {
   	//var grid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
	var player1 = prompt("Player 1, please enter your name");
	var player2 = prompt("Player 2, please enter your name");
	
	$('#k').html(player1);
	$('#l').html(player2);
	
	var input1 = "X";
	var input2 = "O";
	var currentPlayer = input1;
	var winsx = 0
	var winso = 0

	function switchPlayer() {
		if (currentPlayer === input1) {
			return (currentPlayer = input2)
		}
		else if (currentPlayer = input2) {
			 return (currentPlayer = input1)
		}
	}
	$(".square").click(function () {
		$(this).html(currentPlayer);
		getWinner();
		switchPlayer();
	});
	function getWinner() {
		if (
			$('#a').html() == 'X' && $('#b').html() == 'X' && $('#c').html() == 'X' ||
			$('#d').html() == 'X' && $('#e').html() == 'X' && $('#f').html() == 'X' ||
			$('#g').html() == 'X' && $('#h').html() == 'X' && $('#i').html() == 'X' ||
			$('#a').html() == 'X' && $('#d').html() == 'X' && $('#g').html() == 'X' ||
			$('#b').html() == 'X' && $('#e').html() == 'X' && $('#h').html() == 'X' ||
			$('#c').html() == 'X' && $('#f').html() == 'X' && $('#i').html() == 'X' ||
			$('#a').html() == 'X' && $('#e').html() == 'X' && $('#i').html() == 'X' || 
			$('#c').html() == 'X' && $('#e').html() == 'X' && $('#g').html() == 'X'
			) {

			winsx++;
			$('#n').text(winsx);
			return alert("the winner is" + " " +player1);
		}
		if (
			$('#a').html() == 'O' && $('#b').html() == 'O' && $('#c').html() == 'O' ||
			$('#d').html() == 'O' && $('#e').html() == 'O' && $('#f').html() == 'O' ||
			$('#g').html() == 'O' && $('#h').html() == 'O' && $('#i').html() == 'O' ||
			$('#a').html() == 'O' && $('#d').html() == 'O' && $('#g').html() == 'O' ||
			$('#b').html() == 'O' && $('#e').html() == 'O' && $('#h').html() == 'O' ||
			$('#c').html() == 'O' && $('#f').html() == 'O' && $('#i').html() == 'O' ||
			$('#a').html() == 'O' && $('#e').html() == 'O' && $('#i').html() == 'O' || 
			$('#c').html() == 'O' && $('#e').html() == 'O' && $('#g').html() == 'O'
			) {

			winso++;
			$('#o').text(winso);
			return alert("the winner is" + player2);
		}
		
	};
	
	$('.reset').click(function() {
		$('.square').text('');
	})
	
});

	







