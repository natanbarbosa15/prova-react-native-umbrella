import Realm from 'realm';

import Animal from '~/database/schemas/Animal';
import PadraoAnimal from '~/database/schemas/PadraoAnimal';
import Cooperativa from '~/database/schemas/Cooperativa';

export default async function getRealm() {
  const realm = await Realm.open({
    schemaVersion: 1,
    schema: [Animal, PadraoAnimal, Cooperativa],
  });
  return realm;
}

getRealm().then((object) => {
  const realm = object;
  exports.realm = realm;
});
