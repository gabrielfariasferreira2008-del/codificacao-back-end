import dotenv from 'dotenv';
dotenv.config();

function iniciarAplicacao() {
    const port = process.env.PORT || 8080;
    const apikey = process.env.API_URL_PAGAMENTO;
    const dhUrl = process.env.DATABASE_URL;
     if (!apikey ) {
        console.error('Erro: A variável de ambiente API_URL_PAGAMENTO não está definida.')
        process.exit(l);
    }  
    console.log ('=== SERVIDOR DE CONFIGURAÇÃO CARREGADO ===');
    console.log(`Servidor rodando na porta ${port}`);
    console.log('conexão com o banco de dados:', dhUrl);
    console.log('status da API de pagamento:', `${apikey.length} autenticação`);              
     }
     iniciarAplicacao();
