let sample = document.getElementById("sample");
(function() {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, 
    function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {
          code:
          'console.log("hello")'
        }
      )
    })
})()