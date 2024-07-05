import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_folder: TcapsCodeData = {
  ccc_folder: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'new xxx' },
        capsDescription: { 'pt-br': '' },
        capsCodeTypes: ['_folder'],

        capsCodeText: ``,

        capsCodeInputs: {
          'ccc_folder-0': {
            capsIptCodeID: 'ccc_folder-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Files and Folders' },
              capsIptCapsDescription: { 'pt-br': '' },

              capsIptCapsDfCode: ``,
              capsIptCapsTypesToAdd: ['_file', '_folder'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_folder',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
