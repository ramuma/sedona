function initialize() {
  var mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(34.8545802, -111.9348809, 11)
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);
  var image = "img/icon-map-marker.svg";
  var myLatLng = new google.maps.LatLng(34.7244438, -111.830158, 13);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, "load", initialize);
