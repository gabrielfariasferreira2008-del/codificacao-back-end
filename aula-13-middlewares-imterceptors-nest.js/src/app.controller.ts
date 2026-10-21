import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getPublic() {
    return { message: 'Rota pública acessada com sucesso!' };
  }

  @Get('admin')
  getAdmin() {
    return { message: 'Rota administrativa acessada com sucesso!' };
  }
}
