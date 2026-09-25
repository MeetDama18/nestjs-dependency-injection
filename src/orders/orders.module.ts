import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { UsersModule } from '../users/users.module';
import { ProductsModule } from '../products/products.module';
import { LoggerModule } from '../logger/logger.module';

@Module({
  imports: [UsersModule, ProductsModule, LoggerModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}