import http from 'http';

const server = http.createServer((req, res) => {

    console.log(`[LOG] Método recebido ${req.method} | ${req.url}`);

    const cabecalhoPadrao = {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
    };

    if (req.url === '/status') {
        res.writeHead(200, {
            ...cabecalhoPadrao,
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({ servidor: 'online' }));

    } else {
        res.writeHead(404, {
            ...cabecalhoPadrao,
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({ erro: 'Página não encontrada' }));
    }

});

server.listen(3000, () => {
    console.log('Sentinela ativa na porta 3000');
});