function routeHide(){
  for (i = 0; i < geojson.features.length-2; i++) {
  map.setLayoutProperty('route' + i.toString() + '', 'visibility', 'none');
  }
}

// action datacenter
map.on('load', function() {
  $('.marker:eq(3) , .marker:eq(4)').addClass('main');
  $('.main').removeClass('marker');

  //hover on datacenter
  map.on('mouseenter', 'dataCenter', function() {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseleave', 'dataCenter', function() {
    map.getCanvas().style.cursor = '';
  });

  //datacenter click
  map.on('click', 'dataCenter', function() {
    map.fitBounds(Object.values(locationView)[0]);
    $('.anex').hide();
    $('.marker').show();
    $('.map').css('border-bottom-left-radius', '0');
    $('.sidebar').css('width', '400px');
  });

  //back actions
  $('.back').click(function() {
    routeHide();
    map.fitBounds(Object.values(locationView)[0]);
    $('.marker').removeClass('selected');
    $('.marker').hide();
    $('.map').css('border-bottom-left-radius', '4px');
    $('.sidebar').css('width', '');
    map.resize(container); //reference error to force resizing.
  });
});

//add elements to list
const data = {
  Bandwith: ['300 Tbps', '500 Tbps', '700 Tbps'],
  Live: ['5 VMs', '5000 VMs', '503 VMs'],
  Replicated: ['5000 VMs', '12000 VMs', '3000 VMs'],
  Services: ['OK', 'Slow', 'OK']
}

//insert data into html
for (i = 0; i < $('.marker').length-2; i++) {
  $(".sidebar").append(
    "<div class='cluster option" + [i] + "'>\
      <h4><span>● </span>&nbsp;" + geojson.features[i].properties.title + "</h4>\
      <p class='alt'>" + geojson.features[i].properties.description + "</p>\
      <article class = 'anex'></article>\
    </div>"
  );

  //insert values on hidden container, visible on selection
  for (t = 0; t < Object.keys(data).length; t++) {
    $('.anex:eq(' + i + ')').append(
      "<div class='line'>\<p>" +
      Object.keys(data)[t] + "</p><p>" + Object.values(data)[t][i] + "</p></div>"
    );
  }
}

//hover on sites and map marks
for (let i = 0; i < $('.cluster').length; i++){

  //hover marks
  $(".marker:eq("+i+"), .option"+i+"").hover(
    function(){
      $('.option'+i+'').css('background-color','lavender'),
      $(".marker:eq("+i+")").css('background-color','lavender');
    },
    function(){
      $('.option'+i+'').css('background-color',''),
      $(".marker:eq("+i+")").css('background-color','');
    }
  );

  //click either
  $(".marker:eq("+i+"), .option"+i+"").click(
    function(){
      $(".anex").not(":eq("+i+")").hide();
      $(".marker").not(":eq("+i+")").removeClass('selected'),
      $(".marker:eq("+i+")").addClass('selected');
      $(".anex:eq("+i+")").toggle();

    var visibility = map.getLayoutProperty('route'+i+'', 'visibility');

    if (visibility === 'visible') {
      map.fitBounds(Object.values(locationView)[1]);
      routeHide();
      } else {
      map.fitBounds(Object.values(locationView)[i+2]);
      $('.sidebar').animate({ scrollTop: places.scroll[i] }, 500, 'swing');
      routeHide();
      map.setLayoutProperty('route'+i+'', 'visibility', 'visible');
      }
    }
  );
}
