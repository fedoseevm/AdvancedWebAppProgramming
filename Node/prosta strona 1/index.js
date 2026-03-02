const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3100;

app.use(cors());
// Define a route handler for the default home page
app.get('/api/data', (request, response) => {
    response.json({message: 'Pozdrowienia od serwera :)'});   // Send a response to the client
});

app.get('/about', (request, response) => {
    response.send('Strona o ...');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});