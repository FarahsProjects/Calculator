var result=[];
    var num1;
    var num2;
    var answer;

    //Clear output screen from all the inputs using splice.
    $('.clear').on('click', function () {
        result.splice(0);
        $('#input').empty();
    });

    //Displaying the buttons(numbers) values on the output screen when clicked!
    $('.number').on('click', function () {
        if(result.length>6){ //this condition for not adding more than 6 digits on the output screen
            alert("You exceeded the limit")
        }
         result.push(this.id);
         $('#input').html(result);
     });


    //Displaying buttons (operators) values on output screen & invoking the calculation function.
      $('.operator').on('click', function () {
        empty();
        result.push(this.id);
        $('#input').html(result);
        calculation();
    });
   
    //Evaluating mathmatical equations that are stored inside the result array. 
    function calculation(){
       result.forEach(function(element,index,array){ //[2, 2, "+", 1]
            //isNaN(parseInt(element)) will evaluate true when element = operator (+, -)
            if (isNaN(parseInt(element)) && index != result.length-1) { // [num1, operator, num2] //whenever he sees an operator he will sign in to the condition
                num1 = result.splice(0,index).join(""); //  [num1] --> [22] whenever he sees an operator he will take whats before it
                num2 = result.splice(1, result.length-2).join("");  //num2 --> [1] //everything after the operator!
              
                if (element=="+") {
                    answer = parseFloat(num1) + parseFloat(num2);
                }
                if (element=="-") {
                    answer = (num1) - (num2);
                }
           
                result[0]=answer; 
                $('#input').html(answer);
            }
        });
    }
    //To check if anything exists in result, and if anything exists in answer
    function empty(){
            if (parseFloat(answer)!= 0 && result.length == 0) {
                result[0] = answer;
            }
    }
    //do calculation with equal operator
    $('#equal').on('click', function(){
        result.forEach(function(element,index,array){
            if (isNaN(parseInt(element))) {
                num1 = result.splice(0,index).join("");
                num2 = result.splice(1).join("");
               
                if (element=="+") {
                    answer = parseFloat(num1) + parseFloat(num2);
                }
                if (element=="-") {
                    answer = (num1) - (num2);
                }
           
                $('#input').html(answer);
                result = [];
            }
        });
    });


