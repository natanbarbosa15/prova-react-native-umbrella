const Animal = {
  name: 'animais',
  primaryKey: 'id',
  properties: {
    id: { type: 'int', indexed: true },
    nome: 'string',
    temperatura: 'float',
    umidade: 'float',
    velocidadeAr: 'float',
    dioxidoCarb: 'float',
    amonia: 'float',
    sulfetoHidro: 'float',
    padrao: 'padrao_animal',
    cooperativaId: 'int',
  },
};

export default Animal;
