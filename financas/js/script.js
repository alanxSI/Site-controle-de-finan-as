/*------------------BOTOES DE NAVEGACAO-----------------*/

var botaocategorias = document.getElementById('botaocategorias');
var botaoinicio = document.getElementById('botaoinicio');
var botaometas = document.getElementById('botaometas');
var botaorelatorios = document.getElementById('botaorelatorios');
var botaoconfiguracoes = document.getElementById('botaoconfiguracoes');

var inicio = document.getElementById('inicio');
var categorias = document.getElementById('categorias');
var metas = document.getElementById('metas');
var relatorios = document.getElementById('relatorios');
var configuracoes = document.getElementById('configuracoes');

botaocategorias.onclick = function() {
    categorias.style.display = 'block';
    inicio.style.display = 'none';
    metas.style.display = 'none';
    relatorios.style.display = 'none';
    configuracoes.style.display = 'none';
}

botaoinicio.onclick = function() {
    categorias.style.display = 'none';
    inicio.style.display = 'block';
    metas.style.display = 'none';
    relatorios.style.display = 'none';
    configuracoes.style.display = 'none';
}

botaometas.onclick = function() {
    metas.style.display = 'block';
    categorias.style.display = 'none';
    inicio.style.display = 'none';
    relatorios.style.display = 'none';
    configuracoes.style.display = 'none';
}

botaorelatorios.onclick = function() {
    relatorios.style.display = 'block';
    metas.style.display = 'none';
    categorias.style.display = 'none';
    inicio.style.display = 'none';
    configuracoes.style.display = 'none';
}

botaoconfiguracoes.onclick = function() {
    configuracoes.style.display = 'block';
    relatorios.style.display = 'none';
    metas.style.display = 'none';
    categorias.style.display = 'none';
    inicio.style.display = 'none';
}

/*-------------BOTOES DE ADICIONAR DADOS-----------------*/

var barranavegacao = document.getElementById('barranavegacao');

/*NOVA MOVIMENTACAO*/
var botaonovamovimentacao = document.getElementById('botaomovimento');
var botaovoltarmovimento = document.getElementById('botaovoltarmovimento');

botaonovamovimentacao.onclick = function() {
    inicio.style.display = 'none';
    novamovimentacao.style.display = 'block';
    barranavegacao.style.display = 'none';
}

botaovoltarmovimento.onclick = function() {
    novamovimentacao.style.display = 'none';
    inicio.style.display = 'block';
    barranavegacao.style.display = 'block flex';
}

/*NOVA CATEGORIA*/
var botaonovacategoria = document.getElementById('botaonovacategoria');
var botaovoltarcategoria = document.getElementById('botaovoltarcategoria');

botaonovacategoria.onclick = function() {
    categorias.style.display = 'none';
    novacategoria.style.display = 'block';
    barranavegacao.style.display = 'none';
}

botaovoltarcategoria.onclick = function() {
    novacategoria.style.display = 'none';
    categorias.style.display = 'block';
    barranavegacao.style.display = 'block flex';
}

/*NOVA META*/
var botaonovameta = document.getElementById('botaonovameta');
var botaovoltarmeta = document.getElementById('botaovoltarmeta');

botaonovameta.onclick = function() {
    metas.style.display = 'none';
    novameta.style.display = 'block';
    barranavegacao.style.display = 'none';
}

botaovoltarmeta.onclick = function() {
    novameta.style.display = 'none';
    metas.style.display = 'block';
    barranavegacao.style.display = 'block flex';
}

/*-----------------ADICIONAR DINHEIRO NA META--------------------*/
var botaoadicionardinheironotebook = document.getElementById('botaoadicionardinheironotebook');
var botaoadicionardinheiromoto = document.getElementById('botaoadicionardinheiromoto');
var botaovoltardinheironotebook = document.getElementById('botaovoltardinheironotebook');
var botaovoltardinheiromoto = document.getElementById('botaovoltardinheiromoto');

botaoadicionardinheironotebook.onclick = function() {
    metas.style.display = 'none';
    adicionardinheironotebook.style.display = 'block';
    barranavegacao.style.display = 'none';
}

botaoadicionardinheiromoto.onclick = function() {
    metas.style.display = 'none';
    adicionardinheiromoto.style.display = 'block';
    barranavegacao.style.display = 'none';
}

botaovoltardinheiromoto.onclick = function() {
    adicionardinheiromoto.style.display = 'none';
    metas.style.display = 'block';
    barranavegacao.style.display = 'block flex';
}

botaovoltardinheironotebook.onclick = function() {
    adicionardinheironotebook.style.display = 'none';
    metas.style.display = 'block';
    barranavegacao.style.display = 'block flex';
}

