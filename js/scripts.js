// aula 3 - variáveis
/* var latitude = 40.87663;
var longitude = -8.08373;

console.log(latitude);
console.log(longitude); */

/* var nome = "Ivan";
var sobrenome = "Matuck";
var cpf = "147.442.158-07";
var telefone = '942219333';
var ddd = '11';
var email = "ivan.matuck@hotmail.com";
var biografia = "Ivan começou a carreira como arte-finalista..."

console.log('Nome completo: ' + nome + ' ' + sobrenome);
console.log('Telefone: (' + ddd + ') ' + telefone);
console.log('Primeira letra do nome: ' + nome[0]);
console.log('Última letra do nome: ' + nome[3]);
console.log('Número de caracteres do telefone: ' + telefone.length); */

/* var num1 = 20;
var num2 = 3;

var soma = num1 + num2;
var subtracao = num1 - num2;
var divisao = num1 / num2;
var multiplicacao = num1 * num2;

var media = (num1 + num2) / 2;

console.log('A média é ' + media);

console.log(Math.pow(num1,4));

var increment = 20;
increment = increment + 5;
console.log(increment);

increment = 1;
increment += 5;
console.log(increment);

var telefone = '942219333';
var ddd = '11';

var ddd_string = ddd.toString();
var tel_string = telefone.toString();

console.log(ddd_string + tel_string);

var idade = "17";
idade = parseInt(idade);
idade++;
console.log(idade); */

/* var idade = 65;
var teste = idade == 60;

console.log(teste); */

/* var vtype = 65;

console.log(typeof vtype == "number");
 */
/* 
var undf;
console.log(typeof undf);

var nome = "Pedro";
console.log(nome[0]);

var temperatura = 35;
console.log(temperatura);

temperatura = null;
console.log(temperatura);

console.log(temperatura === undefined);

console.log(typeof temperatura); */


/* document.getElementById("caixa_amarela").innerHTML = '<h1>' + 'Caixa Amarela' + '</h1>';
var conteudo = document.getElementById("caixa_azul").innerHTML;
document.getElementById("caixa_azul").innerHTML = '<h1>' + conteudo + '</h1>'; */


/* function soma_numeros() {
    var x = 5;
    var y = 2;
    var soma = x + y;
    console.log(soma);
}

soma_numeros();

function soma_args(num1,num2) {
    var soma = num1 + num2;
    return soma;
}

var soma_f = soma_args(8,9);

var n1 = 50;
var n2 = 30;
soma_args(n1,n2); */

/* function calc_imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

var meu_peso = parseFloat(document.getElementById("peso").innerHTML);
var minha_altura = parseFloat(document.getElementById("altura").innerHTML);
console.log(typeof meu_peso);

var meu_imc = calc_imc(meu_peso,minha_altura);

document.getElementById("imc").innerHTML = meu_imc.toFixed(2); */

/* var cursos = [ "HTML", "Python", "PHP" ];

    cursos.push("Javascript");

    console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP", "Javascript" ]

    cursos.unshift("Bootstrap");

    console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]

    cursos.pop();

    console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP" ]

    cursos.shift();

    console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP" ]
 */

 /* var ingredientes = ["pão branco", "queijo", "presunto"];
 ingredientes[0] = "pão integral";
 console.log(ingredientes); */

 //aula 14

/*  var funcionario = {
     'nome' : 'Ivan Camargo Abboud Matuck',
     'ano_nasc' : 1978,
     'cpf' : '111.111.111.11',
     'cargo' : 'designer'
 };

console.log(funcionario['nome']);

console.log(funcionario.ano_nasc);


funcionario.cargo = 'programador';
funcionario.cnh = '137734247625';

console.log(funcionario);

 */

/* var cursos = [
    {
        'titulo' : 'Aprenda programação em Python 3 com facilidade do zero',
        'avaliacoes' : '680',
        'alunos' : '2300',
        'categorias' : ['programacao', 'tecnologia']
    },

    {
        'titulo' : 'Aprenda PHP e faça sites dinâmicos',
        'avaliacoes' : 180,
        'alunos' : 350,
        'categorias' : ['desenvolvimento web', 'programacao'],
    },

    {
        'titulo' : 'Excel do Zero ao Avançado',
        'avaliacoes' : 420,
        'alunos' : 1800,
        'categorias' : ['produtividade', 'gestão']
    }
];

console.log(cursos[1].categorias[0]);


cursos[2].categorias[1] = 'administração de empresas';

console.log(cursos[2].categorias[1]); */

/* 
var aluno = {
    'nome' : 'Maria',
    'sobrenome' : 'Pereira',
    'ano_nasc' : 1992,
    'ano_atual' : 2019,
    'nome_completo' : function () {
        var n_completo = this.nome + " " + this.sobrenome;
        return n_completo;
    },
    'idade_aluno' : function() {
        var idade = this.ano_atual - this.ano_nasc;
        return idade;
    }
};

console.log('nome: ' + aluno.nome_completo() );

console.log('idade: ' + aluno.idade_aluno());


console.log(typeof document.getElementById("tudo_obj")); */



//seção 3 - aula 16
/* 
document.getElementById("click-me").onclick = function() {
    alert("Você clicou no botão");
};

document.getElementById("hover-me").onmouseover = function() {
    alert("Você passou com o cursor no botão");
};

document.getElementById("leave-me").onmouseout = function() {
    alert("Você saiu com o cursor do botão");
};

document.onkeydown = function() {
    alert('Você apertou a tecla: ' + event.keyCode);
};

 */

