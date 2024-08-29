import { Request, Response } from 'express'

const getImage = async (_: Request, res: Response) =>
  res.status(200).json({
    id: "fdf52849-1b8e-42ed-8401-065036943aa0",
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    created_at: new Date(),
  })

export { getImage }
