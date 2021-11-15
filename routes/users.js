import express from 'express';

const router = express.Router();

const users = [
    {
        firstname: "John",
        lastname: "Doe",
        age: 25
    },
    {
        firstname: "Jane",
        lastname: "Willson",
        age: 24
    }
];

router.get('/', (req, res) => {
    console.log(users);

    res.send(users);
});



export default router;
