import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_decrement: TcapsCodeData = {
  ccc_decrement: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'decrement amount',
          en: 'decrement amount',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['function', 'decrement amount'],

        capsCodeText: `(...args) => {
            //   !#!functions!#!
            console.log("decrement");

          }`,

        capsCodeInputs: {
          'ccc_decrement-0': {
            capsIptCodeID: 'ccc_decrement-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'input 1',
                en: 'input 1',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: '() => {}',
              capsIptCapsTypesToAdd: ['function'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_decrement',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
