//ter um servidor local na maquina -CRIANDO- REST = estabelece a comunicação entre diferentes aplicações
// const http = require("http")
// const port = 3000; //porta

// const rotas = {
//     '/' :'Curso de Node',
//     '/livros': 'Entrei na pag de livros',
//     '/autores' : 'Listagem de autores',
//     '/editora' : 'Pag de editora',
//     '/sobre' : 'Info sobre o projeto'
// }

// const server = http.createServer((req, res) => { //criar o servidor. requisição e resposta
//     res.writeHead(200, {'Content-Type' : 'text/plain'});
//     res.end(rotas[req.url]);
// }) //Através do método createServer toda vez que o servidor HTTP receber uma requisição, a função de callback passada para o método será executada.

// server.listen(port, () => {
//     console.log(`Servidor escutando em http://localhost:${port}`)
// })

import app from './src/app.js'

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})