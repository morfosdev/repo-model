import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_expoUpdate: TcapsCodeData = {
  ccc_expoUpdate: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'expoUpdate',
          en: 'expoUpdate',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['Função', 'function', 'expoUpdate'],

        capsCodeText: `

        Elements.FYy({ pass:{
          variablePath: [
            !#!variable path!#!
          ],
          variableValue: "!#!Variable Value!#!",
        }})`,

        capsCodeInputs: {
          'ccc_expoUpdate-0': {
            capsIptCodeID: 'ccc_expoUpdate-0',
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
          'ccc_expoUpdate-1': {
            capsIptCodeID: 'ccc_expoUpdate-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Valor da Variável',
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
      capsID: 'ccc_expoUpdate',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
