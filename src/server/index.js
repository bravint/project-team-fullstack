require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 4000;

const initDatabaseRouter = require('./routers/init');
const postRouter = require('./routers/post');
const userRouter = require('./routers/user');
const pokemonRouter = require('./routers/pokemon');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== 'development') {
    app.use(express.static(path.resolve(__dirname, '../../build')));
}

app.use('/init', initDatabaseRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);
app.use('/pokemon', pokemonRouter);

app.get('*', (req, res) => {
    res.json('server running');
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
