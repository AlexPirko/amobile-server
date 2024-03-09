import { Body, Controller, Post } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Param, Query } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { ApiOkResponse, ApiBody } from '@nestjs/swagger';
import {
  PaginateAndFilterResponse,
  FindOneResponse,
  GetOnsalesResponse,
  GetNewResponse,
  SearchResponse,
  SearchRequest,
  GetByNameResponse,
  GetByNameRequest,
  Goods,
} from './types';

@ApiOkResponse({ type: Goods })
@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @ApiOkResponse({ type: PaginateAndFilterResponse })
  @Get()
  paginateAndFilter(@Query() query) {
    return this.goodsService.paginateAndFilter(query);
  }

  @Get('all')
  getAll() {
    return this.goodsService.findGoods();
  }

  @ApiOkResponse({ type: FindOneResponse })
  @Get('find/:id')
  getOne(@Param('id') id: string) {
    return this.goodsService.findOne(id);
  }

  @ApiOkResponse({ type: GetOnsalesResponse })
  @Get('onsales')
  getOnsale() {
    return this.goodsService.onsales();
  }

  @ApiOkResponse({ type: GetNewResponse })
  @Get('new')
  getNew() {
    return this.goodsService.new();
  }

  @ApiOkResponse({ type: SearchResponse })
  @ApiBody({ type: SearchRequest })
  @Post('search')
  search(@Body() { search }: { search: string }) {
    return this.goodsService.searchByString(search);
  }

  @ApiOkResponse({ type: GetByNameResponse })
  @ApiBody({ type: GetByNameRequest })
  @Post('name')
  getByName(@Body() { name }: { name: string }) {
    return this.goodsService.findOneByName(name);
  }
}
