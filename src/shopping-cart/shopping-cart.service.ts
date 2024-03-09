import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GoodsService } from 'src/goods/goods.service';
import { UsersService } from 'src/users/users.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { ShoppingCart } from './shopping-cart.model';

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectModel(ShoppingCart)
    private shoppingCartModel: typeof ShoppingCart,
    private readonly usersService: UsersService,
    private readonly goodsService: GoodsService,
  ) {}

  async findAll(userId: number | string): Promise<ShoppingCart[]> {
    return this.shoppingCartModel.findAll({ where: { userId } });
  }

  async add(addToCartDto: AddToCartDto) {
    const cart = new ShoppingCart();
    const user = await this.usersService.findOne({
      where: { username: addToCartDto.username },
    });
    const part = await this.goodsService.findOne(addToCartDto.partId);

    cart.userId = user.id;
    cart.partId = part.id;
    cart.goods_model = part.goods_model;
    cart.price = part.price;
    cart.in_stock = part.in_stock;
    cart.discount = part.discount;
    cart.image = part.images;
    cart.name = part.name;
    cart.total_price = part.price;

    return cart.save();
  }

  async updateCount(
    count: number,
    partId: number | string,
  ): Promise<{ count: number }> {
    await this.shoppingCartModel.update({ count }, { where: { partId } });

    const part = await this.shoppingCartModel.findOne({ where: { partId } });

    return { count: part.count };
  }

  async updateTotalPrice(
    total_price: number,
    partId: number | string,
  ): Promise<{ total_price: number }> {
    await this.shoppingCartModel.update({ total_price }, { where: { partId } });

    const part = await this.shoppingCartModel.findOne({ where: { partId } });

    return { total_price: part.total_price };
  }

  async remove(partId: number | string): Promise<void> {
    const part = await this.shoppingCartModel.findOne({ where: { partId } });

    await part.destroy();
  }

  async removeAll(userId: number | string): Promise<void> {
    await this.shoppingCartModel.destroy({ where: { userId } });
  }
}
