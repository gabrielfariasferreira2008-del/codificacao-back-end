import { Controller, Get, Param } from '@nestjs/common';
import { ProdutosService } from './produtos.service.js';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get(':id')
  buscarPorId(@Param('id') idParam: string) {
    return this.produtosService.buscarPorId(idParam);
  }
}
