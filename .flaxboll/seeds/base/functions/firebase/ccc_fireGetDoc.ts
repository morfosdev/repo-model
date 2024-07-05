import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const ccc_fireGetDoc: TcapsCodeData = {
  ccc_fireGetDoc: {
    capsDB: {
      capsUserID: 'xxx1',
      capsID: 'ccc_fireGetDoc',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsPrjID: 'yyy1',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'firestore getDoc (single doc)' },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
        capsCodeTypes: ['function', 'firestore', 'getDoc'],
        capsCodeVersionID: '1',
        capsCodeText: `async (...args) =>
        functions.firebase.getDoc({ args, pass:{
            fbInit: [!#!firestore init path!#!],
            arrRefStrings: [!#!array firestore reference!#!],
            arrFuncs: [!#!functions return!#!],
        }})`,

        capsDescription: { 'pt-br': '' },

        capsCodeInputs: {
          'ccc_fireGetDoc-0': {
            capsIptCodeID: 'ccc_fireGetDoc-0',
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
          'ccc_fireGetDoc-1': {
            capsIptCodeID: 'ccc_fireGetDoc-1',
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
          'ccc_fireGetDoc-2': {
            capsIptCodeID: 'ccc_fireGetDoc-2',
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
              ],
            },
          },
        },
      },
    },
    capsType: 'code',
  },
};
