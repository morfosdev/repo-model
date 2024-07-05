import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_functionsLibrary: TcapsCodeData = {
  ccc_functionsLibrary: {
    capsCodeInfo: {
      '1': {
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 760000000 },
        capsCodeVersionID: '1',

        capsLabel: {
          'pt-br': 'Biblioteca de Funções',
          en: 'Function Library',
        },

        capsDescription: {
          'pt-br':
            'Agrupa funções para serem visualizadas e copiadas. Não renderiza nem executa nada.',
          en: "Groups functions to be viewed and copied. It doesn't render or execute anything.",
        },

        capsCodeTypes: ['Tela'],
        capsCodeText: `
        
        () => <>{/*functions library*/}</>`,

        capsCodeInputs: {
          'ccc_functionsLibrary-0': {
            capsIptCodeID: 'ccc_functionsLibrary-0',
            capsIptPosition: '0',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Utils', en: '' },
              capsIptCapsTypesToAdd: ['Função', 'function'],
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsDfCode: `()=>{}`,
            },
          },
          'ccc_functionsLibrary-1': {
            capsIptCodeID: 'ccc_functionsLibrary-1',
            capsIptPosition: '1',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Firebase', en: 'Firebase' },
              capsIptCapsTypesToAdd: ['Função', 'function'],
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsDfCode: `()=>{}`,
            },
          },
          'ccc_functionsLibrary-2': {
            capsIptCodeID: 'ccc_functionsLibrary-2',
            capsIptPosition: '2',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'APIs', en: 'APIs' },
              capsIptCapsTypesToAdd: ['Função', 'function'],
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsDfCode: `()=>{}`,
            },
          },
          'ccc_functionsLibrary-3': {
            capsIptCodeID: 'ccc_functionsLibrary-3',
            capsIptPosition: '3',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Controle de Estado',
                en: 'State Control',
              },
              capsIptCapsTypesToAdd: ['Função', 'function'],
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsDfCode: `()=>{}`,
            },
          },
          'ccc_functionsLibrary-4': {
            capsIptCodeID: 'ccc_functionsLibrary-4',
            capsIptPosition: '4',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsTypesToAdd: ['Grupo de Funções'],
              capsIptCapsLabel: {
                'pt-br': 'Grupos Base',
                en: 'Base Groups',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Grupos de funções menores para serem usadas dentro dos grupos compostos.',
                en: '',
              },
              capsIptCapsDfCode: `()=>{}`,
            },
          },
          'ccc_functionsLibrary-5': {
            capsIptCodeID: 'ccc_functionsLibrary-5',
            capsIptPosition: '5',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Grupos Compostos',
                en: 'Composite Groups',
              },
              capsIptCapsTypesToAdd: ['Grupo de Funções'],
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsDfCode: `()=>{}`,
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
      capsID: 'ccc_functionsLibrary',
    },
  },
};
