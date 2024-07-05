import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const textProps: TcapsCodeData = {
  // Linhas múltiplas - numberOfLines
  p23: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p23',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Número de Linhas - numberOfLines',
          en: 'numberOfLines',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Texto'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.pt23({ pass: {
          numberToEnter: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Define o número de linhas',
          en: 'Set the number of lines',
        },

        capsCodeInputs: {
          'p23-0': {
            capsIptCodeID: 'p23-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Número de Linhas - numberOfLines',
                en: 'numberOfLines',
              },
              capsIptCapsDescription: { 'pt-br': '' },
              capsIptCapsDfCode: "'4'",
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // ellipsizeMode
  p25: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p25',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Tipo de Abreviação - ellipsizeMode',
          en: 'ellipsizeMode',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Texto'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p25({ pass: {
          mode: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Define como deverá ser abreviada a linha caso o texto for maior que o container...',
          en: 'Defines how the line should be abbreviated if the text is longer than the container...',
        },

        capsCodeInputs: {
          'p25-0': {
            capsIptCodeID: 'p25-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Tipo de Abreviação -  ellipsizeMode',
                en: 'ellipsizeMode',
              },
              capsIptCapsDescription: { 'pt-br': '' },
              capsIptCapsDfCode: `'tail'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },
};
