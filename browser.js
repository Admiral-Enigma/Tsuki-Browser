window.onresize = updateSize;


window.onload = function () {
  var webview = document.querySelector('#currentW');
  updateSize();
  document.querySelector('#GO').onclick = function() {
    goTo(document.querySelector('#bar').value);
    console.log('hej');

  };
  document.querySelector('#back').onclick = function(){
    document.querySelector('#currentW').goBack();

  };
  document.querySelector('#forward').onclick = function(){
    document.querySelector('#currentW').goForward();

  };
  document.querySelector('#reload').onclick = function(){
    document.querySelector('#currentW').reload();
  };
  /**document.querySelector('#bar').addEventListener('keydown',function(event){
    if (event.keyCode == 13) {
      goTo(document.querySelector('#bar').value);
    }
  });**/
  document.querySelector('#newPage').onclick = function(){
  };

    document.querySelector('#currentW').addEventListener('did-stop-loading', loadstop);
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
        document.querySelector('#currentW').src = URL;
        document.querySelector('#current').value = URL;


      }
    }

    function loadstop() {
      document.querySelector('#bar').value = document.querySelector('#currentW').getURL();
      document.querySelector('#current').innerHTML = document.querySelector('#currentW').getTitle();
      document.querySelector('#current').value = document.querySelector('#currentW').getURL();
    }
  }

function add() {

  var title = 'Newtab';
  if(title.length > 25) {
    title = title.substring(0,24)+"...";
  }
  var newPage = document.createElement('button');
  newPage.innerHTML = title;
  newPage.type = 'button';
  newPage.value = 'https://www.google.dk/';
  try {
    document.querySelector('#current').id = 'new';
  } catch (e) {
    console.log(e);
  }
  newPage.id = 'current';
  newPage.setAttribute("class","pure-button");
  newPage.onclick = function () {
    try {
        console.log('stuff');


      if (newPage.id == 'new') {
        document.querySelector('#current').id = 'new';
        newPage.id = 'current';
      }
      document.querySelector('#currentW').src = newPage.value;
    } catch (e) {
      console.log(e);
    }
  };
  document.getElementById('pages').appendChild(newPage);
}


function updateSize() {
  try {
    var webview = document.querySelector('#currentW');
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
  } catch (e) {
    console.log(e);
  }
}
