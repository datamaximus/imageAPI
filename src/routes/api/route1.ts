import express from 'express';
const route1 = express.Router();

route1.get('/', (req, res) => {
    res.send('route1');
});

export default route1;