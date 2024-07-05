import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const loaderProps: TcapsCodeData = {
  // size
  size: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'size',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Tamanho do Loader - size',
          en: 'size',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Loader'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.size({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Define tamanho do Loader',
          en: 'Set Loader size',
        },

        capsCodeInputs: {
          'size-0': {
            capsIptCodeID: 'size-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Tamanho do Loader - size',
                en: 'size',
              },
              capsIptCapsDescription: {
                'pt-br': 'Escolha entre small ou large.',
                en: 'Small or large.',
              },
              capsIptCapsDfCode: 'small',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // color
  color: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'color',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Cor do Loader - color',
          en: 'color',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Loader'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.color({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Define a cor do Loader',
          en: 'Set Loader color',
        },

        capsCodeInputs: {
          'color-0': {
            capsIptCodeID: 'color-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Cor do Loader - color',
                en: 'Color',
              },
              capsIptCapsDescription: {
                'pt-br': 'Escolha entre small ou large.',
                en: 'Small or large.',
              },
              capsIptCapsDfCode: '#fff',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },
};
