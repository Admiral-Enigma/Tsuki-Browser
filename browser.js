window.onresize = updateSize;


window.onload = function () {

  var webview = document.querySelector('#frame');
  updateSize();
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
    if (!URL.includes('http://')) {
      if (!URL.includes('www.')) {
        //UUUU du vil gerne søge va?
        var searchQ = URL.replace(' ', '+');
        //TODO make it so u can change your search engine
        URL = 'https://duckduckgo.com/?q='+searchQ;
        console.log(searchQ);
      }else{
        console.log('u forgot http://...  idiot');
        URL = 'http://' + URL;
      }

    }
    webview.src = URL;
  }
};

function updateSize() {
  var webview = document.querySelector('webview');
  var Width = document.documentElement.clientWidth;
  var Height = document.documentElement.clientHeight;
  var controls = document.querySelector('#controls');
  var controlsHeight = controls.offsetHeight;
  var controlsWidth = controls.offsetWidth;

  Width = Width;
  Height = Height - controlsHeight;
  webview.style.width = Width +  'px';
  webview.style.height = Height  +'px';
}
