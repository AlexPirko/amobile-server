import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class Goods extends Model {
  @Column
  goods_model: string;

  @Column({ defaultValue: 0 })
  price: number;

  @Column
  vendor_code: string;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  images: string;

  @Column({ defaultValue: 0 })
  in_stock: number;

  @Column({ defaultValue: false })
  onsale: boolean;

  @Column({ defaultValue: false })
  new: boolean;

  @Column
  popularity: number;

  @Column
  discount: number;

  @Column
  memory: number;

  @Column
  ram: number;

  @Column
  cores_num: number;
}
