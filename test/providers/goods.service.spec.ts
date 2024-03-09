import { INestApplication } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { databaseConfig } from 'src/config/configuration';
import { SequelizeConfigService } from 'src/config/sequelizeConfig.service';
import { GoodsModule } from 'src/goods/goods.module';
import { GoodsService } from 'src/goods/goods.service';

describe('Auth Service', () => {
  let app: INestApplication;
  let goodsService: GoodsService;

  beforeEach(async () => {
    const testModule: TestingModule = await Test.createTestingModule({
      imports: [
        SequelizeModule.forRootAsync({
          imports: [ConfigModule],
          useClass: SequelizeConfigService,
        }),
        ConfigModule.forRoot({
          load: [databaseConfig],
        }),
        GoodsModule,
      ],
    }).compile();

    goodsService = testModule.get<GoodsService>(GoodsService);
    app = testModule.createNestApplication();

    await app.init();
  });

  it('should find by id', async () => {
    const part = await goodsService.findOne(1);

    expect(part.dataValues).toEqual(
      expect.objectContaining({
        id: 1,
        price: expect.any(Number),
        goods_model: expect.any(String),
        vendor_code: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        images: expect.any(String),
        in_stock: expect.any(Number),
        onsale: expect.any(Boolean),
        new: expect.any(Boolean),
        popularity: expect.any(Number),
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      }),
    );
  });

  it('should find by name', async () => {
    const part = await goodsService.findOneByName('Officia tumultus.');

    expect(part.dataValues).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        price: expect.any(Number),
        goods_model: expect.any(String),
        vendor_code: expect.any(String),
        name: 'Officia tumultus.',
        description: expect.any(String),
        images: expect.any(String),
        in_stock: expect.any(Number),
        onsale: expect.any(Boolean),
        new: expect.any(Boolean),
        popularity: expect.any(Number),
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      }),
    );
  });

  it('should find by search string', async () => {
    const parts = await goodsService.searchByString('nos');

    expect(parts.rows.length).toBeLessThanOrEqual(20);

    parts.rows.forEach((item) => {
      expect(item.name.toLowerCase()).toContain('nos');
      expect(item.dataValues).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          price: expect.any(Number),
          goods_model: expect.any(String),
          vendor_code: expect.any(String),
          name: expect.any(String),
          description: expect.any(String),
          images: expect.any(String),
          in_stock: expect.any(Number),
          onsale: expect.any(Boolean),
          new: expect.any(Boolean),
          popularity: expect.any(Number),
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date),
        }),
      );
    });
  });

  it('should find onsales', async () => {
    const parts = await goodsService.onsales();

    parts.rows.forEach((item) => {
      expect(item.dataValues).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          price: expect.any(Number),
          goods_model: expect.any(String),
          vendor_code: expect.any(String),
          name: expect.any(String),
          description: expect.any(String),
          images: expect.any(String),
          in_stock: expect.any(Number),
          onsale: true,
          new: expect.any(Boolean),
          popularity: expect.any(Number),
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date),
        }),
      );
    });
  });

  it('should find new parts', async () => {
    const parts = await goodsService.new();

    parts.rows.forEach((item) => {
      expect(item.dataValues).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          price: expect.any(Number),
          goods_model: expect.any(String),
          vendor_code: expect.any(String),
          name: expect.any(String),
          description: expect.any(String),
          images: expect.any(String),
          in_stock: expect.any(Number),
          onsale: expect.any(Boolean),
          new: true,
          popularity: expect.any(Number),
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date),
        }),
      );
    });
  });
});
