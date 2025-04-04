function getInfo() {
    navigator.geolocation.getCurrentPosition(success, error)
}

function success(cp) {
    const lat = cp.coords.latitude
    const lon = cp.coords.longitude

    getLocationInfo(lat,lon)
}
function error() {
    alert('Error getting location')
}

async function getLocationInfo(lat,lon) { 
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        // document.getElementById('info').textContent=data.address.city
        document.getElementById('info').textContent=data.display_name
    } catch (error) {
        console.error('Error fetching weather:', error);
        alert('Failed to fetch weather data.');
    }
}




// for form 

function getInfoForm() {
    navigator.geolocation.getCurrentPosition(successForm, errorForm)
}

function successForm(cp) {
    const lat = cp.coords.latitude
    const lon = cp.coords.longitude

    fillLocationInfo(lat,lon)
}
function errorForm() {
    alert('Error getting location')
}


async function fillLocationInfo(lat,lon) { 
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('city').value=data.address.city
        document.getElementById('state').value=data.address.state
        document.getElementById('country').value=data.address.country
    } catch (error) {
        console.error('Error fetching weather:', error);
        alert('Failed to fetch weather data.');
    }
}
getInfoForm()