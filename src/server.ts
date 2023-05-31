import mongoose from 'mongoose'
import config from './config/index'
import dotenv from 'dotenv'
import app from './app'

dotenv.config()
async function main() {
  try {
    await mongoose.connect(config.database_url as string)

    app.listen(config.port, () => {
      console.log(`server started at port ${config.port}`)
    })

    console.log('Server connected')
  } catch (error) {
    console.log('Server connection failed')
  }
}

main()
