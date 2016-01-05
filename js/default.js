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
    var search = document.getElementById('searchResult');
    search.setAttribute('class', 'show');
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
