import {
    ref,
    query,
    orderByChild,
    onChildAdded,
    off,
    endAt,
    endBefore,
    equalTo,
    startAt,
    startAfter,
    onValue,
    limitToFirst,
    limitToLast
} from "firebase/database"

function getOrderByChild(order,db,callback){
    console.log(order);
    const refDB = ref(db,'produtos/');
    const consulta = query(refDB,orderByChild(order))
    onChildAdded(consulta,callback)
}

function getFilterByChild(filter,value, db,callback){
    //implement aqui
    console.log(filter)
    const refDb = ref(db, `produtos/`)
    const consulta = query(refDb, orderByChild(filter), startAt(value))
    onChildAdded(consulta, callback)

}

function getMostExpensive(db,setValue,list){
    // implement aqui
    /**
     *     Nesta função é necessário implementar o callback,
     * pois será necessário ordenar os resultados no cliente
     * pelos produtos mais caros (reverso). É necessário chamar 
     * a função setValue() e o array list passados como parametro.
     * Para repassar os resultados do client React utiliza-se a função
     * setValue() com os parametros [...list], ou seja, setValue([...list])
     * onde em list deverá estar o array de produtos ordenados pelo preco
     * mais caro. Lembrando que list é um array, use os métodos para trabalhar
     * com arrays em JavaScript! Dica: usem reverse() ou unshift().
     * 
     *  */ 
    const refDb = ref(db, `produtos/`)
    const consulta = query(refDb, orderByChild(`preco`))
    onChildAdded(consulta, data => {
        list.unshift(data.val())
    })

    setValue([...list])

}

function getMostCheap(db,callback){
    //implemente aqui
    const refDb = ref(db, `produtos/`)
    const consulta = query(refDb, orderByChild(`preco`))
    onChildAdded(consulta, callback)
}

function getPriceRange(value, db,callback){
    //implemente aqui
    const refDb = ref(db, `produtos/`)
    const consulta = query(refDb, orderByChild(`preco`), endAt(parseInt(value)))
    onChildAdded(consulta, callback)
}

export {getOrderByChild, getFilterByChild, getMostExpensive, getMostCheap, getPriceRange}
