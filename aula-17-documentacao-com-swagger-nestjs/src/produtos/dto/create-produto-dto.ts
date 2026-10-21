import { ApiProperty } from "@nestjs/swagger";

export class CreateProdutoDto{
    @ApiProperty ({
       example: 'Arroz 5kg',
       description: 'Nome comercial do produto cadastrada',
        
 })
 nome: string;
 @ApiProperty({
    example: 25.90,
    description: 'preço unitário de venda',
 })
 preco: number;
 @ApiProperty({
   example:' Alimentos',
   description: 'Categoria a qual produto pertence',
 })
 categario: string;
}