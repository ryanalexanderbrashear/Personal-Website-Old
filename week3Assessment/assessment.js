var counter = 0;

$(function() {

    $("button#search").click(function(ev) {
        var zipCode = $("#searchBarText").val();
        getCoordsForMap(zipCode);
        $("#searchBarText").val("");
    });

    $(document).on('click', 'button#remove', function() {
        var parentDiv = $(this).parent();
        parentDiv.remove();
    });


});//onready function

var getCoordsForMap = function(zipCode) {
    var googleKey = "&key=AIzaSyDJPzeEP8rfaPZRV8gtyT2keKmKR45ROO8";
    var id = "map" + counter;
    $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCode + googleKey).done(function(data) {
        var latitude = data.results[0].geometry.location.lat;
        var longitude = data.results[0].geometry.location.lng; 
        var cityState = data.results[0].formatted_address;

        var template = $("#template").html();

        template = template.replace("@@cityState@@", cityState);
        template = template.replace("@@latitude@@", Number(latitude));
        template = template.replace("@@longitude@@", Number(longitude));
        template = template.replace("@@ID1@@", id);
        template = template.replace("@@ID2@@", id);

        $("#maps").append(template);
        counter++;

    });
}

