"use strict";

function isCousing(num){
    var cousing = true
    var cont = 2
    while( cont <= Math.sqrt(num) && cousing ){
        cousing = !( num % cont++ == 0)
    }
    return cousing

}


function test() {
  //console.log(`y=${y}`);

  var y = 10;
}
test();
const persons = [
  {
    code: "324324",
    name: "Kevin",
    surname: "Patiño",
    age: 21,
    gender: true,
  },
  {
    code: "43535",
    name: "Nicolas",
    surname: "Saenz",
    age: 23,
    gender: false,
  },
];

//console.log(`${JSON.stringify(persons)}`)

const vector = [123, 123.42, "Juan F", { pointX: 5, pointY: 6 }];

vector.push("JS");

//console.log(vector)

const numbers = [
  19, 123, 4, 5, 654654, 564654, 546, 546, 546, 8, 89, 34, 345, 754,
];

/*for(var i = 0; i < numbers.length; i++){
   console.log(`numbers[${i}]=${numbers[i]}`)
}

for(var num of numbers){
    console.log(num)
}
*/
/*numbers.forEach(function(element, index,vec){
console.log(`${vec}-->numbers[${index}]=${element}`)
})*/

//numbers.forEach((element) => console.log(element));

//PROGRAMACIÓN FUNCIONAL
//Funciones de orden superior
// - map
// - filter
// - reduce

const vecSqrt = numbers .map(n => n * n)

const digits =numbers
    .sort((x,y)=> x-y)
    .map( n => n.toString().length)

//console.log(numbers);
//console.log(vecSqrt);
//console.log(digits);

const odss = numbers
    .filter(n => n % 2 !=0)

const cousings = numbers
    .filter( n => isCousing(n))

console.log(odss)
console.log(cousings)

const sum = cousings
    .reduce((acum, act) => {
        return acum + act
    }, 10 )

console.log(sum)


persons.forEach(person => {
    console.log(`codigo=${person.code}\nnombre=${person.name}`)
})

const phones = "[{\"imei\":\"324324324324\",\"tradeMark\":\"Nokia\"},{\"imei\":\"324\",\"tradeMark\":\"Samsung\"}]"

console.log(phones)

const objOhones = JSON.parse(phones)

objOhones.forEach( phone => console.log(phone.imei))