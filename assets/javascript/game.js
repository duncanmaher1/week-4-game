


$(document).ready(function() {

var win = 0;
var loss = 0;
var computerNumber = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var crystalTotal = 0;
var audio1 = $("#clickSound")[0];
var audio2 = $("#winSound")[0];
var audio3 = $("#lossSound")[0];

function randomNumber(min,max){
    	return Math.floor(Math.random()*(max-min+1)+min);
		}

	function restart(){
		computerNumber = 0;
		crystal1 = 0;
		crystal2 = 0;
		crystal3 = 0;
		crystal4 = 0;
		crystalTotal = 0;
		$('#yourNum').text(0);
		startGame();
	};

function checkScore() {
		if (crystalTotal == computerNumber) {
			win++;
			$('#win').text(win);
			restart();
		};

		if (crystalTotal > computerNumber) {
			loss++;
			$('#loss').text(loss);
			restart();
		};
};

function startGame(){
		var num1 = randomNumber(19,120);
		computerNumber = num1;
		$('#compNum').text(computerNumber);

		var num2 = randomNumber(1,12);
		crystal1 = num2;

		var num3 = randomNumber(1,12);
		crystal2 = num3;

		var num4 = randomNumber(1,12);
		crystal3 = num4;

		var num5 = randomNumber(1,12);
		crystal4 = num5;
	}

		$("#crystalimg1").click(function(){
		    crystalTotal += crystal1;
		    $('#yourNum').text(crystalTotal);
		    $(this).effect("bounce", { times:2 }, 300);
		    checkScore();
		});

		$("#crystalimg2").click(function(){
		    crystalTotal += crystal2;
		    $('#yourNum').text(crystalTotal);
		    $(this).effect("bounce", { times:2 }, 300);
		    checkScore();
		});

		$("#crystalimg3").click(function(){
		    crystalTotal += crystal3;
		    $('#yourNum').text(crystalTotal);
		    $(this).effect("bounce", { times:2 }, 300);
		    checkScore();
		});

		$("#crystalimg4").click(function(){
		    crystalTotal += crystal4;
		    $('#yourNum').text(crystalTotal);
		    $(this).effect("bounce", { times:2 }, 300);
		    checkScore();
		});

startGame();

});
