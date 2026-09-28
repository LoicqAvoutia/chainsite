import express from 'express'
import { router } from './control/router.js'
import { notfound } from './middlewears/notfound.js'
import { errorhandler } from './middlewears/404.js'
const app = express()
const port = 3000

app.use('/',router);
app.use(notfound);
app.use(errorhandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})