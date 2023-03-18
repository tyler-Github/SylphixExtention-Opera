document.addEventListener('DOMContentLoaded', function() {
    var searchBox = document.getElementById('search-box');
    var searchButton = document.getElementById('search-button');
    
    searchButton.addEventListener('click', function() {
      var query = searchBox.value;
      chrome.tabs.create({ url: "https://web.truly.tk/search?q=" + query });
    });
  });
  