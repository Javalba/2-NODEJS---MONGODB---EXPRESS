// main.js 
function startMap() {

  var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;
/*   var ironhackBCN = {
  	lat: 41.3977381, 
  	lng: 2.190471916};
  var map = new google.maps.Map(
    document.getElementById('map'), 
    {
      zoom: 15,
      center: ironhackBCN
    }
  );
  //necesita una posicion, que se pasa como objeto.
  //necesita la instancia del mapa donde poner el marcador
  var myMarker = new google.maps.Marker({
  position: {
  	lat: 41.3977381, 
  	lng: 2.190471916
  },
  map: map,
  title: "I'm here"
}); */
// Try to get a geolocation object from the web browser
if (navigator.geolocation) {

  // Get current position
  // The permissions dialog will popup
  navigator.geolocation.getCurrentPosition(function (position) {
    // Create an object to match 
    // google's Lat-Lng object format
    const center = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    console.log('center: ', center);
      var map = new google.maps.Map(
    document.getElementById('map'), 
    {
      zoom: 15,
      center: center
    }
  );
    var myMarker = new google.maps.Marker({
  position: center,
  map: map,
  title: "I'm here"
});
    // User granted permission
    // Center the map in the position we got
  }, function () {
    // If something else goes wrong
    console.log('Error in the geolocation service.');
  });
} else {
  // Browser says: Nah! I do not support this.
  console.log('Browser does not support geolocation.');
}
}

startMap();