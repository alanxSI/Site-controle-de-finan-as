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

/*-------------VER DETALHES CATEGORIAS---------------------*/

var botaodetalhesalimentacao = document.getElementById('botaodetalhesalimentacao');
var detalhesalimentacao = document.getElementById('detalhesalimentacao');
var botaovoltardetalhesalimentacao = document.getElementById('botaovoltardetalhesalimentacao');

botaodetalhesalimentacao.onclick = function() {
    categorias.style.display = 'none';
    detalhesalimentacao.style.display = 'block';
    barranavegacao.style.display = 'none';
}

botaovoltardetalhesalimentacao.onclick = function() {
    detalhesalimentacao.style.display = 'none';
    categorias.style.display = 'block';
    barranavegacao.style.display = 'block flex';
}

var botaodetalhestransporte = document.getElementById('botaodetalhestransporte');
var detalhestransporte = document.getElementById('detalhestransporte');
var botaovoltardetalhestransporte = document.getElementById('botaovoltardetalhestransporte');

botaodetalhestransporte.onclick = function() {
    categorias.style.display = 'none';
    detalhestransporte.style.display = 'block';
    barranavegacao.style.display = 'none';
}

botaovoltardetalhestransporte.onclick = function() {
    detalhestransporte.style.display = 'none';
    categorias.style.display = 'block';
    barranavegacao.style.display = 'block flex';
}

var botaodetalheslazer = document.getElementById('botaodetalheslazer');
var detalheslazer = document.getElementById('detalheslazer');
var botaovoltardetalheslazer = document.getElementById('botaovoltardetalheslazer'); 

botaodetalheslazer.onclick = function() {
    categorias.style.display = 'none';
    detalheslazer.style.display = 'block';
    barranavegacao.style.display = 'none';
}

botaovoltardetalheslazer.onclick = function() {
    detalheslazer.style.display = 'none';
    categorias.style.display = 'block';
    barranavegacao.style.display = 'block flex';
}  

var botaodetalhessaude = document.getElementById('botaodetalhessaude');
var detalhessaude = document.getElementById('detalhessaude');
var botaovoltardetalhessaude = document.getElementById('botaovoltardetalhessaude');

botaodetalhessaude.onclick = function() {
    categorias.style.display = 'none';
    detalhessaude.style.display = 'block';
    barranavegacao.style.display = 'none';
}

botaovoltardetalhessaude.onclick = function() {
    detalhessaude.style.display = 'none';
    categorias.style.display = 'block';
    barranavegacao.style.display = 'block flex';
}

var botaodetalhesestudos = document.getElementById('botaodetalhesestudos');
var detalhesestudos = document.getElementById('detalhesestudos');
var botaovoltardetalhesestudos = document.getElementById('botaovoltardetalhesestudos');

botaodetalhesestudos.onclick = function() {
    categorias.style.display = 'none';
    detalhesestudos.style.display = 'block';
    barranavegacao.style.display = 'none';
}

botaovoltardetalhesestudos.onclick = function() {
    detalhesestudos.style.display = 'none';
    categorias.style.display = 'block';
    barranavegacao.style.display = 'block flex';
}

var botaodetalhesselfcare = document.getElementById('botaodetalhesselfcare');
var detalhesselfcare = document.getElementById('detalhesselfcare');
var botaovoltardetalhesselfcare = document.getElementById('botaovoltardetalhesselfcare');

botaodetalhesselfcare.onclick = function() {
    categorias.style.display = 'none';
    detalhesselfcare.style.display = 'block';
    barranavegacao.style.display = 'none';
}

botaovoltardetalhesselfcare.onclick = function() {
    detalhesselfcare.style.display = 'none';
    categorias.style.display = 'block';
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