var srcApi = "http://api.openweathermap.org/data/2.5/weather?q=";
var privatKey = "&APPID=5bf6e4710bae86b57f7e329efecd9172";
var searchBtn = ".search-btn";
var clearBtn = ".clear-btn";
var searchInput = ".search-input";
var searchItem = ".search-item";
var cloud, name, country = "";
var kelvin = 273.15;

$(document).ready(function () {
    $(searchBtn).click(function () {
        var city = $(searchInput).val();
        $.ajax({url: srcApi + city + privatKey ,
            success: function(obj){
                var temp = Math.round(obj.main.temp - kelvin);
                name = obj.name;
                country = obj.sys.country;
                $.each(obj.weather, function () {
                    cloud = this.description;
                });
                $(searchItem).append(
                    "<li><b>" + name + ", " + country+ "</b>: " + temp + " &#186;C, " + cloud + "</li>"
                );
            }});
    });
    $(clearBtn).click(function () {
        $(searchItem).children().remove();
    });
});
