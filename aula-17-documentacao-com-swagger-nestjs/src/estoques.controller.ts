import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('estoques')
@Controller('estoques')
export class EstoquesController {
  private readonly estoques = [
    { id: 1, nome: 'Parafuso M8', quantidade: 120 },
    { id: 2, nome: 'Porca M8', quantidade: 80 },
    { id: 3, nome: 'Arruela lisa', quantidade: 200 },
  ];

  @Get()
  @ApiOperation({ summary: 'Listar itens do catálogo de estoques' })
  @ApiResponse({ status: 200, description: 'Lista de itens retornada' })
  listar() {
    return this.estoques;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar item do estoque por ID' })
  @ApiParam({ name: 'id', example: '1' })
  @ApiResponse({ status: 200, description: 'Item encontrado' })
  buscar(@Param('id') id: string) {
    return this.estoques.find((item) => item.id === Number(id));
  }
}
