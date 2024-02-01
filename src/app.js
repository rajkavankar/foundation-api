import express from "express"
import routes from "./routes/index.js"
import { config } from "./config/config.js"
import morgan from "morgan"
import cors from "cors"
const app = express()

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(cors())

if (config.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

app.use("/api", routes)

export default app
