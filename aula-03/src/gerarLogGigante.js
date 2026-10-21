// gerarLogGigante.js
const fs = require('fs');

const streamEscrita = fs.createWriteStream('servidor.log');
console.log('Gerando arquivo de log simulado...');

let tipo = ''; // Declarado fora do loop para otimizar memória

for (let i = 0; i < 200000; i++) {
    tipo = i % 7 === 0 ? 'ERROR' : 'INFO';
    streamEscrita.write(`[2026-09-09] Line ${i}: Status 200 - Mensagem de teste da aplicacao ${tipo}\n`);
}

streamEscrita.end();
console.log('Arquivo servidor.log criado com sucesso!');