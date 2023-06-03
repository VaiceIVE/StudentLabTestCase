import Router from "express"
import FormController from "../Controllers/FormController"
const router = Router()

router.post('/post', FormController.Save)
router.get('/all', FormController.GetAll)
router.get('/:id', FormController.Get)


export default router