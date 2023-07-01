import connect from "./connect.js";

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const doc = {}

rl.question('Nome do produto: ', (nome) => {
    doc.nome = nome;
    rl.question('Descrição do produto: ', (descricao) => {
        doc.descricao = descricao;
        rl.question('Preço do produto: ', (preco) => {
            doc.preco = parseInt(preco);
            rl.question('Importado? sim - não', (importado) => {
                if(importado == 'sim' || importado == 'Sim'){
                    doc.importado = true
                }else{
                    doc.importado = false
                }
                rl.question('Quantidade em estoque:', (qtd_estoque) => {
                    doc.qtd_estoque = parseInt(qtd_estoque);
                    rl.question('ID do produto:', async (idProd) => {
                        doc.id_prod = parseInt(idProd)
                        await addProd(doc)
                        rl.close();
                    })
                })
            });
        });
    });
});


const addProd = async (doc) => {
    try{
        const db = await connect();
        const prod = await db.insertOne(doc);
        console.log('Produto inserido com sucesso!');
        return prod;
    }catch(error){
        console.error('Error: ', error);
        throw error;
    }finally{
        process.exit(0);
    }
}
