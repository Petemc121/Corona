fetch( 'https://api.coronavirus.data.gov.uk/v1/data?' +
'filters=areaType=nation;areaName=england&' +
'structure={"date":"date","newCases":"cumCasesByPublishDate"}')
.then(response => {
  if(!response.ok) {
    throw Error("ERROR")
  }
  return response.json()
  
})
.then(data => {
  console.log(data)
  for(i=0;i<data.length;i++) {
    Plotly.plot('chart', [{
        x:[data[i].date],
        y:[data[i].newCases],
        type:'line'
      }])
  }
  

})
.catch(err => {
	console.error(err);
});
