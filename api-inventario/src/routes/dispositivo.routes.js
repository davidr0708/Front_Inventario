import { Router } from "express"
// import { getInventario, postInventario, deleteInventario,putInventario } from "../controllers/inventario.controller.js"
import { Dispositivos } from "../controllers/dispositivo.controller.js"

const router = Router()

const dispositivo = new Dispositivos()

router.get('/', dispositivo.getHello)
router.get('/dispositivo', dispositivo.getDispositivo)
router.post('/dispositivo', dispositivo.postDispositivo)
router.put('/dispositivo', dispositivo.deleteDispositivo)
router.delete('/dispositivo', dispositivo.putDispositivo)




export default router