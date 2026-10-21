import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateConvidadoDto } from '../dto/create-convidado.dto.js';

@Controller('convidados')
export class ConvidadosController {
// 1. Rota GET /convidados
@Get()
listarTodos() {
return ['Ana', 'Bruno', 'Carlos']; // Retorna array serializado em JSON (Status 200)
}
// 2. Rota POST /convidados
@Post()
criar(@Body() createConvidadoDto: CreateConvidadoDto) {
// Exibe no console o nome recebido
console.log(`[PORTEIRO DIGITAL] Novo convidado recebido: ${createConvidadoDto.nome}`);
return {
mensagem: `Convidado ${createConvidadoDto.nome} adicionado com sucesso!`,
dados: createConvidadoDto,
}; // Retorno padrão com Status 201 Created
}
}