import { TcapsCodeData } from '../../types/Tcaps/TcapsCode';

export const ccc_pagarme: TcapsCodeData = {
  ccc_createOrder: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'createOrder', en: 'createOrder' },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['function', 'payment', 'createOrder'],

        capsCodeText: `(...args) =>
            customs.pagarme.createOrder({ args, pass:{
              ipt1: [!#!input 1!#!],
              ipt2: [!#!input 2!#!],
              ipt3: [!#!input 3!#!],
              ipt4: [!#!input 4!#!],
            }})`,

        capsCodeInputs: {
          // ---------- Unused Input
          'ccc_createOrder-0': {
            capsIptCodeID: 'ccc_createOrder-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Path Card Numbers',
                en: 'Path Card Numbers',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `''`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_createOrder-1': {
            capsIptCodeID: 'ccc_createOrder-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Data 1',
                en: 'Data 1',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `''`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_createOrder-2': {
            capsIptCodeID: 'ccc_createOrder-2',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Data 2',
                en: 'Data 2',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsTypesToAdd: ['string process'],
              capsIptCapsDfCode: `''`,
            },
          },
          'ccc_createOrder-3': {
            capsIptCodeID: 'ccc_createOrder-3',
            capsIptPosition: '3',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Return Functions',
                en: 'Return Functions',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsTypesToAdd: ['function'],
              capsIptCapsDfCode: `() => {}`,
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_createOrder',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
