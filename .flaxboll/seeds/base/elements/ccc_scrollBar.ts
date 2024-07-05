import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_scrollBar: TcapsCodeData = {
  ccc_scrollBar: {
    capsCodeInfo: {
      '1': {
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 761000000 },
        capsCodeVersionID: '1',

        capsLabel: { 'pt-br': 'ScrollBar', en: 'ScrollBar' },
        capsDescription: { 'pt-br': '', en: '' },

        capsCodeTypes: ['Elemento de Tela', 'ScrollBar'],

        capsCodeText: `(...args:any) => <Elements.ScrollBar pass={{
            styles: [!#!styles!#!],
            arrProps: [!#!props!#!],
            arrItems: [!#!children!#!],
            args,
        }}/>`,

        capsCodeInputs: {
          'ccc_dynView-0': {
            capsIptPosition: '0',
            capsIptCodeID: 'ccc_dynView-0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'styles', en: 'styles' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsTypesToAdd: ['Estilo Caixa', 'Estilo Layout'],
              capsIptCapsDfCode: ``,
            },
          },
          'ccc_dynView-1': {
            capsIptPosition: '1',
            capsIptCodeID: 'ccc_dynView-1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'props', en: 'props' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsTypesToAdd: ['Propriedade Rolagem'],
              capsIptCapsDfCode: ``,
            },
          },
          'ccc_dynView-2': {
            capsIptPosition: '2',
            capsIptCodeID: 'ccc_dynView-2',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'children', en: 'children' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsTypesToAdd: ['Elemento de Tela'],
              capsIptCapsDfCode: `() => <></>`,
            },
          },
        },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_scrollBar',
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 761000000 },
    },
  },
};
