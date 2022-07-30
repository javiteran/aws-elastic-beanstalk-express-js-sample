const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Mas cosas!. https://aws.amazon.com/es/getting-started/hands-on/create-continuous-delivery-pipeline/'));

app.get('/aws', (req, res) => res.send('<a href="https://aws.amazon.com/es/getting-started/hands-on/create-continuous-delivery-pipeline/">create-continuous-delivery-pipeline</a>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
