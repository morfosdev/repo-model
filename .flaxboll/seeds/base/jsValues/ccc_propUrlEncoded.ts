import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_propUrlEncoded: TcapsCodeData = {
  ccc_propUrlEncoded: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'prop urlEncoded',
          en: 'prop urlEncoded',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['propValue', 'prop urlEncoded'],

        capsCodeText: `'!#!property name!#!': jsvals.j10({pass: {
          objectProperties: {!#!object properties!#!}
        }})`,

        capsCodeInputs: {
          'ccc_propUrlEncoded-0': {
            capsIptRemoved: false,
            capsIptCodeID: 'ccc_propUrlEncoded-0',
            capsIptPosition: '0',

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtLabel: {
                'pt-br': 'nome da propriedade',
                en: 'property name',
              },

              capsIptTxtDfValue: 'no name',
              capsIptTxtDescription: {
                'pt-br': ' ',
                en: ' ',
              },
            },
          },

          'ccc_propUrlEncoded-1': {
            capsIptCodeID: 'ccc_propUrlEncoded-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'propriedades de objeto',
                en: 'object properties',
              },

              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `noValue:'noValue'`,
              capsIptCapsTypesToAdd: ['propValue'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_propUrlEncoded',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
