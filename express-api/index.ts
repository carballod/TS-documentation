import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {

    res.status(201).json({
        ok: true,
        msg: 'Nuevo id: 1231313123'
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}!`)
})