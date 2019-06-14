//get city name from the search box
$(".row1").css({"display": "none"});
$(".row2").css({"display": "none"});
$(".row3").css({"display": "none"});

$('#text_value').click(function() {
    var searchName = $("#city_name").val();    

    if(searchName){
        let citySearhName = document.querySelector(".aqi-city");
        let aqiSearchValue = document.querySelector(".aqi-search-value");
        let Searchstatus = document.querySelector(".aqi-search-status");
        const url = `https://api.waqi.info/feed/`+ searchName + `/?token=7c60b8ffef654a159582542b6d6232f4b61ca88a`;      
        //console.log(url);

        $.getJSON(url, function(result){
            //console.log(result); 
            var json = JSON.parse(JSON.stringify(result)); 
            
            if(json.status == 'error'){
                //alert("No Result Found!");
                citySearhName.textContent = "No result Found!";
                $(".row1").css({"display": "block"});               
            }else{
                $(".row1").css({"display": "block"});
                $(".row2").css({"display": "block"});
                $(".row3").css({"display": "block"});
                citySearhName.textContent = json.data.city.name;
                aqiSearchValue.textContent = "AQI " + json.data.aqi;               

                //let aqiStatus = 220;
                let aqiSearchStatus = json.data.aqi;

                if(aqiSearchStatus <= 50 ){
                    Searchstatus.textContent = "Good : Air quality is considered satisfactory, and air pollution poses little or no risk";
                    $(".aqi-search-value").css({"color": "#009966"});
                    $(".aqi-search-status").css({"background-color": "#009966", "color": "#ffffff", "padding": "10px"});
                }else if (aqiSearchStatus <= 100){
                    Searchstatus.textContent = "Moderate : Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.";
                    $(".aqi-search-value").css({"color": "#ffde33"});
                    $(".aqi-search-status").css({"background-color": "#ffde33", "color": "#000000", "padding": "10px"});
                }else if (aqiSearchStatus <= 200){
                    $(".aqi-search-value").css({"color": "#cc0033"});
                    Searchstatus.textContent = "Unhealthy : Members of sensitive groups may experience health effects. The general public is not likely to be affected.";
                    $(".aqi-search-status").css({"background-color": "#cc0033", "color": "#ffffff", "padding": "10px"});
                }else if (aqiSearchStatus <= 300){
                    Searchstatus.textContent = "Very Unhealthy : Health warnings of emergency conditions. The entire population is more likely to be affected.";
                    $(".aqi-search-value").css({"color": "#660099"});
                    $(".aqi-search-status").css({"background-color": "#660099", "color": "#ffffff", "padding": "10px"});
                }else if (aqiSearchStatus > 300){
                    Searchstatus.textContent = "Hazardous";
                    $("aqi-search-value").css({"color": "#7e0023"});
                    $(".aqi-search-status").css({"background-color": "#7e0023", "color": "#ffffff", "padding": "10px"});
                }
            }
            
            

        });
    }else{
        alert("Enter City Name");
    }
});






    
