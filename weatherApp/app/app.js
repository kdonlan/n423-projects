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
var windDirection = "&wind_dir=";
var pressure = "&pressure_mb="
var pressureInches = "$pressure_in="
var uv = "&uv=";
var percipmm = "&precip_mm=";
var percipin = "&precip_in=";
var vismiles = "&vis_miles";
var cloud = "&cloud=";
var tempc = "&temp_c=";
var feelc = "&feelslike_c=";
var feelf = "&feelslike_f=";
var gustmph = "&gust_mph=";
var gustkph = "&gust_kph=";

$.get(
    "http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=46051&days=1",
    function (data) {
      console.log("data ", data);
    }
  );

var days = {};
var forecastBaseURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=`;
var daysurl = "&days=";


//appending the data
// ****************************************** ZIPCODE | CITY *********************************************

function getData(headerURL) {
    $.get(headerURL, function(data) {
        // console.log(data);
        $("div.header").html(
            `<h2>${data.location.name}, ${data.location.region}</h2><br><p>${data.location.country} ${data.location.localtime}</p><p>${data.location.tz_id} Time Zone</p>`
        );
    }).catch(function(error) {
        // console.log(error);
        // console.log("your zipcode is not valid");
        $("div.header").html(
            `<h3>Invalid zipcode or city. Please try seaching again.</h3>`
        );
    });
}

// ****************************************** FORECAST *********************************************

function getForecastData(forecastURL) {
    $.get(forecastURL, function(value) {
        // console.log(value.forecast);
        forecasts = value.forecast;
        parseForecast(value.forecast.forecastday); //why an error here??!!
    });

}

function parseForecast(daysArray) {
    $.each(daysArray, function(idx, value) {
        // console.log(value);
        $("div.forecastCard").append(
            `<p style="color: white;font-size:12px;"><div class="stylizedNumber">${value.day.maxtemp_f} F</div></p>`);
    })

    $.each(daysArray, function(idx, value) {
        // console.log(value);
        $("div.forecastCard2").append(
            `<p style="color: white;font-size:12px;"><div class="stylizedNumber">${value.day.mintemp_f} F</div></p>`);
    })

    $.each(daysArray, function(idx, value) {
        // console.log(value);
        $("div.forecastCard3").append(
            `<p style="color: white;font-size:12px;"><div class="stylizedNumber">${value.day.daily_chance_of_rain}%</div></p>`);
    })


}


// ****************************************** TEMPERATURE *********************************************
function tempData(tempURL) {
    $.get(tempURL, function(data) {
        // console.log(tempURL);
        $("div.contentCard").html(
            `<p class="stylizedNumber">${data.current.temp_f}&#176 F</p><h4>Temperature (F)</h4>`
        );
    });
}
// ****************************************** FEELS LIKE *********************************************
function feelslikeData(feelsURL) {
    $.get(feelsURL, function(data) {
        // console.log(feelsURL);
        $("div.contentCard-2").html(
            `<p class="stylizedNumber">${data.current.feelslike_f}&#176 F</p><h4>Feels Like (F)</h4>`
        );
    });
}

// ****************************************** HUMIDITY *********************************************
function humidityData(humidityURL) {
    $.get(humidityURL, function(data) {
        // console.log(humidityURL);
        $("div.contentCard-3").html(
            `<p class="stylizedNumber">${data.current.humidity}&#176 F</p><h4>Humidity</h4>`
        );
    });
}

// ****************************************** LONGITUDE *********************************************
function longData(longitudeURL) {
    $.get(longitudeURL, function(data) {
        // console.log(longitudeURL);
        $("div.contentCard-4").html(
            `<p class="stylizedNumber">${data.location.lon}</p><h4>Longitude</h4>`
        );
    });
}

// ****************************************** LATITUDE *********************************************
function latiData(latitudeURL) {
    $.get(latitudeURL, function(data) {
        // console.log(latitudeURL);
        $("div.contentCard-5").html(
            `<p class="stylizedNumber">${data.location.lat}</p><h4>Latitude</h4>`
        );
    });
}

