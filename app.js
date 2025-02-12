
const express = require('express'); //importazione di express
const app = express();
const port = 3000; //porta


app.use(express.static('public')); //file statici

app.get('/', (req, res) => {

    res.send('Ciao a tutti!');

});

//avvio del server
app.listen(port, () => {
    console.log(`Server started on http://localhost${port}`);
});
