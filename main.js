// function getHistory(){
//     return document.getElementById("history-value").innerText;
// }
// function printHistory(num){
//     document.getElementById("history-value").innerText=num;
// }
// function getOutput(){
//     return document.getElementById("output-value").innerText;
// }
// function printOutput(num){
//     if(num==""){
//         document.getElementById("output-value").innerText=num;
//     }
//     else{
//         document.getElementById("output-value").innerText=getFormattedNumber(num);
//     }   
// }
// function getFormattedNumber(num){
//     if(num=="-"){
//         return "";
//     }
//     var n = Number(num);
//     var value = n.toLocaleString("en");
//     return value;
// }
// function reverseNumberFormat(num){
//     return Number(num.replace(/,/g,''));
// }
// var operator = document.getElementsByClassName("operator");
// for(var i =0;i<operator.length;i++){
//     operator[i].addEventListener('click',function(){
//         if(this.id=="clear"){
//             printHistory("");
//             printOutput("");
//         }
      
//         else{
//             var output=getOutput();
//             var history=getHistory();
//             if(output==""&&history!=""){
//                 if(isNaN(history[history.length-1])){
//                     history= history.substr(0,history.length-1);
//                 }
//             }
//             if(output!="" || history!=""){
//                 output= output==""?output:reverseNumberFormat(output);
//                 history=history+output;
//                 if(this.id=="="){
//                     var result=eval(history);
//                     printOutput(result);
//                     printHistory("");
//                 }
//                 else{
//                     history=history+this.id;
//                     printHistory(history);
//                     printOutput("");
//                 }
//             }
//         }
        
//     });
// }
// var number = document.getElementsByClassName("number");
// for(var i =0;i<number.length;i++){
//     number[i].addEventListener('click',function(){
//         var output=reverseNumberFormat(getOutput());
//         if(output!=NaN){ //if output is a number
//             output=output+this.id;
//             printOutput(output);
//         }
//     });
// }

// the initial value fot the screen output = 0;
    // first we need to put all clicked items into history
    //then if we click = it will evaluate the quation stored the history
    //if we press C it will empty both history and screen out put and set output value to Zero
    //if we click the number twice it will print it as much as we click on it
    // the calculator will only perform one quation and its not acumulative
    // if we have 1+2 =3 .. we can't put 3+4 =7 we need to input 3 from the beggining
    // the calculator will only process numbers from 6 digits.

//The initial value diplayed will be zero.


//  var history = $("#output-value")
//  $("#output-value").append(history)
 
 
//  // ("button").onclick =function displayToScreen(){
//  //    var history = document.getElementsByTagName("button").innerHTML;
//  // console.log(history) 
//  // }
// var array = []
// array = $(".number").text()
// console.log(array)
// var test = $(".number").text()
// console.log(test)// they are not an array!!!

  




//  var initialDisplay = 0;  
//  $(document).ready(function(){
//     $(".number1").click(function(){
//      $("#output-value").text($(".number1").text())
//     })
//     $(".number2").click(function(){
//      $("#output-value").text($(".number2").text())
//     })
//     $(".number3").click(function(){
//      $("#output-value").text($(".number3").text())
//     })
//       $(".number4").click(function(){
//      $("#output-value").text($(".number4").text())
//     })
//     $(".number5").click(function(){
//      $("#output-value").text($(".number5").text())
//     })
//     $(".number6").click(function(){
//      $("#output-value").text($(".number6").text())
//     })
//     $(".number7").click(function(){
//      $("#output-value").text($(".number7").text())
//     })
//     $(".number8").click(function(){
//      $("#output-value").text($(".number8").text())
//     })
//     $(".number9").click(function(){
//      $("#output-value").text($(".number9").text())
//     })

  
// $(".number").each(function(i, num){
//     $(this).click(function(e){
//         if(initialDisplay == "0")
//             initialDisplay = "";

//         if($(this).text() == "C"){
//             initialDisplay = "0";
//             $("#output-value").text(initialDisplay);
//         }
//     })
// })

//     })


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
