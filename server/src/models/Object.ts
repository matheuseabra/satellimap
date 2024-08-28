export interface Object {
  id: string
  image_id: string
  type: 'rectangle' | 'polygon'
  coordinates: any
  created_at: Date
  updated_at: Date
}
