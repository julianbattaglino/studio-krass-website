// Función para cargar la API de Google Maps Places con la devolución de llamada
function loadGooglePlacesAPI(callback) {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAgGYH6JqC804nFbP30ctBSx1GXwAeBhTM&libraries=places&callback=' + callback;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
}

function initGooglePlaces() {
    var placeId = 'ChIJcRlPpvMnlJURvRg9VROcSRQ'; // Replace with the ID of the place you want to get reviews for
    getPlaceReviews(placeId);
}

// Función para obtener las reseñas de un lugar específico
function getPlaceReviews(placeId) {
    let request = {
        placeId: placeId,
        fields: ['reviews'],
    };

    let service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails(request, function (place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK && place.reviews) {
            renderReviews(place.reviews);
        }
    });
}

// Función para renderizar las reseñas en el contenedor
function renderReviews(reviews) {
    let reviewsContainer = document.getElementById('reviews-container');

    console.log(reviews);

    reviews.forEach(function (review) {
        let reviewElement = document.createElement('div');
        reviewElement.classList.add('review-element');
        reviewElement.innerHTML = `
                    <img class="mb-2" src="${review.profile_photo_url}" alt="Google Review ${review.author_name} Avatar" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 10px;">
                        <h3 style="margin: 0;">${review.author_name}</h3>
                        <p style="font-size: 12px; color: #888;">${formatDate(review.time)}</p>
                        <div class="stars-container">
                            ${getStarIcons(review.rating)}
                        </div>
                    <p class="limited-text-vertical text-review" style="margin-bottom: 5px;">${review.text}</p>
                `;
        reviewsContainer.appendChild(reviewElement);
    });
}

// Función para obtener los iconos de estrellas basados en el rating
function getStarIcons(rating) {
    var starIcons = '';
    for (var i = 0; i < rating; i++) {
        starIcons += '<div class="star-icon"></div>';
    }
    return starIcons;
}

// Función para formatear la fecha en formato legible
function formatDate(time) {
    var date = new Date(time * 1000);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

// Load the Google Maps JavaScript API and initialize the Places service
loadGooglePlacesAPI('initGooglePlaces');