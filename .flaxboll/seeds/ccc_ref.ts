import { TcapsCodeData } from '../types/Tcaps/TcapsCode';

export const ccc_ref: TcapsCodeData = {
  ccc_ref: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'new xxx' },
        capsDescription: { 'pt-br': '' },
        capsCodeTypes: ['xxx'],

        capsCodeText: `async (...args) => {

        }`,

        capsCodeInputs: {
          'ccc_ref-0': {
            capsIptCodeID: 'ccc_ref-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: 'xxx',

              capsIptTxtLabel: { 'pt-br': 'xxx' },
              capsIptTxtDescription: { 'pt-br': '' },
            },
          },

          'ccc_ref-1': {
            capsIptCodeID: 'ccc_ref-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'xxx' },
              capsIptCapsDescription: { 'pt-br': '' },

              capsIptCapsDfCode: `xxx`,
              capsIptCapsTypesToAdd: ['xxx'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_ref',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
