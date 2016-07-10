function submitTimer() {
  var s = document.querySelector("#duration").value;
   background.countdown(s);
}

var background = chrome.extension.getBackgroundPage();
window.addEventListener('load', function(evt) {
    document.getElementById('form').addEventListener('submit', submitTimer);
});
