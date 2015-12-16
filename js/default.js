document.getElementById('search');
search.addEventListener('click', function() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(xhr.status === 200) {
      result = document.getElementById('result');
      result.textContent = xhr.responseText;
    }
  }
  var keyword = document.getElementById('keyword').value;
  console.log(keyword);
  xhr.open('POST', '/search', true);
  xhr.send(keyword);
}, false);