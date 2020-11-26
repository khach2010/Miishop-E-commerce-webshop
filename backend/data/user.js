import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Jimmy User',
    email: 'Jimmy@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Cathy User',
    email: 'Cathy@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]
export default users
