// ex1
var calculo = {
    'n1' : parseFloat(document.getElementById('num_1').innerHTML),
    'n2' : parseFloat(document.getElementById('num_2').innerHTML),
    'soma_nums' : function() {
        var soma = this.n1 + this.n2;
        return soma;
    }
};
document.getElementById('resultado').innerHTML = '<strong>' + calculo.soma_nums() + '</strong>';

// ex2
var convGraus = {
    'celsius' : parseFloat(document.getElementById('caixa_azul').innerHTML),
    'conversao' : function() {
        var form = (9 * this.celsius / 5) + 32;
        return form;
    }
};

document.getElementById('caixa_amarela').innerHTML = '<strong>' + convGraus.conversao() + '</strong>';


// ex3

var grupos = [
    ["João", "Maria"],
    ["Pedro", "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
];

// método Ivan
/* 
var grupos2 = grupos[1] + grupos[2];
console.log(grupos2);

grupos.push(["Mariana", "Felipe", "Carla"]);
console.log(grupos); */

//método professor
var novos_grupos = grupos.slice(-2,);

novos_grupos.push(["Mariana", "Felipe", "Carla"]);

console.log(novos_grupos);

// ex4
var curso = {
        'titulo': "Aprenda programação em Python",
        'categoria': ['programação', 'tecnologia', 'python'],
        'n_aval_5_estrelas': 420,
        'n_aval_4_estrelas': 80,
        'n_aval_3_estrelas': 33,
        'n_aval_2_estrelas': 20,
        'n_aval_1_estrela': 4,
// inicio do ex-b
        'total_aval' : function() {
            var t_aval = this.n_aval_5_estrelas + this.n_aval_4_estrelas + this.n_aval_3_estrelas + this.n_aval_2_estrelas + this.n_aval_1_estrela;
            return t_aval;
        },
        'media_aval' : function() {
            var m_aval = ( (5 * this.n_aval_5_estrelas) + (4 * this.n_aval_4_estrelas) + (3 * this.n_aval_3_estrelas) + (2 * this.n_aval_2_estrelas) + (2 * this.n_aval_2_estrelas) + (1 * this.n_aval_1_estrela) ) / (this.n_aval_5_estrelas + this.n_aval_4_estrelas + this.n_aval_3_estrelas + this.n_aval_2_estrelas + this.n_aval_1_estrela);
            return m_aval;
        },
    };

    var total_av = curso.total_aval();
    console.log(total_av);
    document.getElementById('total_aval').innerHTML = total_av;

    var media_av = curso.media_aval().toFixed(1);
    console.log(media_av);
    document.getElementById('media_aval').innerHTML = media_av;
// fim do ex-b


// ex-a
//método Ivan
document.getElementById('categoria_principal').innerHTML = curso.categoria[0];

//método prof
// var cat_principal = curso.categoria[0];
// document.getElementById('categoria_principal').innerHTML = cat_principal;


// ex5

var pessoa = {
    'nome' : 'Marina',
    'sobrenome' : 'Lopes',
    'email' : 'mlopes@gmail.com'
};

function criar_tabela(person) {
    var tabelaHTML = '<div class="tableBox"></div>';
        tabelaHTML +=   '<table>';
        tabelaHTML +=       '<tr>';
        tabelaHTML +=           '<th>Nome Completo</th>';
        tabelaHTML +=           '<th>Email</th>';
        tabelaHTML +=       '</tr>';
        tabelaHTML +=       '<tr>';
        tabelaHTML +=           '<td>' + person.nome + ' ' + person.sobrenome +'</td>';
        tabelaHTML +=           '<td>' + person.email +'</td>';
        tabelaHTML +=       '</tr>';
        tabelaHTML +=   '</table>';
        tabelaHTML +=   '</div>';
        return tabelaHTML;
}

var tabela = criar_tabela(pessoa);

document.getElementById("tabela").innerHTML = tabela;