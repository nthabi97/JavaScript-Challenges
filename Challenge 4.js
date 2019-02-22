const hourOfNum = 60; /*an hour has 60 minutes and that does not change
					hence 'hour is declared as a constant*/
					
const seconds = 60; //60 seconds in a minute

var 

console.log("The time is as follows: " + (num1/hourOfNum+ "Hour(s) and " + num1%seconds)+ "minutes");
console.log("The time is as follows: " + (num2/hourOfNum+ "Hour(s) and " + num2%seconds)+ "minutes");
console.log("The time is as follows: " + (num3/hourOfNum+ "Hour(s) and " + num3%seconds)+ "minutes");

function hourConverter(num){
var  hours = Math.floor(num / 60);
var  minutes = (num % 60);
return (hours + " : " + minutes);
}
console.log(hourConverter(prompt("Enter some digits")))
