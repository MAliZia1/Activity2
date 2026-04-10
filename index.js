const express = require('express'); 
const app = express(); 
app.get('/', (req, res) => res.send('CI/CD Ready!')); 
app.listen(4000, () => console.log('App running on port 4000'));