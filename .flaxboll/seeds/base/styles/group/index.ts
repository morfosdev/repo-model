import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const ccc_stlGroup: TcapsCodeData = {
  // Grupo de Estilos
  ccc_stlGroup: {
    capsDB: {
      capsID: 'ccc_stlGroup',
      capsUserID: 'xxx1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsPrjID: 'yyy1',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'stlGroup' },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
        capsCodeTypes: [
          'Estilo Texto',
          'Estilo Caixa',
          'Estilo Imagem',
          'Estilo Layout',
          'Grupo de Estilos',
        ],
        capsCodeVersionID: '1',

        capsCodeText: `!#!1!#!`,

        capsDescription: { 'pt-br': '' },

        capsCodeInputs: {
          'ccc_stlGroup-0': {
            capsIptCodeID: 'ccc_stlGroup-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Add Styles' },
              capsIptCapsDescription: { 'pt-br': '' },
              capsIptCapsDfCode: `[]`,
              capsIptCapsTypesToAdd: [
                'Estilo Texto',
                'Estilo Caixa',
                'Estilo Imagem',
                'Estilo Layout',
                'Grupo de Estilos',
              ],
            },
          },
        },
      },
    },
    capsType: 'code',
  },
};
