//Utilizando o async await

async function buscaCep(cep) {
    
    var mensagemErro = document.getElementById('mensagem-erro');
    mensagemErro.innerHTML = "";

    try {
        var consulta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var dadosCep = await consulta.json();

        if (dadosCep.erro) {
            throw Error("CEP não existente!");
        }

        preencheCamposEndereco(dadosCep);

        console.log(dadosCep);
        return dadosCep;
    } catch (erro) {
        mensagemErro.innerHTML = "CEP inválido, tente novamente!"
        return (erro);
    }
}

const cep = document.getElementById('cep')
cep.addEventListener("focusout", () => {buscaCep(cep.value)})


function preencheCamposEndereco(dadosCep) {
    var logradouro = document.getElementById('endereco');
    var bairro = document.getElementById('bairro');
    var cidade = document.getElementById('cidade');
    var uf = document.getElementById('estado');

    logradouro.value = dadosCep.logradouro;
    bairro.value = dadosCep.bairro;
    cidade.value = dadosCep.localidade;
    uf.value = dadosCep.uf;
}

/* Utilizando o then
const consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
    .then(resposta => resposta.json())
    .then(r => console.log(r));
console.log(consultaCEP);
*/