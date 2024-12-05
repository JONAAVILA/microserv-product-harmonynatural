import { config } from 'dotenv';
import { Sequelize } from 'sequelize';
import productModel from './models/product.js'

config()

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DATABASE_URL
} = process.env

// <-- local -->
// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/payture-users`, {
//   logging: false, 
//   native: false, 
// })
// <-- local -->

// <-- produccion -->
const isProduction = process.env.NODE_ENV === 'production';

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: isProduction ? {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  } : {}
})
// <-- produccion -->

const Product = productModel(sequelize)

const models = {
  ...sequelize.models,
  conn: sequelize,
}

export { models }
