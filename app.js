
const express = require('express'); //importazione di express
const app = express();
const port = 3000; //porta
const postsRouter = require('./routers/posts');


app.use(express.static('public')); //file statici

app.get('/', (req, res) => {

    res.send('Ciao a tutti!');

});

app.use('/api/posts', postsRouter);

//avvio del server
app.listen(port, () => {
    console.log(`Server started on http://localhost${port}`);
});
