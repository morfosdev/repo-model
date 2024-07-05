import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_increment: TcapsCodeData = {
  ccc_increment: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'increment amount',
          en: 'increment amount',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['function', 'increment amount'],

        capsCodeText: `(...args) => {
            //   !#!functions!#!
            console.log("increment");
          }`,

        capsCodeInputs: {
          'ccc_increment-0': {
            capsIptCodeID: 'ccc_increment-0',
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
      capsID: 'ccc_increment',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