/*-------------------------------------------------------------
                      DADOS                                   
-------------------------------------------------------------*/

/*NOVA MOVIMENTAÇÃO */
var botaosalvarmovimento = document.getElementById('botaosalvarmovimento');
const descricaomovimento = document.getElementById('descricaomovimento');
const valormovimento = document.getElementById('valormovimento');
const datamovimento = document.getElementById('datamovimento');
const movimentacaosalva = document.getElementById('movimentacaosalva');
const listamovimentacao = document.getElementById('listamovimentacao');
const saldo = document.getElementById('saldo');
const receita = document.getElementById('receita');
const despesa = document.getElementById('despesa');
const novareceita = document.getElementById('novareceita');
const novadespesa = document.getElementById('novadespesa');
const selectcategoria = document.getElementById('selectcategoria');
const categoriamovimento = [
    {nome: "Alimentação", tipo: "despesa"},
    {nome: "Transporte", tipo: "despesa"},
    {nome: "Lazer", tipo: "despesa"},
    {nome: "Saúde", tipo: "despesa"},
    {nome: "Estudos", tipo: "despesa"},
    {nome: "Self Care", tipo: "despesa"},
    {nome: "Salário", tipo: "receita"},
    {nome: "Freelance", tipo: "receita"},
    {nome: "Presente", tipo: "receita"}
]

function salvanoinicio() {
    const card = document.createElement("div");
    card.className = "movimento";
    const info = document.createElement("div");
    info.className = "info";
    const descricao = document.createElement("p");
    descricao.className = "descricao";
    descricao.textContent = descricaomovimento.value;
    const date = document.createElement("p");
    date.className = "date";
    date.textContent = datamovimento.value;
    info.appendChild(descricao);
    info.appendChild(date);
    const valor = document.createElement("span");
    valor.className = "valor";
    if (novareceita.checked) {
        valor.textContent = `R$ ${valormovimento.value}`;
    } else if (novadespesa.checked) {
        valor.textContent = `- R$ ${valormovimento.value}`;
    }
    card.appendChild(info);
    card.appendChild(valor);
    listamovimentacao.prepend(card);
}

function limparcampos() {
    categoriamovimento.value = '';
    descricaomovimento.value = '';
    valormovimento.value = '';
    datamovimento.value = '';
}

function confirmarmovimento() {
    movimentacaosalva.style.display = 'block';
    setTimeout(function() {
        movimentacaosalva.style.display = 'none';
    }, 2000);
}

function atualizarresumo() {  /*atualiza saldo, despesa e receita*/
    let total = 0;
    let totaldespesa = 0;
    let totalreceita = 0;
    for (let movimentacao of movimentacoes) {
        if (movimentacao.tipo == "receita") {
            total += parseFloat(movimentacao.valor);
            totalreceita += parseFloat(movimentacao.valor);
            receita.textContent = `R$ ${totalreceita}`;
        } else if (movimentacao.tipo == "despesa") {
            total -= parseFloat(movimentacao.valor);
            totaldespesa += parseFloat(movimentacao.valor);
            despesa.textContent = `R$ ${totaldespesa}`;
        }
    }
    saldo.textContent = `R$ ${total}`;
}

/*muita coisa pra mexer aqui
function atualizarcategoria(){
    let total = 0;
    let num_movimentacao = 0;
    for (let movimentacao of movimentacoes){
        for (let i of categoriamovimento){
            if (i.nome == movimentacao.categoria){
                total += parseFloat(movimentacao.valor);
                num_movimentacao += 1;
                
            }
        }
    }
}
*/
function lettipo(){
    if(novareceita.checked){
        return "receita";
    }else if(novadespesa.checked){
        return "despesa";
    }
}

function definircategorias() {
    const tipo = lettipo()
    selectcategoria.innerHTML = "";
    for (let i of categoriamovimento) {
        if (i.tipo == tipo) {
            const opcao = document.createElement("option");
            opcao.value = i.nome;
            opcao.textContent = i.nome;
            selectcategoria.appendChild(opcao);
        }
    }
}

novareceita.addEventListener("change", definircategorias);
novadespesa.addEventListener("change", definircategorias);
definircategorias();

let movimentacoes = [];
botaosalvarmovimento.onclick = function() {
    if(
        selectcategoria.value == "" //
        || descricaomovimento.value == ""
        || valormovimento.value == ""
        || datamovimento.value == ""
        || (!novareceita.checked && !novadespesa.checked)
    ) {
        alert("Preencha todos os campos.");
        return;
    }

    const tipo = lettipo();
    const movimentacao = {
    categoria: selectcategoria.value,
    descricao: descricaomovimento.value,
    valor: valormovimento.value,
    data: parseFloat(datamovimento.value),
    tipo: tipo
    };
    movimentacoes.push(movimentacao);
    atualizarresumo();
    console.log(movimentacoes);
    salvanoinicio();
    limparcampos();
    confirmarmovimento();
}

