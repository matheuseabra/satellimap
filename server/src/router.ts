import express from 'express'
import * as ImagesController from './controllers/images-controller'
import * as ObjectsController from './controllers/objects-controller'

const router = express.Router()

router.get('/health', (_, res) => res.json({ message: 'API is running 🚀' }))

router.get('/images/:id', ImagesController.getImage)

router.get('/images/:imageId/objects', ObjectsController.getObjects);
router.post('/images/:imageId/objects', ObjectsController.createObject);
router.put('/images/:imageId/objects/:objectId', ObjectsController.updateObject);
router.delete('/images/:imageId/objects/:objectId', ObjectsController.deleteObject);

export default router
