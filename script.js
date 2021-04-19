function compute() {
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate / 100;
var year = new Date().getFullYear()+parseInt (years);
/* validation fub=nvtion*/
if (principal <= 0) {
	alert("Enter a positive number");
	/*after pressing ok in alert window, get back to principal input field*/
	document.getElementById("principal").focus();
	return false;

	}
	/* if input is positive number, compute func runs*/
 else {
 	/*numbers in result are in span tag*/
document.getElementById("result").innerHTML= "If you deposit <span class=highlight>"+principal+"</span>, \<br\>at an interest rate <span class=highlight>"+rate+"</span> %, \<br\>You will receive an amount of <span class=highlight>"+interest+"</span>, \<br\>in the year <span class=highlight>"+year+"</span> \<br\>"
}
}
/* rate value updated when range is adjusted*/
function updateRate() {
	var rateval = document.getElementById("rate").value;
	document.getElementById("rate_val").innerText=rateval;
}
