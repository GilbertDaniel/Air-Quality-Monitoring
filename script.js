let long;
let lat;

let cityName = document.querySelector(".aqi-location");
let aqivalue = document.querySelector(".aqi-value");
let status = document.querySelector(".aqi-status");


if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;

        const api = `https://api.waqi.info/feed/geo:`+ lat + `;` + long +`/?token=7c60b8ffef654a159582542b6d6232f4b61ca88a`;      
    
        $.getJSON(api, function(result){
            //console.log(result); 
            var json = JSON.parse(JSON.stringify(result));            
            
            if(json.status == 'error'){
                citySearhName.textContent = "No result Found!";
            }else{
                cityName.textContent = json.data.city.name;
                aqivalue.textContent = "AQI " + json.data.aqi;               

                //let aqiStatus = 220;
                let aqiStatus = json.data.aqi;

                if(aqiStatus <= 50 ){
                    status.textContent = "Good : Air quality is considered satisfactory, and air pollution poses little or no risk";
                    $(".aqi-value").css({"color": "#009966"});
                    $(".aqi-status").css({"background-color": "#009966", "color": "#ffffff", "padding": "10px"});
                }else if (aqiStatus <= 100){
                    status.textContent = "Moderate : Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.";
                    $(".aqi-value").css({"color": "#ffde33"});
                    $(".aqi-status").css({"background-color": "#ffde33", "color": "#000000", "padding": "10px"});
                }else if (aqiStatus <= 200){
                    $(".aqi-value").css({"color": "#cc0033"});
                    status.textContent = "Unhealthy : Members of sensitive groups may experience health effects. The general public is not likely to be affected.";
                    $(".aqi-status").css({"background-color": "#cc0033", "color": "#ffffff", "padding": "10px"});
                }else if (aqiStatus <= 300){
                    status.textContent = "Very Unhealthy : Health warnings of emergency conditions. The entire population is more likely to be affected.";
                    $(".aqi-value").css({"color": "#660099"});
                    $(".aqi-status").css({"background-color": "#660099", "color": "#ffffff", "padding": "10px"});
                }else if (aqiStatus > 300){
                    status.textContent = "Hazardous";
                    $(".aqi-value").css({"color": "#7e0023"});
                    $(".aqi-status").css({"background-color": "#7e0023", "color": "#ffffff", "padding": "10px"});
                }
            }

        });

        
    })
} 
