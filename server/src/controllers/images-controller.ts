import { Request, Response } from 'express';
import supabase from '../config/supabase';

const getImage = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('images')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    if (!data) return res.status(404).json({ message: 'Image not found' });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching image', error });
  }
};

export { getImage };
