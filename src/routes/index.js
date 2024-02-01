import { Router } from "express"
import authRouters from "./auth-route.js"
const router = Router()

router.use("/auth", authRouters)

export default router
