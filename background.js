chrome.omnibox.onInputEntered.addListener(function(text) {
    var newURL = "https://web.truly.tk/search?q=" + text;
    chrome.tabs.create({ url: newURL });
  });
  