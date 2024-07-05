import { TcapsCodeData } from '../../types/Tcaps/TcapsCode';

export const ccc_processCheckout: TcapsCodeData = {
  // (ocorrências: 11)
  ccc_processCheckout: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'processCheckout', en: 'processCheckout' },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['function', 'processCheckout'],

        capsCodeText: `
          (...args) => {

            customs.processCheckout({ args, pass:{ }});
          }`,

        capsCodeInputs: {
          // ---------- Unused Input
          'ccc_processCheckout-0': {
            capsIptCodeID: 'ccc_processCheckout-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': '...', en: '...' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `''`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_processCheckout',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
