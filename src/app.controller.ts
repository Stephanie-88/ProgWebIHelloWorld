import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiQuery, ApiParam } from '@nestjs/swagger';
import { ClienteDTO } from './models/cliente.dto';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('vamos/:nome')
  @ApiParam({ name: 'nome', type: String, description: 'Nome do indivíduo' })
  getHello2(@Param('nome') name: string): string {
    return this.appService.getHello2(name);
  }

  @Get('chegamos')
  @ApiQuery({ name: 'name', type: String, description: 'Nome do individuo' })
  @ApiQuery({ name: 'age', type: Number, description: 'Idade do individuo' })
  getHello3(@Query() query: ClienteDTO): string {
    return this.appService.getHello3(query);
  }
  //http://localhost:3000/chegamos?nome=renato&idade=36

  //no java: public String[] listarClientes() { return new String[]{"joao", "maria", "pedro"}; }
  @Get('clientes/listar')
  listarClientes(): ClienteDTO[] {
    return this.appService.listarClientes();
  }

  @Post('clientes/adicionar')
  adicionarCliente(@Body() cliente: ClienteDTO): { mensagem: string, cliente: ClienteDTO } {
    return this.appService.adicionarCliente(cliente);
  }
}
