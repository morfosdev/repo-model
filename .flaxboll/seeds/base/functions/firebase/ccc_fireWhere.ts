import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const ccc_fireWhere: TcapsCodeData = {
  ccc_fireWhere: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'firestore where' },
        capsDescription: {
          'pt-br':
            'Usada para "pegar" documentos específicos de acordo com a instrução fornecida.',
        },
        capsCodeTypes: ['customs', 'function', 'firestore', 'where'],

        capsCodeText: `async (...args) =>
        functions.firebase.where({ args, pass:{
            fbInit: [!#!firestore init path!#!],
            arrRefStrings: [!#!array firestore reference!#!],
            arrWhere: [!#!where params!#!],
            arrFuncs: [!#!functions return!#!],
        }})`,

        capsCodeInputs: {
          'ccc_fireWhere-0': {
            capsIptCodeID: 'ccc_fireWhere-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'firestore init path' },
              capsIptCapsDescription: { 'pt-br': '' },

              capsIptCapsDfCode: "''",
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_fireWhere-1': {
            capsIptCodeID: 'ccc_fireWhere-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'array firestore references' },
              capsIptCapsDescription: { 'pt-br': '' },

              capsIptCapsDfCode: "''",
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_fireWhere-2': {
            capsIptCodeID: 'ccc_fireWhere-2',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'where params' },
              capsIptCapsDescription: { 'pt-br': '' },

              capsIptCapsDfCode:
                "[() => ({ field: 'xx', operator: '==', value: 'xx' })]",
              capsIptCapsTypesToAdd: ['where conditions'],
            },
          },
          'ccc_fireWhere-3': {
            capsIptCodeID: 'ccc_fireWhere-3',
            capsIptPosition: '3',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'functions return' },
              capsIptCapsDescription: { 'pt-br': '' },

              capsIptCapsDfCode: '() => {}',
              capsIptCapsTypesToAdd: [
                'setVar',
                'console log',
                'goTo',
                'condition',
                'func Group',
                'customs',
              ],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_fireWhere',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
