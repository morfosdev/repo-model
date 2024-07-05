import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const viewProps: TcapsCodeData = {
  // Ações de Acessibilidade - accessibilityActions
  p76: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p76',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Ações de Acessibilidade - accessibilityActions',
          en: 'accessibilityActions',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `
        (...args:any) => props.p76({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'As ações de acessibilidade permitem que uma tecnologia assistiva invoque programaticamente as ações de um componente.',
          en: 'Accessibility actions allow an assistive technology to programmatically invoke the actions of a component.',
        },

        capsCodeInputs: {
          'p76-0': {
            capsIptCodeID: 'p76-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Ações de Acessibilidade - accessibilityActions',
                en: 'accessibilityActions',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Deve conter uma lista de objetos de ação. Cada objeto de ação deve conter o nome e o rótulo do campo',
                en: 'Should contain a list of action objects. Each action object should contain the following fields',
              },
              capsIptCapsDfCode:
                '[{name: "cut", label: "cut"},{name: "copy", label: "copy"},{name: "paste", label: "paste"},]',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Elementos de Acessibilidade Ocultos - accessibilityElementsHidden
  p77: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p77',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br':
            'Elementos de Acessibilidade Ocultos - accessibilityElementsHidden',
          en: 'accessibilityElementsHidden',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p78({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Um valor que indica se os elementos de acessibilidade contidos nesse elemento de acessibilidade estão ocultos.',
          en: 'A value indicating whether the accessibility elements contained within this accessibility element are hidden.',
        },

        capsCodeInputs: {
          'p77-0': {
            capsIptCodeID: 'p77-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Elementos de Acessibilidade Ocultos - accessibilityElementsHidden',
                en: 'accessibilityElementsHidden',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina "true" para ocultar ou "false" para exibir',
                en: 'Set "True (hide) or "false" (show)',
              },
              capsIptCapsDfCode: 'false',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Dica de Acessibilidade - accessibilityHint
  p78: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p78',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Dica de Acessibilidade - accessibilityHint',
          en: 'accessibilityHint',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p78({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Uma dica de acessibilidade ajuda os usuários a entender o que acontecerá quando eles executarem uma ação no elemento de acessibilidade quando esse resultado não estiver claro no rótulo de acessibilidade.',
          en: 'An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not clear from the accessibility label.',
        },

        capsCodeInputs: {
          'p78-0': {
            capsIptCodeID: 'p78-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Dica de Acessibilidade - accessibilityHint',
                en: 'accessibilityHint',
              },
              capsIptCapsDescription: {
                'pt-br': 'Escreva uma dica de acessibilidade para ser exibida',
                en: 'Write an accessibility hint to be displayed',
              },
              capsIptCapsDfCode: 'Escreva uma dica',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Idioma de Acessibilidade - accessibilityLanguage
  p79: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p79',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Idioma de Acessibilidade - accessibilityLanguage',
          en: 'accessibilityLanguage',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p79({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Usando a propriedade, o leitor de tela entenderá qual idioma usar ao ler o rótulo, o valor e a dica do elemento.',
          en: 'By using the accessibilityLanguage property, the screen reader will understand which language to use while reading the elements label, value and hint.',
        },

        capsCodeInputs: {
          'p79-0': {
            capsIptCodeID: 'p79-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Idioma de Acessibilidade - accessibilityLanguage',
                en: 'accessibilityLanguage',
              },
              capsIptCapsDescription: {
                'pt-br': 'Escreva um idioma',
                en: 'Write a language',
              },
              capsIptCapsDfCode: 'Escreva um Idioma',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Ignorar Inversão de Cores de Acessibilidade - accessibilityIgnoresInvertColors
  p80: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p80',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br':
            'Ignorar Inversão de Cores de Acessibilidade - accessibilityIgnoresInvertColors',
          en: 'accessibilityIgnoresInvertColors',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p80({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Você pode definir esta propriedade para "true" para que essas visualizações específicas não tenham suas cores invertidas.',
          en: 'You can set this property to be "true" so that these specific views wont have their colors inverted.',
        },

        capsCodeInputs: {
          'p80-0': {
            capsIptCodeID: 'p80-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Ignorar Inversão de Cores de Acessibilidade - accessibilityIgnoresInvertColors',
                en: 'accessibilityIgnoresInvertColors',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina "true" para ativar ou "false" para desativar',
                en: 'Set "true" (enable) or "false" (disable)',
              },
              capsIptCapsDfCode: 'false',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Rótulo de Acessibilidade - accessibilityLabel
  p81: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p81',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Rótulo de Acessibilidade - accessibilityLabel',
          en: 'accessibilityLabel',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p81({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'When a view is marked as accessible, it is a good practice to set an accessibilityLabel on the view, so that people who use VoiceOver know what element they have selected.',
          en: 'Quando uma visualização é marcada como acessível, é uma boa prática definir um acessibilidadeLabel na visualização, para que as pessoas que usam o VoiceOver saibam qual elemento selecionaram.',
        },

        capsCodeInputs: {
          'p81-0': {
            capsIptCodeID: 'p81-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Rótulo de Acessibilidade - accessibilityLabel',
                en: 'accessibilityLabel',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina "true" para ativar ou "false" para desativar',
                en: 'Set "true" (enable) or "false" (disable)',
              },
              capsIptCapsDfCode: 'Digite texto para o Leitor de Tela',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Anuncio de Alteração de Acessibilidade - accessibilityLiveRegion
  p82: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p82',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br':
            'Anuncio de Alteração de Acessibilidade - accessibilityLiveRegion',
          en: 'accessibilityLiveRegion',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p82({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Quando os componentes mudam dinamicamente, queremos que o TalkBack alerte o usuário final.',
          en: 'When components dynamically change, we want TalkBack to alert the end user.',
        },

        capsCodeInputs: {
          'p82-0': {
            capsIptCodeID: 'p82-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Anuncio de Alteração de Acessibilidade - accessibilityLiveRegion',
                en: 'accessibilityLiveRegion',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina o comportamento da acessibilidade',
                en: 'Set accessibility behavior',
              },
              capsIptCapsDfCode: 'none',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Função da Acessibilidade - accessibilityRole
  p83: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p83',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Função da Acessibilidade - accessibilityRole',
          en: 'accessibilityRole',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p83({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Comunica a finalidade de um componente ao usuário de uma tecnologia assistiva.',
          en: 'Communicates the purpose of a component to the user of an assistive technology.',
        },

        capsCodeInputs: {
          'p83-0': {
            capsIptCodeID: 'p83-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Função da Acessibilidade - accessibilityRole',
                en: 'accessibilityRole',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina o comportamento da acessibilidade',
                en: 'Set accessibility behavior',
              },
              capsIptCapsDfCode: 'none',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Estado da Acessibilidade - accessibilityState
  p84: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p84',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Estado da Acessibilidade - accessibilityState',
          en: 'accessibilityState',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p84({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Descreve o estado atual de um componente para o usuário de uma tecnologia assistiva.',
          en: 'Describes the current state of a component to the user of an assistive technology.',
        },

        capsCodeInputs: {
          'p84-0': {
            capsIptCodeID: 'p84-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Estado da Acessibilidade - accessibilityState',
                en: 'accessibilityState',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina os estados como "true" ou "false"',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode:
                '{disabled: false, selected: false, checked: false, busy: false, expanded: false}',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Valor da Acessibilidade - accessibilityValue
  p85: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p85',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Valor da Acessibilidade - accessibilityValue',
          en: 'accessibilityValue',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p85({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Representa o valor atual de um componente.',
          en: 'Represents the current value of a component.',
        },

        capsCodeInputs: {
          'p85-0': {
            capsIptCodeID: 'p85-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Valor da Acessibilidade - accessibilityValue',
                en: 'accessibilityValue',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina os valores da acessibilidade',
                en: 'Set accessibility values',
              },
              capsIptCapsDfCode:
                '{min: 1, max: 1, now: 1, capsules: "escreva"}',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // VoiceOver da Acessibilidade - accessibilityViewIsModal
  p86: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p86',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'VoiceOver da Acessibilidade - accessibilityViewIsModal',
          en: 'accessibilityViewIsModal',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p86({ pass: {
            A: [!#!1!#!]
          }})`,
        capsDescription: {
          'pt-br':
            'Um valor que indica se o VoiceOver deve ignorar os elementos nas visualizações que são irmãos do receptor.',
          en: 'A value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver.',
        },

        capsCodeInputs: {
          'p86-0': {
            capsIptCodeID: 'p86-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'VoiceOver da Acessibilidade - accessibilityViewIsModal',
                en: 'accessibilityViewIsModal',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina "true" para habilitar',
                en: 'Set "true" to enable',
              },
              capsIptCapsDfCode: 'false',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Acessível - accessible
  p87: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p87',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Acessível - accessible',
          en: 'accessible',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p87({ pass: {
          A: [!#!1!#!]
          }})`,
        capsDescription: {
          'pt-br':
            'Indica que o modo de exibição é um elemento de acessibilidade',
          en: 'Indicates that the view is an accessibility element. ',
        },

        capsCodeInputs: {
          'p87-0': {
            capsIptCodeID: 'p87-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Acessível - accessible',
                en: 'accessible',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar',
                en: 'Set "true" (enable) or "false" (disable)',
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

  // Elemento Ocupado - aria-busy
  p88: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p88',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Elemento Ocupado - aria-busy',
          en: 'aria-busy',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p88({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Indica que um elemento está sendo modificado e que as tecnologias assistivas podem querer esperar até que as alterações sejam concluídas antes de informar o usuário sobre a atualização.',
          en: 'Indicates an element is being modified and that assistive technologies may want to wait until the changes are complete before informing the user about the update.',
        },

        capsCodeInputs: {
          'p88-0': {
            capsIptCodeID: 'p88-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Elemento Ocupado - aria-busy',
                en: 'aria-busy',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: 'false',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Elemento Verificável - aria-checked
  p89: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p89',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Elemento Verificável - aria-checked',
          en: 'aria-checked',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p89({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Indica o estado de um elemento verificável.',
          en: 'Indicates the state of a checkable element.',
        },

        capsCodeInputs: {
          'p89-0': {
            capsIptCodeID: 'p89-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Elemento Verificável - aria-checked',
                en: 'aria-checked',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar ou escreva para caixas de seleção mistas',
                en: 'Set "true" or "false" or write to mixed checkboxes',
              },
              capsIptCapsDfCode: 'false',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Elemento Desabilitado - aria-disabled
  p90: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p90',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Elemento Desabilitado - aria-disabled',
          en: 'aria-disabled',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p90({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Indica que o elemento é perceptível, mas desabilitado, portanto, não é editável ou operável de outra forma.',
          en: 'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.',
        },

        capsCodeInputs: {
          'p90-0': {
            capsIptCodeID: 'p90-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Elemento Desabilitado - aria-disabled',
                en: 'aria-disabled',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: 'false',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Elemento Expansível - aria-expanded
  p91: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p91',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Elemento Expansível - aria-expanded',
          en: 'aria-expanded',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p91({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Indica se um elemento expansível está atualmente expandido ou recolhido.',
          en: 'Indicates whether an expandable element is currently expanded or collapsed.',
        },

        capsCodeInputs: {
          'p91-0': {
            capsIptCodeID: 'p91-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Elemento Expansível - aria-expanded',
                en: 'aria-expanded',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: 'false',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Elemento Oculto - aria-hidden
  p92: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p92',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Elemento Oculto - aria-hidden',
          en: 'aria-hidden',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p92({ pass: {
            A: [!#!1!#!]
          }})`,
        capsDescription: {
          'pt-br':
            'Indica se os elementos de acessibilidade contidos nesse elemento de acessibilidade estão ocultos.',
          en: 'Indicates whether the accessibility elements contained within this accessibility element are hidden.',
        },

        capsCodeInputs: {
          'p92-0': {
            capsIptCodeID: 'p92-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Elemento Oculto - aria-hidden',
                en: 'aria-hidden',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: 'false',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Rótulo do Elemento - aria-label
  p93: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p93',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Rótulo do Elemento - aria-label',
          en: 'aria-label',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p93({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Define um valor de cadeia de caracteres que rotula um elemento interativo.',
          en: 'Defines a string value that labels an interactive element.',
        },

        capsCodeInputs: {
          'p93-0': {
            capsIptCodeID: 'p93-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Rótulo do Elemento - aria-label',
                en: 'aria-label',
              },
              capsIptCapsDescription: {
                'pt-br': 'Escreva para rotular o elemento',
                en: 'Write to label the element',
              },
              capsIptCapsDfCode: 'Escreva um Rótulo',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Elemento Rotulado Por - aria-labelledby
  p94: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p94',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Elemento Rotulado Por - aria-labelledby',
          en: 'aria-labelledby',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p94({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Identifica o elemento que rotula o elemento ao qual ele é aplicado.',
          en: 'Identifies the element that labels the element it is applied to. ',
        },

        capsCodeInputs: {
          'p94-0': {
            capsIptCodeID: 'p94-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Elemento Rotulado Por - aria-labelledby',
                en: 'aria-labelledby',
              },
              capsIptCapsDescription: {
                'pt-br': 'Escreva o nativeID dp elemento relacionado',
                en: 'Write the nativeID of the related element',
              },
              capsIptCapsDfCode: 'newID',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Atualização de Elemento - aria-live
  p95: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p95',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Atualização de Elemento - aria-live',
          en: 'aria-live',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p95({ pass: {
          A: [!#!1!#!]
          }})`,
        capsDescription: {
          'pt-br':
            'Indica que um elemento será atualizado e descreve os tipos de atualizações que os agentes do usuário, as tecnologias assistivas e o usuário podem esperar da região ativa.',
          en: 'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
        },

        capsCodeInputs: {
          'p95-0': {
            capsIptCodeID: 'p95-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Atualização de Elemento - aria-live',
                en: 'aria-live',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina o comportamento do serviço',
                en: 'Define the service s behavior',
              },
              capsIptCapsDfCode: 'off',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Elemento Modal - aria-modal
  p96: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p96',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Elemento Modal - aria-modal',
          en: 'aria-modal',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',

        capsCodeText: `

        (...args:any) => props.p96({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Valor booleano que indica se o VoiceOver deve ignorar os elementos dentro de vistas que são irmãos do receptor.',
          en: 'Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver.',
        },

        capsCodeInputs: {
          'p96-0': {
            capsIptCodeID: 'p96-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Elemento Modal - aria-modal',
                en: 'aria-modal',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: 'false',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Elemento Selecionado - aria-selected
  p97: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p97',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Elemento Selecionado - aria-selected',
          en: 'aria-selected',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p97({ pass: {
            A: [!#!1!#!]
          }})`,
        capsDescription: {
          'pt-br':
            'Indica se um elemento selecionável está selecionado no momento ou não.',
          en: 'Indicates whether a selectable element is currently selected or not.',
        },

        capsCodeInputs: {
          'p97-0': {
            capsIptCodeID: 'p97-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Elemento Selecionado - aria-selected',
                en: 'aria-selected',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: 'false',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Valor Máximo para o Elemento - aria-valuemax
  p98: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p98',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Valor Máximo para o Elemento - aria-valuemax',
          en: 'aria-valuemax',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p98({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Representa o valor máximo para componentes baseados em intervalo, como controles deslizantes e barras de progresso.',
          en: 'Represents the maximum value for range-based components, such as sliders and progress bars.',
        },

        capsCodeInputs: {
          'p98-0': {
            capsIptCodeID: 'p98-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Valor Máximo para o Elemento - aria-valuemax',
                en: 'aria-valuemax',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina o número para o valor máximo.',
                en: 'Set the number to the maximum value.',
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

  // Valor Mínimo para o Elemento - aria-valuemin
  p99: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p99',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Valor Mínimo para o Elemento - aria-valuemin',
          en: 'aria-valuemin',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',

        capsCodeText: `

        (...args:any) => props.p99({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Representa o valor mínimo para componentes baseados em intervalo, como controles deslizantes e barras de progresso.',
          en: 'Represents the minimum value for range-based components, such as sliders and progress bars.',
        },

        capsCodeInputs: {
          'p99-0': {
            capsIptCodeID: 'p99-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Valor Mínimo para o Elemento - aria-valuemin',
                en: 'aria-valuemin',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina o número para o valor mínimo.',
                en: 'Set the number to the minimum value.',
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

  // Valor Atual para o Elemento - aria-valuenow
  p100: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p100',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Valor Atual para o Elemento - aria-valuenow',
          en: 'aria-valuenow',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p100({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Representa o valor atual para componentes baseados em intervalo, como controles deslizantes e barras de progresso.',
          en: 'Represents the current value for range-based components, such as sliders and progress bars.',
        },

        capsCodeInputs: {
          'p100-0': {
            capsIptCodeID: 'p100-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Valor Atual para o Elemento - aria-valuenow',
                en: 'aria-valuenow',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina o número para o valor atual.',
                en: 'Set the number to the current value',
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

  // Descrição do Componente - aria-valuetext
  p101: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p101',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Descrição do Componente - aria-valuetext',
          en: 'aria-valuetext',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p101({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Representa a descrição textual do componente.',
          en: 'Represents the textual description of the component.',
        },

        capsCodeInputs: {
          'p101-0': {
            capsIptCodeID: 'p101-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Descrição do Componente - aria-valuetext',
                en: 'aria-valuetext',
              },
              capsIptCapsDescription: {
                'pt-br': 'Digite uma descrição',
                en: 'Enter a description',
              },
              capsIptCapsDfCode: 'Digite uma descrição',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Dobrável - collapsable
  p102: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p102',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Dobrável - collapsable',
          en: 'collapsable',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p102({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Os modos de exibição que são usados apenas para criar o layout de seus filhos ou que de outra forma não desenham nada podem ser automaticamente removidos da hierarquia nativa como uma otimização.',
          en: 'Views that are only used to layout their children or otherwise don t draw anything may be automatically removed from the native hierarchy as an optimization.',
        },

        capsCodeInputs: {
          'p102-0': {
            capsIptCodeID: 'p102-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Dobrável - collapsable',
                en: 'collapsable',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: 'false',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Focalizável - focusable
  p103: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p103',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Focalizável - focusable',
          en: 'focusable',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p103({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Se deve ser focalizável com um dispositivo de entrada sem toque, por exemplo, receber foco com um teclado de hardware.',
          en: 'Whether this View should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard.',
        },

        capsCodeInputs: {
          'p103-0': {
            capsIptCodeID: 'p103-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Focalizável - focusable',
                en: 'focusable',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: 'false',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // HitSlop - hitSlop
  p104: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p104',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'HitSlop',
          en: 'HitSlop',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p104({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Define até que ponto um evento de toque pode começar longe da exibição.',
          en: 'This defines how far a touch event can start away from the view.',
        },

        capsCodeInputs: {
          'p104-0': {
            capsIptCodeID: 'p104-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'HitSlop - hitSlop',
                en: 'hitSlop',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina os valores para a área de toque.',
                en: 'Set the values ​​for the touch area.',
              },
              capsIptCapsDfCode: '{top: 10, bottom: 10, left: 0, right: 0}',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Id - id
  p105: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p105',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Id',
          en: 'Id',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p105({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Usado para localizar esse modo de exibição de classes nativas.',
          en: 'Used to locate this view from native classes.',
        },

        capsCodeInputs: {
          'p105-0': {
            capsIptCodeID: 'p105-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'id - id',
                en: 'id',
              },
              capsIptCapsDescription: {
                'pt-br': 'Escreva um valor para o Id',
                en: 'Write a value for the Id',
              },
              capsIptCapsDfCode: 'escreva o Id',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Importante para a Acessibilidade - importantForAccessibility
  p106: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p106',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br':
            'Importante para a Acessibilidade - importantForAccessibility',
          en: 'importantForAccessibility',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p106({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Controla como o modo de exibição é importante para a acessibilidade, que é se ele dispara eventos de acessibilidade e se ele é relatado aos serviços de acessibilidade que consultam a tela.',
          en: 'Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen.',
        },

        capsCodeInputs: {
          'p106-0': {
            capsIptCodeID: 'p106-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Importante para a Acessibilidade - importantForAccessibility',
                en: 'importantForAccessibility',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina o valor para determinar a importância da exibição',
                en: 'Set the value to determine the importance of the display',
              },
              capsIptCapsDfCode: 'auto',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Id Nativo - nativeID
  p107: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p107',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Id Nativo - nativeID',
          en: 'nativeID',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p107({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Usado para localizar esse modo de exibição de classes nativas.',
          en: 'Used to locate this view from native classes.',
        },

        capsCodeInputs: {
          'p107-0': {
            capsIptCodeID: 'p107-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Id Nativo - nativeID',
                en: 'nativeID',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina o valor para o Id Nativo',
                en: 'Set the value for the Native Id',
              },
              capsIptCapsDfCode: 'Escreva o Id',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Fora de Tela Composição Alpha - needsOffscreenAlphaCompositing
  p108: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p108',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br':
            'Fora de Tela Composição Alpha - needsOffscreenAlphaCompositing',
          en: 'needsOffscreenAlphaCompositing',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p108({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Se isso precisa ser renderizado fora da tela e composto com um alfa para preservar cores 100% corretas e comportamento de mesclagem.',
          en: 'Whether this View needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior',
        },

        capsCodeInputs: {
          'p108-0': {
            capsIptCodeID: 'p108-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Fora de Tela Composição Alpha - needsOffscreenAlphaCompositing',
                en: 'needsOffscreenAlphaCompositing',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: 'false',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Foco no Próximo Abaixo - nextFocusDown
  p109: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p109',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Foco no Próximo Abaixo - nextFocusDown',
          en: 'nextFocusDown',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p109({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Designa o próximo modo de exibição para receber foco quando o usuário navega para baixo.',
          en: 'Designates the next view to receive focus when the user navigates down. ',
        },

        capsCodeInputs: {
          'p109-0': {
            capsIptCodeID: 'p109-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Foco no Próximo Abaixo - nextFocusDown',
                en: 'nextFocusDown',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina valor numérico inteiro.',
                en: 'Set integer numeric value.',
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

  // Foco no Próximo à Frente - nextFocusForward
  p110: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p110',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Foco no Próximo à Frente - nextFocusForward',
          en: 'nextFocusForward',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p110({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Designa o próximo modo de exibição para receber foco quando o usuário navega para frente.',
          en: 'Designates the next view to receive focus when the user navigates forward. ',
        },

        capsCodeInputs: {
          'p110-0': {
            capsIptCodeID: 'p110-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Foco no Próximo à Frente - nextFocusForward',
                en: 'nextFocusForward',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina valor numérico inteiro.',
                en: 'Set integer numeric value.',
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

  // Foco no Próximo à Esquerda - nextFocusLeft
  p111: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p111',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Foco no Próximo à Esquerda - nextFocusLeft',
          en: 'nextFocusLeft',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p111({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Designa o próximo modo de exibição para receber foco quando o usuário navega para a Esquerda.',
          en: 'Designates the next view to receive focus when the user navigates left.',
        },

        capsCodeInputs: {
          'p111-0': {
            capsIptCodeID: 'p111-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Foco no Próximo à Esquerda - nextFocusLeft',
                en: 'nextFocusLeft',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina valor numérico inteiro.',
                en: 'Set integer numeric value.',
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

  // Foco no Próximo à Direita - nextFocusRight
  p112: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p112',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Foco no Próximo à Direita - nextFocusRight',
          en: 'nextFocusRight',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p112({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Designa o próximo modo de exibição para receber foco quando o usuário navega para a Direita.',
          en: 'Designates the next view to receive focus when the user navigates right. ',
        },

        capsCodeInputs: {
          'p112-0': {
            capsIptCodeID: 'p112-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Foco no Próximo à Direita - nextFocusRight',
                en: 'nextFocusRight',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina valor numérico inteiro.',
                en: 'Set integer numeric value.',
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

  // Foco no Próximo para Cima - nextFocusUp
  p113: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p113',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Foco no Próximo para Cima - nextFocusUp',
          en: 'nextFocusUp',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p113({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Designa o próximo modo de exibição para receber foco quando o usuário navega para cima.',
          en: 'Designates the next view to receive focus when the user navigates up.',
        },

        capsCodeInputs: {
          'p113-0': {
            capsIptCodeID: 'p113-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Foco no Próximo para Cima - nextFocusUp',
                en: 'nextFocusUp',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina valor numérico inteiro.',
                en: 'Set integer numeric value.',
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

  // Ação na Acessibilidade - onAccessibilityAction
  p114: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p114',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Ação na Acessibilidade - onAccessibilityAction',
          en: 'onAccessibilityAction',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p114({ pass: {
            A: [!#!1!#!]
          }})`,
        capsDescription: {
          'pt-br':
            'Invocado quando o usuário executa as ações de acessibilidade.',
          en: 'Invoked when the user performs the accessibility actions.',
        },

        capsCodeInputs: {
          'p114-0': {
            capsIptCodeID: 'p114-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Ação na Acessibilidade - onAccessibilityAction',
                en: 'onAccessibilityAction',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina uma função para ser executada.',
                en: 'Define a function to be executed.',
              },
              capsIptCapsDfCode: 'fnAction',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Escape na Acessibilidade - onAccessibilityEscape
  p115: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p115',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Escape na Acessibilidade - onAccessibilityEscape',
          en: 'onAccessibilityEscape',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p115({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'O sistema invocará essa função quando o usuário executar o gesto de escape.',
          en: 'The system will invoke this function when the user performs the escape gesture.',
        },

        capsCodeInputs: {
          'p115-0': {
            capsIptCodeID: 'p115-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Escape na Acessibilidade - onAccessibilityEscape',
                en: 'onAccessibilityEscape',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina uma função para ser executada.',
                en: 'Define a function to be executed.',
              },
              capsIptCapsDfCode: 'fnEscape',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Toque de Acessibilidade - onAccessibilityTap
  p116: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p116',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Toque de Acessibilidade - onAccessibilityTap',
          en: 'onAccessibilityTap',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p116({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'O sistema invocará essa função quando o usuário executar o gesto de toque de acessibilidade.',
          en: 'The system will try to invoke this function when the user performs accessibility tap gesture.',
        },

        capsCodeInputs: {
          'p116-0': {
            capsIptCodeID: 'p116-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Toque de Acessibilidade - onAccessibilityTap',
                en: 'onAccessibilityTap',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina uma função para ser executada.',
                en: 'Define a function to be executed.',
              },
              capsIptCapsDfCode: 'fnTap',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // No Layout - onLayout
  p117: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p117',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'No Layout - onLayout',
          en: 'onLayout',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p117({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Invocado na montagem e nas alterações de layout.',
          en: 'Invoked on mount and on layout changes.',
        },

        capsCodeInputs: {
          'p117-0': {
            capsIptCodeID: 'p117-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'No Layout - onLayout',
                en: 'onLayout',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Esse evento é acionado imediatamente após o cálculo do layout.',
                en: 'This event is triggered immediately after the layout is calculated.',
              },
              capsIptCapsDfCode: '({nativeEvent: LayoutEvent}) => void',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Toque Mágico - onMagicTap
  p118: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p118',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Toque Mágico - onMagicTap',
          en: 'onMagicTap',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p118({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'O sistema invocará essa função quando o usuário executar o gesto de toque mágico.',
          en: 'The system will invoke this function when the user performs the magic tap gesture.',
        },

        capsCodeInputs: {
          'p118-0': {
            capsIptCodeID: 'p118-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Toque Mágico - onMagicTap',
                en: 'onMagicTap',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina uma função para ser executada.',
                en: 'Define a function to be executed.',
              },
              capsIptCapsDfCode: 'fnMagicTap',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Preparar Resposta ao Mover - onMoveShouldSetResponder
  p119: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p119',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Preparar Resposta ao Mover - onMoveShouldSetResponder',
          en: 'onMoveShouldSetResponder',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p119({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Essa visão quer "reivindicar" a capacidade de resposta ao toque.',
          en: 'This view want to "claim" touch responsiveness.',
        },

        capsCodeInputs: {
          'p119-0': {
            capsIptCodeID: 'p119-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Preparar Resposta ao Mover - onMoveShouldSetResponder',
                en: 'onMoveShouldSetResponder',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: '({nativeEvent: PressEvent}) => false',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Preparar Caputra de Resposta ao Mover - onMoveShouldSetResponderCapture
  p120: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p120',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br':
            'Preparar Caputra de Resposta ao Mover - onMoveShouldSetResponderCapture',
          en: 'onMoveShouldSetResponderCapture',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p120({ pass: {
            A: [!#!1!#!]
          }})`,
        capsDescription: {
          'pt-br':
            'Se um pai quiser impedir que uma criança se torne respondente em um movimento, ele deve ter esse manipulador que retorna true.',
          en: 'If a parent wants to prevent a child from becoming responder on a move, it should have this handler which returns true.',
        },

        capsCodeInputs: {
          'p120-0': {
            capsIptCodeID: 'p120-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Preparar Caputra de Resposta ao Mover - onMoveShouldSetResponderCapture',
                en: 'onMoveShouldSetResponderCapture',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: '({nativeEvent: PressEvent}) => false',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Garantir Resposta - onResponderGrant
  p121: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p121',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Garantir Resposta - onResponderGrant',
          en: 'onResponderGrant',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p121({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'O Modo de Exibição agora está respondendo a eventos de toque.',
          en: 'The View is now responding for touch events.',
        },

        capsCodeInputs: {
          'p121-0': {
            capsIptCodeID: 'p121-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Garantir Resposta - onResponderGrant',
                en: 'onResponderGrant',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: '({nativeEvent: PressEvent}) => void',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Responder ao Mover - onResponderMove
  p122: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p122',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Responder ao Mover - onResponderMove',
          en: 'onResponderMove',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p122({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'O usuário está movendo o dedo.',
          en: 'The user is moving their finger.',
        },

        capsCodeInputs: {
          'p122-0': {
            capsIptCodeID: 'p122-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Responder ao Mover - onResponderMove',
                en: 'onResponderMove',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: '({nativeEvent: PressEvent}) => void',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Rejeitar Resposta - onResponderReject
  p123: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p123',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Rejeitar Resposta - onResponderReject',
          en: 'onResponderReject',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p123({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Outro respondente já está ativo e não o liberará para aquele que pede para ser o respondente.',
          en: 'Another responder is already active and will not release it to that View asking to be the responder.',
        },

        capsCodeInputs: {
          'p123-0': {
            capsIptCodeID: 'p123-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Rejeitar Resposta - onResponderReject',
                en: 'onResponderReject',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: '({nativeEvent: PressEvent}) => void',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Liberar ao Responder - onResponderRelease
  p124: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p124',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Liberar ao Responder - onResponderRelease',
          en: 'onResponderRelease',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p124({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Disparado no final do toque.',
          en: 'Fired at the end of the touch.',
        },

        capsCodeInputs: {
          'p124-0': {
            capsIptCodeID: 'p124-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Liberar ao Responder - onResponderRelease',
                en: 'onResponderRelease',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: '({nativeEvent: PressEvent}) => void',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Terminar ao Responder - onResponderTerminate
  p125: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p125',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Terminar ao Responder - onResponderTerminate',
          en: 'onResponderTerminate',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p125({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'O respondente foi retirado da Caixa.',
          en: 'The responder has been taken from the View.',
        },

        capsCodeInputs: {
          'p125-0': {
            capsIptCodeID: 'p125-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Terminar ao Responder - onResponderTerminate',
                en: 'onResponderTerminate',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: '({nativeEvent: PressEvent}) => void',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Requisição para Terminar ao Responder - onResponderTerminationRequest
  p126: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p126',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br':
            'Requisição para Terminar ao Responder - onResponderTerminationRequest',
          en: 'onResponderTerminationRequest',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',

        capsCodeText: `

          (...args:any) => props.p126({ pass: {
            A: [!#!1!#!]
          }})`,
        capsDescription: {
          'pt-br':
            'Alguns outros querem se tornar respondentes e estão pedindo que isso libere seu respondente.',
          en: 'Some other View wants to become responder and is asking this View to release its responder.',
        },

        capsCodeInputs: {
          'p126-0': {
            capsIptCodeID: 'p126-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Requisição para Terminar ao Responder - onResponderTerminationRequest',
                en: 'onResponderTerminationRequest',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: '({nativeEvent: PressEvent}) => void',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Responder no Início do Toque - onStartShouldSetResponder
  p127: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p127',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Responder no Início do Toque - onStartShouldSetResponder',
          en: 'onStartShouldSetResponder',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p127({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Essa Caixa quer se tornar uma resposta no início de um toque?',
          en: 'Does this view want to become responder on the start of a touch?',
        },

        capsCodeInputs: {
          'p127-0': {
            capsIptCodeID: 'p127-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Responder no Início do Toque - onStartShouldSetResponder',
                en: 'onStartShouldSetResponder',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: '({nativeEvent: PressEvent}) => void',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Capturar Responder no Início do Toque - onStartShouldSetResponderCapture
  p128: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p128',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br':
            'Capturar Responder no Início do Toque - onStartShouldSetResponderCapture',
          en: 'onStartShouldSetResponderCapture',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p128({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Se um pai quiser impedir que uma criança se torne respondente em um início de toque.',
          en: 'So if a parent View wants to prevent the child from becoming responder on a touch start',
        },

        capsCodeInputs: {
          'p128-0': {
            capsIptCodeID: 'p128-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Capturar Responder no Início do Toque - onStartShouldSetResponderCapture',
                en: 'onStartShouldSetResponderCapture',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: '({nativeEvent: PressEvent}) => void',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Eventos de Toque - pointerEvents
  p129: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p129',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Eventos de Toque - pointerEvents',
          en: 'pointerEvents',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p129({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Controla se a Caixa pode ser o alvo de eventos de toque.',
          en: 'Controls whether the View can be the target of touch events.',
        },

        capsCodeInputs: {
          'p129-0': {
            capsIptCodeID: 'p129-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Eventos de Toque - pointerEvents',
                en: 'pointerEvents',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina o comportamento da View',
                en: 'Define View behavior',
              },
              capsIptCapsDfCode: 'auto',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Renover Subvisualizações Cortadas - removeClippedSubviews
  p130: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p130',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Renover Subvisualizações Cortadas - removeClippedSubviews',
          en: 'removeClippedSubviews',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p130({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Essa é uma propriedade de desempenho reservada exposta por RCTView e é útil para rolar o conteúdo quando há muitas subvisualizações, a maioria das quais está fora da tela.',
          en: 'This is a reserved performance property exposed by RCTView and is useful for scrolling content when there are many subviews, most of which are offscreen.',
        },

        capsCodeInputs: {
          'p130-0': {
            capsIptCodeID: 'p130-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Renover Subvisualizações Cortadas - removeClippedSubviews',
                en: 'removeClippedSubviews',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: 'false',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Renderizar na Textura de Hardware - renderToHardwareTextureAndroid
  p131: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p131',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br':
            'Renderizar na Textura de Hardware - renderToHardwareTextureAndroid',
          en: 'renderToHardwareTextureAndroid',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p131({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Se isso deve renderizar a si mesmo (e a todos os seus filhos) em uma única textura de hardware na GPU.',
          en: 'Whether this View should render itself (and all of its children) into a single hardware texture on the GPU.',
        },

        capsCodeInputs: {
          'p131-0': {
            capsIptCodeID: 'p131-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Renderizar na Textura de Hardware - renderToHardwareTextureAndroid',
                en: 'renderToHardwareTextureAndroid',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: 'false',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Papel - role
  p132: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p132',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Papel - role',
          en: 'role',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p132({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Comunica a finalidade de um componente ao usuário de uma tecnologia assistiva.',
          en: 'Communicates the purpose of a component to the user of an assistive technology.',
        },

        capsCodeInputs: {
          'p132-0': {
            capsIptCodeID: 'p132-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Papel - role',
                en: 'role',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina a finalidade do componente.',
                en: 'Define the purpose of the component.',
              },
              capsIptCapsDfCode: 'Copiar Texto',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Deve Rasterizar - shouldRasterizeIOS
  p133: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p133',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Papel - shouldRasterizeIOS',
          en: 'shouldRasterizeIOS',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p133({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Se isso deve ser renderizado como um bitmap antes da composição.',
          en: 'Should be rendered as a bitmap before compositing.',
        },

        capsCodeInputs: {
          'p133-0': {
            capsIptCodeID: 'p133-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Papel - shouldRasterizeIOS',
                en: 'shouldRasterizeIOS',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: 'false',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Índex de Tabulação - tabIndex
  p134: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p134',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Índex de Tabulação - tabIndex',
          en: 'tabIndex',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p134({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Se isso deve ser focalizável com um dispositivo de entrada sem toque, por exemplo receber foco com um teclado de hardware.',
          en: 'Whether this View should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard.',
        },

        capsCodeInputs: {
          'p134-0': {
            capsIptCodeID: 'p134-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Índex de Tabulação - tabIndex',
                en: 'tabIndex',
              },
              capsIptCapsDescription: {
                'pt-br':
                  '0 - A caixa é focalizável -1 - A caixa não é focalizável',
                en: '0 - The box is focusable -1 - The box is not focusable',
              },
              capsIptCapsDfCode: '0',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // ID para Testes - testID
  p135: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p135',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'ID para Testes - testID',
          en: 'testID',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.p135({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Usado para localizar esse modo de exibição em testes de ponta a ponta.',
          en: 'Used to locate this view in end-to-end tests.',
        },

        capsCodeInputs: {
          'p135-0': {
            capsIptCodeID: 'p135-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'ID para Testes - testID',
                en: 'testID',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina uma ID',
                en: 'Set an ID',
              },
              capsIptCapsDfCode: 'A001',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },
};
