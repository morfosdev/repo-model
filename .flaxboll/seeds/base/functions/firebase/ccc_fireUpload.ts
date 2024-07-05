import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const ccc_fireUpload: TcapsCodeData = {
  ccc_fireUpload: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'firestore upload' },
        capsDescription: { 'pt-br': '' },
        capsCodeTypes: ['function', 'firestore', 'upload'],

        capsCodeText: `async (...args) =>
        functions.firebase.uploadFile({ args, pass:{
            fbInit: [!#!firestore init obj!#!],
            arrFiles: [!#!array files!#!],
            arrFuncs: [!#!functions return!#!],
        }})`,

        capsCodeInputs: {
          'ccc_fireUpload-0': {
            capsIptCodeID: 'ccc_fireUpload-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'firestore init' },
              capsIptCapsDescription: { 'pt-br': '' },

              capsIptCapsDfCode: "''",
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_fireUpload-1': {
            capsIptCodeID: 'ccc_fireUpload-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'array de arquivos' },
              capsIptCapsDescription: { 'pt-br': '' },

              capsIptCapsDfCode: "''",
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_fireUpload-3': {
            capsIptCodeID: 'ccc_fireUpload-3',
            capsIptPosition: '3',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'functions return' },
              capsIptCapsDescription: { 'pt-br': '' },

              capsIptCapsDfCode: '() => {}',
              capsIptCapsTypesToAdd: ['function', 'customs'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_fireUpload',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
