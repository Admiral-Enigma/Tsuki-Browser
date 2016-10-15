//window.onresize = updateSize;
function updateSize() {
  var webview = document.querySelector('webview');
  var Width = document.documentElement.clientWidth;
  var Height = document.documentElement.clientHeight;
  var controls = document.querySelector('#controls');
  var controlsHeight = controls.offsetHeight;
  Height = Height - controlsHeight;
  webview.style.width = Width + 'px';
  webview.style.height = Height + 'px';
}

window.onload = function () {

  var webview = document.querySelector('#frame');
  document.querySelector('#GO').onclick = function() {
    goTo(document.querySelector('#bar').value);
  };
  document.querySelector('#back').onclick = function(){
    webview.goBack();

  };
  document.querySelector('#forward').onclick = function(){
    webview.goForward();

  };

  function goTo(URL) {
    webview.src = URL;
  }
  setInterval(updateSize(), 1000)
}
