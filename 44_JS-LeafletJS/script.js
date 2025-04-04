const map = L.map('map').setView([25.552048, 87.571861], 13);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([25.552048, 87.571861]).addTo(map);

marker.bindPopup("<b>Hello Aliens!</b><br>Welcome to Brainzima.").openPopup();