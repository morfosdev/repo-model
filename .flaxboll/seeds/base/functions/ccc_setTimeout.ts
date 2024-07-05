import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_setTimeout: TcapsCodeData = {
  ccc_setTimeout: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'setTimeout', en: 'setTimeout' },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['Função', 'function', 'setTimeout'],

        capsCodeText: `

        // FIX_F2 //
        Elements.F2({ pass: {
          A:"!#!path timeout cash!#!",
          B:"!#!miliseconds value!#!",
          C: [
            !#!functions to execute on delay!#!
          ],
        }})`,

        capsCodeInputs: {
          'ccc_setTimeout-0': {
            capsIptCodeID: 'ccc_setTimeout-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: '',

              capsIptTxtLabel: {
                'pt-br': 'caminho do timeout cash',
                en: 'path timeout cash',
              },
              capsIptTxtDescription: { 'pt-br': '', en: '' },
            },
          },
          'ccc_setTimeout-1': {
            capsIptCodeID: 'ccc_setTimeout-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: '1000',

              capsIptTxtLabel: {
                'pt-br': 'valor em milisegundos',
                en: 'miliseconds value',
              },
              capsIptTxtDescription: { 'pt-br': '', en: '' },
            },
          },

          'ccc_setTimeout-2': {
            capsIptCodeID: 'ccc_setTimeout-2',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'funções para executar no atraso',
                en: 'functions to execute on delay',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `false`,
              capsIptCapsTypesToAdd: ['Função', 'function'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_setTimeout',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
