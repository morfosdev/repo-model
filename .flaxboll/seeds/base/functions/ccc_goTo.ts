import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_goTo: TcapsCodeData = {
  ccc_goTo: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'goTo',
          en: 'goTo',
        },
        capsDescription: {
          'pt-br': 'Função para mudar de tela',
          en: 'Go to another screen function',
        },
        capsCodeTypes: ['function', 'goTo'],

        capsCodeText: `
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("!#!Screen Path!#!");
        }
        `,

        capsCodeInputs: {
          'ccc_goTo-0': {
            capsIptRemoved: false,
            capsIptCodeID: 'ccc_goTo-0',
            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDescription: { 'pt-br': '', en: '' },
              capsIptTxtDfValue: 'home',
              capsIptTxtLabel: {
                'pt-br': 'Caminho da Tela',
                en: 'Screen Path',
              },
            },
            capsIptPosition: '0',
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_goTo',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
