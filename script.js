$(document).ready(function () {
    // Center of the map
    var center = [38.1157, 13.3615];
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
    var resistMark = L.marker([38.114, 13.3666]).addTo(map);
    resistMark.bindPopup("Centro neurálgico<br>Enclave resistencias");
    
    var fireArea = L.circle([38.11, 13.353], {
        color: 'orange',
        fillColor: 'orange',
        fillOpacity: 0.4,
        radius: 400
    }).addTo(map);
    fireArea.bindPopup("Revuelta Palermo<br>Incendio provocado");

    var fireIcon = L.icon({
        iconUrl: 'img/flame-icon.png',
        iconSize: [46, 61.5],
        popupAnchor: [-3, -76],
    });

    var fireMarker = L.marker([38.11, 13.353], {icon: fireIcon}).addTo(map);
    fireMarker.bindPopup("Revuelta Palermo<br>Incendio provocado");

    var restrictedArea = L.polygon([
        [38.1157, 13.3615],
        [38.1182, 13.3677],
        [38.1233, 13.3647],
        [38.1213, 13.3579]],{
            color: 'blue',
            fillColor: 'red'
        }
    ).addTo(map);
    restrictedArea.bindPopup("<i>Área restringida</i>");

    $("#sldOpacity").on('change', function(){
        $("#img-opacity").html(this.value);
        myLayer.setOpacity(this.value);
    });
});