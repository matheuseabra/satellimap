import { Request, Response } from 'express'
import supabase from '../config/supabase'

const getObjects = async (req: Request, res: Response) => {
  const { imageId } = req.params
  try {
    const { data, error } = await supabase
      .from('objects')
      .select('*')
      .eq('image_id', imageId)

    if (error) throw error

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching objects', error })
  }
}

const createObject = async (req: Request, res: Response) => {
  const { imageId } = req.params
  const { type, coordinates } = req.body

  try {
    const { data, error } = await supabase
      .from('objects')
      .insert({ image_id: imageId, type, coordinates })
      .select()
      .single()

    if (error) throw error

    res.status(201).json(data)
  } catch (error) {
    res.status(500).json({ message: 'Error creating object', error })
  }
}

const updateObject = async (req: Request, res: Response) => {
  const { id } = req.params
  const { type, coordinates } = req.body
  try {
    const { data, error } = await supabase
      .from('objects')
      .update({ type, coordinates })
      .eq('id', id)
      .select()

    if (error) throw error

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: 'Error updating object', error })
  }
}

const deleteObject = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const { data, error } = await supabase
      .from('objects')
      .delete()
      .eq('id', id)

    if (error) throw error

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: 'Error deleting object', error })
  }
}

export { createObject, deleteObject, getObjects, updateObject }
