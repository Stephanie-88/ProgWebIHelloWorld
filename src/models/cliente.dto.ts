import { ApiProperty } from '@nestjs/swagger';

export class ClienteDTO {
  @ApiProperty({ description: 'Nome do cliente', example: 'João' })
  name: string;

  @ApiProperty({ description: 'Idade do cliente', example: 25 })
  age: number;
}
