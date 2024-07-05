import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const ccc_fireSetDoc: TcapsCodeData = {
  ccc_fireSetDoc: {
    capsDB: {
      capsUserID: 'xxx1',
      capsID: 'ccc_fireSetDoc',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsPrjID: 'yyy1',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'firestore setDoc' },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
        capsCodeTypes: ['function', 'firestore', 'setDoc'],
        capsCodeVersionID: '1',
        capsCodeText: `async (...args) =>
        functions.firebase.setDoc({ args, pass:{
            fbInit: [!#!firestore init path!#!],
            arrRefStrings: [!#!array firestore reference!#!],
            arrPathData: [!#!path to data!#!],
            arrFuncs: [!#!functions return!#!],
        }})`,
        capsDescription: { 'pt-br': '' },

        capsCodeInputs: {
          'ccc_fireSetDoc-0': {
            capsIptCodeID: 'ccc_fireSetDoc-0',
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
          'ccc_fireSetDoc-1': {
            capsIptCodeID: 'ccc_fireSetDoc-1',
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
          'ccc_fireSetDoc-2': {
            capsIptCodeID: 'ccc_fireSetDoc-2',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'data to set' },
              capsIptCapsDescription: { 'pt-br': '' },
              capsIptCapsDfCode: "'noPath'",
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_fireSetDoc-3': {
            capsIptCodeID: 'ccc_fireSetDoc-3',
            capsIptPosition: '3',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'functions return' },
              capsIptCapsDescription: { 'pt-br': '' },
              capsIptCapsDfCode: '()=>{}',
              capsIptCapsTypesToAdd: ['setVar', 'console log', 'func Group'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },
};
