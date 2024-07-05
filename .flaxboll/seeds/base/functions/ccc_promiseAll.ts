import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_promiseAll: TcapsCodeData = {
  ccc_promiseAll: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'promise all', en: 'promise all' },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['function', 'promise all'],

        capsCodeText: `async (...args) => {
          const arrFuncs = [!#!functions!#!];

          const arrCalls = ()=> arrFuncs.map(async (item)=>item(args))
          Promise.all(arrCalls())
        }`,

        capsCodeInputs: {
          'ccc_promiseAll-0': {
            capsIptCodeID: 'ccc_promiseAll-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Funções', en: 'Functions' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `()=>{}`,
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
      capsID: 'ccc_promiseAll',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
