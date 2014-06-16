$(document).ready(function(){

function hasClick(objId){
	this.objID = objId
	this.hasClick = false;
}

var menuClick = new hasClick("#dropdown");
var jsClick = new hasClick("#jsDiv");

$("#firstDiv").click(function(){

	if(menuClick.hasClick == false){
		$("#dropdown").show(function(){
			$(this).slideDown();
		menuClick.hasClick = true;
		})	
	} else {
		$("#dropdown").hide(function(){
			$(this).slideUp();
		menuClick.hasClick = false;
		});
	}

})

$("li a").hover(function(){
	$(this).siblings(".popdesc").toggle();
})


$("#jsDiv").click(function(){
	$(this).siblings(".exDiv").show();

})

$("#firstDiv").click(function(){
	$(".exDiv").hide();

})




/* JAVASCRIPT PRACTICE EXERCISES */


/* for loop exercise */
	var meal = ["breakfast", "lunch", "dinner"];
	var fruit = ["apple", "pineapple", "watermelon", "peach"];
	var fruitsalad = [meal, fruit];

	for (var i = 0; i < fruitsalad.length; i++ ){
		for (var j = 0; j < fruitsalad[i].length; j++){

		$("#exOutput1").html(fruitsalad[i][j]);
		}
	}


// while loop exercise

x = 99
while (x > 0){

	if (x<2 && x > 0){
		console.log(x + " bottle of beer on the wall, " + x + " bottles of beer on the wall... take one down, pass it around, " + (x-1) + " bottles of beer on the wall." );
	} else{
	console.log(x + " bottles of beer on the wall, " + x + " bottles of beer on the wall... take one down, pass it around, " + (x-1) + " bottles of beer on the wall." );
}
x--
}

// scope exercise


var globalVar = 8;
var ch = "a";

function getVars(){
	var localVar = 9;
	console.log(ch) 
	console.log(localVar) 
}

getVars();


// find palindrom exercise

function findPalindrome(x){
	// get word as a string
	// add it to first var
	var frontwards = x;
	// reverse the incoming string
	// save it into a second var
	var backwards = x.split("").reverse().join("");
console.log(backwards)
	// compare var 1 and var 2
	// return true if they match
	// return false if they don't match
	// output

		if (frontwards == backwards){
			$("#exOutput2").html(x + " is a palindrome.");
		} else {
			$("#exOutput2").html(x + " is NOT palindrome.");
		}
	}

findPalindrome("noon");

// accepts a string as an argument and checks it for vowels


function findVowels(x){
// get word as string
// add string to var
// break var into array of letters
var word = x //.split("");
var vowelCount = 0;
// for loop to look through characters and find vowels
for(var i = 0; i < word.length; i++){
	//console.log(word[i])
	
	// console.log(word.charAt(i).match(/[aeiouAEIOU]/));

	if(word.charAt(i).match(/[aeiouAEIOU]/)){
		vowelCount++;
		$("#exOutput3").html("The word " + word + " has " + vowelCount + " vowels in it.")
	}

}

}

findVowels("alphabet");



// Write a program to validate a date input. Given a date (06/15/1990, for instance), make sure that it’s in mm/dd/yyyy format.



$(function() {
    // the submit button will respond to the click event
    $('#submitDate').bind('click', function(){
        // the variable txtVal is the value of the user's input txtDate 
        var txtVal =  $('#txtDate').val();
        // if this value is valid, send valid alert, if not: send invalid alert.
        if(isDate(txtVal))
            alert("Happy early/late birthday!");
        else
            alert("Invalid Date.\nPlease enter date in format mm/dd/yyyy .");
    });
    
    // create equation to validate/invalidate the value
function isDate(txtDate){
    
    // give txtDate value a variable. if no value entered, return false
    var currVal = txtDate;
    if(currVal == '')
        return false;
    
    // regular expression - an object that describes the pattern of characters
    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/; //Declare Regex
    var dtArray = currVal.match(rxDatePattern); // is format OK?
    
    if (dtArray == null) 
        return false;
    
// if method .match passes, the return turns input into an array and split into 3 values below
    //Checks for mm/dd/yyyy format.
    dtMonth = dtArray[1];
    dtDay= dtArray[3];
    dtYear = dtArray[5];        

// if the month is less than 1 or greater than 12, return false ; if date is less than 1 or greater than 31, return false ; if month is april, june, sept, or nov and date is 31, then return false;
    if (dtMonth < 1 || dtMonth > 12) 
        return false;
    else if (dtDay < 1 || dtDay> 31) 
        return false;
    else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31) 
        return false;
    else if (dtMonth == 2) 
    {
        
// if date is > february 29 or the date = 29 but NOT a leap year (leap year should be divisible by 4, not divisible by 100, but divisible by 400) return false
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay> 29 || (dtDay ==29 && !isleap)) 
                return false;
    }
    return true;
}

});



// Write a program to find the most frequent item in an array.


function freqLetter(x){

	var letter = ["a", "b", "b", "b", "a", "d", "d", "e", "a"];
	var freqs = {};
	var max_index;
	var max_value = -1/0; // Negative infinity.

	$.each(letter, function(i, v) {
	  if (freqs[v] != undefined) {
	    freqs[v]++;
	  } else {
	    freqs[v] = 1;
	  }
	});
	$.each(freqs, function(letter, freq) {
	  if (freq > max_value) {
	    max_value = freq;
	    max_index = letter;
	  }
	});

	if (max_index != undefined) {
	  $("#exOutput4a").html(letter);
	  $("#exOutput4b").html("Most common element is " + max_index + " with " + max_value + " repetition(s).");
	}
}

freqLetter(["a", "b", "b", "b", "ab", "d", "d", "e", "a"]);


// EXTRA JS EXERCISES

function max(x,y){
	if (x > y) {
		$("#exOutput5").html(x + " is larger than " + y );
	} else if (y > x) {
		$("#exOutput5").html(y + " is larger than " + x);
	} else {
		$("#exOutput5").html("both are equal");
	}

}
max(0, 8)



function maxOfThree(x, y, z){

	console.log(Math.max(x, y, z));

}

maxOfThree(34, 48,29)





});


