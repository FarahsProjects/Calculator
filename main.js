var result=[];
    var num1;
    var num2;
    var answer;
    $('.clear').on('click', function () {
        result.splice(0);
        $('#input').empty();
    });
     $('#1').on('click', function () {
         result.push(1);
         $('#input').html(result);
     });
     $('#2').on('click', function () {
         result.push(2);
         $('#input').html(result);
     });
     $('#3').on('click', function () {
        result.push(3);
        $('#input').html(result);
    });
     $('#4').on('click', function () {
        result.push(4);
        $('#input').html(result);
    });
    $('#5').on('click', function () {
         result.push(5);
        $('#input').html(result);
    });
    $('#6').on('click', function () {
        result.push(6);
        $('#input').html(result);
    });
    $('#7').on('click', function () {
         result.push(7);
        $('#input').html(result);
    });
    $('#8').on('click', function () {
         result.push(8);
        $('#input').html(result);
    });
    $('#9').on('click', function () {
         result.push(9);
        $('#input').html(result);
    });
    $('#0').on('click', function () {
         result.push(0);
        $('#input').html(result);
    });
    $('#decimal').on('click', function () {
        result.push('.');
        $('#input').html(result);
    });
    //click on calc signs and process calculation
    $('#plus').on('click', function () {
        empty();
        result.push('+');
        $('#input').html(result);
        calculation();
    });
    $('#minus').on('click', function () {
        empty();
        result.push('-');
        $('#input').html(result);
        calculation();
    });
    // $('#divide').on('click', function () {
    //     empty();
    //     result.push('/');
    //     $('#input').html(result);
    //     calculation();
    // });
    // $('#multiply').on('click', function () {
    //     empty();
    //     result.push('x');
    //     $('#input').html(result);
    //     calculation();
    // });
// (+,-,=,/,*)
 //do calculation and show result with mathematical operators  && isNaN(parseInt(result[result.length-1]))
    function calculation(){
               //3  +   4 =7
               // false && true


        result.forEach(function(element,index,array){
            console.log(result);
            //check if 2 cal sign exist in the array
            //result = [3, "+", 5]
            if (isNaN(parseInt(element)) && element != "." && index != result.length-1) {
                  //splice will take a part from the array and return it into a new one.
                // join will invert the array into a string eg array [4,5] --> "45"
              
                if (element=="+") {
                    answer = parseFloat(num1) + parseFloat(num2);
                }
                if (element=="-") {
                    answer = (num1) - (num2);
                }
                // if (element=="x") {
                //     answer = (num1) * (num2);
                // }
                // if (element=="/") {
                //     answer = (num1) / (num2);
                // }
                result[0]=answer; //155
                $('#input').html(answer);
            }
        });
    }
    //to check if anything exists in result, and if anything exists in answer
    function empty(){
            if (parseFloat(answer)!= 0 && result.length == 0) {
                result[0] = answer;
            }
    }
    //do calculation with equal sign
    $('#equal').on('click', function(){
        result.forEach(function(element,index,array){
            if (isNaN(parseInt(element)) && element != ".") {
                num1 = result.splice(0,index).join("");
                num2 = result.splice(1).join("");
                console.log(num1)
                console.log(num2)
                if (element=="+") {
                    answer = parseFloat(num1) + parseFloat(num2);
                }
                if (element=="-") {
                    answer = (num1) - (num2);
                }
                // if (element=="x") {
                //     answer = (num1) * (num2);
                // }
                // if (element=="/") {
                //     answer = (num1) / (num2);
                // }
                $('#input').html(answer);
                result = [];
            }
        });
    });
=======
// //Adding button’s value when the screen is pressed.
// Implementing backspace for input.
// Clear expression screen (AC)
// $(document).ready(function(){
// })
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}





