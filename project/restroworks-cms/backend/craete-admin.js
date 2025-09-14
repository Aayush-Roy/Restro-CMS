require('dotenv').config()
const payload = require('payload')

const run = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    local: true, // initializes Payload without starting Express
  })

  const user = await payload.create({
    collection: 'users', // Make sure your collection name is "users"
    data: {
      email: 'admin@workmanage.com',
      password: 'admin123',
      role: 'admin', // or whatever role field you have defined
    },
  })

  console.log('✅ Admin created:', user)
  process.exit(0)
}

run()
