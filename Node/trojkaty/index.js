const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3100;

app.use(cors());
app.use(express.json());

app.post('/math/trojkaty', function(request, response) {
    const receivedData = request.body;
    console.log('Received JSON data: ', receivedData);
    let oblicz = oblicz(receivedData.l1, receivedData.l2, receivedData.oper)
    response.status(200).json(
        { wynik: oblicz }
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

function oblicz(w1, w2, w3, rodzajDanych) {
  w1 = parseInt(w1);
  w2 = parseInt(w2);
  w3 = parseInt(w3);
  rodzajDanych = parseInt(rodzajDanych);
  switch (rodzajDanych) {
    case 1:
      if (czyBokiTworzaTrojkat(w1, w2, w3)) {
        wynik = "Może powstać trójkąt ";

        if (w1 === w2 && w1 === w3) {
          wynik += "równoboczny";
        }
        else if (w1 * w1 === w2 * w2 + w3 * w3 || w2 * w2 === w1 * w1 + w3 * w3 || w3 * w3 === w2 * w2 + w1 * w1) {
          wynik += "prostokątny";
        }
        else if (w1 === w2 || w1 === w3 || w2 === w3) {
          wynik += "równoramienny";
        }
        else {
          wynik += "dowolny";
        }
      }
      else {
        wynik = "Trójkąt nie może powstać";
      }
      break;

    case 2:
      if (czyKatyTworzaTrojkat(w1, w2, w3)) {
        wynik = "Może powstać trójkąt ";

        if (w1 === w2 && w1 === w3) {
          wynik += "równoboczny";
        }
        else if (w1 === 90 || w2 === 90 || w3 === 90) {
          wynik += "prostokątny";
        }
        else if (w1 === w2 || w1 === w3 || w2 === w3) {
          wynik += "równoramienny";
        }
        else if (w1 < 90 && w2 < 90 && w3 < 90) {
          wynik += "ostrokątny";
        }
        else {
          wynik += "rozwartokątny";
        }
      }
      else {
        wynik = "Trójkąt nie może powstać";
      }
      break;
  }
  return wynik;
}

function czyBokiTworzaTrojkat(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) return false;
  return true;
}

function czyKatyTworzaTrojkat(a, b, c) {
  if (a + b + c != 180) return false;
  return true;
}