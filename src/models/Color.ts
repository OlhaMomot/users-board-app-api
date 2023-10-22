import { Table, Column, Model } from 'sequelize-typescript';

@Table ({
  tableName: 'colors',
})
export class Color extends Model {
  @Column
  name: string;
}

module.exports = {
  Color,
};
