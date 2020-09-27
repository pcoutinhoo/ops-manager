const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = router.get('/',(req,res,next) =>{
    res.status(200).send({
        title: "operations manager API",
        version: "0.0.1"
    });
});

const create = router.post('/',(req,res,next) =>{
    res.status(201).send(req.body);
});

const update = router.put('/:id',(req,res,next) =>{
    const id  = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
});

const del = router.delete('/:id',(req,res,next) =>{
    const id = req.params.id;
    res.status(200).send({
        id: id
    });
});

app.use('/', route);
app.use('/criar', create);
app.use('/atualizar', update);
app.use('/', del);
module.exports = app;
