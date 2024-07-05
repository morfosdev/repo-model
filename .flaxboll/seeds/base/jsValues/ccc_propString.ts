import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_propString: TcapsCodeData = {
  ccc_propString_B: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'prop string',
          en: 'prop string',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['propValue'],

        capsCodeText: `"!#!property name!#!": jsvals.j8({pass: {
          propertieValues: "!#!string value!#!"
        }})`,

        capsCodeInputs: {
          'ccc_propString_B-0': {
            capsIptRemoved: false,
            capsIptCodeID: 'ccc_propString_B-0',
            capsIptPosition: '0',

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtLabel: {
                'pt-br': 'property name',
                en: 'property name',
              },

              capsIptTxtDfValue: 'no name',
              capsIptTxtDescription: {
                'pt-br': '',
                en: '',
              },
            },
          },

          'ccc_propString_B-1': {
            capsIptCodeID: 'ccc_propString_B-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtLabel: {
                'pt-br': 'valor string',
                en: 'string value',
              },

              capsIptTxtDfValue: 'no value',
              capsIptTxtDescription: {
                'pt-br': ' ',
                en: ' ',
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
      capsID: 'ccc_propString_B',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
