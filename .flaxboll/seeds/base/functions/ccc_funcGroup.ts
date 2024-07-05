import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_funcGroup: TcapsCodeData = {
  // Grupo de Estilos
  ccc_funcGroup: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'func Group' },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
        capsCodeTypes: ['function', 'func Group'],
        capsCodeVersionID: '1',

        capsCodeText: `async (...args) =>
          functions.funcGroup({ args, pass:{
            arrFunctions: [!#!1!#!]
          }})`,

        capsDescription: { 'pt-br': '' },

        capsCodeInputs: {
          'ccc_funcGroup-0': {
            capsIptCodeID: 'ccc_funcGroup-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Functions' },
              capsIptCapsDescription: { 'pt-br': '' },
              capsIptCapsDfCode: `()=>{}`,
              capsIptCapsTypesToAdd: ['function'],
            },
          },
        },
      },
    },

    capsDB: {
      capsID: 'ccc_funcGroup',
      capsUserID: 'xxx1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsPrjID: 'yyy1',
    },

    capsType: 'code',
  },
};
