import { Op } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';

export class Goods {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Apple' })
  goods_model: string;

  @ApiProperty({ example: 12345 })
  price: string;

  @ApiProperty({ example: 'qwerty' })
  vendor_code: string;

  @ApiProperty({ example: 'iPhone' })
  name: string;

  @ApiProperty({ example: 'Memory: 512Mb' })
  description: string;

  @ApiProperty({
    example: 'https://amobile.s3.eu-north-1.amazonaws.com/samsung_fold5.png',
  })
  images: string;

  @ApiProperty({ example: 5 })
  in_stock: number;

  @ApiProperty({ example: true })
  onsale: boolean;

  @ApiProperty({ example: true })
  new: boolean;

  @ApiProperty({ example: 123 })
  popularity: number;

  @ApiProperty({ example: 12 })
  discount: number;

  @ApiProperty({ example: 32 })
  memory: number;

  @ApiProperty({ example: 512 })
  ram: number;

  @ApiProperty({ example: 4 })
  cores_num: number;

  @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
  updatedAt: string;
}

export class PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: Goods, isArray: true })
  rows: Goods;
}

export class Onsales extends Goods {
  @ApiProperty({ example: true })
  onsale: boolean;
}

export class GetOnsalesResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: Goods, isArray: true })
  rows: Onsales;
}

export class NewParts extends Goods {
  @ApiProperty({ example: true })
  new: boolean;
}

export class GetNewResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: Goods, isArray: true })
  rows: NewParts;
}

export class SearchByLetterResponse extends Goods {
  @ApiProperty({ example: 'Acervus patria.' })
  name: string;
}

export class SearchResponse extends PaginateAndFilterResponse {
  @ApiProperty({ type: SearchByLetterResponse, isArray: true })
  rows: SearchByLetterResponse;
}

export class SearchRequest {
  @ApiProperty({ example: 'a' })
  search: string;
}

export class GetByNameResponse extends Goods {
  @ApiProperty({ example: 'Acervus patria.' })
  name: string;
}

export class GetByNameRequest {
  @ApiProperty({ example: 'Acervus patria.' })
  name: string;
}

export class FindOneResponse extends Goods {}

export interface IGoodsQuery {
  limit: string;
  offset: string;
  goods_model: string | undefined;
  memory: string | undefined;
  ram: string | undefined;
  cores_num: string | undefined;
  priceFrom: string | undefined;
  priceTo: string | undefined;
}

export interface IGoodsFilter {
  goods_model: string | undefined;
  memory: string | undefined;
  ram: string | undefined;
  cores_num: string | undefined;
  price: { [Op.between]: number[] };
}
