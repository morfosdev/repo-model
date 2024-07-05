import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const ccc_expoAuthSession: TcapsCodeData = {
  ccc_expoAuthSession: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'init expo-auth-session' },
        capsDescription: { 'pt-br': '' },
        capsCodeTypes: ['function', 'expo-auth-session'],

        capsCodeText: `async (...args) => {
              // ---------- set Caps Inputs
              const pathToSave = "!#!Variable Path To Save!#!";

              const condNative = RN.Platform.OS !== 'web';
              if(condNative){
                // ---------- set Local Imports
                const expoAuth = await import('expo-auth-session/providers/google');

                setData({path: pathToSave, value: expoAuth});
              }

            }`,

        capsCodeInputs: {
          'ccc_expoAuthSession-0': {
            capsIptCodeID: 'ccc_expoAuthSession-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: '',

              capsIptTxtLabel: { 'pt-br': 'Variable Path To Save' },
              capsIptTxtDescription: { 'pt-br': '' },
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_expoAuthSession',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
