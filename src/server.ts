import  express from'express'
import userRoute from './routes/user.router'
import { app } from './app'
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
