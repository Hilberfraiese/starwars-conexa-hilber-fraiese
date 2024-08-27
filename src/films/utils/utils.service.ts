import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UtilsService {

  filterToDto(dtoClass: any, data: any) {
        const dtoInstance = plainToClass(dtoClass, data);
        const dtoKeys = Object.keys(dtoInstance);
        
        return Object.fromEntries(
          Object.entries(data).filter(([key]) => dtoKeys.includes(key))
        );
  }
}
