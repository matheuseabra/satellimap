import bodyParser from 'body-parser';
import express from 'express';
import request from 'supertest';
import * as ObjectsService from '../services/objects-service';
import { createObject, deleteObject, getObjects, updateObject } from './objects-controller';


const app = express();
app.use(bodyParser.json());

app.get('/objects/:imageId', getObjects);
app.post('/objects/:imageId', createObject);
app.put('/objects/:id', updateObject);
app.delete('/objects/:id', deleteObject);

jest.mock('../services/objects-service');

describe('Objects Controller Tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('GET /objects/:imageId should return objects for the imageId', async () => {
    const mockObjects = [{ id: '1', image_id: 'image1', type: 'type1', coordinates: 'coords1' }];
    (ObjectsService.getObjects as jest.Mock).mockResolvedValue(mockObjects);

    const response = await request(app).get('/objects/image1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockObjects);
    expect(ObjectsService.getObjects).toHaveBeenCalledWith('image1');
  });

  test('POST /objects/:imageId should create a new object', async () => {
    const mockObject = { id: '1', image_id: 'image1', type: 'type1', coordinates: 'coords1' };
    (ObjectsService.createObject as jest.Mock).mockResolvedValue(mockObject);

    const response = await request(app)
      .post('/objects/image1')
      .send({ type: 'type1', coordinates: 'coords1' });

    expect(response.status).toBe(201);
    expect(response.body).toEqual(mockObject);
    expect(ObjectsService.createObject).toHaveBeenCalledWith('image1', 'type1', 'coords1');
  });

  test('PUT /objects/:id should update an existing object', async () => {
    const mockUpdatedObject = { id: '1', type: 'type2', coordinates: 'coords2' };
    (ObjectsService.updateObject as jest.Mock).mockResolvedValue(mockUpdatedObject);

    const response = await request(app)
      .put('/objects/1')
      .send({ type: 'type2', coordinates: 'coords2' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockUpdatedObject);
    expect(ObjectsService.updateObject).toHaveBeenCalledWith('1', 'type2', 'coords2');
  });

  test('DELETE /objects/:id should delete an existing object', async () => {
    (ObjectsService.deleteObject as jest.Mock).mockResolvedValue(undefined);

    const response = await request(app).delete('/objects/1');

    expect(response.status).toBe(201);
    expect(ObjectsService.deleteObject).toHaveBeenCalledWith('1');
  });
});
