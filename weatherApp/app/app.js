//my api key - copy and pasted from Weather API 
var apiKey = "1ad461bcc448452dabe232457201709";
var baseURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;
// console.log(baseURL);

var temp = "&tempf=";
var feelslike = "&feelslike_f=";
var humidity = "&humidity=";
var longitude = "&lon=";
var latitude = "&lat=";
var condition = "&condition:text="
var wind = "&wind_mph=";
var windDegree = "&wind_degree=";
var windDirection= "&wind_dir=";
// var pressure_mb = "&pressure_mb="

// ---------------------- > WORK ON FORECAST // ---------------------- > 

// var forecastURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=`;
// console.log(forecastURL);

// var days={}; //creates the day

// ****************************************** ZIPCODE | CITY *********************************************
function getData(headerURL) {
    $.get(headerURL, function (data) {
        console.log(data);
        $("div.header").html(
            `<h2>${data.location.name}, ${data.location.region}</h2></br> <p>${data.location.country}</br>${data.location.localtime}</p></br><p>${data.location.tz_id} Time Zone</p>`
        );
    }).catch(function (error) {
        // console.log(error);
        // console.log("your zipcode is not valid");
        $("div.header").html(
            `<h3>Invalid zipcode or city. Please try seaching again.</h3>`
        );
    });
}
// ****************************************** TEMPERATURE *********************************************
function tempData(tempURL) {
    $.get(tempURL, function (data) {
        console.log(tempURL);
        $("div.contentCard").html(
            `<p class="stylizedNumber">${data.current.temp_f}&#176 F</p><h4>Temperature (F)</h4>`
        );
    });
}
// ****************************************** FEELS LIKE *********************************************
function feelslikeData(feelsURL) {
    $.get(feelsURL, function (data) {
        console.log(feelsURL);
        $("div.contentCard-2").html(
            `<p class="stylizedNumber">${data.current.feelslike_f}&#176 F</p><h4>Feels Like (F)</h4>`
        );
    });
}

// ****************************************** HUMIDITY *********************************************
function humidityData(humidityURL) {
    $.get(humidityURL, function (data) {
        console.log(humidityURL);
        $("div.contentCard-3").html(
            `<p class="stylizedNumber">${data.current.humidity}&#176 F</p><h4>Humidity</h4>`
        );
    });
}

// ****************************************** LONGITUDE *********************************************
function longData(longitudeURL) {
    $.get(longitudeURL, function (data) {
        console.log(longitudeURL);
        $("div.contentCard-4").html(
            `<p class="stylizedNumber">${data.location.lon}</p><h4>Longitude</h4>`
        );
    });
}

// ****************************************** LATITUDE *********************************************
function latiData(latitudeURL) {
    $.get(latitudeURL, function (data) {
        console.log(latitudeURL);
        $("div.contentCard-5").html(
            `<p class="stylizedNumber">${data.location.lat}</p><h4>Latitude</h4>`
        );
    });
}

// ****************************************** CONDITION *********************************************
function condData(conditionURL) {
    $.get(conditionURL, function (data) {
        console.log(conditionURL);
        $("div.contentCard-6").html(
            `<div class="textContainer"><h3 class="stylizedText">${data.current.condition.text}</h3><h4>Condition</h4>`
        );
    });
}

// ****************************************** WIND *********************************************
function windData(windURL) {
    $.get(windURL, function (data) {
        console.log(windURL);
        $("div.contentCard-7").html(
            `<p class="stylizedNumber">${data.current.wind_mph} mph</p><h4>Wind</h4>`
        );
    });
}

// ****************************************** WIND DEGREE *********************************************
function windDegreeData(windDegreeURL) {
    $.get(windDegreeURL, function (data) {
        console.log(windDegreeURL);
        $("div.contentCard-8").html(
            `<p class="stylizedNumber">${data.current.wind_degree}</p><h4>Wind Degree</h4>`
        );
    });
}

// ****************************************** WIND DIRECTION *********************************************
function windDirData(windDirURL) {
    $.get(windDirURL, function (data) {
        console.log(windDirURL);
        $("div.contentCard-9").html(
            `<p class="stylizedNumber">${data.current.wind_dir}</p><h4>Wind Direction</h4>`
        );
    });
}

// ****************************************** PRESSURE *********************************************
// function pressureData(pressURL) {
//     $.get(pressURL, function (data) {
//         console.log(pressURL);
//         $("div.sectionCard").html(
//             `<p class="stylizedNumber">${data.current.pressure_mb}</p><h4>Pressure</h4>`
//         );
//     });
// }




// ****************************************** LISTENER *********************************************

function initListeners() {
    //class of my button
    $("#button").click(function () {
        //grabs input out of the box
        var zipcodeCityInput = $(".zipcodeCityInput").val();
        
        //creates the api call for search criteria
        var headerURL = baseURL + zipcodeCityInput;
        console.log(headerURL);

        /////////////////////////// TEMP /////////////////////////////
        //creates the api call url for temp
        var tempURL = headerURL + temp;
        console.log(tempURL);
    
        /////////////////////////// FEELS LIKE /////////////////////////////
        //creates the api call for feels like
        var feelsURL = headerURL + feelslike;
        console.log(feelsURL);

        ///////////////////////// HUMIDITY /////////////////////////////
        // creates the api call for humidity
        var humidityURL = headerURL + humidity;
        console.log(humidityURL);

        ///////////////////////// LONGITUDE /////////////////////////////
        // creates the api call for longitude
        var longitudeURL = headerURL + longitude;
        console.log(longitudeURL);

        ///////////////////////// LATITUDE /////////////////////////////
        // creates the api call for latitude
        var latitudeURL = headerURL + latitude;
        console.log(latitudeURL);

        ///////////////////////// CONDITION /////////////////////////////
        // creates the api call for current condition
        var conditionURL = headerURL + condition;
        console.log(conditionURL);

        ///////////////////////// WIND /////////////////////////////
        // creates the api call for wind
        var windURL = headerURL + wind;
        console.log(windURL);

        ///////////////////////// WIND DEGREE /////////////////////////////
        // creates the api call for wind degree
        var windDegreeURL = headerURL + windDegree;
        console.log(windDegreeURL);

        ///////////////////////// WIND DIRECTION /////////////////////////////
        // creates the api call for wind direction
        var windDirURL = headerURL + windDirection;
        console.log(windDirURL);

        ///////////////////////// PRESSURE /////////////////////////////
        // creates the api call for pressure
        // var pressURL = headerURL + pressure_mb;
        // console.log(pressURL);
    
        getData(headerURL);
        tempData(tempURL);
        feelslikeData(feelsURL);
        humidityData(humidityURL);
        longData(longitudeURL);
        latiData(latitudeURL);
        condData(conditionURL);
        windData(windURL);
        windDegreeData(windDegreeURL);
        windDirData(windDirURL);
        // pressureData(pressURL); //going into box at the bottom where forecast should go
    })
}


$(document).ready(function () {
    initListeners(baseURL);
})