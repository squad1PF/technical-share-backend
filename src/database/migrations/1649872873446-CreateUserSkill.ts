import {MigrationInterface, QueryRunner,  Table } from "typeorm";

export class CreateUserSkill1649872873446 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_skill',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'id_user',
            type: 'uuid',
          },
          {
            name: 'id_skill',
            type: 'uuid',
          },
          {
            name: 'level',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'FKUser',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['id_user'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          },
          {
            name: 'FKSkill',
            referencedTableName: 'skills',
            referencedColumnNames: ['id'],
            columnNames: ['id_skill'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          },
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_skill')
  }
}