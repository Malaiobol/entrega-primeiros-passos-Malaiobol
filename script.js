//NOME//
let nome =  prompt ('Digite seu nome...');
if (nome.length <= 05 && nome.length >=30){
    alert('Nome Inválido')
    nome = prompt ('Digite seu nome...')
};

//MATEMATICA//
let materia1   = prompt ('Qual a Matéria?');
let nota1      = parseFloat(prompt('Digite sua Nota...'));
let presenca1  = parseInt  (prompt('Frequencia na Aula'));


//PORTUGUES//
let materia2  = prompt ('Qual a Matéria?')
let nota2     = parseFloat(prompt('Digite sua Nota...'));
let presenca2 = parseInt  (prompt('Frequencia na Aula'));


//INFORMATICA//
let materia3  = prompt ('Qual a Matéria?')
let nota3     = parseFloat(prompt('Digite sua Nota...'));
let presenca3 = parseInt  (prompt('Frequencia na Aula')); 


//GEOGRAFIA//
let materia4  = prompt ('Qual a Matéria?')
let nota4     = parseFloat(prompt ('Digite sua Nota...'));
let presenca4 = parseInt  (prompt('Frequencia na Aula')); 


//INGLÊS//
let materia5  = prompt ('Qual a Matéria?')
let nota5     = parseFloat(prompt ('Digite sua Nota...'));
let presenca5 = parseInt  (prompt('Frequencia na Aula'));

//HISTÓRIA //
let materia6  = prompt ('Qual a Matéria?')
let nota6     = parseFloat(prompt('Digite sua Nota...'));
let presenca6 = parseInt  (prompt('Frequencia na Aula')); 


//FILOSOFIA //
let materia7  = prompt ('Qual a Matéria?')
let nota7     = parseFloat(prompt('Digite sua Nota...'));
let presenca7 = parseInt  (prompt('Frequencia na Aula')); 

//SOCIOLOGIA//
let materia8  = prompt ('Qual a Matéria?')
let nota8     = parseFloat(prompt('Digite sua Nota...'));
let presenca8 = parseInt  (prompt('Frequencia na Aula')); 

//LITERATURA//
let materia9  = prompt ('Qual a Matéria?')
let nota9     = parseFloat(prompt('Digite sua Nota...'));
let presenca9 = parseInt(prompt('Frequencia na Aula')); 


//EDUCAÇÃO-FÍSICA//
let materia    = prompt ('Qual a Matéria?')
let nota10     = parseFloat(prompt('Digite sua Nota...'));
let presenca10 = parseInt(prompt('Frequencia na Aula')); 


let notaTotal= Number(nota1)+ Number(nota2)+ Number(nota3)+ Number(nota4)+ Number(nota5)+ Number(nota6)+ Number(nota7)+ Number(nota8)+ Number(nota9) + Number(nota10);
let presencaTotal = Number(presenca1) + Number(presenca2) + Number(presenca3) + Number(presenca4)+ Number(presenca5)+ Number(presenca6)+ Number(presenca7)+ Number(presenca8) + Number(presenca9) + Number(presenca10)
let mediaNota = Number(notaTotal) / 10
let mediaPresenca = Number(presencaTotal) /10

if (mediaNota >=8 && mediaPresenca >=6){   

    alert(`A nota do ${nome} é de ${mediaNota} e sua presença de ${mediaPresenca} Aluno provado!.

`)}

else{
    
    alert(`A nota do ${nome} é de ${mediaNota} e sua presença de ${mediaPresenca} Aluno Reprovado.

`)}