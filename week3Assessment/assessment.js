$(function() {


    $("button#search").click(function(ev) {
        var zipCode = $("#searchBarText").val();
        getCoords(zipCode);
        $("#searchBarText").val("");
    });

});//onready function

var getCoords = function(zipCode) {
    var googleKey = "&key=AIzaSyDJPzeEP8rfaPZRV8gtyT2keKmKR45ROO8";
    $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCode + googleKey).done(function(data) {
        var latitude = data.results[0].geometry.location.lat;
        var longitude = data.results[0].geometry.location.lng; 
        var cityState = data.results[0].formatted_address;
        initMap(latitude, longitude);
    });
}

var map;
function initMap(latitude, longitude) {

    var myLat = Number(latitude);
    var myLng = Number(longitude);
    map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: myLat, lng: myLng},
    zoom: 8
    });

    var marker = new google.maps.Marker({
    position: {lat: myLat, lng: myLng},
    map: map,
    title: 'Current Location'
    });
}