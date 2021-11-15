// orden descendente
db.coches.find(). sort({"precio": -1});

// orden ascendente
db.coches.find().sort({pecio: 1}); 

//Este operador sirve para actualizar uno o varios documentos para cambiar sus valores. 
db.coches.updateMany( { marca: "ford" }, { $set: { precio: 14.500 } } )

//La función de este operador es borrar el o los documentos deseados.
db.coches.deleteMany( { carburante: "hibrido" } )
