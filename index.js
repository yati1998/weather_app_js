$(document).ready(function(){
    var long;
    var lat;
    $.getJSON("http://ip-api.com/json",function(data1){
        lat = data1.lat;
        long = data1.lon;
        var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=b86d21440d8c9a110912a2eb0845abb4';

        $.getJSON(api, function(data){
            var fTemp;
            var cTemp;
            var kTemp;
             var tempSwap = true;
             var weatherType= data.weather[0].description;
             kTemp=data.main.temp;
             var windSpeed = data.wind.speed;
             var city = data.name;
             fTemp = (kTemp*(9/5)-459.67).toFixed(1);
             cTemp = (kTemp-273).toFixed(1);
             $("#city").html(city);
             $("#weatherType").html(weatherType);
             $("#fTemp").html(fTemp + " &#8457;");
             $("#fTemp").click(function(){
                 if(tempSwap===false){
                    $("#fTemp").html(fTemp + " &#8457;");
                      tempSwap=true;
                 }
                 else{
                    $("#fTemp").html(cTemp + " &#8451;");
                      tempSwap = false;
                 }
             });

     windSpeed = (2.237*(windSpeed)).toFixed(1);
     $("#windSpeed").html(windSpeed+" mph");
    });


    });

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            long = position.coords.longitude;
            lat = position.coords.latitude;
            $("#data").html("latitude: "+ lat + "<br>longitude: "+ long);

        });
    }


   
});
