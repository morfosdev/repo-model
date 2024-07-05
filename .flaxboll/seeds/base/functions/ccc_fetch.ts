import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_fetch: TcapsCodeData = {
  ccc_fetch_B: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'fetch', en: 'fetch' },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['function', 'fetch'],

        capsCodeText: `async (...args) => {
          // ---------- set Capsules Inputs
          const arrUrl = [!#!url!#!]
          const initProps = {!#!initial properties!#!}
          const errFuncs = [!#!callback error!#!];
          const successFuncs = [!#!callback response!#!];
          console.log({initProps});

          // ---------- set Url Value as a single string
          const url = arrUrl.reduce((prev,curr)=>prev + curr, '')
          console.log({url});

          // ---------- set Return
          await fetch(url, initProps)
          .then((res) => (async () => {
            for (const currFunc of successFuncs){
              // console.log({res, currFunc});
              await currFunc(res, args);
            }
          })())
          .catch(err => (async () => {
            for (const currFunc of errFuncs){
              await currFunc(err, args);
            }
          })());
        }`,

        capsCodeInputs: {
          'ccc_fetch_B-0': {
            capsIptCodeID: 'ccc_fetch_B-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'url', en: 'url' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `'https://api.github.com/users'`,
              capsIptCapsTypesToAdd: [
                'free value',
                'join strings value',
                'string value',
              ],
            },
          },

          'ccc_fetch_B-1': {
            capsIptCodeID: 'ccc_fetch_B-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'propriedades iniciais',
                en: 'initial properties',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `"method":"GET"`,
              capsIptCapsTypesToAdd: ['propValue'],
            },
          },

          'ccc_fetch_B-2': {
            capsIptCodeID: 'ccc_fetch_B-2',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'erro de callback',
                en: 'callback error',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `()=>{}`,
              capsIptCapsTypesToAdd: ['fetch response'],
            },
          },

          'ccc_fetch_B-3': {
            capsIptCodeID: 'ccc_fetch_B-3',
            capsIptPosition: '3',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'resposta de callback',
                en: 'callback response',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `()=>{}`,
              capsIptCapsTypesToAdd: ['fetch response'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_fetch_B',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
