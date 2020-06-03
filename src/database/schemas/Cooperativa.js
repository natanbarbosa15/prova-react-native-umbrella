const Cooperativa = {
  name: 'cooperativas',
  primaryKey: 'id',
  properties: {
    id: { type: 'int', indexed: true },
    nome: 'string',
  },
};

export default Cooperativa;
