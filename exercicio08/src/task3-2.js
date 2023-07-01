import connect from './connect.js';

const select = async () => {
    try {
      const query = await connect();
  
      const result = await query.find({}, { projection: { _id: 0, importado: 0, descricao: 0 } }).sort({ qtd_estoque: 1 }).toArray();
  
      console.table(result);
    } catch (error) {
      console.error('Erro:', error);
      throw error;
    } finally {
      process.exit(0);
    }
}
  
select();