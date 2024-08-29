import supabase from '../config/supabase';
import { createObject, deleteObject, getObjects, updateObject } from './objects-service';

jest.mock('../config/supabase');

describe('ObjectService', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('getObjects should fetch objects by imageId', async () => {
    const mockData = [{ id: '1', image_id: 'image1', type: 'type1', coordinates: 'coords1' }];
    (supabase.from as jest.Mock).mockReturnValue({
      select: () => ({
        eq: () => Promise.resolve({ data: mockData })
      })
    });

    const imageId = 'image1';
    const data = await getObjects(imageId);

    expect(supabase.from).toHaveBeenCalledWith('objects');
    expect(data).toEqual(mockData);
  });

  test('createObject should insert a new object', async () => {
    const mockData = { id: '1', image_id: 'image1', type: 'type1', coordinates: 'coords1' };
    (supabase.from as jest.Mock).mockReturnValue({
      insert: () => ({
        select: () => ({
          single: () => Promise.resolve({ data: mockData })
        })
      })
    });

    const imageId = 'image1';
    const type = 'type1';
    const coordinates = 'coords1';
    const data = await createObject(imageId, type, coordinates);

    expect(supabase.from).toHaveBeenCalledWith('objects');
    expect(data).toEqual(mockData);
  });

  test('updateObject should update an existing object', async () => {
    const mockData = [{ id: '1', type: 'type2', coordinates: 'coords2' }];
    (supabase.from as jest.Mock).mockReturnValue({
      update: () => ({
        eq: () => ({
          select: () => Promise.resolve({ data: mockData })
        })
      })
    });

    const id = '1';
    const type = 'type2';
    const coordinates = 'coords2';
    const data = await updateObject(id, type, coordinates);

    expect(supabase.from).toHaveBeenCalledWith('objects');
    expect(data).toEqual(mockData);
  });

  test('deleteObject should delete an existing object', async () => {
    (supabase.from as jest.Mock).mockReturnValue({
      delete: () => ({
        eq: () => Promise.resolve()
      })
    });

    const id = '1';
    await deleteObject(id);

    expect(supabase.from).toHaveBeenCalledWith('objects');
  });
});
