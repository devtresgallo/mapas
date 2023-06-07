$(document).ready(function () {
    // Center of the map
    var center = [38.11568, 13.36146];
    var zoom = 15;

    var map = L.map('map').setView(center, zoom);
    var myLayer;
    var palermoURL = 'img/old-palermo.png';

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var topLeft = L.latLng(38.13096, 13.34671),
        topRight = L.latLng(38.1284, 13.3852),
        botLeft = L.latLng(38.10664, 13.3446);

    var myLayer = L.imageOverlay.rotated(palermoURL,topLeft,topRight,botLeft,{
        opacity: 0.4,
        interactive: true
    }).addTo(map);
    
    /* Elementos añadidos en el mapa */
    var centerMark = L.marker([38.11568, 13.36146]).addTo(map);
    centerMark.bindPopup("Centro neurálgico<br>Enclave resistencias");

    $("#sldOpacity").on('change', function(){
        $("#img-opacity").html(this.value);
        myLayer.setOpacity(this.value);
    });
});
