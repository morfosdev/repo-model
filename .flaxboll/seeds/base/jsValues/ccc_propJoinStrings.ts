import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_propJoinStrings: TcapsCodeData = {
  ccc_propJoinStrings: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'prop join strings',
          en: 'prop join strings',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['propValue', 'prop join strings'],

        capsCodeText: `'!#!property name!#!': jsvals.j3({pass: {
          arrayStrings: [!#!String Values!#!],
          joinSeparator: "!#!join separator!#!"
        }})`,

        capsCodeInputs: {
          'ccc_propJoinStrings-0': {
            capsIptRemoved: false,
            capsIptCodeID: 'ccc_propJoinStrings-0',
            capsIptPosition: '0',

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtLabel: {
                'pt-br': 'nome da propriedade',
                en: 'property name',
              },

              capsIptTxtDfValue: 'no name',
              capsIptTxtDescription: {
                'pt-br': '',
                en: '',
              },
            },
          },

          'ccc_propJoinStrings-1': {
            capsIptCodeID: 'ccc_propJoinStrings-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'String Values',
                en: 'String Values',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: ` `,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },

          'ccc_propJoinStrings-2': {
            capsIptCodeID: 'ccc_propJoinStrings-2',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: '',

              capsIptTxtLabel: {
                'pt-br': 'separador de junção',
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
      capsID: 'ccc_propJoinStrings',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
