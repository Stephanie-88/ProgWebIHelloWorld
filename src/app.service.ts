import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
<<<<<<< HEAD
    return 'Inhaim bicha!';
=======
    return 'Hello World!';
>>>>>>> origin/main
  }
}
