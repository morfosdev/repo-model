import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const ccc_fireGetDocs: TcapsCodeData = {
  ccc_fireGetDocs: {
    capsDB: {
      capsUserID: 'xxx1',
      capsID: 'ccc_fireGetDocs',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsPrjID: 'yyy1',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'firestore getDocs' },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
        capsCodeTypes: ['function', 'firestore', 'getDocs'],
        capsCodeVersionID: '1',
        capsCodeText: `async (...args) =>
        functions.firebase.getDocs({ args, pass:{
            fbInit: [!#!firestore init path!#!],
            arrRefStrings: [!#!array firestore reference!#!],
            arrFuncs: [!#!functions return!#!],
        }})`,

        capsDescription: { 'pt-br': '' },

        capsCodeInputs: {
          'ccc_fireGetDocs-0': {
            capsIptCodeID: 'ccc_fireGetDocs-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'firestore init path' },
              capsIptCapsDescription: { 'pt-br': '' },
              capsIptCapsDfCode: `'noPath'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_fireGetDocs-1': {
            capsIptCodeID: 'ccc_fireGetDocs-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'array firestore reference' },
              capsIptCapsDescription: { 'pt-br': '' },
              capsIptCapsDfCode: `'noPath'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_fireGetDocs-2': {
            capsIptCodeID: 'ccc_fireGetDocs-2',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'functions return' },
              capsIptCapsDescription: { 'pt-br': '' },
              capsIptCapsDfCode: '()=>{}',
              capsIptCapsTypesToAdd: [
                'setVar',
                'console log',
                'condition',
                'func Group',
                'customs',
              ],
            },
          },
        },
      },
    },
    capsType: 'code',
  },
};
