import { Request, Response } from 'express'

const getImage = async (req: Request, res: Response) =>
  res.status(200).json({
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  })

export { getImage }
