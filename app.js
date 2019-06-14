window.addEventListener('load', () => {  
  registerSW();  
});

// async function getAQI() {
//   let long;
//   let lat;   
  
//   if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(position => {
//       long = position.coords.longitude;
//       lat = position.coords.latitude;

//       const api = `https://api.waqi.info/feed/geo:`+ lat + `;` + long +`/?token=7c60b8ffef654a159582542b6d6232f4b61ca88a`;      
        
//       $.getJSON(api, function(result){
//         console.log(result); 
//         var json = JSON.parse(JSON.stringify(result));
        
//         console.log(json.data.aqi);
//         console.log(json.data.city.name);
//         output.html("<h2>"+ json.data.city.name +"</h2>");
//       });
//     });     
//   }
  
// }

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}
