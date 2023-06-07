$(document).ready(function () {
    // Center of the map
    var center = [38.11568, 13.36146];
    var zoom = 15;

    var map = L.map('map').setView(center, zoom);
    var myLayer;
    var palermoURL = '/img/old-palermo.png';

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

    /*var myMap = '/img/old-palermo.png',
        imageBounds = [
            [38.1087, 13.3480],     // abajo izquierda
            [38.1251, 13.3783],     // arriba derecha
        ];

    myLayer = L.imageOverlay(myMap, imageBounds, {
        opacity: 0.4,
        interactive: true
    }).addTo(map);*/

    /* Elementos añadidos en el mapa */
    var centerMark = L.marker([38.11568, 13.36146]).addTo(map);
    centerMark.bindPopup("Centro neurálgico<br>Enclave resistencias");
    /*var markerTL = L.marker([38.13096, 13.34671]).addTo(map);
    var markerTR = L.marker([38.1284, 13.3852]).addTo(map);
    var markerBL = L.marker([38.10664, 13.3446]).addTo(map);
    /* Elementos añadidos en el mapa */
    /*var markerTL = L.marker([38.1263, 13.3495]).addTo(map);
    var markerTR = L.marker([38.1243, 13.3783]).addTo(map);
    var markerBL = L.marker([38.1097, 13.3495]).addTo(map);*/
    
    /*var circle = L.circle([38.11, 13.353], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 600
    }).addTo(map);
    circle.bindPopup("Revuelta Palermo<br>Incendio provocado");*/

    /*var polygon = L.polygon([
        [38.1057, 13.349],
        [38.1057, 13.3933],
        [38.1301, 13.3933],
        [38.1301, 13.349]
    ]).addTo(map);
    polygon.bindPopup("<i>Área restringida</i>");*/

    $("#sldOpacity").on('change', function(){
        $("#img-opacity").html(this.value);
        myLayer.setOpacity(this.value);
    });
});