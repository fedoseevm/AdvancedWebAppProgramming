const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3100;

app.use(cors());
app.use(express.json());
// Define a route handler for the default home page
app.post('/math/operators', function(request, response) {
    const receivedData = request.body;
    console.log('Received JSON data: ', receivedData);
    let oblicz = dodaj(receivedData.l1, receivedData.l2, receivedData.oper)
    response.status(200).json(
        { wynik: oblicz }
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

function dodaj(zm1, zm2, dzialanie){
  zm1=parseFloat(zm1);
  zm2=parseFloat(zm2);
  dzialanie=parseInt(dzialanie);
  switch (dzialanie){
    case 1:
      wynik=zm1+zm2;
      break;
    case 2:
      wynik=zm1-zm2;
      break;
    case 3:
      wynik=zm1*zm2;
      break;
    case 4:
      if (zm2 === 0){
        wynik = "nie wolno dzielic przez 0";
      }
      else{
        wynik=zm1/zm2;
      }
  }
  return wynik;
}