/*  function button_clicked() {
     alert("Você clicou no botão");
 }; */

 //aula 13 - objetos

/*  var funcionario = {
     'nome': 'Pedro Souza Gomes',
     'ano_nasc': 1978,
     'cpf': '111.111.111.44',
     'cargo': 'Analista de Marketing'
 };

 console.log(funcionario['nome']);

 console.log(funcionario.cpf);

 funcionario.cargo = "Gerente de Produto";

 funcionario.cnh = "123456789";

 console.log(funcionario);


 var cursos = [
    {
        'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
        'avaliacoes': 680,
        'alunos': 2300,
        'categorias': ['programacao', 'tecnologia']
    },

    {
        'titulo': 'Aprenda PHP e faça sites dinâmicos',
        'avaliacoes': 180,
        'alunos': 350,
        'categorias': ['desenvolvimento web', 'programacao']
    },

    {
        'titulo': 'Excel do Zero ao Avançado',
        'avaliacoes': 420,
        'alunos': 1800,
        'categorias': ['produtividade', 'gestão']
    }
    
];

console.log(cursos[1].categorias[0]);

cursos[2].categorias[1]='administração de empresas'

console.log(cursos[2].categorias[1]); */

/* 
var aluno = {
    'nome' : 'Maria',
    'sobrenome': 'Pereira',
    'ano_nasc': 1992,
    'nome_completo': function () {
        var n_completo = this.nome + " " + this.sobrenome;
        return n_completo;
    },
    'idadeAluno': function(){
        var anoAtual = 2019
        var idade = this.anoAtual - this.ano_nasc;
        return idade;
    }
};

console.log(aluno.nome_completo());
console.log(aluno.idadeAluno); */


//Aula 16
/* 
document.getElementById("click-me").onclick = function() {
    alert("Você clicou no botão");
};

document.getElementById("hover-me").onmouseover = function() {
    alert("Você passou com o cursor no botão");
};

document.getElementById("leave-me").onmouseout = function() {
    alert("Você saiu com o cursor do botão");
};

document.onkeydown = function() {
    alert("Você apertou alguma tecla");
};

document.onkeydown = function() {
    alert("Você apertou alguma tecla" + event.keyCode);
}; 


function button_clicked() {
    alert("Você clicou no botão");
}
*/


/* 
document.getElementById("botao_cor").onclick = function() {
    document.getElementById("botao_cor").style['background-color'] = "orange";
    document.getElementById("botao_cor").style.transform = "translateX(100px)";
} */

/* document.getElementById("botao_cor").onclick = function() {
    this.style['background-color'] = "orange";
    this.style.transform = "translateX(100px)";
} */

/* 
var botao = document.getElementById("botao_cor");

botao.onclick = function() {
    this.style['background-color'] = "orange";
    this.style.transform = "translateX(100px)";
} */

/* 
var exemplo = document.getElementsByClassName("exemplo");
exemplo[0].innerHTML = "teste1";
console.log(exemplo); */

/* 
var exemplo = document.getElementsByTagName("p");
console.log(exemplo); */

//Aula 19 - Loops For o For/In

//for(
    //comando inicial > será executado apenas uma vez, antes do loop começar; 
    //segundo comando > checagem que dá ou não condição para que o loop continue sendo executado;
    //terceiro comando > executa após checagem da condição. pode ser incremental, por exemplo.
/* for(var a = 0; a < 5; a++) {
    console.log(a);
}

var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];

for (var b = 0; b < alunos.length; b++) {
    console.log(alunos[b]);
}

var carro = {
    'Ano' : 2009,
    'Modelo' : 'Azera',
    'Motor' : '3.3',
    'Combustível' : 'Gasolina'
} 

for (var prop in carro) {
    console.log(prop + ': ' + carro[prop]);
}

var elementos = document.getElementsByClassName("exemplo");
for (var c = 0; c < elementos.length; c++) {
    elementos[c].style.color = "orange";
    elementos[c].style['font-weight'] = "bold";
} */

//Aula 20 - Loops while e do/while

/* var count = 0;

while (count < 5) {
    console.log(count);
    count++;
}

var elementos = document.getElementsByTagName("p");
var textos = 0;
while (textos < elementos.length) {
    elementos[textos].style.color = "orange";
    textos++;
} */

/* 
var count2 = 10;

do {
    console.log(count2);
    count2++;
} while (count2 < 5) */


//Aula 21 - Condicionais

/* var idade = 18;

if (idade < 18) {
    console.log("Menor de idade");
} 
else if (idade == 18) {
    console.log("Tem 18 anos");
}
else {
    console.log ("Maior de idade");
} */
/* 
var nota = 8;

var faltas = 6;

if (nota >= 7 && faltas <= 4) {
    console.log("Aluno aprovado");
}
else {
    console.log("Aluno reprovado")
} */

/* 
if (nota >= 9 || faltas <= 5) {
    console.log("Aluno aprovado");
}
else {
    console.log("Aluno reprovado")
} */

/* 
var nome = "Ivan";

if (nome) { 
    console.log("Nome: " + nome);
} else {
    console.log("Nome não informado");
} */
/* 
var socio = false;
var idade = 15;

if (socio == true || idade >= 65) {
    console.log("O ingresso é grátis")
} else {
    if (idade < 18) {
    console.log("O ingresso custa R$ 6,00")
    } else {
    console.log("O ingresso custa R$ 12,00")
}
} */

