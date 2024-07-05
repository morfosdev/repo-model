import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const ccc_fireUpdateDoc: TcapsCodeData = {
  ccc_fireUpdateDoc: {
    capsDB: {
      capsPrjID: 'yyy1',
      capsID: 'ccc_fireUpdateDoc',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'firestore updateDoc' },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
        capsCodeTypes: ['function', 'firestore', 'updateDoc'],
        capsCodeVersionID: '1',

        capsCodeText: `async (...args) =>
        functions.firebase.updateDoc({ args, pass:{
            fbInit: [!#!firestore init path!#!],
            arrRefStrings: [!#!array firestore reference!#!],
            arrPathData: [!#!path to data!#!],
            arrFuncs: [!#!functions return!#!],
        }})`,
        capsDescription: { 'pt-br': '' },

        capsCodeInputs: {
          'ccc_fireUpdateDoc-0': {
            capsIptCodeID: 'ccc_fireUpdateDoc-0',
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
          'ccc_fireUpdateDoc-1': {
            capsIptCodeID: 'ccc_fireUpdateDoc-1',
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
          'ccc_fireUpdateDoc-2': {
            capsIptCodeID: 'ccc_fireUpdateDoc-2',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'path data to update' },
              capsIptCapsDescription: { 'pt-br': '' },
              capsIptCapsDfCode: `'noPath'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_fireUpdateDoc-3': {
            capsIptCodeID: 'ccc_fireUpdateDoc-3',
            capsIptPosition: '3',
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
      },
    },
    capsType: 'code',
  },
};
