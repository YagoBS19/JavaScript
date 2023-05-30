function exemplo(){
    console.log('Exemplo de criação de função')
}
//Array.map()
console.log('-----------------');
const valores = [1,2,3,4,5];
let valores2 = valores.map(function(multi){
    return multi*5;
})
console.log(valores2);
console.log('-----------------');

//Destructuring
const frutas = ['Maça', 'Limão', 'Uva'];
let [Vermelho, Verde] = frutas;
console.log(Verde,Vermelho);
[Verde, Vermelho] = [Vermelho, Verde];
console.log(Verde, Vermelho);
console.log('-----------------');

//Array.forEach()
const valor_min = [0,1,2,3];
valor_min.forEach(function(minimos){
    console.log(minimos);
});
console.log('-----------------');

//Array.filter()
const users = [
    {nome: 'Yago', idade: 20},
    {nome: 'Bruno', idade: 32},
    {nome: 'Maria', idade: 19},
    {nome: 'Larissa', idade: 15},
    {nome: 'Anderson', idade: 17},
    {nome: 'Lorena', idade: 41}
]
let maiores_de_idade = users.filter(pessoas => pessoas.idade >= 18);
console.log(maiores_de_idade);
console.log('-----------------');

//Criação de função
exemplo()
console.log('-----------------');

//Funções callback
setTimeout(function() {
    console.log('Exemplo de função de callback');
}, 2000);
setTimeout(() => {
    console.log('Outro exemplo de função de callback utilizando arrow function')
    console.log('-----------------');
}, 3000);

//Destructuring em objetos
const pet = {
    nome: 'Bidu', 
    comida:'Sachê', 
    brinquedo:'Bola'
};
const { nome, comida, brinquedo } = pet;
console.log('Brinquedo preferido de', nome, 'é', brinquedo, 'e sua comida preferida é', comida )
console.log('-----------------');

