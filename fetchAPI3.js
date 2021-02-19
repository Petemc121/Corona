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
    newArray = array.push(data.data[i][value]);
    
    }

    return newArray;
  }

  
  var layout = {
    autosize: true,
    width: 500,
    height: 300,
    margin: {
      l: 50,
      r: 50,
      b: 100,
      t: 100,
      pad: 4
    }
  }
  pushData(xArray, 'date')
  pushData(yArray, 'newCases')
    Plotly.plot('chart', [{
        x: xArray,
        y: yArray,
        type:'line'
      }] , layout)
  


})
.catch(err => {
	console.error(err);
});
