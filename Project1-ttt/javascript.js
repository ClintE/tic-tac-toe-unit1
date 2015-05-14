
$(document).ready(function () {
 //  	var grid = [ '#a', '#b', '#c', '#d', '#e', '#f', '#g', '#h', '#i'];
	// var player1 = prompt("Please enter your name");
	// var player2 = prompt("Please enter your name");
	// var play = "X"
	alert("test");
	var currentPlayer = input1;
	var input1 = "X";
	var input2 = "O";

	$(".square").click(function () {
		$(this).html(currentPlayer);
		function switchPlayer() {
			if (currentPlayer === input1) {
				return (currentPlayer = input2)
			}
			else if (currentPlayer = input2) {
				 return (currentPlayer = input1)
			}

		})


		



 	 

 });




// 		function () {
// 			//alert('sweetness')
// 			$(this).siblings('p').toggleClass('hidden');
// 			//alert('sweetness')
// 		}
// 	);
// 	//begin the content remove code
// 	$('.delete').click(
// 		function () {
// 			//alert('sweetness')
// 			$(this).parent().remove();
// 			//alert('sweetness')
// 		}
// 	);
// 	//begin the content edit code
//
// 	$('.edit').click(
// 		function () {
// 			//alert('click')
// 			$(this).next().toggleClass('hidden');
//
// 	});
//
//
//
// 			//bring up form to enter text that can replace contents
// 	$('.submit').click(
// 		function () {
// 			//alert('click')
// 			var value = $(this).prev().val();
// 			$("#para1").replaceWith("<p>" + value + "</p>");
//
// 			});
//
//
// });