// ****************************************** CONDITION *********************************************
function condData(conditionURL) {
    $.get(conditionURL, function(data) {
        // console.log(conditionURL);
        $("div.contentCard-6").html(
            `<div class="textContainer"><h3 class="stylizedText">${data.current.condition.text}</h3><h4>Condition</h4>`
        );
    });
}

// ****************************************** WIND *********************************************
function windData(windURL) {
    $.get(windURL, function(data) {
        // console.log(windURL);
        $("div.contentCard-7").html(
            `<p class="stylizedNumber">${data.current.wind_mph} mph</p><h4>Wind</h4>`
        );
    });
}

// ****************************************** WIND DEGREE *********************************************
function windDegreeData(windDegreeURL) {
    $.get(windDegreeURL, function(data) {
        // console.log(windDegreeURL);
        $("div.contentCard-8").html(
            `<p class="stylizedNumber">${data.current.wind_degree}</p><h4>Wind Degree</h4>`
        );
    });
}

// ****************************************** WIND DIRECTION *********************************************
function windDirData(windDirURL) {
    $.get(windDirURL, function(data) {
        // console.log(windDirURL);
        $("div.contentCard-9").html(
            `<p class="stylizedNumber">${data.current.wind_dir}</p><h5>Wind Direction</h5>`
        );
    });
}

function pressureData(pressureURL) {
    $.get(pressureURL, function(data) {
        $("div.sectionCard-1").html(
            `<p class="stylizedNumber">${data.current.pressure_mb}</p><h5>Pressure<br>(millibars)</h5>`
        );
    });
}

function pressureInchesData(pressureInchesURL) {
    $.get(pressureInchesURL, function(data) {
        $("div.sectionCard-2").html(
            `<p class="stylizedNumber">${data.current.pressure_in}</p><h5>Pressure<br>(inches)</h5>`
        );
    });
}

function uvData(uvURL) {
    $.get(uvURL, function(data) {
        $("div.sectionCard-3").html(
            `<p class="stylizedNumber">${data.current.uv}</p><h5>UV<br>Index</h5>`
        );
    });
}

function percipmmData(percipmmURL) {
    $.get(percipmmURL, function(data) {
        $("div.sectionCard-4").html(
            `<p class="stylizedNumber">${data.current.precip_mm}</p><h5>Precipitation<br>(millimeters)</h5>`
        );
    });
}

function percipinData(percipinURL) {
    $.get(percipinURL, function(data) {
        $("div.sectionCard-5").html(
            `<p class="stylizedNumber">${data.current.precip_in}</p><h5>Precipitation<br>(inches)</h5>`
        );
    });
}

function visData(visURL) {
    $.get(visURL, function(data) {
        $("div.sectionCard-6").html(
            `<p class="stylizedNumber">${data.current.vis_miles}</p><h5>Visibility<br>in Miles</h5>`
        );
    });
}

function cloudData(cloudURL) {
    $.get(cloudURL, function(data) {
        $("div.sectionCard-7").html(
            `<p class="stylizedNumber">${data.current.cloud}%</p><h5>Cloud<br>Coverage</h5>`
        );
    });
}

function tempcData(tempcURL) {
    $.get(tempcURL, function(data) {
        $("div.sectionCard-8").html(
            `<p class="stylizedNumber">${data.current.temp_c}&#176</p><h4>Temperature<br>(Celcius)</h5>`
        );
    });
}

function feelcData(feelcURL) {
    $.get(feelcURL, function(data) {
        $("div.sectionCard-9").html(
            `<p class="stylizedNumber">${data.current.feelslike_c}&#176</p><h5>Feels Like<br>(Celcius)</h4>`
        );
    });
}

