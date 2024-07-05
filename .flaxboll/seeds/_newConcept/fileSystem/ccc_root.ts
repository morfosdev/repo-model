import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_root: TcapsCodeData = {
  ccc_root: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'new xxx' },
        capsDescription: { 'pt-br': '' },
        capsCodeTypes: ['_root'],

        capsCodeText: ``,

        capsCodeInputs: {
          'ccc_root-0': {
            capsIptCodeID: 'ccc_root-0',
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
      capsID: 'ccc_root',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
