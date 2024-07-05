import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_arrayPush: TcapsCodeData = {
  ccc_arrayPush: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'enviar para array',
          en: 'array push',
        },
        capsDescription: {
          'pt-br': 'Adiciona uma informação na última posição do array',
          en: 'Adds an item in the last position of an array',
        },
        capsCodeTypes: ['Função', 'function', 'arrayPush'],

        capsCodeText: `async (...args) =>
        functions.arrayPush({ args, pass:{
          oldArr: "!#!array variable path!#!",
          newValue: "!#!new value!#!",
          passToFuncs: [!#!pass to functions!#!],
        }})`,

        capsCodeInputs: {
          'ccc_arrayPush-0': {
            capsIptCodeID: 'ccc_arrayPush-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: 'noName',

              capsIptTxtLabel: {
                'pt-br': 'caminho da variável do array',
                en: 'array variable path',
              },
              capsIptTxtDescription: { 'pt-br': '', en: '' },
            },
          },
          'ccc_arrayPush-1': {
            capsIptCodeID: 'ccc_arrayPush-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: 'noName',

              capsIptTxtLabel: { 'pt-br': 'valor', en: 'value' },
              capsIptTxtDescription: { 'pt-br': '', en: '' },
            },
          },

          'ccc_arrayPush-2': {
            capsIptCodeID: 'ccc_arrayPush-2',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'passar para funções',
                en: 'pass to functions',
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
      capsID: 'ccc_arrayPush',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
