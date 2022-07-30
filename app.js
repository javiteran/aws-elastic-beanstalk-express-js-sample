const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!. https://aws.amazon.com/es/getting-started/hands-on/create-continuous-delivery-pipeline/'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
