const express = require('express');
const router = express.Router(); //creazione di un Router nel server

//index
router.get('/', (req, res) => {
    res.send('Qui restituiremo tutti i posts')
});

//show
router.get('/:id', (req, res) => {
    res.send(`Qui restituiremo un solo post con id: ${req.params.id}`);
});

//store
router.post('/', (req, res) => {
    res.send('Qui creeremo un nuovo post')
});

//update
router.put('/:id', (req, res) => {
    res.send(`Qui aggiorneremo un post con id: ${req.params.id}`)
});

//patch
router.patch('/:id', (req, res) => {
    res.send(`Qui aggiorniamo in parte il post con id: ${req.params.id}`)
});


//delete
router.delete('/:id', (req, res) => {
    res.send(`Qui eliminiamo un singolo post con id: ${req.params.id}`)
});

module.exports = router;