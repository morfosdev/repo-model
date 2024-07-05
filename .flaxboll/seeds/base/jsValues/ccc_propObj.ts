import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_propObj: TcapsCodeData = {
  ccc_propObj: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'prop obj',
          en: 'prop obj',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['propValue'],

        capsCodeText: `'!#!property name!#!': jsvals.j8({pass: {
          propertieValues: { !#!properties values!#! }
        }})`,

        capsCodeInputs: {
          'ccc_propObj-0': {
            capsIptRemoved: false,
            capsIptCodeID: 'ccc_propObj-0',
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

          'ccc_propObj-1': {
            capsIptCodeID: 'ccc_propObj-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'properties',
                en: 'properties',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: ` `,
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
      capsID: 'ccc_propObj',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
