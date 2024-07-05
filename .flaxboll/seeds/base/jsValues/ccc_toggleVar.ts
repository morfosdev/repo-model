import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_toggleVar: TcapsCodeData = {
  ccc_toggleVar: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'toggleVar',
          en: 'toggleVar',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['jsValue', 'toggleVar'],

        capsCodeText: `jsvals.j12({pass: {
          varToToggle: "!#!var to toggle!#!",
          args
        }})`,

        capsCodeInputs: {
          'ccc_toggleVar-0': {
            capsIptCodeID: 'ccc_toggleVar-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: '',

              capsIptTxtLabel: {
                'pt-br': 'var para toggle',
                en: 'var to toggle',
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
      capsID: 'ccc_toggleVar',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
