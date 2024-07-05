import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_elementsLibrary: TcapsCodeData = {
  ccc_elementsLibrary: {
    capsCodeInfo: {
      '1': {
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 760000000 },
        capsCodeVersionID: '1',

        capsLabel: {
          'pt-br': 'Biblioteca de Elementos',
          en: 'Elements Library',
        },

        capsDescription: {
          'pt-br':
            'Agrupa elementos para serem visualizados e copiados. Não renderiza nada.',
          en: "Groups elements to be viewed and copied. Doesn't render anything.",
        },

        capsCodeTypes: ['Tela'],
        capsCodeText: `
        
        () => <>{/*elements library*/}</>`,

        capsCodeInputs: {
          'ccc_elementsLibrary-0': {
            capsIptCodeID: 'ccc_elementsLibrary-0',
            capsIptPosition: '0',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsTypesToAdd: ['SVG Icon'],
              capsIptCapsLabel: { 'pt-br': 'Ícones SVG', en: 'SVG Icons' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsDfCode: `{}`,
            },
          },
          'ccc_elementsLibrary-1': {
            capsIptCodeID: 'ccc_elementsLibrary-1',
            capsIptPosition: '1',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsTypesToAdd: ['Elemento de Tela'],
              capsIptCapsLabel: {
                'pt-br': 'Elementos Simples',
                en: 'Simple Elements',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsDfCode: `{}`,
            },
          },
          'ccc_elementsLibrary-2': {
            capsIptCodeID: 'ccc_elementsLibrary-2',
            capsIptPosition: '2',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsTypesToAdd: ['Elemento de Tela'],
              capsIptCapsLabel: {
                'pt-br': 'Elementos Funcionais',
                en: 'Working Elements',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsDfCode: `{}`,
            },
          },
          'ccc_elementsLibrary-3': {
            capsIptCodeID: 'ccc_elementsLibrary-3',
            capsIptPosition: '3',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsTypesToAdd: ['Elemento de Tela'],
              capsIptCapsLabel: {
                'pt-br': 'Elementos Compostos',
                en: 'Complex Elements',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsDfCode: `{}`,
            },
          },
        },
      },
    },

    capsType: 'code',

    capsDB: {
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 760000000 },
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
      capsID: 'ccc_elementsLibrary',
    },
  },
};
