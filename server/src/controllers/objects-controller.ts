import { Request, Response } from 'express'
import * as ObjectsService from '../services/objects-service'

const getObjects = async (req: Request, res: Response) => {
  const { imageId } = req.params

  const objects = await ObjectsService.getObjects(imageId)

  res.status(200).json(objects)
}

const createObject = async (req: Request, res: Response) => {
  const { imageId } = req.params
  const { type, coordinates } = req.body

  const object = await ObjectsService.createObject(imageId, type, coordinates)

  res.status(201).json(object)
}

const updateObject = async (req: Request, res: Response) => {
  const { id } = req.params
  const { type, coordinates } = req.body

  const updatedObject = await ObjectsService.updateObject(id, type, coordinates)
  
  res.status(200).json(updatedObject)
}

const deleteObject = async (req: Request, res: Response) => {
  const { id } = req.params

  await ObjectsService.deleteObject(id)

  res.status(201).json()
}

export { createObject, deleteObject, getObjects, updateObject }
