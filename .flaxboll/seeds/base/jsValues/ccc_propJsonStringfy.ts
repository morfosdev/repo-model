import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_propJsonStringfy: TcapsCodeData = {
  ccc_propJsonStringfy: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'prop jsonStringfy',
          en: 'prop jsonStringfy',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['propValue', 'prop jsonStringfy'],

        capsCodeText: `'!#!property name!#!': jsvals.j7({pass: {
          objectProperties: { !#!object properties!#! }
        }})`,

        capsCodeInputs: {
          'ccc_propJsonStringfy-0': {
            capsIptRemoved: false,
            capsIptCodeID: 'ccc_propJsonStringfy-0',
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

          'ccc_propJsonStringfy-1': {
            capsIptCodeID: 'ccc_propJsonStringfy-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'propriedades de objetos',
                en: 'object properties',
              },

              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `noValue:'noValue'`,
              capsIptCapsTypesToAdd: ['propValue', 'string process'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_propJsonStringfy',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
