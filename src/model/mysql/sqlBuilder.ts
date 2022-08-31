import { isString } from '../../utils/typeJudgement';
import { humpToLine } from '../../utils/entityTransform';

enum SqlToken {
  // operation
  INSERT = 'INSERT',
  SELECT = 'SELECT',
  DELETE = 'DELETE',
  UPDATE = 'UPDATE',
  TRUNCATE = 'TRUNCATE',

  // conjunction
  AS = 'AS',
  INTO = 'INTO',
  FROM = 'FROM',
  AND = 'AND',
  OR = 'OR',
  BETWEEN = 'BETWEEN',
  SET = 'SET',
  VALUES = 'VALUES',

  // qualifier
  WHERE = 'WHERE',
  LIKE = 'LIKE',
  DISTINCT = 'DISTINCT',

  // function
  COUNT = 'COUNT',
  DATE = 'DATE',

  // other
  ORDER_BY = 'ORDER BY'
}

type SqlColumn = string;
type SqlValue = string | number | boolean;

class BasicSql {
  private src: string;

  constructor(operate: string) {
    this.src = operate;
  }

  from(tableName: string) {
    this.pushStr(SqlToken.FROM);
    this.pushStr(tableName);
    return this;
  }

  // generate qualifiers

  where(cloumName: SqlColumn) {
    this.pushStr(SqlToken.WHERE);
    this.pushStr(cloumName);
    return this;
  }

  equalTo(value: SqlValue) {
    this.pushStr('=', false);
    this.pushStr(this.getValue(value), false);
    return this;
  }

  notEqualTo(value: SqlValue) {
    this.pushStr('!=', false);
    this.pushStr(this.getValue(value), false);
    return this;
  }

  greaterThan(value: SqlValue, canBeEuqal = false) {
    this.pushStr(canBeEuqal ? '>=' : '>', false);
    this.pushStr(this.getValue(value), false);
    return this;
  }

  lessThan(value: SqlValue, canBeEuqal = false) {
    this.pushStr(canBeEuqal ? '<=' : '<', false);
    this.pushStr(this.getValue(value), false);
    return this;
  }

  between(begin: number, end: number) {
    this.pushStr(SqlToken.BETWEEN);
    this.pushStr(`${begin} ${SqlToken.AND} ${end}`);
    return this;
  }

  like(exp: string) {
    this.pushStr(SqlToken.LIKE);
    this.pushStr(exp);
    return this;
  }

  // generate conjunction words

  and(cloumName: SqlColumn) {
    this.pushStr(SqlToken.AND);
    this.pushStr(cloumName);
    return this;
  }

  or(cloumName: SqlColumn) {
    this.pushStr(SqlToken.OR);
    this.pushStr(cloumName);
    return this;
  }

  orderBy(rules: Array<string | { field: string; order: 'ASC' | 'DESC' }>) {
    this.pushStr(SqlToken.ORDER_BY);

    const formatedRules = rules.reduce((prev, cur, i) => {
      if (i) prev += ', ';
      if (typeof cur === 'string') {
        return `${prev}${cur} ASC`;
      } else {
        return `${prev}${cur.field} ${cur.order}`;
      }
    }, '');
    this.pushStr(formatedRules as string);

    return this;
  }

  // generate mysql functions

  count(cloumName?: SqlColumn) {
    this.pushStr(`${SqlToken.COUNT}`);
    this.pushStr(`(${cloumName ? cloumName : '*'})`);
    return this;
  }

  date(dateStr: string) {
    this.pushStr(SqlToken.DATE);
    this.pushStr(`${this.getValue(dateStr)}`);
    return this;
  }

  // the only function that can cut off the chain calling
  end() {
    this.pushStr(';', false);
    return this.getSrc();
  }

  // internal tool functions

  protected getSrc() {
    return this.src;
  }

  protected setSrc(str: string) {
    this.src = str;
  }

  protected replace(reg: RegExp, replaceValue: string) {
    this.setSrc(this.src.replace(reg, replaceValue));
  }

  protected getValue(value: SqlValue) {
    return isString(value) ? `'${value}'` : `${value}`;
  }

  protected pushStr(token: string, isCompleteToken = true) {
    this.src += isCompleteToken ? ' ' : '';
    this.src += `${token}`;
  }

  protected concatParam(params: Array<SqlValue>, isValue = false): string {
    return `${params.reduce((prev, cur, i) => {
      // const param = isValue ? `'${cur}'` : humpToLine(`${cur}`);
      const param = isValue ? `'${this.handleStringParam(cur)}'` : humpToLine(`${cur}`);

      return i ? `${prev},${param}` : `${param}`;
    }, '')}`;
  }

