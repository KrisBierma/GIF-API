$(document).ready(function(){

//array for button words
var elements = ["sun", "moon"];
var limit = 10; //change to 10
var rating="pg";
var apiKey="8HHV4xr4WJIrV4CnbfW7pYyIK2NuADEc";
var picBox;

//starts page with buttons for words already in the array
for (var i=0; i<elements.length; i++){
    var button = $("<button class='btn btn-element btn-info'>" + elements[i] + "</button>");
    button.attr("data-word", elements[i]);
    $("#buttons").append(button);
    console.log(button);
};

//click button to get gifs
$(".btn-element").on("click", function(event){
    $("#gifs").empty();
    // ex query: var queryURL = "https://api.giphy.com/v1/gifs/search?q=cats&limit=1&rating=g&api_key=8HHV4xr4WJIrV4CnbfW7pYyIK2NuADEc";
    //call on the data attr from button pushed
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+($(this).attr("data-word"))+"&limit="+limit+"&rating="+rating+"&api_key="+apiKey;
    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        for (var j =0; j<limit; j++){
            var picRating = response.data[j].rating;
            var pic = ("<img src=" +response.data[j].images.downsized_still.url+">");
            picBox = ("<div class='picBox'>Rating: "+ picRating.toUpperCase() + "<br>" + pic);        
            picBox.attr("data-name", "img src=" +response.data[j].images.downsized.url);
            $("#gifs").append(picBox);
        };
    });

}); //end click function

//click gif to animate
// $("#picBox").on("click", function(picBox){
    
// });
//click again to stop playing

$("#newWord").on("click", function(event){
    event.preventDefault();
    var anotherWord = $("#word-input").val();
    elements.push(anotherWord);
    // console.log(elements);
    this.form.reset();
});

// function addWordButton(){
//     var button = $("<button class='btn btn-element btn-info'>" + elements[i] + "</button>");
//     button.attr("data-word", elements[i]);
//     $("#buttons").append(button);
//     console.log(button);
// };

for (var i=0; i<elements.length; i++){
    var button = $("<button class='btn btn-element btn-info'>" + elements[i] + "</button>");
    button.attr("data-word", elements[i]);
    $("#buttons").append(button);
    console.log(button);
};

    //when submit is clicked, push new word to elements array
    //create and append new button in button div

}); //end doc.ready



