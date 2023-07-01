import connect from "./connect.js";

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const arr = [];

function cadastrarProduto() {
  const doc = {};

  rl.question('Nome do produto: ', (nome) => {
    doc.nome = nome;
    rl.question('Descrição do produto: ', (descricao) => {
      doc.descricao = descricao;
      rl.question('Preço do produto: ', (preco) => {
        doc.preco = parseInt(preco);
        rl.question('Importado? (sim/não): ', (importado) => {
          doc.importado = importado.toLowerCase() === 'sim';
          rl.question('Quantidade em estoque: ', (qtd_estoque) => {
            doc.qtd_estoque = parseInt(qtd_estoque);
            rl.question('ID do produto: ', (idProd) => {
              doc.id_prod = parseInt(idProd);
              console.log('\nProduto cadastrado:');
              console.log(doc);
              rl.question('Deseja inserir outro produto? (sim/não): ', async (option) => {
                if (option.toLowerCase() === 'sim') {
                  arr.push(doc);
                  cadastrarProduto(); // Chamada recursiva para cadastrar mais produtos
                } else {
                  arr.push(doc);
                  rl.close();
                  console.log('\nProdutos cadastrados:');
                  console.log(arr);
                  await addProd(arr)
                }
              });
            });
          });
        });
      });
    });
  });
}

cadastrarProduto();

const addProd = async (arr) => {
    try{
        const db = await connect();
        const prod = await db.insertMany(arr);
        console.log('Produtos inserido com sucesso!');
        return prod;
    }catch(error){
        console.error('Error: ', error);
        throw error;
    }finally{
        process.exit(0);
    }
}
