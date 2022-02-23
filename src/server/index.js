const express = require('express');
const cors = require('cors');
//const axios = require('axios')

const port = 5000;

const pokemonRouter = require('./routers/pokemon');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/pokemon', pokemonRouter)

app.get('*', (req, res) => {
    res.json('server running');
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
