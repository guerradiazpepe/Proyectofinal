//Muestra el recuento de numero de coches de ford
db.coches.find({marca:"ford"})

//Muestra todos los coches baratos cuyo precio de venta sea menor a 20.000 euros.
db.coches.find({precio:{$lt:20.000}})

//Se busca un coche que valga o 20.0000 o menos de eso y que sea a partir de 2018 para adelante
db.coches.find({ $and: [ { date:{$gt: new Date ("2018-01-01" )} }, { precio: { $lte: 20.000 } } ] } )

/*Mi abuelo está buscando en la base de datos un coche con las siguientes caracteristicas.
-Que sea automatico
-Que sea de carburante diesel
-Que sede 2019 en delante */
db.peliculas.find( { $and: [ { automatico:true }, { carburante: "diesel" }, { date:{$gt: new Date ("2019-01-01" ) } } ] } )
//Como vemos en esta consulta no se encuentra ningun coche que tenga esas caracteristicas

// Muestra todos los coches que no tengan marcha automatica
db.coches.find( { automatico : { $ne : true } } )

// Muestra los los coches que tenga de ancho de la llanta mas de 19.5.
db.coches.find( {"neumaticos.anchodelallanta":{$gte: 19.5 }})

// Muestra los coches que contenga frenos de tipo tambor
db.coches.find( {"frenos.tipo":{$eq: "tambor" }})

//Muestra los coches que contenga de categoria de neumaticos la C que es la mejor categoria en neumaticos
db.coches.find( { "neumaticos.categoria": { $all: ["C"] } } )


// Muestra los coches que corran a menos de 170 km/h porque en su pais no se permite superar esa velocidad
db.coches.find( { "velocidadmaxima": { $not: { $gt:170}}})

//Muestra todos los coches que corran a menos de 170km/h y sean manuales
db.coches.find( {$nor:[{ "velocidadmaxima": {not:{$gt: 170 } } }, {"automatico": {$ne: true}}]})

// Muestra los coches que contengan carroceria coupe
db.coches.find( {"caracteristicas.carroceria":{$eq: "coupe" }})


//Muestra todos los coches que en campo"extras" contenga o deportivo o turismo
db.coches.find ({ "extras": { $in: ["deportivo", "turismo"] }})

db.coches.find({ "frenos.tipo": {$ne:"disco"}})

//Muestra todos los coches con freno de tambor y de disco
db.coches.find({ "frenos.tipo": {$all:["disco", "tambor"]}})

//Muestra todos los coches que tiene 3 puertas
db.coches.find( { "caracteristicas.puertas": { $regex: "3"} } )

db.coches.find( { exxtras: { $exists: true } } )






