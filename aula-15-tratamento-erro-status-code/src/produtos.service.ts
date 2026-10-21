import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class ProdutosService {
  private readonly logger = new Logger(ProdutosService.name);

  private readonly produtos = [
    { id: 1, nome: 'Teclado Industrial', preco: 350.0 },
    { id: 2, nome: 'Sensor de Temperatura', preco: 120.0 },
    { id: 3, nome: 'CLP Programável', preco: 1500.0 },
  ];

  buscarPorId(idParam: string) {
    const id = Number(idParam);

    if (isNaN(id)) {
      this.logger.warn(`Tentativa de busca com ID não numérico: ${idParam}`);
      throw new BadRequestException('O ID fornecido deve ser do tipo inteiro');
    }

    const produto = this.produtos.find((item) => item.id === id);

    if (!produto) {
      this.logger.warn(`Produto com ID ${id} não foi localizado.`);
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }

    return produto;
  }
}
