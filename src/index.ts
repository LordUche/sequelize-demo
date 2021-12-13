import express from 'express'
import { sequelize } from './db/models'
import { User } from './db/models/user'

const app = express()

app.get('/', async (req, res) => {
  try {
    await doStuffWithUserModel()
  } catch (error: any) {
    console.error(error.message)
  } finally {
    res.send('Hello World!')
  }
})

app.listen(3000, async () => {
  await sequelize.authenticate()
  console.log('Connection has been established successfully.')
  console.log('App listening on port', 3000)
})

async function doStuffWithUserModel() {
  const newUser = await User.create({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    password: '123456',
  })
  console.log(newUser.id, newUser.firstName, newUser.lastName)

  const foundUser = await User.findOne({ where: { firstName: 'John' } })
  if (foundUser === null) return
  console.log(foundUser.firstName)
}
