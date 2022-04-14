import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMentorships1649967366336 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'mentorships',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'id_mentor',
            type: 'uuid'
          },
          {
            name: 'id_mentored',
            type: 'uuid'
          },
          {
            name: 'start_time',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'end_time',
            type: 'timestamp',
            default: 'now()'
          }
        ],
        foreignKeys: [
          {
            name: 'FKMentor',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['id_mentor'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          },
          {
            name: 'FKSkill',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['id_mentored'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('mentorships')
  }

}
