import mongoose from 'mongoose'
import config from './config/index'
import dotenv from 'dotenv'
import app from './app'
import { errorLogger, logger } from './shared/logger'

dotenv.config()
async function main() {
  try {
    await mongoose.connect(config.database_url as string)

    app.listen(config.port, () => {
      logger.info(`server started at port ${config.port}`)
    })

    logger.info('Server connected')
  } catch (error) {
    errorLogger.error('Server connection failed')
  }
}

main()
