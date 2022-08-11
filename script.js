//NOME//
let nome =  prompt ('Digite seu nome...');
if (nome.length <= 05  || nome.length >=30){
    alert('Nome Inválido')
    nome = prompt ('Digite seu nome...')
};

//MATEMATICA//

let notaMatematica      = parseFloat(prompt('Sua nota de Matemática'));
let presencaMatematica  = parseInt  (prompt('Frequencia na Aula'));

if (notaMatematica   <0 || notaMatematica >10){
    alert=('Nota Invalida')
    NotaInformatica = parseFloat(promprt('Sua nota de Matemática'));
    
}

//PORTUGUES//
let notaPortugues     = parseFloat(prompt('Sua nota de Português'));
let presencaPortugues = parseInt  (prompt('Frequencia na Aula'));

if (notaPortugues <0 || notaPortugues >10){ 
    alert=('Nota Invalida')
    NotaInformatica = parseFloat(promprt('Sua nota de Português'));
    
}

//INFORMATICA//
let notaInformatica     = parseFloat(prompt('Sua nota de Informática'));
let presencaInformatica = parseInt  (prompt('Frequencia na Aula')); 

if (notaInformatica <0 || notaInformatica >10){ 
    alert=('Nota Invalida')
    NotaInformatica = parseFloat(promprt('Sua nota de Informática'));
    
}

//GEOGRAFIA//
let notaGeografia     = parseFloat(prompt ('Sua nota de Geografia'));
let presencaGeografia = parseInt  (prompt('Frequencia na Aula')); 

if (notaGeografia <0 || notaGeografia >10){
    alert=('Nota Invalida')
    NotaInformatica = parseFloat(promprt('Sua nota de Geografia'))
    
}

//INGLÊS//
let notaIngles     = parseFloat(prompt ('Sua nota de Inglês'));
let presencaIngles = parseInt  (prompt('Frequencia na Aula'));

if (notaIngles <0 || notaIngles >10){
    alert=('Nota Invalida')
    NotaInformatica = parseFloat(promprt('Sua nota de Inglês'))
    
}

//HISTÓRIA //
let notaHistoria     = parseFloat(prompt('Sua nota de História'));
let presencaHistoria = parseInt  (prompt('Frequencia na Aula')); 

if (notaHistoria <0|| notaHistoria >10){ 
    alert=('Nota Invalida')
    NotaInformatica = parseFloat(promprt('Sua nota de História'));
    
}

//FILOSOFIA //
let notaFilosofia     = parseFloat(prompt('Sua nota de Filosofia'));
let presencaFilosofia = parseInt  (prompt('Frequencia na Aula')); 

if (notaFilosofia <0 || notaFilosofia >10){
    alert=('Nota Invalida')
    NotaInformatica = parseFloat(promprt('Sua nota de Filosofia'))
    
}

//SOCIOLOGIA//
let notaSociologia     = parseFloat(prompt('Sua nota de Sociologia'));
let presencaSociologia = parseInt  (prompt('Frequencia na Aula')); 

if (notaSociologia <0 || notaSociologia >10){
    alert=('Nota Invalida')
    NotaInformatica = parseFloat(promprt('Sua nota de Sociologia'));
    
}

//LITERATURA//
let notaLiteratura     = parseFloat(prompt('Sua nota de Literatura'));
let presencaLiteratura = parseInt  (prompt('Frequencia na Aula')); 

if (notaLiteratura <0 || notaLiteratura >10){
    alert=('Nota Invalida')
    NotaInformatica = parseFloat(promprt('Sua nota de Literatura'))
    
}

//EDUCAÇÃO-FÍSICA//
let notaEducacaoFisica     = parseFloat(prompt('Sua nota de Educação Física'));
let presencaEducacaoFisica = parseInt  (prompt('Frequencia na Aula')); 

if (notaEducacaoFisica <0 || notaEducacaoFisica >10){
    alert=('Nota Invalida')
    NotaInformatica = parseFloat(promprt('Sua nota de Educação Física'));
    
}

let notaTotal= Number(notaMatematica)+ Number(notaPortugues)+ Number(notaInformatica)+ Number(notaGeografia)+ Number(notaIngles)+ Number(notaHistoria)+ Number(notaFilosofia)+ Number(notaSociologia)+ Number(notaLiteratura) + Number(notaEducacaoFisica);
let presencaTotal = Number(presencaMatematica) + Number(presencaPortugues) + Number(presencaInformatica) + Number(presencaGeografia)+ Number(presencaIngles)+ Number(presencaHistoria)+ Number(presencaFilosofia)+ Number(presencaSociologia) + Number(presencaLiteratura) + Number(presencaEducacaoFisica);
let mediaNota = Number(notaTotal) / 10
let mediaPresenca = Number(presencaTotal) /10

if (mediaNota >=8 && mediaPresenca >=6){   

    alert(`A nota do ${nome} é de ${mediaNota} e sua presença de ${mediaPresenca} Aluno provado!.

`)}

else{
    
    alert(`A nota do ${nome} é de ${mediaNota} e sua presença de ${mediaPresenca} Aluno Reprovado.

`)}