// //Adding button’s value when the screen is pressed.
// Implementing backspace for input.
// Clear expression screen (AC)
$(document).ready(function(){
 

})


$(document).ready(function() { 
            //Adding to the expression 
            $(".design").click(function() { 
                if (!$(this).hasClass("not")) { 
                    if ($("#expression").val() == 0) 
                        $("#expression").val($(this).text()); 
                    else 
                        $("#expression").val($( 
                          "#expression").val() + $(this).text()); 
                } 
            }); 


//hii