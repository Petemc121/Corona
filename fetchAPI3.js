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
    xArray = []
    yArray = []
  function pushData(array, value) {
    for(i=0;i<data.data.length;i++) {
    array = array.push(value);
    return array;
    }
  }
  
  
    Plotly.plot('chart', [{
        x: pushData(xArray, data.data[i].date),
        y: pushData(yArray, data.data[i].newCases),
        type:'line'
      }])
  
console.log(data.data.length);

})
.catch(err => {
	console.error(err);
});
