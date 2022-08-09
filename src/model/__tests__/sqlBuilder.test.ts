import { sql } from '../mysql/sqlBuilder';

describe('sqlBuilder', () => {
  describe('insert', () => {
    let builder = sql().insert();

    beforeEach(() => {
      builder = sql().insert();
    });

    test('it works', () => {
      expect(
        builder
          .into('user_table')
          .choose(['name', 'pasasword', 'createTime'])
          .values(['test', 123, '2021-12-12 00:00:00'])
          .end()
      ).toStrictEqual(
        `INSERT INTO user_table (name,pasasword,create_time) VALUES ('test','123','2021-12-12 00:00:00');`
      );
    });

    test('test fromWhole', () => {
      expect(builder.into('user_table').formWhole('other_user_table').end()).toStrictEqual(
        `INSERT INTO user_table FROM SELECT * FROM other_user_table;`
      );
    });
  });

  describe('delete', () => {
    let builder = sql().delete();

    beforeEach(() => {
      builder = sql().delete();
    });

    test('it works', () => {
      expect(builder.from('user_table').end()).toStrictEqual(`DELETE FROM user_table;`);
    });

    test('test where', () => {
      expect(builder.from('user_table').where('id').equalTo(666).end()).toStrictEqual(
        `DELETE FROM user_table WHERE id=666;`
      );
    });

    test('test where again', () => {
      expect(builder.from('user_table').where('name').equalTo('Ethan Teng').end()).toStrictEqual(
        `DELETE FROM user_table WHERE name='Ethan Teng';`
      );
    });
  });

  describe('update', () => {
    let builder = sql().update('user_table');

    beforeEach(() => {
      builder = sql().update('user_table');
    });

    test('it works', () => {
      expect(builder.set('id', 666).end()).toStrictEqual(`UPDATE user_table SET id=666;`);
    });

    test('test multiple set', () => {
      expect(builder.set('id', 666).set('name', 'Ethan Teng').set('age', 22).end()).toStrictEqual(
        `UPDATE user_table SET id=666, name='Ethan Teng', age=22;`
      );
    });

    test('test where again', () => {
      expect(builder.set('id', 666).where('name').equalTo('Ethan Teng').end()).toStrictEqual(
        `UPDATE user_table SET id=666 WHERE name='Ethan Teng';`
      );
    });
  });

  describe('select', () => {
    let builder = sql().select();

    beforeEach(() => {
      builder = sql().select();
    });

    test('it works', () => {
      expect(builder.all().from('user_table').end()).toStrictEqual(`SELECT * FROM user_table;`);
    });

    test('test choose one field', () => {
      expect(builder.choose('name').from('user_table').end()).toStrictEqual(
        `SELECT name FROM user_table;`
      );
    });

    test('test choose mutiple field', () => {
      expect(builder.choose(['name', 'age', 'createTime']).from('user_tables').end()).toStrictEqual(
        `SELECT name,age,create_time FROM user_tables;`
      );
    });

    test('test distinct', () => {
      builder = sql().select(true);
      expect(builder.all().from('user_table').end()).toStrictEqual(
        `SELECT DISTINCT * FROM user_table;`
      );
    });

    test('test alias', () => {
      expect(
        builder
          .choose('name')
          .as('myName')
          .choose('age')
          .as('myAge')
          .choose('createTime')
          .as('myCreateTime')
          .from('user_table')
          .end()
      ).toStrictEqual(
        `SELECT name AS myName, age AS myAge, create_time AS myCreateTime FROM user_table;`
      );
    });
  });
});
