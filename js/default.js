document.getElementById('search');
search.addEventListener('click', function(yelp) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(xhr.status === 200) {
    var yelpObject = xhr.responseText;
    var yelp = JSON.parse(yelpObject);
    console.log(yelp);
    resultName.textContent = yelp.name;
    resultAddress.textContent = yelp.address[0];
    resultCity.textContent = yelp.address[1];
    resultPhone.textContent = yelp.phone;
    resultRating.textContent = yelp.rating;
    resultReviews.textContent = yelp.reviewCount;
    resultExcerpt.textContent = yelp.reviews;
    resultLat.textContent = yelp.latitude;
    resultLng.textContent = yelp.longitude;
    var search = document.getElementById('searchResult');
    search.setAttribute('class', 'show');

      xhr.onload = function() {
      if(xhr.status === 200) {
        var result = xhr.responseText;
        console.log(result);
        var score = result;
        grade.textContent = score;
      }
    };

    var address = document.getElementById('resultAddress').textContent;
    console.log(address);
    var location = address.toUpperCase();
    console.log(location);
    xhr.open('POST', '/score', true);
    xhr.send(location);


    var latitude = document.getElementById('resultLat').textContent;
    var longitude = document.getElementById('resultLng').textContent;
    var lat = latitude;
    var lng = longitude;
    console.log(lat);
    console.log(lng);
    var myLatLng = {lat: JSON.parse(lat), lng: JSON.parse(lng)};
    console.log(myLatLng);

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 18
  });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    });
  }
};
  var businessName = document.getElementById('businessName').value;
  var businessCity = document.getElementById('businessCity').value;
  var keywords = (businessName + " " + businessCity);
  var businessSearch = keywords.replace(/\s+/g, '-').toLowerCase();
  console.log(businessSearch);
  xhr.open('POST', '/search', true);
  xhr.send(businessSearch);
}, false);








