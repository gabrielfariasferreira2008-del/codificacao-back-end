import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { randomUUID } from 'crypto';

@Controller('midia')
export class MidiaController {
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('arquivo', {
      storage: diskStorage({
        destination: './uploads',
        filename: (
          _req: unknown,
          file: { originalname: string },
          callback: (error: Error | null, filename: string) => void,
        ) => {
          callback(null, `${randomUUID()}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  upload(
    @UploadedFile()
    file: { filename: string; originalname: string; mimetype: string; size: number },
  ) {
    return {
      mensagem: 'Arquivo enviado com sucesso',
      arquivo: file.filename,
      original: file.originalname,
      tipo: file.mimetype,
      tamanho: file.size,
    };
  }
}
