import { Dialect, Sequelize } from 'sequelize'

const env = (process.env.NODE_ENV || 'development') as 'development' | 'test' | 'production'
const config = require('../config/config')[env]

export const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect as Dialect,
  logQueryParameters: false,
  logging: (): any => {
    return null
  },
})
