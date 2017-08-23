var usa= [[-130, 36],[-70, 36]];

var west=[
  [-122.44400,36.77633],
  [-119.44400,38.77633]];

var aptosRoute=[
  [-121.89744598253198,36.97906712090746],
  [-121.58798709768324,38.46498212728306]];

var sfRoute =[
  [-122.4270763147806,37.759776381564805], [-121.58798596475458,38.4649835597597]];

var livermoreRoute =[
  [-121.76747182280735,37.68216993091406],
  [-121.58798596475458,38.4649835597597]];

var livermoreView =[
  [-121.1747182280735,37.58216993091406],
  [-121.08798596475458,38.5649835597597]];

var sfView =[
  [-122.1270763147806,37.259776381564805], [-120.8798596475458,38.7649835597597]];

var aptosView=[
  [-121.09744598253198,36.77906712090746],
  [-120.98798709768324,38.9649835597597]];

//initial map load
map.on('load', function() {
  map.addLayer({
    id: "points",
    type: "symbol",

    source: {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-77, 38]
            },
            properties: {
              title: "US-East",
              icon: "circle"
            }
          },

          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-121.58798752393574, 38.46498158751788],
            },
            properties: {
              title: "US-West",
              icon: "circle"
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
  });

//back actions
$('.back').click(function() {
  map.fitBounds(usa);
  map.setLayoutProperty('route', 'visibility', 'none');
  map.setLayoutProperty('route1', 'visibility', 'none');
  map.setLayoutProperty('route2', 'visibility', 'none');
  $('.marker').hide();
  $('.map').css('border-radius', '0 0 4px 4px');
  $('.sidebar').css('width', '');
});


// action on places
map.on('load', function() {
  map.on('click', 'points', function(e) {
    map.fitBounds(west);
    $('.sidebar').css('width', '400px');
    $('.map').css('border-radius', '0 0 4px 0');
    $('.marker').show();
    $('.anex').hide();
  });


  //hover on Sites
  map.on('mouseenter', 'points', function() {
    map.getCanvas().style.cursor = 'pointer';
  });
  //
  //  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'points', function() {
    map.getCanvas().style.cursor = '';
  });
});


//add elements to list
var i = 0;
while (i < 3) {
  $(".sidebar").append(
    "<div class='cluster option" + [i] + "'>\
      <h4><span>● </span>&nbsp;  " + geojson.features[i].properties.title + "</h4>\
      <p class='alt'>" + geojson.features[i].properties.description + "</p>\
      <article class = 'anex'>\
      <div class = line>\
        <p>DR Bandwith</p><p>Value1</p>\
      </div>\
      <div class = line>\
        <p>Live Vms</p><p>5</p>\
      </div>\
      <div class = line>\
        <p>Replicated Vms</p><p>500</p>\
      </div>\
      <div class = line>\
        <p>Service Status</p><p>Ok</p>\
      </div>\
      </article>\
      </div>"
  );
  i++;
}

//mouse enter for sites

$(".option0").on('mouseenter', function() {
  $(".marker:eq(0)").css('background-color', '#22A5F7');
});
$(".option1").on('mouseenter', function() {
  $(".marker:eq(1)").css('background-color', '#22A5F7');
});
$(".option2").on('mouseenter', function() {
  $(".marker:eq(2)").css('background-color', '#22A5F7');
});

//mouseleave
$(".option0").on('mouseleave', function() {
  $(".marker:eq(0)").css('background-color', '');
});
$(".option1").on('mouseleave', function() {
  $(".marker:eq(1)").css('background-color', '');
});
$(".option2").on('mouseleave', function() {
  $(".marker:eq(2)").css('background-color', '');
});

//inverse selection
$(".marker:eq(0)").on('mouseenter', function() {
  $(".option0").css('color', '#22A5F7');
});
$(".marker:eq(1)").on('mouseenter', function() {
  $(".option1").css('color', '#22A5F7');
});
$(".marker:eq(2)").on('mouseenter', function() {
  $(".option2").css('color', '#22A5F7');
});


