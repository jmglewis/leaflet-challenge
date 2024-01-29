// Create a tile layer with OpenStreetMap tiles and a grey background
var greymap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Create a Leaflet map with the grey background
var map = L.map("map", {
  center: [37.0902, -110.7129],
  zoom: 5,
  layers: [greymap]
});

// Load earthquake data and visualize on the map
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Function to style each earthquake feature
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(feature.geometry.coordinates[2]),
      color: "#000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }

  // Function to determine marker color based on depth
  function getColor(depth) {
    switch (true) {
      case depth > 90:
        return "#F42C38";
      case depth > 70:
        return "#FF9933"; 
      case depth > 50:
        return "#ee9c00";
      case depth > 30:
        return "#eecc00";
      case depth > 10:
        return "#d4ee00";
      default:
        return "#98ee00";
    }
  }

  // Function to determine marker size based on magnitude
  function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }

  // Create GeoJSON layer with custom style
  L.geoJSON(data, {
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng);
    },
    style: styleInfo,
    onEachFeature: function(feature, layer) {
      layer.bindPopup(
        "Magnitude: " + feature.properties.mag +
        "<br>Depth: " + feature.geometry.coordinates[2] +
        "<br>Location: " + feature.properties.place
      );
    }
  }).addTo(map);

  // Create a legend
  var legend = L.control({
    position: "bottomright"
  });
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    var temperatures = [-10, 10, 30, 50, 70, 90];
    var colors = ["#98ee00", "#d4ee00", "#eecc00", "#FFAC1C", "#FF9933", "#F42C38"];


    // Loop through the temperature intervals and generate a label with a colored square for each interval
    for (var i = 0; i < temperatures.length; i++) {
    div.innerHTML +=
      "<span style='background: " + getColor(temperatures[i] + 1) + "'></span> " +
      temperatures[i] + (temperatures[i + 1] ? "&ndash;" + temperatures[i + 1] + "<br>" : "+");
  }
  return div;
};

// Add legend to the map
legend.addTo(map);
});
