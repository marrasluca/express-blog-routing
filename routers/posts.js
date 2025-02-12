const express = require('express');
const router = express.Router(); //creazione di un Router nel server

//index
router.get('/', (req, res) => {
    res.send('Qui restituiremo tutti i posts')
});

//show
router.get('/:id', (req, res) => {
    res.send('Qui restituiremo un solo post')
});

//store
router.post('/', (req, res) => {
    res.send('Qui restituiremo tutti i posts')
});

//update
router.update('/:id', (req, res) => {
    res.send('Qui aggiorneremo un post')
});

//patch
router.patch('/:id', (req, res) => {
    res.send('Qui aggiorniamo in parte il post')
});


//delete
router.delete('/:id', (req, res) => {
    res.send('Qui eliminiamo un singolo post')
});

module.exports = router;