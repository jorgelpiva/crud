const express = require("express");

const server = express();

server.listen(3000);

server.use(express.json());

server.get('/clientes/:index', (req,res)=>{
    const { index } = req.params

    return res.json(cliente[index]);
})

server.get('/clientes', (req,res)=>{
    return res.json(cliente);
}); 

server.post('/clientes',(req, res) =>{
    const {id} = req.body;
    const {nome} = req.body;
    const {endereco} = req.body;
    const {email} = req.body; 

    cliente.push({
        id: id,
        nome: nome,
        endereco: endereco,
        email: email
    });

    return res.json(cliente);

});

server.patch('/clientes/:index',(req,res) =>{
    const {index} = req.params;
    
    const {id} = req.body;
    const {nome} = req.body;
    const {endereco} = req.body;
    const {email} = req.body; 

    cliente[index].id = id;
    cliente[index].nome = nome;
    cliente[index].endereco = endereco;
    cliente[index].email = email;

    return res.json(cliente); 
});

server.delete('/clientes/:index', (req,res)=>{
    const { index } = req.params;

    remover(index, cliente);
    return res.json({ message: "O cliente foi deletado"});

});

const cliente = [
    {
        "id": 0,
        "nome": "Jose Carmino",
        "endereco": "rua sem nome sem numero",
        "email": "jose.gomes@saojudas.br"
    },
    {
        "id": 1,
        "nome": "Paula Souza",
        "endereco": "rua amigos da patria, 87",
        "email": "paula.souza@saojudas.br"
    },
    {
        "id": 2,
        "nome": "João da Silva",
        "endereco": "rua do ouvidouro, 482",
        "email": "joao.silva@saojudas.br"    
    },
    {
        "id": 3,
        "nome": "Maria Joana",
        "endereco": "av. do oratório, 49",
        "email": "maria.joana@saojudas.br"    
    },
    {
        "id": 4,
        "nome": "José das Couves",
        "endereco": "rua das bananeiras, 12",
        "email": "jose.couves@saojudas.br"    
    }
]

remover = function(idCliente, array) {
    for (let i = 0; i < array.length; i++){
        if (array[i].id == idCliente){
            array.splice(i, 1);
        }
    }
}