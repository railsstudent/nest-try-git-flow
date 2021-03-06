import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as helmet from 'helmet'
import compression = require('compression')
import * as express from 'express'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  app.use(express.json({ limit: '50mb' }))
  app.use(express.urlencoded({ limit: '50mb', extended: true }))
  app.use(helmet())
  app.use(compression())
  await app.listen(4000)
}
bootstrap()
