import { TcapsCodeData } from '../../types/Tcaps/TcapsCode';

export const ccc_checkInitData: TcapsCodeData = {
  // (ocorrências: 11)
  ccc_checkInitData: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'checkInitData', en: 'checkInitData' },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['function', 'check init data'],

        capsCodeText: `
          (...args) => {

            customs.checkInitData({ args, pass:{
                pathToCheck: [!#!Path to Check!#!],
                returnFuncs: [!#!Return Functions!#!]
            }});
          }
          `,

        capsCodeInputs: {
          // ---------- Path To Check
          'ccc_checkInitData-0': {
            capsIptCodeID: 'ccc_checkInitData-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Caminho para Verificar',
                en: 'Path to Check',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Verifica se um array é vazio executa as funções de retorno. Caso contrário não faz nada.',
                en: '',
              },

              capsIptCapsDfCode: `''`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          // ---------- Return Functions
          'ccc_checkInitData-1': {
            capsIptCodeID: 'ccc_checkInitData-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Funções de Retorno',
                en: 'Return Functions',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `''`,
              capsIptCapsTypesToAdd: ['firestore'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_checkInitData',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
