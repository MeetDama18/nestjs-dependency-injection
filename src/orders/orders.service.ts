import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { ProductsService } from '../products/products.service';
import { LoggerService } from '../logger/logger.service';
import { CreateOrderDto } from './create-order.dto';

@Injectable()
export class OrdersService {
  private orders: any[] = [];

  constructor(
    private readonly usersService: UsersService,
    private readonly productsService: ProductsService,
    private readonly logger: LoggerService,
  ) {}

  createOrder(createOrderDto: CreateOrderDto) {
    const user = this.usersService.getUserById(String(createOrderDto.userId));
    if (!user) {
      throw new NotFoundException(`User with ID ${createOrderDto.userId} not found`);
    }

    const product = this.productsService.getProductById(String(createOrderDto.productId));
    if (!product) {
      throw new NotFoundException(`Product with ID ${createOrderDto.productId} not found`);
    }

    const newOrder = {
      orderId: this.orders.length + 1,
      user,
      product,
      createdAt: new Date(),
    };

    this.orders.push(newOrder);
    this.logger.log(`Order #${newOrder.orderId} created for ${(user as any).name}`);

    return {
      message: 'Order created successfully',
      data: newOrder,
    };
  }
}