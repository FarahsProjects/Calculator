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
// $(document).ready(function() {
//             //Adding to the expression
//             $(".design").click(function() {
//                 if (!$(this).hasClass("not")) {
//                     if ($("#expression").val() == 0)
//                         $("#expression").val($(this).text());
//                     else
//                         $("#expression").val($(
//                           "#expression").val() + $(this).text());
//                 }
//             });





