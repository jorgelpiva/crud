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
console.log(cliente);
console.log("_-_____________________________");

remover(2, cliente);
console.log(cliente);
 console.log("_-_____________________________");

 remover(4, cliente);
console.log(cliente);
console.log("_-_____________________________");