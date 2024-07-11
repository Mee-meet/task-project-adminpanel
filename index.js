import AdminJS from 'adminjs'
import express from 'express'
import AdminJSExpress from '@adminjs/express'
import { Database, Resource } from '@adminjs/mongoose'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import {  productsModel } from './model'
dotenv.config()

const PORT = 3001


AdminJS.registerAdapter({
  Database,
  Resource
})

const start = async (): Promise<void> => {
  const app = express()

  
  await mongoose.connect(${process.env.MONGO_URL})

  
  const admin = new AdminJS({
    resources: [
      {
        resource: productsModel
      }
    ]
  })

  const adminRouter = AdminJSExpress.buildRouter(admin)

  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(AdminJS started on http://localhost:${PORT}${admin.options.rootPath})
  })
}

start()