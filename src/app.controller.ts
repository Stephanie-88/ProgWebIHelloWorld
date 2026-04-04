import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('vamos/:nome')
  getHello2(@Param('nome') name: string): string {
    return 'vamos la bicha ' + name;
  }
  @Get('chegamos')
  getHello3(@Query() query: any): string {
    return 'Vamos la! ' + query.nome + ' sua idade é ' + query.idade;
  }
  //http://localhost:3000/chegamos?nome=renato&idade=36

  //no java: public String[] listarClientes() { return new String[]{"joao", "maria", "pedro"}; }
  @Get('clientes/listar')
  listarClientes(): { name: string, age: number }[] {
    return [
      { name: 'joao', age: 20 },
      { name: 'maria', age: 25 },
      { name: 'pedro', age: 30 }
    ];
  }
}
