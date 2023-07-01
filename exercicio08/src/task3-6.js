import connect from "./connect.js";

const select = async () => {
  try {
    const query = await connect();

    const result = await query.find({
      $and: [
        { preco: { $not: { $gt: 10000 } } },
        { importado: { $not: { $eq: true } } }
      ]
    }, { projection: { _id: 0, descricao: 0 } }).toArray();

    console.table(result);
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  } finally {
    process.exit(0);
  }
};

select();
