import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_propArray: TcapsCodeData = {
  ccc_propArray: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'prop array',
          en: 'prop array',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['propValue'],

        capsCodeText: `'!#!property name!#!': jsvals.j8({pass: {
          propertieValues: [ !#!values!#! ]
        }})`,

        capsCodeInputs: {
          'ccc_propArray-0': {
            capsIptRemoved: false,
            capsIptCodeID: 'ccc_propArray-0',
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

          'ccc_propArray-1': {
            capsIptCodeID: 'ccc_propArray-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'valores',
                en: 'values',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

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
      capsID: 'ccc_propArray',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
