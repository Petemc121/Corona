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
  let apiDIV = document.getElementById("data")
  for(i=0;i<data.length;i++){
   apiDIV.innerHTML = "<p>" + apiDIV.innerHTML + data[i].infected + "</p>" ;
  }
  

})
.catch(err => {
	console.error(err);
});
