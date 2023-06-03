import express from "express"
import FormRouter from "./Routers/FormRouter"
import db from "./db"
import swaggerUi from "swagger-ui-express"
import * as swaggerfile from "./swagger_output.json"
const app = express()
const PORT = 8000
db()

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerfile))
app.use(express.json())
app.use(FormRouter)



app.listen(PORT, () => {console.log(`Listening ${PORT}`)})
