import { Body, Controller, Post, Get, Param, Delete, Patch, Query} from '@nestjs/common';

import { CreateProdDto } from './create-prod.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}
         
        @Post()
        registerProd(@Body() createProdDto: CreateProdDto){
            return this.productsService.registerProd(createProdDto);
        }
    
        @Get()
        getUsers(){
        return this.productsService.getAllProducts();
        }
    
        @Get(':id')
        getProdById(@Param('id') id: string){
             return this.productsService.getProductById(id);
        }
    
}
