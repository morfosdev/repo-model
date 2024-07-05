import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_funcXx: TcapsCodeData = {
  ccc_funcXx: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'seed',
          en: 'seed',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['Função', 'function', 'LoopUpload'],

        capsCodeText: `

        Elements.FXx({ pass:{
          variablePath: [
            !#!variable path!#!
          ],
          variableValue: "!#!Variable Value!#!",
        }})`,

        capsCodeInputs: {
          'ccc_funcXx-0': {
            capsIptCodeID: 'ccc_funcXx-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'caminho da variável',
                en: 'variable path',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsTypesToAdd: [
                'free value',
                'join strings value',
                'string value',
              ],
              capsIptCapsDfCode: '"{{true}}"',
            },
          },
          'ccc_funcXx-1': {
            capsIptCodeID: 'ccc_funcXx-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'valor da variável',
                en: 'Variable Value',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: ` `,
              capsIptCapsTypesToAdd: ['jsValue'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_funcXx',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
