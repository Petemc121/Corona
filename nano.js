
corona1 = document.getElementById('corona')
menu1= document.getElementById('menu1')
menu2 = document.getElementById('menu2')


function chg(element) {
  element.style.width = "450px";
  element.style.height = "450px";

  navs = document.getElementsByClassName('nav')
  for(i=0;i<navs.length;i++) {
    navs[i].style.display = "block";
  }
}

function chg2(element) {
  element.style.width = "300px";
  element.style.height = "300px";

  navs = document.getElementsByClassName('nav')
  for(i=0;i<navs.length;i++) {
    navs[i].style.display = "none";
  }
}

function imageInit(element) {
element.style.marginTop = "0px";
}


function titleInit(element) {
  element.style.marginRight = "0px";
  }

  function title2Init(element) {
    element.style.marginLeft= "0px";
    }



corona1.addEventListener('mouseover', function() {chg(corona1)});

corona1.addEventListener('mouseout', function() {chg2(corona1)});


  window.onload = function() {
    titleInit(menu1)
    title2Init(menu2)
    imageInit(corona1)
  };
