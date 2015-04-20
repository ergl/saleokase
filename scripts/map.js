// () -> ()
function initialize() {
  var mapOptions = {
    center: { lat: 40.417, lng: -3.702}, // Puerta del Sol, Madrid
    zoom: 10,
    disableDefaultUI: true
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
  setupEvents(map);

  // gets user coordinates on right click
  google.maps.event.addListener(map, 'rightclick', function(event) {
    togglePane(PaneEnum.create);
    var latitude = event.latLng.lat();
    var longitude = event.latLng.lng();
    console.log(latitude + ', ' + longitude);
  });
}

// google.maps.Map -> ()
// Create the events and draw them to the given map
function setupEvents(mapObject) {
  var eventMarker1 = new google.maps.Marker({
    position: new google.maps.LatLng(40.35, -3.65),
    map: mapObject,
  });

  var eventMarker2 = new google.maps.Marker({
    position: new google.maps.LatLng(40.4, -3.7),
    map: mapObject,
  });

  var eventMarker3 = new google.maps.Marker({
    position: new google.maps.LatLng(40.39, -3.67),
    map: mapObject,
  });

  google.maps.event.addListener(eventMarker1, 'click', function(event) {
    togglePane(PaneEnum.event);
  });

  google.maps.event.addListener(eventMarker2, 'click', function(event) {
    togglePane(PaneEnum.event);
  });

  google.maps.event.addListener(eventMarker3, 'click', function(event) {
    togglePane(PaneEnum.event);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
