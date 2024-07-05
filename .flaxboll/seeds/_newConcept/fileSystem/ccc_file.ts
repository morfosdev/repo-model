import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_file: TcapsCodeData = {
  ccc_file: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'new xxx' },
        capsDescription: { 'pt-br': '' },
        capsCodeTypes: ['_file'],

        capsCodeText: `async (...args) => {

        }`,

        capsCodeInputs: {
          'ccc_file-0': {
            capsIptCodeID: 'ccc_file-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: 'index.ts',

              capsIptTxtLabel: { 'pt-br': 'name and extension' },
              capsIptTxtDescription: { 'pt-br': '' },
            },
          },

          'ccc_file-1': {
            capsIptCodeID: 'ccc_file-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'file content' },
              capsIptCapsDescription: { 'pt-br': '' },

              capsIptCapsDfCode: `xxx`,
              capsIptCapsTypesToAdd: ['_project', 'string'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_file',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
