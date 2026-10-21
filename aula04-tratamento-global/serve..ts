import express from "express";

const app = express();
app.use(express.json()); 
process.on("uncaughtException", (erro) => {
    console.error('[ERROR DE PROCESSO - uncaughtException]', erro);
});
 process.on("unhandledRejection", (reason)=> {
    console.error('[ERROR DE PROCESSO - unhandledRejection]', reason);
});
app.get("/sucesso", (_req, res) => {
    res.status(200).json({ mensagem: "Servidor respondendo com sucesso" });
});
app.listen(3000, () => {
    console.log("Servidor Imortal rodando na porta 3000");
    console.log("teste Imortal 3000/sucesso");
    
});

