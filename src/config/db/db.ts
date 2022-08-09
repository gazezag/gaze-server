import './env';
import { Sequelize } from 'sequelize/types';

const sequelize = new Sequelize(
  process.env.DB_DATABASE as string,
  process.env.DB_USERNAME as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as unknown as number,
    dialect: 'mysql',
    logging: false,
    // operatorsAliases: false,
    define: {
      underscored: false,
      freezeTableName: false,
      charset: 'utf8',
      // dialectOptions: {
      //   collate: 'utf8_general_ci'
      // },
      timestamps: true
    },
    sync: { force: false },
    pool: { max: 5, min: 0, idle: 10000 }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log(`数据库连接成功 => ${process.env.DB_DATABASE}`);
  })
  .catch(err => {
    console.error(`数据库连接失败`);
  });

export default sequelize;
