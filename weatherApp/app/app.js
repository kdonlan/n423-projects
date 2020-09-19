//Weather API Project
//for current
// http://api.weatherapi.com/v1/current.json

//my api key - copy and pasted from Weather API 
var apiKey = "1ad461bcc448452dabe232457201709";
var baseURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;
// var storedZipcodeOrCity = "";
// var forecastBaseURL = "";
// var forecast = "&days=5";
console.log(baseURL);

function getData(fullURL) {
    $.get(fullURL, function (data) {
        console.log(data);
        $("div.contentCard").html(
            `<p>City: ${data.location.name}</p>
            <p>State: ${data.location.region}</p>
            <p>Time: ${data.location.localtime}</p>`
        );
        console.log(data.location.name);
    }).catch(function (error) {
        // console.log(error);
        // console.log("your zipcode is not valid");
    });
}

function initListeners() {
    //class of my button
    $("#button").click(function () {
        //grabs input out of the box
        var zipcodeCityInput = $(".zipcodeCityInput").val();

        //creates the api call url you are looking for with variables created above
        var fullURL = baseURL + zipcodeCityInput;
        console.log(fullURL);
        getData(fullURL);
    })
}


$(document).ready(function () {
    initListeners(baseURL);
})