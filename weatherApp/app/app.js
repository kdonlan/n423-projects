//Weather API Project
//for current
// http://api.weatherapi.com/v1/current.json

//my api key - copy and pasted from Weather API 
var apiKey = "1ad461bcc448452dabe232457201709";
var baseURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;
var storedZipcodeOrCity = "";
var forecastBaseURL = "";
var forecast = "&days=5";

function getData(fullURL) {
    $.get(fullURL, function (data) {
        console.log(data);
        $(".content").html(
            `<p>City: ${data.location.name}</p>
            <p>State: ${data.location.region}</p>
            <p>Time: ${data.location.localtime}</p>`
        );
    }).catch(function (error) {
        console.log(error);
        console.log("your zipcode is not valid");
    });
}

function initListeners() {
    //id of my button
    $("#getWeather").click(function () {
        //grabs input out of the box
        var zipcode = $(".zipcode").val();

        //creates the api call url you are looking for with variables created above
        var fullURL = baseURL + zipcode;
        console.log(fullURL);
        getData(fullURL);
    })
}


$(document).ready(function () {
    initListeners();
})
