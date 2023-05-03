import { DataSource, DataSourceOptions } from 'typeorm';

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Emids123',
  database: 'store',
  entities: [__dirname + '/../**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  logging: true,
};

const dataSource = new DataSource(typeOrmConfig);

export default dataSource;
