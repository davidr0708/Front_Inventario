import { Router } from "express"
import { Dispositivos } from "../controllers/dispositivo.controller.js"

const router = Router()

const controller = new Dispositivos()

// router.get('/', controller.getHello)
router.get('/', controller.getDispositivo)
router.post('/dispositivo', controller.postDispositivo)
router.put('/dispositivo', controller.deleteDispositivo)
router.delete('/dispositivo', controller.putDispositivo)




export default router