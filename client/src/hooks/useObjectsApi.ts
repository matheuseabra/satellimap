import axios from 'axios';
import { useEffect, useState } from 'react';

const useObjectsApi = (imageId) => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    fetchObjects();
  }, [imageId]);

  const fetchObjects = async () => {
    const response = await axios.get(`/api/images/${imageId}/objects`);
    setObjects(response.data);
  };

  const createObject = async (object) => {
    await axios.post(`/images/${imageId}/objects`, object);
    fetchObjects();
  };

  const updateObject = async (objectId, updates) => {
    await axios.put(`/images/${imageId}/objects/${objectId}`, updates);
    fetchObjects();
  };

  const deleteObject = async (objectId) => {
    await axios.delete(`/images/${imageId}/objects/${objectId}`);
    fetchObjects();
  };

  return { objects, createObject, updateObject, deleteObject };
};