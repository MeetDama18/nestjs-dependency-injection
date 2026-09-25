import { Injectable } from '@nestjs/common';
import { CreateProdDto } from './create-prod.dto';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class ProductsService {
    private products: any[] = [];

    constructor(private readonly logger: LoggerService) {}

    registerProd(createProdDto: CreateProdDto) {
        const newProd = {
            id: this.products.length + 1,
            ...createProdDto,
        };

        this.products.push(newProd);

        this.logger.log(`New user registered: ${newProd.name}`);

        return{

            message:  'Product registed via service',
            data: newProd,
        };
    }


    getAllProducts(){
        return this.products;
    }

    getProductById(id: string | number) {
  return this.products.find((p) => Number(p.id) === Number(id));
}
}
