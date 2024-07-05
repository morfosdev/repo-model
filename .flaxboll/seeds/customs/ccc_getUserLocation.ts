import { TcapsCodeData } from '../../types/Tcaps/TcapsCode';

export const ccc_getUserLocation: TcapsCodeData = {
  ccc_getUserLocation: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'GetUserLocation', en: 'GetUserLocation' },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['Elemento de Tela', 'GetUserLocation', 'customs'],
        capsCodeText: `
        (...args) => <customs.GetUserLocation pass={{
            ipt1: [!#!input 1!#!],
            ipt2: "!#!input 2!#!",
            ipt3: [!#!input 3!#!],
            args
          }} />`,

        capsCodeInputs: {
          // ---------- Unused Input
          'ccc_getUserLocation-0': {
            capsIptCodeID: 'ccc_getUserLocation-0',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Elementos de Tela',
                en: 'Elementos de Tela',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `''`,
              capsIptCapsTypesToAdd: ['Elemento de Tela', 'MapPlaces'],
            },
          },
          'ccc_getUserLocation-1': {
            capsIptCodeID: 'ccc_getUserLocation-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtLabel: {
                'pt-br': 'Text',
                en: 'Text',
              },

              capsIptTxtDfValue: `'empty'`,
              capsIptTxtDescription: { 'pt-br': '', en: '' },
            },
          },
          'ccc_getUserLocation-2': {
            capsIptCodeID: 'ccc_getUserLocation-2',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Funções', en: 'Functions' },
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
      capsID: 'ccc_getUserLocation',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
