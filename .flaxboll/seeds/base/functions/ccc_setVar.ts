import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_setVar: TcapsCodeData = {
  // (ocorrências: 97)
  ccc_setVar: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'setVar',
          en: 'setVar',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['Função', 'function', 'setVar'],

        capsCodeText: `async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [!#!url!#!],
          value: !#!2!#!
        }})`,

        capsCodeInputs: {
          'ccc_setVar-0': {
            capsIptCodeID: 'ccc_setVar-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Caminho da Variável',
                en: 'Variable Path',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `'example.A1.lists.iptsChanges.name'`,
              capsIptCapsTypesToAdd: [
                'free value',
                'join strings value',
                'string value',
                'arg reader',
                'var reader',
              ],
            },
          },
          'ccc_setVar-1': {
            capsIptCodeID: 'ccc_setVar-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Valor da Variável',
                en: 'Variable Value',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `'no value'`,
              capsIptCapsTypesToAdd: ['jsValue', 'findBy'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_setVar',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
