import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const ccc_fireInit: TcapsCodeData = {
  ccc_fireInit: {
    capsDB: {
      capsUserID: 'xxx1',
      capsID: 'ccc_fireInit',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsPrjID: 'yyy1',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'init firebase' },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
        capsCodeTypes: ['function', 'fbInit'],
        capsCodeVersionID: '1',

        capsCodeText: `async (...args) =>
        functions.firebase.fireInit({ args, pass:{
          fbConfig: !#!FB Variable Path!#!,
          arrFuncs: [!#!Variable Path To Save!#!]
        }})`,

        capsDescription: { 'pt-br': 'xxx' },

        capsCodeInputs: {
          'ccc_fireInit-0': {
            capsIptCodeID: 'ccc_fireInit-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'FB Variable Path' },
              capsIptCapsDescription: { 'pt-br': '' },
              capsIptCapsDfCode: `'noPath'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_fireInit-1': {
            capsIptCodeID: 'ccc_fireInit-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Variable Path To Save' },
              capsIptCapsDescription: { 'pt-br': '' },
              capsIptCapsDfCode: `()=>{}`,
              capsIptCapsTypesToAdd: ['setVar'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },
};
