
corona1 = document.getElementById('corona');
menu1= document.getElementById('menu1');
menu2 = document.getElementById('menu2');
navs = document.getElementsByClassName('nav');
arrow = document.getElementById('arrow');
click = document.getElementById('click');
graph = document.getElementById('graph');
death = document.getElementById('death');
syringe = document.getElementById('syringe');
news = document.getElementById('news');

function chg(element) {
  element.style.width = "450px";
  element.style.height = "450px";
  arrow.style.display = "none"
  click.style.display = "none"


  navs = document.getElementsByClassName('nav')
  for(i=0;i<navs.length;i++) {
    navs[i].style.display = "block";
  }
}

function chg2(element) {
  element.style.width = "300px";
  element.style.height = "300px";
  arrow.style.display = "block"
  click.style.display = "block"

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

function arrowInit() {
  setInterval(function() {arrow.style.height = "25px"}, 300);
  setInterval(function() {arrow.style.height = "20px"}, 600);

}



document.addEventListener('click', function(event) {
  const withinBoundaries = event.composedPath().includes(corona1);
  const withinBoundaries2 = event.composedPath().includes(graph);
  const withinBoundaries3 = event.composedPath().includes(death);
  const withinBoundaries4 = event.composedPath().includes(syringe);
  const withinBoundaries5 = event.composedPath().includes(news);

  
  
  if(withinBoundaries || withinBoundaries2 || withinBoundaries3 || withinBoundaries4 || withinBoundaries5 ) {
  chg(corona1)
  }else {
    chg2(corona1)
  } 
 });

   


  window.onload = function() {
    titleInit(menu1)
    title2Init(menu2)
    imageInit(corona1)
    arrowInit()
  };

  
