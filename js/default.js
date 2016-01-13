document.getElementById('search');
search.addEventListener('click', function(yelp) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(xhr.status === 200) {
      var yelpObject = xhr.responseText;
      var yelp = JSON.parse(yelpObject);
      resultName.textContent = yelp.name;
      resultAddress.textContent = yelp.address[0];
      resultCity.textContent = yelp.address[1];
      resultPhone.textContent = yelp.phone;
      resultRating.textContent = yelp.rating;
      resultReviews.textContent = yelp.reviewCount;
      resultExcerpt.textContent = yelp.reviews;
      resultLat.textContent = yelp.latitude;
      resultLng.textContent = yelp.longitude;
      yelpUrl.href = yelp.url;
      var search = document.getElementById('searchResult');
      search.setAttribute('class', 'show');
    xhr.onload = function() {
    if(xhr.status === 200) {
      var result = xhr.responseText;
      var score = result;
      grade.textContent = score;
    }
  };
      var address = document.getElementById('resultAddress').textContent;
      var location = address.toUpperCase();
      xhr.open('POST', '/score', true);
      xhr.send(location);
      var latitude = document.getElementById('resultLat').textContent;
      var longitude = document.getElementById('resultLng').textContent;
      var lat = latitude;
      var lng = longitude;
      var myLatLng = {lat: JSON.parse(lat), lng: JSON.parse(lng)};
      var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      scrollwheel: false,
      zoom: 18
    });
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
      xhr.open('POST', '/search', true);
      xhr.send(businessSearch);
  }, false);








