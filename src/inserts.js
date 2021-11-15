/* El precio está expresado en euros, la velocidad en km/h, y las marchas la 0 es marcha atras y la 1 es iniciar la marcha */
/*El ancho de la llanta esta expresado en pulgadas*/
db.coches.drop()
db.coches.insertMany([
  {
        _id: 1,
        marca:"ford", 
        modelo:"fiesta",
        precio: 12.000,
        velocidadmaxima: 160, 
        extras:["urbano","gps integrado"], 
        caracteristicas :{
            carroceria :"Coupe", 
            puertas:"3"
        }, 
        pais:"americano", 
        frenos:[{
                tipo: "tambor",
                posicion: "trasera"
           }, {
                tipo:"disco",
                posicion:"delantera"
        }],
        date: new Date("2014-05-06"), 
        automatico: true,
        caballosdevapor: 65,
        marchas: [ 0,1 ],
        carburante: "diesel",
        neumaticos:{ 
            categoria: "A",
            anchodelallanta: 16.5
              }
},
  {_id: 2, marca: "ford", modelo: "mondeo", precio: 23.895, velocidadmaxima: 220, extras:["turismo"], caracteristicas: { carroceria:"berlina", puertas: "5"}, pais:"americano", frenos:[{ tipo: "disco", posicion: "trasera"}, {tipo:"disco",posicion: "delantera"}], date: new Date("2020-07-03"), automatico: false, caballosdevapor: 150, marchas: [ 0,1,2,3,4,5 ], carburante: "diesel", neumaticos: {categoria: "B", anchodelallanta: 18.5}},
  {_id: 3, marca: "ford", modelo: "focus", precio: 23.800, velocidadmaxima: 235, extras:["deportivo"], caracteristicas: { carroceria:"coupe", puertas: "3"}, pais: "americano", frenos:[{ tipo: "disco", posicion: "trasera"}, {tipo:"disco",posicion: "delantera"}], date: new Date("2019-09-12"), automatico: false, caballosdevapor: 165, marchas: [ 0,1,2,3,4,5,6 ], carburante: "gasolina", neumaticos: {categoria: "B", anchodelallanta: 17.5}},
  {_id: 4, marca: "ford", modelo: "galaxy", precio: 34.353, velocidadmaxima: 180 , extras:["familiar,turismo, gps integrado"], caracteristicas: { carroceria:"berlina", puertas: "7"}, pais:"americano",frenos:[{ tipo: "disco", posicion: "trasera"}, {tipo:"disco",posicion: "delantera"}], date: new Date("2021-11-07"), automatico: true, caballosdevapor: 130, marchas: [ 0,1 ], carburante: "hibrido", neumaticos: {categoria: "B", anchodelallanta: 18.5}},
  {_id: 5, marca: "ford", modelo: "mustang", precio: 62.971, velocidadmaxima: 267, extras:["deportivo"], caracteristicas: { carroceria:"berlina", puertas: "4"}, pais:"aleman",frenos:[{ tipo: "disco", posicion: "trasera"}, {tipo:"disco",posicion: "delantera"}], date: new Date("2021-07-03"), automatico: true, caballosdevapor: 460, marchas: [ 0,1 ], carburante: "gasolina", neumaticos: {categoria: "C", anchodelallanta: 20.5}},
  {_id: 6, marca: "opel", modelo: "astra", precio: 18.050, velocidadmaxima: 180, extras:["turismo"], caracteristicas: { carroceria:"coupe", puertas: "5"}, pais:"aleman",frenos:[{ tipo: "tambor", posicion: "trasera"}, {tipo:"disco",posicion: "delantera"}], date: new Date("2018-02-14"), automatico: false, caballosdevapor: 120, marchas: [ 0,1,2,3,4,5 ], carburante: "gasolina", neumaticos: {categoria: "B", anchodelallanta: 18.5}},
  {_id: 7, marca: "opel", modelo: "corsa", precio: 16.000, velocidadmaxima: 175, extras:["turismo"], caracteristicas: { carroceria:"coupe", puertas: "5"}, pais:"aleman",frenos:[{ tipo: "tambor", posicion: "trasera"}, {tipo:"disco",posicion: "delantera"}], date: new Date("2017-08-07"), automatico: true, caballosdevapor: 75, marchas: [ 0,1 ], carburante: "electrico", neumaticos: {categoria: "B", anchodelallanta: 16.5}},
  {_id: 8, marca: "opel", modelo: "grandland", precio: 28.073, velocidadmaxima: 160, extras:["turismo"], caracteristicas: { carroceria:"berlina", puertas: "5"}, pais:"aleman",frenos:[{ tipo: "disco", posicion: "trasera"}, {tipo:"disco",posicion: "delantera"}], date: new Date("2020-03-14"), automatico: false, caballosdevapor: 120, marchas: [ 0,1,2,3,4,5 ], carburante: "diesel", neumaticos: {categoria: "B", anchodelallanta: 17.5}},
  {_id: 9, marca: "opel", modelo: "mokka", precio: 22.050, velocidadmaxima: 190, extras:["familiar,gps integrado"], caracteristicas: { carroceria:"berlina", puertas: "5"}, pais:"aleman",frenos:[{ tipo: "disco", posicion: "trasera"}, {tipo:"disco",posicion: "delantera"}], date: new Date("2021-12-14"), automatico: true, caballosdevapor: 120,marchas: [ 0,1 ], carburante: "electrico", neumaticos: {categoria: "B", anchodelallanta: 18.5}},
  {_id: 10, marca: "opel", modelo: "gt", precio: 33.504, velocidadmaxima: 229, extras:["deportivo"], caracteristicas: { carroceria:"coupe", puertas: "3"}, pais:"aleman", frenos:[{ tipo: "disco", posicion: "trasera"}, {tipo:"disco",posicion: "delantera"}],date: new Date("2020-06-09"), automatico: true, caballosdevapor: 170, marchas: [ 0,1 ], carburante: "gasolina", neumaticos: {categoria: "C", anchodelallanta: 20.5}},
  {_id: 11, marca: "nissan", modelo: "micra", precio: 18.950, velocidadmaxima: 110 , extras:["urbano"], caracteristicas: { carroceria:"berlina", puertas: "5"}, pais:"japones",frenos:[{ tipo: "tambor", posicion: "trasera"}, {tipo:"disco",posicion: "delantera"}], date: new Date("2016-08-07"), automatico: false, caballosdevapor: 80 ,marchas: [ 0,1,2,3,4,5 ], carburante: "diesel", neumaticos: {categoria: "B", anchodelallanta: 15.5}},
  {_id: 12, marca: "nissan", modelo: "juke", precio: 21.670, velocidadmaxima: 190 , extras:["familiar"], caracteristicas: { carroceria:"berlina", puertas: "5"}, pais:"japones",frenos:[{ tipo: "tambor", posicion: "trasera"}, {tipo:"disco",posicion: "delantera"}], date: new Date("2018-04-17"), automatico: false, caballosdevapor: 114, marchas: [ 0,1,2,3,4,5 ],carburante: "gasolina", neumaticos: {categoria: "B", anchodelallanta: 18.5}},
  {_id: 13, marca: "nissan", modelo: "leaf", precio: 32.975, velocidadmaxima: 185, extras:["urbano, gps integrado"], caracteristicas: { carroceria:"berlina", puertas: "5"}, pais:"japones",frenos:[{ tipo: "disco", posicion: "trasera"}, {tipo:"disco",posicion: "delantera"}], date: new Date("2021-11-07"), automatico: true, caballosdevapor: 120,marchas: [ 0,1 ], carburante: "electrico", neumaticos: {categoria: "B", anchodelallanta: 18.5}},
  {_id: 14, marca: "nissan", modelo: "qashqai", precio: 25.775, velocidadmaxima: 190 , extras:["todoterreno"], caracteristicas: { carroceria:"berlina", puertas: "5"}, pais:"japones",frenos:[{ tipo: "disco", posicion: "trasera"}, {tipo:"disco",posicion: "delantera"}], date: new Date("2019-12-12"), automatico: false, caballosdevapor: 120,marchas: [ 0,1,2,3,4,5,6 ], carburante: "gasolina", neumaticos: {categoria: "B", anchodelallanta: 18.5}},
  {_id: 15, marca: "nissan", modelo: "gtr", precio: 117.200, velocidadmaxima: 315, extras:["deportivo"], caracteristicas: { carroceria:"coupe", puertas: "3"}, pais:"japones",frenos:[{ tipo: "disco", posicion: "trasera"}, {tipo:"disco",posicion: "delantera"}], date: new Date("2021-08-07"), automatico: true, caballosdevapor: 570 ,marchas: [ 0,1 ], carburante: "gasolina", neumaticos: {categoria: "C", anchodelallanta: 21.5}},
  {_id: 16, marca: "chevrolet", modelo: "aveo", precio: 11.925, velocidadmaxima: 171, extras:["urbano"], caracteristicas: { carroceria:"berlina", puertas: "5"}, pais:"americano",frenos:[{ tipo: "tambor", posicion: "trasera"}, {tipo:"disco",posicion: "delantera"}], date: new Date("2019-03-07"), automatico: false, caballosdevapor: 86,marchas: [ 0,1,2,3,4,5 ], carburante: "gasolina", neumaticos: {categoria: "B", anchodelallanta: 15.5}},
  {_id: 17, marca: "chevrolet", modelo: "cruze", precio: 16.855, velocidadmaxima: 200, extras:["familiar"], caracteristicas: { carroceria:"berlina", puertas: "5"}, pais:"americano", frenos:[{ tipo: "disco", posicion: "trasera"}, {tipo:"disco",posicion: "delantera"}],date: new Date("2015-07-07"), automatico: false, caballosdevapor: 120,marchas: [ 0,1,2,3,4,5 ], carburante: "gasolina", neumaticos: {categoria: "B", anchodelallanta: 17.5}},
  {_id: 18, marca: "chevrolet", modelo: "spark", precio: 9.325, velocidadmaxima: 160 , extras:["urbano"], caracteristicas: { carroceria:"berlina", puertas: "5"}, pais:"americano",frenos:[{ tipo: "tambor", posicion: "trasera"}, {tipo:"disco",posicion: "delantera"}], date: new Date("2017-08-07"), automatico: false, caballosdevapor: 82,marchas: [ 0,1,2,3,4,5 ], carburante: "gasolina", neumaticos: {categoria: "B", anchodelallanta: 16.5}},
  {_id: 19, marca: "chevrolet", modelo: "volt", precio: 44.425, velocidadmaxima: 175 , extras:["familiar"], caracteristicas: { carroceria:"berlina", puertas: "5"}, pais:"americano",frenos:[{ tipo: "disco", posicion: "trasera"}, {tipo:"disco",posicion: "delantera"}], date: new Date("2021-11-14"), automatico: true, caballosdevapor: 110 ,marchas: [ 0,1 ], carburante: "electrico", neumaticos: {categoria: "B", anchodelallanta: 17.5}},
  {_id: 20, marca: "chevrolet", modelo: "camaro", precio: 55.900, velocidadmaxima: 270 , extras:["deportivo"], caracteristicas: { carroceria:"coupe", puertas: "3"}, pais:"americano",frenos:[{ tipo: "disco", posicion: "trasera"}, {tipo:"disco",posicion: "delantera"}], date: new Date("2020-08-07"), automatico: true, caballosdevapor: 455,marchas: [ 0,1,2,3,4,5,6,7,8 ], carburante: "gasolina", neumaticos: {categoria: "C", anchodelallanta: 21.5}}
])
