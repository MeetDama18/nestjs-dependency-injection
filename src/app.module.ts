import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { LoggerModule } from './logger/logger.module';
import { OrdersModule } from './orders/orders.module';


@Module({
  imports: [ProductsModule, UsersModule, LoggerModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
