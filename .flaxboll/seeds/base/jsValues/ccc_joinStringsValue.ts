import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_joinStringsValue: TcapsCodeData = {
  ccc_joinStringsValue: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'valor join strings',
          en: 'join strings value',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['join strings value', 'jsValue', 'string process'],

        capsCodeText: `jsvals.j3({pass: {
          arrayStrings: [!#!String Values!#!],
          joinSeparator: "!#!join separator!#!"
        }})`,

        capsCodeInputs: {
          'ccc_joinStringsValue-0': {
            capsIptCodeID: 'ccc_joinStringsValue-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Valores String',
                en: 'String Values',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: ` `,
              capsIptCapsTypesToAdd: ['string value', 'join strings value'],
            },
          },

          'ccc_joinStringsValue-1': {
            capsIptCodeID: 'ccc_joinStringsValue-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: '',

              capsIptTxtLabel: {
                'pt-br': 'separador da junção',
                en: 'join separator',
              },
              capsIptTxtDescription: {
                'pt-br': '',
                en: '',
              },
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_joinStringsValue',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
