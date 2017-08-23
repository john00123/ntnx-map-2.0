mapboxgl.accessToken = 'pk.eyJ1IjoidG9ycmVzIiwiYSI6ImNpeXk1Z3NxaDAwb2czMnBodHpmZXpoYjIifQ.ff0bZn6nLRA_WTOS5dDXqQ';


var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/torres/ciyy6f12f00142rrw01b6bad0',
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
        coordinates: [-122.42707706256849, 37.75977593412371]
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
        coordinates: [-121.767472315577, 37.68217032551553]
      },
      properties: {
        title: 'PC North West 2',
        description: 'Livermore, California'

      }
    },

    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [ -121.89744634744648,  36.979066]
      },
      properties: {
        title: 'PC Northwest 3',
        description: 'Aptos, California'
      }
    },
  ]

};



geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
   new mapboxgl.Marker(el, { offset: [-5,-5] })
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);


});
