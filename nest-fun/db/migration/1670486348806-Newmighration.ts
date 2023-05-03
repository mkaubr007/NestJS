import { MigrationInterface, QueryRunner } from "typeorm";

export class Newmighration1670486348806 implements MigrationInterface {
    name = 'Newmighration1670486348806'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "isActive" SET DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "store" ALTER COLUMN "isActive" SET DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "store" ALTER COLUMN "isActive" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "isActive" SET DEFAULT true`);
    }

}
