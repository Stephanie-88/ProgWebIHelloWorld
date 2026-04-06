import { Injectable } from '@nestjs/common';
import { ClienteDTO } from './models/cliente.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHello2(name: string): string {
    return 'vamos la individuo ' + name;
  }

  getHello3(cliente: ClienteDTO): string {
    return 'Vamos la! ' + cliente.name + ' sua idade é ' + cliente.age;
  }

  listarClientes(): ClienteDTO[] {
    return [
      { name: 'joao', age: 20 },
      { name: 'maria', age: 25 },
      { name: 'pedro', age: 30 }
    ];
  }

  adicionarCliente(cliente: ClienteDTO): { mensagem: string, cliente: ClienteDTO } {
    return {
      mensagem: 'Cliente adicionado com sucesso!',
      cliente: { name: cliente.name, age: cliente.age }
    };
  }
}

