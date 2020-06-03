import { realm } from '~/database/realm';

export function createAnimal(values, padraoId) {
  try {
    realm.write(() => {
      // Get last ID from database and increment
      values.id = getAnimalLastId() + 1;
      const padrao = realm
        .objects('padrao_animal')
        .filtered(`id == ${padraoId}`)[0];
      values.padrao = padrao;
      // Create animal object
      realm.create('animais', values);
    });
  } catch (error) {
    console.tron.warn(error);
  }
}

function getAnimalLastId() {
  try {
    const objects = realm.objects('animais').sorted('id', true);
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

export function getAllAnimais(cooperativaId) {
  try {
    return realm
      .objects('animais')
      .filtered(`cooperativaId == ${cooperativaId}`);
  } catch (error) {
    console.tron.warn(error);
  }
}

export function deleteAnimal(id) {
  try {
    realm.write(() => {
      const object = realm.objects('animais').filtered(`id == ${id}`);
      realm.delete(object);
    });
  } catch (error) {
    console.tron.warn(error);
  }
}

export function updateAnimal(values, padraoId) {
  try {
    realm.write(() => {
      const padrao = realm
        .objects('padrao_animal')
        .filtered(`id == ${padraoId}`)[0];
      values.padrao = padrao;
      // Create animal object
      realm.create('animais', values, 'modified');
    });
  } catch (error) {
    console.tron.warn(error);
  }
}

export function createCooperativa(values) {
  try {
    // Get last ID from database and increment
    values.id = getCooperativaLastId() + 1;
    realm.write(() => {
      realm.create('cooperativas', values);
    });
  } catch (error) {
    console.tron.warn(error);
  }
}

function getCooperativaLastId() {
  try {
    const objects = realm.objects('cooperativas').sorted('id', true);
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

export function getAllCooperativa() {
  try {
    return realm.objects('cooperativas');
  } catch (error) {
    console.tron.warn(error);
  }
}

export function deleteCooperativa(id) {
  try {
    realm.write(() => {
      const animais = realm
        .objects('animais')
        .filtered(`cooperativaId == ${id}`);
      realm.delete(animais);
      const cooperativa = realm.objects('cooperativas').filtered(`id == ${id}`);
      realm.delete(cooperativa);
    });
  } catch (error) {
    console.tron.warn(error);
  }
}

export function updateCooperativa(values) {
  try {
    realm.write(() => {
      realm.create('cooperativas', values, 'modified');
    });
  } catch (error) {
    console.tron.warn(error);
  }
}

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

function getPadraoLastId() {
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
