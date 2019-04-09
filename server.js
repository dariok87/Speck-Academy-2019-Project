const express = require('express');
const app = express();
const port = 3000;
const halls = require('./halls');

app.use(express.static('public'));

app.get('/halls', function (req, res) {
    res.json(halls);
})

app.listen(port, function(){
    console.log(`Server is listening at ${port}...`);
});
