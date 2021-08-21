var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let ddd = parseInt(dados.shift());

let cidades = {
    61: "Brasilia",
    71: "Salvador",
    11: "Sao Paulo",
    21: "Rio de Janeiro",
    32: "Juiz de Fora",
    19: "Campinas",
    27: "Vitoria",
    31: "Belo Horizonte",
};
if(cidades.hasOwnProperty(ddd)){
    console.log(cidades[ddd]);
}else{
    console.log("DDD nao cadastrado");
}

