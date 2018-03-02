$(document).ready(function(){

//array for button words
var elements = ["sun", "moon"];

for (var i=0; i<elements.length; i++){
    var buttons = "<button class='btn btn-element btn-info'>" + elements[i] + "</button>";
    $("#buttons").append(buttons);
};

//when button clicked
    //send api with new word
    //add gifs returned by api to gif area

function newWord (){
    //when submit is clicked, push new word to elements array
    //create and append new button in button div
};

}); //end doc.ready

