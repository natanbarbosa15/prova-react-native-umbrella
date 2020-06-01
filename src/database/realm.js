import Realm from 'realm';

import PadraoAnimalSchema from '~/database/schemas/PadraoAnimalSchema';

export default async function getRealm() {
  const realm = await Realm.open({
    schema: [PadraoAnimalSchema],
  });
  return realm;
}

getRealm().then((object) => {
  const realm = object;
  exports.realm = realm;
});
