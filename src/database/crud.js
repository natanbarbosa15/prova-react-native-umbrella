import { realm } from '~/database/realm';

export function createPadrao(values) {
  try {
    // Get last ID from database and increment
    values.id = getPadraoLastId() + 1;
    realm.write(() => {
      realm.create('padrao_animal', values);
    });
  } catch (error) {
    console.tron.warn(error);
  }
}

export function getPadraoLastId() {
  try {
    const objects = realm.objects('padrao_animal').sorted('id', true);
    // Check if not exist database records and return 0
    if (objects.length < 1) {
      return 0;
    } else {
      return objects[0].id;
    }
  } catch (error) {
    console.tron.warn(error);
  }
}

export function getAllPadrao() {
  try {
    return realm.objects('padrao_animal');
  } catch (error) {
    console.tron.warn(error);
  }
}

export function deletePadrao(id) {
  try {
    realm.write(() => {
      const object = realm.objects('padrao_animal').filtered(`id == ${id}`);
      realm.delete(object);
    });
  } catch (error) {
    console.tron.warn(error);
  }
}

export function updatePadrao(values) {
  try {
    realm.write(() => {
      realm.create('padrao_animal', values, 'modified');
    });
  } catch (error) {
    console.tron.warn(error);
  }
}
