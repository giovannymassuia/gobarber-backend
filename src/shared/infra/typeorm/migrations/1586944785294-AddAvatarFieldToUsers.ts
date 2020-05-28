import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

import tables from '../tables_db';

export default class AddAvatarFieldToUsers1586944785294
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      tables.users,
      new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(tables.users, 'avatar');
  }
}
