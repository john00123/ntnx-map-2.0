mapboxgl.accessToken = 'pk.eyJ1IjoidG9ycmVzIiwiYSI6ImNpeXk1Z3NxaDAwb2czMnBodHpmZXpoYjIifQ.ff0bZn6nLRA_WTOS5dDXqQ';

//new mapboxgl render
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/torres/ciyy6f12f00142rrw01b6bad0',
  center: [-99, 39],
  zoom: 2.5
});


//geojson object details
var geojson = {
  type: 'FeatureCollection',
  features: [

    //SF location
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

    //Livermore location
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

    //Aptos location
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-121.89744634744648, 36.979066]
      },
      properties: {
        title: 'PC Northwest 3',
        description: 'Aptos, California'
      }
    },

    //US West location
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-121.58798752393574, 38.46498158751788],
      },
      properties: {
        title: "US-West"
      }
    },

    //US East location
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77, 38]
      },
      properties: {
        title: 'US-East'
      }
    }
  ]
};

geojson.features.forEach(function(marker) {
  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el, {offset: [-5, -5]})
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
});

// views and route longitude and latitude
const locationView = {
  usa: [
    [-130, 36],
    [-70, 36]
  ],

  usWest: [
    [-122.44400, 36.77633],
    [-119.44400, 38.77633]
  ],

  sfView: [
    [-122.1270763147806, 37.259776381564805],
    [-120.8798596475458, 38.7649835597597]
  ],

  livermoreView: [
    [-121.1747182280735, 37.58216993091406],
    [-121.08798596475458, 38.5649835597597]
  ],

  aptosView: [
    [-121.09744598253198, 36.77906712090746],
    [-120.98798709768324, 38.9649835597597]
  ],

  sfRoute: [geojson.features[0].geometry.coordinates,
    geojson.features[3].geometry.coordinates
  ],

  livermoreRoute: [geojson.features[1].geometry.coordinates,
    geojson.features[3].geometry.coordinates
  ],

  aptosRoute: [geojson.features[2].geometry.coordinates,
    geojson.features[3].geometry.coordinates
  ]
}

const places = {
  scroll: [0, 200, 500]
}

map.on('load', function() {
  //Datacenter map locations
  map.addLayer({
    id: "dataCenter",
    type: "symbol",
    source: {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [{
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-121.58798752393574, 38.46498158751788],
            },
            properties: {
              title: "US-West"
            }
          },

          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-77, 38]
            },
            properties: {
              title: "US-East"
            }
          }
        ]
      }
    },
    layout: {
      "icon-image": "{icon}-11",
      "text-field": "{title}",
      "text-font": ["Open Sans Regular", "Arial Unicode MS Bold"],
      "text-size": 12,
      "text-offset": [0, 0.6],
      "text-anchor": "top"
    },
    paint: {
      "text-color": "#22272E",
    }
  });

  //San Francisco Route
  map.addLayer({
    id: "route0",
    type: "line",
    source: {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: locationView.sfRoute
        }
      }
    },
    layout: {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "none"
    },
    paint: {
      "line-dasharray": [0, 3],
      "line-color": "#22A5F7",
      "line-width": 1

    }
  });

  //Livermore Route
  map.addLayer({
    id: "route1",
    type: "line",
    source: {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: locationView.livermoreRoute
        }
      }
    },
    layout: {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "none"
    },
    paint: {
      "line-dasharray": [0, 3],
      "line-color": "#22A5F7",
      "line-width": 1
    }
  });

  //Aptos Route
  map.addLayer({
    id: "route2",
    type: "line",
    source: {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: locationView.aptosRoute
        }
      }
    },
    layout: {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "none"
    },
    paint: {
      "line-dasharray": [0, 3],
      "line-color": "#22A5F7",
      "line-width": 1
    }
  });
});
