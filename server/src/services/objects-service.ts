import supabase from '../config/supabase'

const getObjects = async (imageId: string) => {
  try {
    const { data } = await supabase
      .from('objects')
      .select('*')
      .eq('image_id', imageId)

    return data
  } catch (error) {
    console.error('Error fetching objects', error)
    throw error
  }
}

const createObject = async (imageId: string, type: string, coordinates: string) => {
  try {
    const { data } = await supabase
      .from('objects')
      .insert({ image_id: imageId, type, coordinates })
      .select()
      .single()

    return data
  } catch (error) {
    console.error('Error creating object', error)
    throw error
  }
}

const updateObject = async (id: string, type: string, coordinates: string) => {
  try {
    const { data } = await supabase
      .from('objects')
      .update({ type, coordinates })
      .eq('id', id)
      .select()

    return data
  } catch (error) {
    console.error('Error updating object', error)
    throw error
  }
}

const deleteObject = async (id: string) => {
  try {
    await supabase
      .from('objects')
      .delete()
      .eq('id', id)

  } catch (error) {
    console.error('Error deleting object', error)
    throw error
  }
}

export { createObject, deleteObject, getObjects, updateObject }
