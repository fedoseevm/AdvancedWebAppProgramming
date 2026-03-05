const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3100;

app.use(cors());
app.use(express.json());
// Define a route handler for the default home page
app.post('/api/data', function(request, response) {
    const receivedData = request.body;
    console.log('Received JSON data: ', receivedData);
    let oblicz = dodaj(receivedData.d1, receivedData.d2)
    response.status(200).json(
        {wynik: oblicz, zwrot: receivedData}
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

function dodaj(liczba1, liczba2) {
    return liczba1 + liczba2;
}