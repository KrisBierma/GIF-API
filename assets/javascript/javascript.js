$(document).ready(function(){

//array for button words
var elements = ["sun", "moon", "fire", "water", "rocks", "wind", "earth", "planets"];
var limit = 10;
var rating="pg";
var apiKey="8HHV4xr4WJIrV4CnbfW7pYyIK2NuADEc";

//starts page with buttons for words already in the array
function renderButton(){
    $("#buttons").empty();
    for (var i=0; i<elements.length; i++){
        var button = $("<button class='btn btn-element btn-info'>" + elements[i] + "</button>");
        button.attr("data-word", elements[i]);
        $("#buttons").append(button);
    };
};

function getGifs(){
    $("#gifs").empty();
    
    //call for the data attr from button pushed
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+($(this).attr("data-word"))+"&limit="+limit+"&rating="+rating+"&api_key="+apiKey;

    //ajax sends request to api
    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        for (var j =0; j<limit; j++){     
            var newDiv = $("<div>");
            newDiv.addClass("picBox");
            newDiv.append("Rating: "+response.data[j].rating.toUpperCase());

            var newImage = $("<img>");
            newImage.attr("src", response.data[j].images.fixed_height_still.url);
            newImage.attr("data-still", response.data[j].images.fixed_height_still.url);
            newImage.attr("data-animate", response.data[j].images.fixed_height.url);
            newImage.addClass("gif");
            newImage.attr("data-state", "still");
            newDiv.append(newImage);

            $("#gifs").append(newDiv);
        };
    });
};

//click to change between animate and still gifs
$(document).on("click", ".gif", function(){
    var state = $(this).attr("data-state"); //this is the element that's clicked

    if (state==="still"){
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }
    else{
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
}); 

//click submit button 
$("#newWord").on("click", function(event){
    event.preventDefault();
    var anotherWord = $("#word-input").val().trim();//gets the value of the word typed, minus white spaces on the ends
    if (anotherWord==="") return; //if nothing's typed, no blank button
    elements.push(anotherWord);
    this.form.reset();
    renderButton();
});

//click a button to get get gifs with the function
$(document).on("click", ".btn-element", getGifs);

renderButton(); //makes the buttons when the page loads

}); //end doc.ready