import { Router } from "express"
import { Factibilidades } from "../controllers/factibilidades.controller.js"

const router = Router()

const controller = new Factibilidades()

router.get('/', controller.getFactibilidades)

export default router