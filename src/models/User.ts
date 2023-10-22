import { Table, Column, Model } from 'sequelize-typescript';

@Table ({
  tableName: 'users',
})
export class User extends Model {
  @Column
  name: string;

  @Column
  carColorId: number;
}
