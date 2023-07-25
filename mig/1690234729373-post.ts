import { MigrationInterface, QueryRunner } from "typeorm";

export class Post1690234729373 implements MigrationInterface {
    name = 'Post1690234729373'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tag" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Post" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying, "content" character varying, "image" character varying, CONSTRAINT "PK_c4d3b3dcd73db0b0129ea829f9f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tags_posts" ("post_id" uuid NOT NULL, "tag_id" uuid NOT NULL, CONSTRAINT "PK_ebee619e95dc29b333a37952d52" PRIMARY KEY ("post_id", "tag_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_265f08fd81eac8ba9f58b7cbab" ON "tags_posts" ("post_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_6bfae2678a312adb286aad0e40" ON "tags_posts" ("tag_id") `);
        await queryRunner.query(`ALTER TABLE "tags_posts" ADD CONSTRAINT "FK_265f08fd81eac8ba9f58b7cbabe" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tags_posts" ADD CONSTRAINT "FK_6bfae2678a312adb286aad0e403" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags_posts" DROP CONSTRAINT "FK_6bfae2678a312adb286aad0e403"`);
        await queryRunner.query(`ALTER TABLE "tags_posts" DROP CONSTRAINT "FK_265f08fd81eac8ba9f58b7cbabe"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6bfae2678a312adb286aad0e40"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_265f08fd81eac8ba9f58b7cbab"`);
        await queryRunner.query(`DROP TABLE "tags_posts"`);
        await queryRunner.query(`DROP TABLE "Post"`);
        await queryRunner.query(`DROP TABLE "tag"`);
    }

}
