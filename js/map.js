mapboxgl.accessToken = 'pk.eyJ1IjoidG9ycmVzIiwiYSI6ImNpeXk1Z3NxaDAwb2czMnBodHpmZXpoYjIifQ.ff0bZn6nLRA_WTOS5dDXqQ';


var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-99, 39],
  zoom: 2.5
});

var geojson = {
  type: 'FeatureCollection',
  features: [

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-120.032, 36.913]
      },
      properties: {
        title: 'Prism North West 1',
        description: 'San Francisco, California'
      }
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.5, 37.85]
      },
      properties: {
        title: 'PC North West 2',
        description: 'Madera, California'
      }
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-120.414, 35.776]
      },
      properties: {
        title: 'PC Northwest 3',
        description: 'Paso Robles, California'
      }
    },


  ]
};



geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);


});
