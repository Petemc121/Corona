fetch("https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true", {
	"method": "GET"
	}
)
.then(response => {
  if(!response.ok) {
    throw Error("ERROR")
  }
  return response.json()
  
})
.then(data => {
  console.log(data)
  let countrySelect = document.getElementById("countrySelect")
  if (countrySelect.childNodes.length == 0) {
  for(i=0;i<data.length;i++){
    countrySelect.innerHTML = countrySelect.innerHTML +  "<option id='" + i + "' value='" + i + "'>" + data[i].country + "</option>" ;
  }

  countrySelect.addEventListener('change', function() {
    infectedStat = document.getElementById('infectedStat');
    recoveredStat = document.getElementById('recoveredStat');
    deceasedStat = document.getElementById('deceasedStat');
  
    infectedStat.innerHTML = data[countrySelect.value].infected;
    recoveredStat.innerHTML = data[countrySelect.value].recovered;
    deceasedStat.innerHTML = data[countrySelect.value].deceased;
  })
  
}

})
.catch(err => {
	console.error(err);
});
