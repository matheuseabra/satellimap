import { useCallback } from "react";

import { FeatureGroup } from "react-leaflet";
import { EditControl as DrawToolBar } from "react-leaflet-draw";
import api from "../../services/api";
import { imageId } from "../Map";

const DrawLayer = () => {
  const onEdited = useCallback((e) => {
    let numEdited = 0;
    e.layers.eachLayer(() => {
      numEdited += 1;
    });
    console.log(`onEdited: edited ${numEdited} layers`, e);
  }, []);

  const onCreated = useCallback(async (e) => {
    const type = e.layerType;
    const layer = e.layer;

    const newObject = {
      type,
      coordinates: layer._latlngs,
    };

    await saveObject(newObject);
  }, []);

  const saveObject = async (object) => {
    try {
      const response = await api.post(`images/${imageId}/objects`, object);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onDeleted = useCallback((e) => {
    let numDeleted = 0;
    e.layers.eachLayer(() => {
      numDeleted += 1;
    });
    console.log(`onDeleted: removed ${numDeleted} layers`, e);
  }, []);

  const onMounted = useCallback((drawControl) => {}, []);

  const onEditStart = useCallback((e) => {
    console.log("onEditStart", e);
  }, []);

  const onEditStop = useCallback((e) => {
    console.log("onEditStop", e);
  }, []);

  const onDeleteStart = useCallback((e) => {
    console.log("onDeleteStart", e);
  }, []);

  const onDeleteStop = useCallback((e) => {
    console.log("onDeleteStop", e);
  }, []);

  return (
    <FeatureGroup>
      <DrawToolBar
        position="topleft"
        onEdited={onEdited}
        onCreated={onCreated}
        onDeleted={onDeleted}
        onMounted={onMounted}
        onEditStart={onEditStart}
        onEditStop={onEditStop}
        onDeleteStart={onDeleteStart}
        onDeleteStop={onDeleteStop}
        draw={{
          rectangle: true,
          polygon: false,
          circlemarker: false,
          circle: false,
          marker: false,
        }}
      />
    </FeatureGroup>
  );
};

export default DrawLayer;
