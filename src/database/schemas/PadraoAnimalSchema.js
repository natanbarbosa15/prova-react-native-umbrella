const PadraoAnimalSchema = {
  name: 'padrao_animal',
  primaryKey: 'id',
  properties: {
    id: { type: 'int', indexed: true },
    nome: 'string',
    temperaturaMin: 'float',
    temperaturaMax: 'float',
    umidadeMin: 'float',
    umidadeMax: 'float',
    velocidadeArMin: 'float',
    velocidadeArMax: 'float',
    dioxidoCarbMin: 'float',
    dioxidoCarbMax: 'float',
    amoniaMin: 'float',
    amoniaMax: 'float',
    sulfetoHidroMin: 'float',
    sulfetoHidroMax: 'float',
  },
};

export default PadraoAnimalSchema;