  protected concatColum(params: Array<SqlValue>): string {
    return `${params.reduce((prev, cur, i) => {
      const param = `\`${humpToLine(`${cur}`)}\``;

      return i ? `${prev},${param}` : `${param}`;
    }, '')}`;
  }

  private handleStringParam(param: SqlValue): string {
    return String(param).replace(/(')/g, `\\'`);
  }
}

class InsertSql extends BasicSql {
  constructor() {
    super(SqlToken.INSERT);
  }

  into(tableName: string) {
    this.pushStr(SqlToken.INTO);
    this.pushStr(tableName);
    this.pushStr('(');
    return this;
  }

  choose(columnNames: Array<SqlColumn>) {
    this.pushStr(this.concatColum(columnNames));
    this.pushStr(')', false);
    return this;
  }

  values(params: Array<SqlValue>) {
    this.pushStr(SqlToken.VALUES);
    this.pushStr(`(${this.concatParam(params, true)})`);
    return this;
  }

  /**
   * @description copy the entire table directly to the target
   * @example
   *
   * ```sql
   * INSERT INTO target_table
   * FROM
   * SELECT * FROM source_table
   * ```
   */
  formWhole(tableName: string) {
    this.replace(/\($/g, `${SqlToken.FROM}`);
    this.pushStr(`${SqlToken.SELECT} * ${SqlToken.FROM} ${tableName}`);
    return this;
  }
}

class SelectSql extends BasicSql {
  private isFirstChoose: boolean;

  constructor(isDistinct: boolean) {
    super(SqlToken.SELECT);
    this.isFirstChoose = true;

    isDistinct && this.pushStr(SqlToken.DISTINCT);
  }

  choose(columnNames: Array<SqlColumn> | SqlColumn) {
    const exp = Array.isArray(columnNames)
      ? this.concatParam(columnNames)
      : humpToLine(columnNames);

    if (this.isFirstChoose) {
      this.isFirstChoose = false;
      this.pushStr(exp);
    } else {
      this.pushStr(`, ${exp}`, false);
    }

    return this;
  }

  all() {
    this.pushStr('*');
    return this;
  }

  as(alias: string) {
    this.pushStr(SqlToken.AS);
    this.pushStr(alias);
    return this;
  }
}

class UpdateSql extends BasicSql {
  private isFirstSet: boolean;

  constructor(tableName: string) {
    super(SqlToken.UPDATE);
    this.isFirstSet = true;

    this.pushStr(tableName);
  }

  set(cloumName: SqlColumn, value: SqlValue) {
    const exp = `${cloumName}=${this.getValue(value)}`;

    if (this.isFirstSet) {
      this.isFirstSet = false;
      this.pushStr(SqlToken.SET);
      this.pushStr(`${exp}`);
    } else {
      this.pushStr(`, ${exp}`, false);
    }

    return this;
  }
}

class DeleteSql extends BasicSql {
  constructor() {
    super(SqlToken.DELETE);
  }
}

class CustomSql extends BasicSql {
  constructor(operate: string) {
    super(operate);
  }

  pushStr(token: string) {
    this.pushStr(token);
    return this;
  }

  initWhole(sql: string) {
    this.pushStr(sql);
  }
}

class SqlBuilder {
  constructor() {}

  insert() {
    return new InsertSql();
  }

  delete() {
    return new DeleteSql();
  }

  update(tableName: string) {
    return new UpdateSql(tableName);
  }

  select(isDistinct = false) {
    return new SelectSql(isDistinct);
  }

  truncate(tableName: string) {
    const sql = new CustomSql(SqlToken.TRUNCATE);
    sql.pushStr(tableName);
    return sql;
  }

  custom(sql: string) {
    return new CustomSql(sql);
  }

  // TODO
  // show varables like '%character%';
  // set character_set_client = 字符集名称
  // set character_set_connection = 字符集名称
  // set character_set_ results = 字符集名称

  // set character_set_client = gbk;
  // set character_set_connection = gbk;
  // set character_set_results = gbk;
}

/**
 * @description build sql statements with using chain calls
 * @return return a SqlBuilder instance
 * @example
 * ```js
 * // get a select statement
 * sql()
 *  .select()
 *  .all()
 *  .from('user_table')
 *  .end(); // 'SELECT * FROM user_table;'
 *
 * // get a update statement
 * sql()
 *  .update('user_table')
 *  .set('name', 'Ethan Teng')
 *  .set('age', 22)
 *  .where('id')
 *  .equalTo(11111)
 *  .and('createTime')
 *  .equalTo('Today')
 *  .end();
 * // `UPDATE user_table
 * //     SET name='Ethan Teng', age=22
 * //     WHERE id=11111 and create_time='Today;'`
 * ```
 */
export const sql = () => new SqlBuilder();
