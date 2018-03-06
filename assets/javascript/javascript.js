$(document).ready(function(){

//array for button words
var elements = ["sun", "moon"];
var limit = 1; //change to 10
var rating="pg";
var apiKey="8HHV4xr4WJIrV4CnbfW7pYyIK2NuADEc";
var picBox;
var picStill;
var picAnimated;

//starts page with buttons for words already in the array
function renderButton(){
    $("#buttons").empty();
    for (var i=0; i<elements.length; i++){
        var button = $("<button class='btn btn-element btn-info'>" + elements[i] + "</button>");
        button.attr("data-word", elements[i]);
        $("#buttons").append(button);
        console.log(button);
    };
};

//click button to get gifs
// $(".btn-element").on("click", function(event){
function getGifs(){
    console.log("working");
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
            var newDiv = $("<div>");
            // newDiv.toggleClass("show");
            // newDiv.addClass("green");
            newDiv.append("Rating: "+response.data[j].rating.toUpperCase());
            newDiv.append("<img class='gifBtn' id='gifChange' src=" +response.data[j].images.downsized_still.url+">");
            // newDiv.toggleClass("green, true");
            (newDiv).append("<img class='gifBtnAnimated' src=" +response.data[j].images.original.url+">");
            $("#gifs").append(newDiv);
        };
    });
// }); //end click function
};

$(document).on("click", ".gifBtn", function(e){
    console.log(e);
    var p= e.currentTarget.className;
    console.log(p);
    if (p.style.display=="none"){
        p.style.display = "block";
    }
    else{
        p.style.display="none";
    }
    // $(this).toggleClass("show");
});

$(document).on("click", ".gifBtnAnimated", function(e){
    // console.log(e);
    // $(this).toggleClass("show");
    var blah = $(this);
    if (blah.style.display==="none"){
        blah.style.display = "block";
    }
    else{
        blah.style.display="none";
    }
});

// $(document).on("click", function(event){
//     console.log("hi");
// }); 

// function animateGif(){
//     alert("Hi");
// };

// function animateGifs(){
//     console.log("working");
//     if (picStill){
//         // console.log(picStill);
//         $(picStill).removeClass("show"); 
//         $(picStill).addClass("hide");
//         console.log(picStill);

    // }
//     else if (picAnimated){
//         console.log("else");
//         picStill.addClass("hide");
//         picAnimated.addClass("show");
//     };

//     // pic = ("<img src=" +response.data[j].images.original.url+">");
// };

$("#newWord").on("click", function(event){
    event.preventDefault();
    var anotherWord = $("#word-input").val().trim();
    //uppercase first letter
    elements.push(anotherWord);
    this.form.reset();
    renderButton();
});

$(document).on("click", ".btn-element", getGifs); //from class

// $(document).on("click", "img", animateGifs);

renderButton();

}); //end doc.ready



//click gif to animate
// $("#picBox").on("click", function(picBox){
    
// });
//click again to stop playing

//add alt tags