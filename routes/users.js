import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello it is users page');
});

export default router;
