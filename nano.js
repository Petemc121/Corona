

corona1 = document.getElementById('corona')

function chg(element) {
  element.style.width = "350px";
  element.style.height = "350px";
}

function chg2(element) {
  element.style.width = "300px";
  element.style.height = "300px";
}

function bounce(element) {
element.style.marginTop = "0px";

}

corona1.addEventListener('mouseover', function() {chg(corona1)});

corona1.addEventListener('mouseout', function() {chg2(corona1)});


  window.onload = function() {bounce(corona1)};
