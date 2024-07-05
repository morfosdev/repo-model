import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const ccc_fireDeleteData: TcapsCodeData = {
  ccc_fireDeleteData: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'firestore deleteDoc' },
        capsDescription: { 'pt-br': '' },
        capsCodeTypes: ['function', 'firestore', 'deleteDoc'],

        capsCodeText: `(...args) =>
        functions.firebase.deleteDoc({ args, pass:{
            fbInit: [!#!firestore init path!#!],
            arrRefStrings: [!#!array firestore reference!#!],
            arrFuncs: [!#!functions return!#!],
        }})`,

        capsCodeInputs: {
          'ccc_fireDeleteData-0': {
            capsIptCodeID: 'ccc_fireDeleteData-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'firestore init path' },
              capsIptCapsDescription: { 'pt-br': '' },

              capsIptCapsDfCode: "''",
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_fireDeleteData-1': {
            capsIptCodeID: 'ccc_fireDeleteData-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'array firestore reference' },
              capsIptCapsDescription: { 'pt-br': '' },

              capsIptCapsDfCode: "''",
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_fireDeleteData-2': {
            capsIptCodeID: 'ccc_fireDeleteData-2',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'functions return' },
              capsIptCapsDescription: { 'pt-br': '' },

              capsIptCapsDfCode: '() => {}',
              capsIptCapsTypesToAdd: [
                'setVar',
                'console log',
                'func Group',
                'customs',
              ],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_fireDeleteData',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
