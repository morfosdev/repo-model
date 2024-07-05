import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const btnProps: TcapsCodeData = {
  // Desativado - disabled
  disabled: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'disabled',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Desativado',
          en: 'Disabled',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Botão'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.disabled({ pass: {
        boolean: [!#!Disable!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Desative todas as interações para este componente',
          en: 'Disable all interactions for this component',
        },

        capsCodeInputs: {
          'disabled-0': {
            capsIptCodeID: 'disabled-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Desativado',
                en: 'Disable',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsDfCode: '()=>{}',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Opacidade Ativa - activeOpacity
  activeOpacity: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'activeOpacity',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Opacidade Ativa',
          en: 'activeOpacity',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Botão'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.activeOpacity({ pass: {
          activeOpacity: [!#!activeOpacity!#!]
         }})`,
        capsDescription: {
          'pt-br':
            'Determina qual deve ser a opacidade do modo de exibição encapsulado quando o toque estiver ativo.',
          en: 'Determines what the opacity of the wrapped view should be when touch is active.',
        },

        capsCodeInputs: {
          'activeOpacity-0': {
            capsIptCodeID: 'activeOpacity-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Opacidade Ativa',
                en: 'activeOpacity',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina um valor para a Opacidade',
                en: 'Set a value for Opacity',
              },
              capsIptCapsDfCode: `'0.2'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Apple Tv Parallax - tvParallaxProperties
  tvParallaxProperties: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'tvParallaxProperties',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Propriedades de tvParallax ',
          en: 'tvParallaxProperties',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Botão'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.tvParallaxProperties({ pass: {
          tvParallaxProperties: [!#!tvParallaxProperties!#!]
         }})`,
        capsDescription: {
          'pt-br':
            'Objeto com propriedades para controlar os efeitos de paralaxe da Apple TV.',
          en: 'Object with properties to control Apple TV parallax effects.',
        },

        capsCodeInputs: {
          'tvParallaxProperties-0': {
            capsIptCodeID: 'tvParallaxProperties-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Apple Tv Parallax',
                en: 'tvParallaxProperties',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina um efeito e valor',
                en: 'Set an effect and value',
              },
              capsIptCapsDfCode: '{enabled: true}',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Foco preferencial da TV - hasTVPreferredFocus
  hasTVPreferredFocus: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'hasTVPreferredFocus',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Foco preferencial da TV',
          en: 'hasTVPreferredFocus',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Botão'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.hasTVPreferredFocus({ pass: {
          hasTVPreferredFocus: [!#!hasTVPreferredFocus!#!]
         }})`,
        capsDescription: {
          'pt-br': '(Apenas Apple TV) Foco preferencial da TV',
          en: '(Apple TV only) TV preferred focus',
        },

        capsCodeInputs: {
          'hasTVPreferredFocus-0': {
            capsIptCodeID: 'hasTVPreferredFocus-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Foco preferencial da TV',
                en: 'hasTVPreferredFocus',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina "true" para ativar ou "false" para desativar.',
                en: 'Set "true" to enable or "false" to disable',
              },
              capsIptCapsDfCode: 'true',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Próximo Foco para Baixo - nextFocusDown
  nextFocusDown: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'nextFocusDown',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Próximo Foco para Baixo',
          en: 'nextFocusDown',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Botão'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.nextFocusDown({ pass: {
          nextFocusDown: [!#!nextFocusDown!#!]
         }})`,
        capsDescription: {
          'pt-br': 'Próximo foco da TV para baixo',
          en: 'TV next focus down',
        },

        capsCodeInputs: {
          'nextFocusDown-0': {
            capsIptCodeID: 'nextFocusDown-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Próximo Foco para Baixo',
                en: 'nextFocusDown',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina um valor.',
                en: 'Set a value',
              },
              capsIptCapsDfCode: '1',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Próximo Foco à Esquerda - nextFocusLeft
  nextFocusLeft: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'nextFocusLeft',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Próximo Foco à Esquerda',
          en: 'nextFocusLeft',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Botão'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.nextFocusLeft({ pass: {
          nextFocusLeft: [!#!nextFocusLeft!#!]
         }})`,
        capsDescription: {
          'pt-br': 'Próximo foco da TV à Esquerda',
          en: 'TV next focus left',
        },

        capsCodeInputs: {
          'nextFocusLeft-0': {
            capsIptCodeID: 'nextFocusLeft-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Próximo Foco à Esquerda',
                en: 'nextFocusLeft',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina um valor.',
                en: 'Set a value',
              },
              capsIptCapsDfCode: '1',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Próximo Foco à Direita - nextFocusRight
  nextFocusRight: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'nextFocusRight',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Próximo Foco à Direita',
          en: 'nextFocusRight',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Botão'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.nextFocusRight({ pass: {
          nextFocusRight: [!#!nextFocusRight!#!]
         }})`,
        capsDescription: {
          'pt-br': 'Próximo foco da TV à Direita',
          en: 'TV next focus right',
        },

        capsCodeInputs: {
          'nextFocusRight-0': {
            capsIptCodeID: 'nextFocusRight-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Próximo Foco à Direita',
                en: 'nextFocusRight',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina um valor.',
                en: 'Set a value',
              },
              capsIptCapsDfCode: '1',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Próximo Foco - nextFocusUp
  nextFocusUp: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'nextFocusUp',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Próximo Foco',
          en: 'nextFocusUp',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Botão'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.nextFocusUp({ pass: {
          nextFocusUp: [!#!nextFocusUp!#!]
         }})`,
        capsDescription: {
          'pt-br': 'Próximo foco da TV',
          en: 'TV next focus up',
        },

        capsCodeInputs: {
          'nextFocusUp-0': {
            capsIptCodeID: 'nextFocusUp-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Próximo Foco',
                en: 'nextFocusUp',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina um valor.',
                en: 'Set a value',
              },
              capsIptCapsDfCode: '1',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },
};