const listacategorias = document.getElementById('listacategorias');

function criarcardscategorias(){
    for (let i of categoriamovimento){
    const card = document.createElement("div");
    card.dataset.categoria = i.nome;
    card.className = "caixa categoria";
    const cabecalho = document.createElement("div");
    cabecalho.className = "cabecalho";
    const titulo = document.createElement("p");
    titulo.className = "descricao";
    titulo.textContent = i.nome;
    const totalcategoria = document.createElement("span");
    totalcategoria.className = "valor";
    totalcategoria.textContent = "R$ 0";
    cabecalho.appendChild(titulo);
    cabecalho.appendChild(totalcategoria);
    card.appendChild(cabecalho);
    const movimentacoestitulo = document.createElement("p");
    movimentacoestitulo.className = "descricao";
    const num_movimentacoes = document.createElement("span");
    num_movimentacoes.textContent = "0";
    movimentacoestitulo.append(num_movimentacoes, " movimentações");
    card.appendChild(movimentacoestitulo);
    const botaovermais = document.createElement("button");
    botaovermais.addEventListener("click", abrirdetalhescategoria);
    botaovermais.className = "botaovermais";
    botaovermais.dataset.categoria = i.nome;
    botaovermais.textContent = "ver mais";
    card.appendChild(botaovermais);
    listacategorias.appendChild(card);
    } 
}

criarcardscategorias();

const detalhescategoria = document.getElementById("detalhescategoria");

function criardetalhescategoria(){
    for (let i of categoriamovimento){
        const detalhes = document.createElement("section");
        detalhes.dataset.categoria = i.nome;
        detalhes.className = "caixa detalhescategoria";
        detalhescategoria.appendChild(detalhes);
        const barrasuperior = document.createElement("div");
        barrasuperior.className = "barranavegacaodados"
        detalhes.appendChild(barrasuperior);
        const botaovoltar = document.createElement("button");
        botaovoltar.className = "botao botaovoltar";
        botaovoltar.dataset.categoria = i.nome;
        botaovoltar.textContent = "voltar";
        barrasuperior.appendChild(botaovoltar);
        const titulodetalhes = document.createElement("h2");
        titulodetalhes.textContent = i.nome;
        barrasuperior.appendChild(titulodetalhes);
        const resumodetalhes = document.createElement("div");
        detalhes.appendChild(resumodetalhes);
        const totaltitulo = document.createElement("p");
        totaltitulo.className = "descricao";
        totaltitulo.textContent = "total gasto:";
        const totalvalor = document.createElement("span");
        totalvalor.className = "valor";
        totalvalor.textContent = "R$ 0";
        const movimentacoestitulo = document.createElement("p");
        movimentacoestitulo.className = "descricao";
        resumodetalhes.append(totaltitulo, totalvalor, movimentacoestitulo);
        const totalmovimentacoes = document.createElement("span");
        totalmovimentacoes.textContent  = "0";
        movimentacoestitulo.append(totalmovimentacoes, " movimentações");
        const movimentacoeslista = document.createElement("div");
        movimentacoeslista.className = "caixa movimentacao movimentacao-categoria";
        detalhes.appendChild(movimentacoeslista);
        const card = document.createElement("div");
        card.className = "movimento";
        movimentacoeslista.appendChild(card);
        const info = document.createElement("div");
        info.className = "info";
        card.appendChild(info);
        const descricao = document.createElement("p");
        descricao.className = "descricao";
        descricao.textContent = "coxinha";
        const date = document.createElement("p");
        date.className = "date";
        date.textContent = "00/00/0000";
        info.appendChild(descricao);
        info.appendChild(date);
        const valor = document.createElement("span");
        valor.className = "valor";
        valor.textContent = "R$ 0";
        card.appendChild(valor);
    }
}

criardetalhescategoria();
/*-------------VER DETALHES CATEGORIAS---------------------*/
/*

var botaovoltardetalhesalimentacao = document.getElementById('botaovoltardetalhesalimentacao');

botaovoltardetalhesalimentacao.onclick = function() {
    detalhesalimentacao.style.display = 'none';
    categorias.style.display = 'block';
    barranavegacao.style.display = 'block flex';
}
*/

function abrirdetalhescategoria(event){
    const categoria = event.target.dataset.categoria;
    const sectiondetalhes = document.querySelector(`.detalhescategoria[data-categoria="${categoria}"]`);
    sectiondetalhes.style.display = 'block';
    categorias.style.display = 'none';
    barranavegacao.style.display = 'none';
}
