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
  document.querySelector('#reload').onclick = function(){
    webview.reload();
  };
  document.querySelector('#bar').addEventListener('keydown',function(event){
    if (event.keyCode == 13) {
      goTo(document.querySelector('#bar').value);
    }
  });
  document.querySelector('#newPage').onclick = function(){
    add()
  };
  function add() {
    var title = webview.getTitle();
    if(title.length > 25) {
      title = title.substring(0,24)+"...";
    }
    var newPage = document.createElement('button');
    newPage.innerHTML = title;
    newPage.value = webview.getURL();
    document.getElementById('pages').appendChild(newPage);
  }
  webview.addEventListener('did-stop-loading', loadstop);
  function goTo(URL) {
    if(URL != '' && URL != ' '){
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
  }
  function loadstop() {
    document.querySelector('#bar').value = webview.getURL();
  }
};

function updateSize() {
  var webview = document.querySelector('webview');
  var Width = document.documentElement.clientWidth;
  var Height = document.documentElement.clientHeight;
  var controls = document.querySelector('#controls');
  var controlsHeight = controls.offsetHeight;
  var pages = document.querySelector('#pages');
  var pagesWidth = pages.offsetHeight;
  Width = Width;
  Height = Height - controlsHeight;
  Height = Height - pagesWidth;
  webview.style.width = Width +  'px';
  webview.style.height = Height  +'px';
}
