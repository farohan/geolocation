//selecting all textareas
const coordinatesDiv = document.getElementById('numbers');

//gathers and displays all data collected by showLocation function 
function getGeolocation() {
    if (navigator.geolocation) 
        navigator.geolocation.watchPosition(showLocation, errorFinder); //watchPosition => constant location-watching; for one-time watch, use .getCurrentPosition
    else 
        coordinatesDiv.innerHTML = 'Geolocation is not supported by this browser.';
}

//collects all geolocation data
function showLocation(location) {
    coordinatesDiv.innerHTML = `Latitude: ${location.coords.latitude}
Longitude: ${location.coords.longitude} 
Accuracy: ${location.coords.accuracy}%
Altitude: ${location.coords.altitude}
Altitude Accuracy: ${location.coords.altitudeAccuracy}%
Heading from North: ${location.coords.heading}
Speed: ${location.coords.speed}`;
}

//finds any errors while displaying geo-data
function errorFinder(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            coordinatesDiv.innerHTML = 'User denied the request for Geolocation.'
            break;
        case error.POSITION_UNAVAILABLE:
            coordinatesDiv.innerHTML = 'Location information is unavailable.'
            break;
        case error.TIMEOUT:
            coordinatesDiv.innerHTML = 'The request to get user location timed out.'
            break;
        case error.UNKNOWN_ERROR: 
            coordinatesDiv.innerHTML = 'An unknown error occurred.'
            break;
    }
}

//for the 'copy to clipboard' button
function copy() {
    coordinatesDiv.select();
    coordinatesDiv.setSelectionRange(0, 99999); //for mobile devices

    document.execCommand('copy');
    alert(`You just copied: ${coordinatesDiv.value}`);
}

