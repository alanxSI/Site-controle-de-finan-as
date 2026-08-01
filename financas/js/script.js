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