function feelfData(feelfURL) {
    $.get(feelfURL, function(data) {
        $("div.sectionCard-10").html(
            `<p class="stylizedNumber">${data.current.feelslike_f}&#176</p><h5>Feels Like<br>(Fahrenheit)</h5>`
        );
    });
}

function gustmphData(gustmphURL) {
    $.get(gustmphURL, function(data) {
        $("div.sectionCard-11").html(
            `<p class="stylizedNumber">${data.current.gust_mph}</p><h5>Wind Gusts<br>(mph)</h5>`
        );
    });
}

function gustkphData(gustkphURL) {
    $.get(gustkphURL, function(data) {
        $("div.sectionCard-12").html(
            `<p class="stylizedNumber">${data.current.gust_kph}</p><h5>Wind Gusts<br>(kph)</h5>`
        );
    });
}




//creates the url for the api call
// ****************************************** LISTENER *********************************************

function initListeners() {
    //class of my button
    $("#button").click(function() {
        //grabs input out of the box
        var zipcodeCityInput = $(".zipcodeCityInput").val();

        //creates the api call for search criteria
        var headerURL = baseURL + zipcodeCityInput;
        // console.log(headerURL);

        /////////////////////////// TEMP /////////////////////////////
        //creates the api call url for temp
        var tempURL = headerURL + temp;
        // console.log(tempURL);

        /////////////////////////// FEELS LIKE /////////////////////////////
        //creates the api call for feels like
        var feelsURL = headerURL + feelslike;
        // console.log(feelsURL);

        ///////////////////////// HUMIDITY /////////////////////////////
        // creates the api call for humidity
        var humidityURL = headerURL + humidity;
        // console.log(humidityURL);

        ///////////////////////// LONGITUDE /////////////////////////////
        // creates the api call for longitude
        var longitudeURL = headerURL + longitude;
        // console.log(longitudeURL);

        ///////////////////////// LATITUDE /////////////////////////////
        // creates the api call for latitude
        var latitudeURL = headerURL + latitude;
        // console.log(latitudeURL);

        ///////////////////////// CONDITION /////////////////////////////
        // creates the api call for current condition
        var conditionURL = headerURL + condition;
        // console.log(conditionURL);

        ///////////////////////// WIND /////////////////////////////
        // creates the api call for wind
        var windURL = headerURL + wind;
        // console.log(windURL);

        ///////////////////////// WIND DEGREE /////////////////////////////
        // creates the api call for wind degree
        var windDegreeURL = headerURL + windDegree;
        // console.log(windDegreeURL);

        ///////////////////////// WIND DIRECTION /////////////////////////////
        // creates the api call for wind direction
        var windDirURL = headerURL + windDirection;
        // console.log(windDirURL);


        ///////////////////////// OTHER WEATHER DETAILS /////////////////////////////

        var pressureURL = headerURL + pressure;
        var pressureInchesURL = headerURL + pressureInches;
        var uvURL = headerURL + uv;
        var percipmmURL = headerURL + percipmm;
        var percipinURL = headerURL + percipin;
        var visURL = headerURL + vismiles;
        var cloudURL = headerURL + cloud;
        var tempcURL = headerURL + tempc;
        var feelcURL = headerURL + feelc;
        var feelfURL = headerURL + feelf;
        var gustmphURL = headerURL + gustmph;
        var gustkphURL = headerURL + gustkph;

        //creates the api call for search 5 day forecast
        var forecastURL = forecastBaseURL + zipcodeCityInput + daysurl;
        // console.log(forecastURL);

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
        pressureData(pressureURL);
        pressureInchesData(pressureInchesURL);
        uvData(uvURL)
        percipmmData(percipmmURL);
        percipinData(percipinURL);
        visData(visURL);
        cloudData(cloudURL);
        tempcData(tempcURL);
        feelcData(feelcURL);
        feelfData(feelfURL);
        gustmphData(gustmphURL);
        gustkphData(gustkphURL);

        getForecastData(forecastURL);
    })
}


$(document).ready(function() {
    initListeners(baseURL, forecastBaseURL);
})