import { TcapsCodeData } from '../../types/Tcaps/TcapsCode';

export const ccc_checkCurrSecondsValue: TcapsCodeData = {
  ccc_checkCurrSecondsValue: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Check Seconds Value',
          en: 'Check Seconds Value',
        },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['function', 'Check Seconds Value'],

        capsCodeText: `(...args) =>
        customs.checkCurrSecondsValue({ args, pass:{
            objTime: [!#!timer path!#!],
            arrFuncs: [!#!array functions!#!],
            args
        }})`,

        capsCodeInputs: {
          // ---------- Timer Path (Init)
          'ccc_checkCurrSecondsValue-0': {
            capsIptCodeID: 'ccc_checkCurrSecondsValue-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Obj TimeStamp (Início)',
                en: '',
              },
              capsIptCapsDescription: {
                'pt-br': 'Precisa receber um objeto, não um path.',
                en: '',
              },

              capsIptCapsDfCode: `''`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          // ---------- Set Seconds
          'ccc_checkCurrSecondsValue-1': {
            capsIptCodeID: 'ccc_checkCurrSecondsValue-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Return Functions',
                en: '',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `()=>{}`,
              capsIptCapsTypesToAdd: ['setVar'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_checkCurrSecondsValue',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
