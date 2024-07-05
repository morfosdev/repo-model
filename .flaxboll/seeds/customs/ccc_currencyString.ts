import { TcapsCodeData } from '../../types/Tcaps/TcapsCode';

export const ccc_currencyString: TcapsCodeData = {
  ccc_currencyString: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'currencyString', en: 'currencyString' },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['string values', 'currencyString'],

        capsCodeText: `customs.currencyString({pass:{
                value: [!#!value!#!],
            }})`,

        capsCodeInputs: {
          // ---------- Unused Input
          'ccc_currencyString-0': {
            capsIptCodeID: 'ccc_currencyString-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Path Input Text',
                en: 'Path Input Text',
              },
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
      capsID: 'ccc_currencyString',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
