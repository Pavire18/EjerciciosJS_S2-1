const forbesList = [
    {name: 'Elon Musk', amount: 219, age: 50, country:'EEUU', company:'Tesla', industry: 'Automotive'},
    {name: 'Jeff Bezos', amount: 171, age: 58, country:'EEUU', company:'Amazon', industry: 'Technology'},
    {name: 'Bernard Arnault', amount: 158, age: 73, country:'France', company:'LVMH', industry: 'Fashion'},
    {name: 'Bill Gates', amount: 129, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Warren Buffet', amount: 118, age: 91, country:'EEUU', company:'Berkshire', industry: 'Finance'},
    {name: 'Larry Page', amount: 111, age: 49, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Sergey Brin', amount: 171, age: 58, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Larry Ellison', amount: 106, age: 77, country:'EEUU', company:'Software', industry: 'Technology'},
    {name: 'Steve Ballmer', amount: 91, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Mukesh Ambani', amount: 90, age: 64, country:'India', company:'Diversified', industry: 'Finance'},
]

//1) Muestra por consola el listado de nombres de los millonarios
let listadoNombres=forbesList.map(element => element.name);
//console.log(listadoNombres);

//2) Muestra por consola (true/false) si está Amancio en la lista
let estaAmancio=(forbesList.find(element => element.name==='Amancio'))!=undefined;
//console.log(estaAmancio);

//3) Muestra por consola un listado con el resultado de dividir su patrimonio patrimonio entre los años que tienen

let result=forbesList.map(element => element.amount/element.age);
//console.log(result);

//4) Muestra por consola la media de edad de los 10 billonarios de la lista forbes

let mediaEdad=forbesList.reduce(function(sum, element) {
     return  (sum + element.age);
 }, 0)/forbesList.length;
//console.log(mediaEdad);

//5) Muestra por consola la suma de dinero de los millonarios de EEUU que están relacionados con technología

let eeuuTech=forbesList.reduce(function(sum, element) {
     return (element.country === 'EEUU' && element.industry==='Technology') ? sum+element.amount : sum;
  
 }, 0);
//console.log(eeuuTech);


//6) Muestra por consola el millonario más joven que no sea de EEUU

let youngMillioner = forbesList.reduce( function(youngest, element){
    return (youngest.age === undefined || youngest.age >= element.age) ? element : youngest;
},{});

//console.log(youngMillioner);

//7) Muestra por consola el millonario más mayor del top 5 de millonarios de EEUU

//8) Muestra por consola la media de edad y media de dinero de los millonarios de Google y Microsoft juntos