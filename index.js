/*if / else é a sintaxe (estrutura) de programação
utilizada para condicionais

Se a condição for verdadeira o código dentro do if é
executado

let condicao1 = true
if condicao1 {
    console.log('entrei no if1')
}

let condicao2 = false

if condicao2 {
    console.log('entrei no if2')
}
*/

function recebeNumero(num1, num2) {
    if(num1 === num2){
    return 'parabens!'}
}

console.log(recebeNumero(1,1));


//----------IF + ELSE-----------------

let condicao2 = false
if (condicao2) {
    console.log('entrei no if1')
} else {
    console.log('entrei no meu else')
}

////NAO USAR CONSOLE.LOG NA FUNÇÃO *******

function igualOuDiferente(a,b){
    if(a===b){
        return 'igual';
    } else {
        return 'numeros diferentes';
    }
}

console.log(igualOuDiferente(
    Number(prompt('digite um numero')),
    Number(prompt('digite mais um numero'))
)
);
//-----------IF + ELSE + IF------------------------
let cond1 = false
let cond2 = true

if(cond1){
    console.log('entrei no meu f1')
    } else {
    if (cond2){
        console.log('entrei no f2!')
    }
};
//-------- ELSE IF-------------------------------
let c1 = false
let c2 = false
if (c1) {
    console.log('entrei no if1')
}   else if (c2){
    console.log('entrei no f2')
}   else {
    console.log('entrei no else')
}

//////execicio

function igualOuDiferente(a,b){
    if(a===b){
        return 'igual';
    }   else if (a > b){
        return 'primeiro maior que segundo' 
    }   else {
        return 'primeiro menor que segundo'
    }
}

console.log(igualOuDiferente(
    Number(prompt('digite um numero')),
    Number(prompt('digite mais um numero'))
)
);

let paisDeOrigem
if(paisDeOrigem === 'Brasil') {
    console.log('brasileiro')
}   else if(paisDeOrigem === 'EUA') {
    console.log('norte americano')
}   else if(paisDeOrigem === 'Inglaterra'){
    console.log('inglês')
}   else if(paisDeOrigem === 'França') {
    console.log('Frances')
}   else if(paisDeOrigem === 'Itália'){
    console.log("italiano")
}   else if(paisDeOrigem === 'Canadá'){
    console.log('canadense')
} else {
    console.log('nacionalidade não encontrada')
}
//----------- swich case -----------
switch(paisDeOrigem){
    case 'Brasil':
    console.log ('brasileiro')
break
    case 'EUA':
    console.log("norte-americano")
break
    case 'Ingraterra':
    console.log('inglês')
break
    default:
        console.log('nacionalidade não encontrada')
break
}
//exercicio
let pokemonUser
pokemonUser = prompt('Digite um pokemon');
switch(pokemonUser){
    case 'Bulbasauro':
        console.log('Planta-veneno')
    break
    case 'Charmander':
        console.log('Fogo')
    break
    case 'Squirtle':
        console.log('Água')
    break
    default:
        console.log('nao encontrado')
    break
}
