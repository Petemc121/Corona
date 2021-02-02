fetch("https://api.nhs.uk/conditions/coronavirus-covid-19?url=corona app&modules=true", {
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
  

})
.catch(err => {
	console.error(err);
});
