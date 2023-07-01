import connect from "./connect.js";

const select = async () => {
  try {
    const query = await connect();

    const result = await query.find({ preco: { $gt: 10000 } }, { projection: { _id: 0, importado: 0, descricao: 0 } }).toArray();

    console.table(result);
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  } finally {
    process.exit(0);
  }
};

select();
