import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_stringFunc: TcapsCodeData = {
  ccc_stringFunc: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'função string', en: 'string function' },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['string function'],

        capsCodeText: `(...args) => {
          let value = "!#!string value!#!";

          // ---------- set Arguments Values (If Exists)
          const checkArgs = value.startsWith('#');
          if(checkArgs) value = tools.argSel(args, value);

          // ---------- set Variables Values (If Exists)
          const [condVar, varValue] = tools.getVarValue(value, "noComponent");
          if(condVar) value = varValue;

          return value
        }`,

        capsCodeInputs: {
          'ccc_stringFunc-0': {
            capsIptCodeID: 'ccc_stringFunc-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: 'Hello stringFunction!',

              capsIptTxtLabel: { 'pt-br': 'valor string', en: 'string value' },
              capsIptTxtDescription: { 'pt-br': '', en: '' },
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_stringFunc',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
