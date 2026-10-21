import { Controller, Post,  Body, } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { CreateProdutoDto } from './create-produto-dto.js';

@ApiTags ('produtos')
@Controller ('produtos')
export class ProdutoController { 
@Post()
@ApiOperation({summary: 'Cadastra um produto no catálogo'})
@ApiResponse({status:201, description: 'Produto cadastrado com sucesso'})
@ApiResponse({status: 400, description: 'Payload enviado contém dados invalidos'})
async create(@Body()createProdutoDto: CreateProdutoDto) {
return {
    id: 101, 
    ...createProdutoDto, 
    criadorEm: new Date().toLocaleString(),
    };
  }
}