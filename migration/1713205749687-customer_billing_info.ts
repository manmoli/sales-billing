import { MigrationInterface, QueryRunner } from 'typeorm';

export class CustomerBillingInfo1713205749687 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(``);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(``);
  }
}
