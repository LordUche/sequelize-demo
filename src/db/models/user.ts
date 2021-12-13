import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '.'

export interface UserAttributes {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
  role?: UserRole
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number
  public firstName!: string
  public lastName!: string
  public email!: string
  public password!: string
  public role?: UserRole
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('user', 'admin'),
      allowNull: false,
      defaultValue: 'user',
    },
  },
  { sequelize, tableName: 'users' },
)

enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}
