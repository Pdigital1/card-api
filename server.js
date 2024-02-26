const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())
const cards = {
    'ace of spades': {
        'cardName': 'ace of spades',
        'cardSuit': 'spades',
        'cardNumber': 13 || 1
    },
    'ace of clubs': {
        'cardName': 'ace of clubs',
        'cardSuit': 'clubs',
        'cardNumber': 13 || 1
    },
    'ace of diamonds': {
        'cardName': 'ace of diamonds',
        'cardSuit': 'diamonds',
        'cardNumber': 13 || 1
    },
    'ace of hearts':{
        'cardName': 'ace of hearts',
        'cardSuit': 'hearts',
        'cardNumber': 13|| 1
    },
    'unknown':{
        'cardName': 0,
        'cardSuit': 0,
        'cardNumber': 0
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:card', (request, response) => {
    const cardName = request.params.card.toLowerCase()
    if(cards[cardName]){
        response.json(cards[cardName])
    }else{
        response.json(cards['unknown'])
    }
    response.json(cards)
})

app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`)
})