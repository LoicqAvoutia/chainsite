import express from 'express'
import { router } from './control/router.js'
import { notfound } from './middlewears/notfound.js'
import { errorhandler } from './middlewears/404.js'
import { varambient } from './env.js'
import cors from 'cors'

const app = express();
const port = varambient.SERVER_PORT;

app.use(cors())
app.use('/',router);
app.use(notfound);
app.use(errorhandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})