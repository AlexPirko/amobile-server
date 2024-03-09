import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Goods } from './goods.model';
import { IGoodsFilter, IGoodsQuery } from './types';

@Injectable()
export class GoodsService {
  constructor(
    @InjectModel(Goods)
    private goodsModel: typeof Goods,
  ) {}

  async paginateAndFilter(
    query: IGoodsQuery,
  ): Promise<{ count: number; rows: Goods[] }> {
    const limit = +query.limit;
    const offset = +query.offset * 8;
    const filter = {} as Partial<IGoodsFilter>;

    if (query.priceFrom && query.priceTo) {
      filter.price = {
        [Op.between]: [+query.priceFrom, +query.priceTo],
      };
    }

    if (query.goods_model) {
      filter.goods_model = JSON.parse(decodeURIComponent(query.goods_model));
    }

    if (query.memory) {
      filter.memory = JSON.parse(decodeURIComponent(query.memory));
    }

    if (query.ram) {
      filter.ram = JSON.parse(decodeURIComponent(query.ram));
    }

    if (query.cores_num) {
      filter.cores_num = JSON.parse(decodeURIComponent(query.cores_num));
    }

    return this.goodsModel.findAndCountAll({
      limit,
      offset,
      where: filter,
    });
  }

  async findGoods(): Promise<Goods[]> {
    return this.goodsModel.findAll();
  }

  async onsales(): Promise<{ count: number; rows: Goods[] }> {
    return this.goodsModel.findAndCountAll({
      where: { onsale: true },
    });
  }

  async new(): Promise<{ count: number; rows: Goods[] }> {
    return this.goodsModel.findAndCountAll({
      where: { new: true },
    });
  }

  async findOne(id: number | string): Promise<Goods> {
    return this.goodsModel.findOne({
      where: { id },
    });
  }

  async findOneByName(name: string): Promise<Goods> {
    return this.goodsModel.findOne({
      where: { name },
    });
  }

  async searchByString(str: string): Promise<{ count: number; rows: Goods[] }> {
    return this.goodsModel.findAndCountAll({
      limit: 8,
      where: { name: { [Op.like]: `%${str}%` } },
    });
  }
}
