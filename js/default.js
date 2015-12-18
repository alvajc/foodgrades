document.getElementById('search');
search.addEventListener('click', function() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(xhr.status === 200) {
      result = document.getElementById('result');
      result.textContent = xhr.responseText;
    }
  }
  var businessName = document.getElementById('businessName').value;
  var businessCity = document.getElementById('businessCity').value;
  var keywords = (businessName + " " + businessCity);
  var businessSearch = keywords.replace(/\s+/g, '-').toLowerCase();
  console.log(businessSearch);
  xhr.open('POST', '/search', true);
  xhr.send(businessSearch);
}, false);