//inverse selection
$(".marker:eq(0)").on('mouseleave', function() {
  $(".option0").css('color', '');
});
$(".marker:eq(1)").on('mouseleave', function() {
  $(".option1").css('color', '');
});
$(".marker:eq(2)").on('mouseleave', function() {
  $(".option2").css('color', '');
});

//San Francisco
map.on('load', function() {
  map.addLayer({
    "id": "route",
    "className": "alpha",
    "type": "line",
    "source": {
      "type": "geojson",
      "data": {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": sfRoute
        }
      }
    },
    "layout": {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "none"
    },
    "paint": {
      "line-dasharray": [0, 3],
      "line-color": "#22A5F7",
      "line-width": 1

    }
  });

});

//Livermore
map.on('load', function() {
  map.addLayer({
    "id": "route1",
    "className": "alpha",
    "type": "line",
    "source": {
      "type": "geojson",
      "data": {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": livermoreRoute
        }
      }
    },
    "layout": {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "none"
    },
    "paint": {
      "line-dasharray": [0, 3],
      "line-color": "#22A5F7",
      "line-width": 1
    }
  });

});

//Aptos
map.on('load', function() {
  map.addLayer({
    "id": "route2",
    "className": "alpha",
    "type": "line",
    "source": {
      "type": "geojson",
      "data": {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": aptosRoute
        }
      }
    },
    "layout": {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "none"
    },
    "paint": {
      "line-dasharray": [0, 3],
      "line-color": "#22A5F7",
      "line-width": 1
    }
  });

});


//action on dots or LineString

$('.option0, .marker:eq(0)').click(function(e) {
  var visibility = map.getLayoutProperty('route', 'visibility');
  $('.anex:eq(0)').toggle();

  if (visibility === 'visible') {
    map.fitBounds(west);
    map.setLayoutProperty('route', 'visibility', 'none');
  }
  else {
    map.fitBounds(sfView);
    $('.anex:eq(1),.anex:eq(2) ').hide(),
    $('.sidebar').animate({scrollTop:0}, 500, 'swing');
    map.setLayoutProperty('route2', 'visibility', 'none'),
    map.setLayoutProperty('route1', 'visibility', 'none'),
    map.setLayoutProperty('route', 'visibility', 'visible');
  }
});

$('.option1, .marker:eq(1)').click( function(e) {
  var visibility = map.getLayoutProperty('route1', 'visibility');
  $('.anex:eq(1)').toggle();

  if (visibility === 'visible') {
    map.fitBounds(west);
    map.setLayoutProperty('route1', 'visibility', 'none');
  }
  else {
    map.fitBounds(livermoreView);
    $('.sidebar').animate({scrollTop:200}, 500, 'swing');
    $('.anex:eq(0),.anex:eq(2)').hide(),
    map.setLayoutProperty('route', 'visibility', 'none'),
    map.setLayoutProperty('route1', 'visibility', 'visible'),
    map.setLayoutProperty('route2', 'visibility', 'none');
  }
});

$('.option2, .marker:eq(2)').click(function(e) {
  var visibility = map.getLayoutProperty('route2', 'visibility');

  $('.anex:eq(2)').toggle();

  if (visibility === 'visible') {
      map.fitBounds(west);
      map.setLayoutProperty('route2', 'visibility', 'none');
  }
  else {
      map.fitBounds(aptosView);
      $('.sidebar').animate({scrollTop:600}, 500, 'swing');
      // $('.sidebar').scrollTop('600'),
      $('.anex:eq(0),.anex:eq(1) ').hide(),
      map.setLayoutProperty('route', 'visibility', 'none'),
      map.setLayoutProperty('route1', 'visibility', 'none'),
      map.setLayoutProperty('route2', 'visibility', 'visible');
  }
});
