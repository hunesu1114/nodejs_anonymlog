const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/templates/home.html'));
});

app.get('/home', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/templates/home.html'));
})

app.get("/")

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

