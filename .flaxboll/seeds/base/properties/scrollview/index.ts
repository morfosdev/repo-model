import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const scrollViewProps: TcapsCodeData = {
  // Quicar na Horizontal - alwaysBounceHorizontal
  alwaysBounceHorizontal: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'alwaysBounceHorizontal',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Quicar na Horizontal - alwaysBounceHorizontal',
          en: 'alwaysBounceHorizontal',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.alwaysBounceHorizontal({ pass: {
          alwaysBounceHorizontal: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'O modo de exibição de rolagem é devolvido horizontalmente quando chega ao final, mesmo que o conteúdo seja menor do que o próprio modo de exibição de rolagem',
          en: 'When true, the scroll view bounces horizontally when it reaches the end even if the content is smaller than the scroll view itself.',
        },

        capsCodeInputs: {
          'alwaysBounceHorizontal-0': {
            capsIptCodeID: 'alwaysBounceHorizontal-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Quicar na Horizontal - alwaysBounceHorizontal',
                en: 'alwaysBounceHorizontal',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escolha "true" para ativar ou "false" para desativar.',
                en: 'When true, the scroll view bounces horizontally when it reaches the end even if the content is smaller than the scroll view itself.',
              },
              capsIptCapsTypesToAdd: ['string process'],
              capsIptCapsDfCode: 'false',
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Quicar na Vertical - alwaysBounceVertical
  alwaysBounceVertical: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'alwaysBounceVertical',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Quicar na Vertical - alwaysBounceVertical',
          en: 'alwaysBounceVertical',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.alwaysBounceVertical({ pass: {
          alwaysBounceVertical: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'O modo de exibição de rolagem é devolvido Verticalmente quando chega ao final, mesmo que o conteúdo seja menor do que o próprio modo de exibição de rolagem',
          en: 'When true, the scroll view bounces vertically when it reaches the end even if the content is smaller than the scroll view itself.',
        },

        capsCodeInputs: {
          'alwaysBounceVertical-0': {
            capsIptCodeID: 'alwaysBounceVertical-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Quicar na Vertical - alwaysBounceVertical',
                en: 'alwaysBounceVertical',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escolha "true" para ativar ou "false" para desativar.',
                en: 'When true, the scroll view bounces vertically when it reaches the end even if the content is smaller than the scroll view itself.',
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

  // Quicar - bounces
  bounces: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'bounces',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Quicar - bounces',
          en: 'bounces',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.bounces({ pass: {
          bounces: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'O modo de exibição de rolagem é devolvido quando chega ao final, mesmo que o conteúdo seja menor do que o próprio modo de exibição de rolagem',
          en: 'When true, the scroll view bounces when it reaches the end of the content if the content is larger than the scroll view along the axis of the scroll direction. When false, it disables all bouncing even if the alwaysBounce* props are true.',
        },

        capsCodeInputs: {
          'bounces-0': {
            capsIptCodeID: 'bounces-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Quicar - Bounces',
                en: 'Bounces',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escolha "true" para ativar ou "false" para desativar.',
                en: 'When true, the scroll view bounces when it reaches the end of the content if the content is larger than the scroll view along the axis of the scroll direction. When false, it disables all bouncing even if the alwaysBounce* props are true.',
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

  // Animação de Zoom - bouncesZoom
  bouncesZoom: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'bouncesZoom',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Animação de Zoom - bouncesZoom',
          en: 'bouncesZoom',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.bouncesZoom({ pass: {
          bouncesZoom: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Quando verdadeiro os gestos podem direcionar o zoom para além de min/max e o zoom será animado para o valor min/max no final do gesto, caso contrário, o zoom não excederá os limites',
          en: 'When true, gestures can drive zoom past min/max and the zoom will animate to the min/max value at gesture end, otherwise the zoom will not exceed the limits.',
        },

        capsCodeInputs: {
          'bouncesZoom-0': {
            capsIptCodeID: 'bouncesZoom-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Animação de Zoom - BouncesZoom',
                en: 'BouncesZoom',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escolha "true" para ativar ou "false" para desativar.',
                en: 'When true, gestures can drive zoom past min/max and the zoom will animate to the min/max value at gesture end, otherwise the zoom will not exceed the limits.',
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

  // Ajuste automático da inserção de conteúdo - automaticallyAdjustContentInsets
  automaticallyAdjustContentInsets: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'automaticallyAdjustContentInsets',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br':
            'Ajuste automático da inserção de conteúdo - automaticallyAdjustContentInsets ',
          en: 'automaticallyAdjustContentInsets ',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.automaticallyAdjustContentInsets({ pass: {
          automaticallyAdjustContentInsets: [!#!1!#!]
          }})`,
        capsDescription: {
          'pt-br':
            'O modo de exibição de rolagem é devolvido quando chega ao final, mesmo que o conteúdo seja menor do que o próprio modo de exibição de rolagem',
          en: 'Controls whether the ScrollView should automatically adjust its contentInset and scrollViewInsets when the Keyboard changes its size.',
        },

        capsCodeInputs: {
          'automaticallyAdjustContentInsets-0': {
            capsIptCodeID: 'automaticallyAdjustContentInsets-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Ajuste automático da inserção de conteúdo - automaticallyAdjustContentInsets ',
                en: 'automaticallyAdjustContentInsets ',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escolha "true" para ativar ou "false" para desativar.',
                en: 'Controls whether the ScrollView should automatically adjust its contentInset and scrollViewInsets when the Keyboard changes its size.',
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

  // Ajuste automático ao tamanho do teclado - automaticallyAdjustKeyboardInsets
  automaticallyAdjustKeyboardInsets: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'automaticallyAdjustKeyboardInsets',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br':
            'Ajuste automático ao tamanho do teclado - automaticallyAdjustKeyboardInsets',
          en: 'automaticallyAdjustKeyboardInsets',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.automaticallyAdjustKeyboardInsets({ pass: {
          automaticallyAdjustKeyboardInsets: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Controla se o ScrollView deve ajustar automaticamente o seu e quando o teclado altera o seu tamanho',
          en: 'Controls whether the ScrollView should automatically adjust its contentInset and scrollViewInsets when the Keyboard changes its size.',
        },

        capsCodeInputs: {
          'automaticallyAdjustKeyboardInsets-0': {
            capsIptCodeID: 'automaticallyAdjustKeyboardInsets-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Ajuste automático ao tamanho do teclado - automaticallyAdjustKeyboardInsets',
                en: 'automaticallyAdjustKeyboardInsets',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escolha "true" para ativar ou "false" para desativar.',
                en: 'Controls whether the ScrollView should automatically adjust its contentInset and scrollViewInsets when the Keyboard changes its size.',
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

  // Ajustar automático das inserções do indicador de rolagem - automaticallyAdjustsScrollIndicatorInsets
  automaticallyAdjustsScrollIndicatorInsets: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'automaticallyAdjustsScrollIndicatorInsets',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br':
            'Ajustar automático das inserções do indicador de rolagem - automaticallyAdjustsScrollIndicatorInsets',
          en: 'automaticallyAdjustsScrollIndicatorInsets',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.automaticallyAdjustsScrollIndicatorInsets({ pass: {
          automaticallyAdjustsScrollIndicatorInsets: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Controla se o iOS deve ajustar automaticamente as inserções do indicador de rolagem.',
          en: 'Controls whether iOS should automatically adjust the content inset for scroll views that are placed behind a navigation bar or tab bar/toolbar.',
        },

        capsCodeInputs: {
          'automaticallyAdjustsScrollIndicatorInsets-0': {
            capsIptCodeID: 'automaticallyAdjustsScrollIndicatorInsets-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Ajustar automático das inserções do indicador de rolagem - automaticallyAdjustsScrollIndicatorInsets',
                en: 'automaticallyAdjustsScrollIndicatorInsets',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escolha "true" para ativar ou "false" para desativar.',
                en: 'Controls whether iOS should automatically adjust the scroll indicator insets.',
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

  // Ignorar movimento no Touch - canCancelContentTouches
  canCancelContentTouches: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'canCancelContentTouches',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Ignorar movimento no Touch - canCancelContentTouches',
          en: 'canCancelContentTouches',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.canCancelContentTouches({ pass: {
          canCancelContentTouches: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Uma vez iniciado o rastreamento, não tentará arrastar se o toque se mover',
          en: 'A Boolean value that controls whether touches in the content view always lead to tracking.',
        },

        capsCodeInputs: {
          'canCancelContentTouches-0': {
            capsIptCodeID: 'canCancelContentTouches-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Ignorar movimento no Touch - canCancelContentTouches',
                en: 'canCancelContentTouches',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escolha "true" para ativar ou "false" para desativar.',
                en: 'A Boolean value that controls whether touches in the content view always lead to tracking.',
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

  // Centralizar Conteúdo - centerContent
  centerContent: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'centerContent',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Centralizar Conteúdo - centerContent',
          en: 'centerContent',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.centerContent({ pass: {
          centerContent: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Centraliza automaticamente o conteúdo quando o conteúdo é menor do que os limites do modo de exibição de rolagem',
          en: 'When true, the scroll view automatically centers the content when the content is smaller than the scroll view bounds; when the content is larger than the scroll view, this property has no effect.',
        },

        capsCodeInputs: {
          'centerContent-0': {
            capsIptCodeID: 'centerContent-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Centralizar Conteúdo - centerContent',
                en: 'centerContent',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escolha "true" para ativar ou "false" para desativar.',
                en: 'When true, the scroll view automatically centers the content when the content is smaller than the scroll view bounds; when the content is larger than the scroll view, this property has no effect.',
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

  // Estilo de Conteúdo do Container - contentContainerStyle
  contentContainerStyle: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'contentContainerStyle',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Estilo de Conteúdo do Container - contentContainerStyle',
          en: 'contentContainerStyle',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.contentContainerStyle({ pass: {
          contentContainerStyle: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Esses estilos serão aplicados ao contêiner de conteúdo do modo de exibição de rolagem que encapsula todos os modos de exibição filho',
          en: 'These styles will be applied to the scroll view content container which wraps all of the child views. ',
        },

        capsCodeInputs: {
          'contentContainerStyle-0': {
            capsIptCodeID: 'contentContainerStyle-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Estilo de Conteúdo do Container - contentContainerStyle',
                en: 'contentContainerStyle',
              },
              capsIptCapsDescription: {
                'pt-br': 'Entre estilos de exibição separados por virgulas',
                en: 'These styles will be applied to the scroll view content container which wraps all of the child views.',
              },
              capsIptCapsDfCode: 'paddingVertical: 20,',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Posicionamento do Conteúdo - contentInset
  contentInset: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'contentInset',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Posicionamento do Conteúdo - contentInset',
          en: 'contentInset',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.contentInset({ pass: {
          contentInset: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'A quantidade pela qual o conteúdo do modo de exibição de rolagem é inserido a partir das bordas do modo de exibição de rolagem.',
          en: 'The amount by which the scroll view content is inset from the edges of the scroll view.',
        },

        capsCodeInputs: {
          'contentInset-0': {
            capsIptCodeID: 'contentInset-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Posicionamento do Conteúdo - contentInset',
                en: 'contentInset',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escolha "true" para ativar ou "false" para desativar.',
                en: 'The amount by which the scroll view content is inset from the edges of the scroll view.',
              },
              capsIptCapsDfCode: '{top: 0, left: 0, bottom: 0, right: 0}',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Posicionamento do Conteúdo na Área Segura - contentInsetAdjustmentBehavior
  contentInsetAdjustmentBehavior: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'contentInsetAdjustmentBehavior',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br':
            'Posicionamento do Conteúdo na Área Segura - contentInsetAdjustmentBehavior',
          en: 'contentInsetAdjustmentBehavior',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.contentInsetAdjustmentBehavior({ pass: {
          contentInsetAdjustmentBehavior: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Essa propriedade especifica como as indefinições de área segura são usadas para modificar a área de conteúdo do modo de exibição de rolagem. Disponível no iOS 11 e posterior.',
          en: 'This property specifies how the safe area insets are used to modify the content area of the scroll view. Available on iOS 11 and later.',
        },

        capsCodeInputs: {
          'contentInsetAdjustmentBehavior-0': {
            capsIptCodeID: 'contentInsetAdjustmentBehavior-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Posicionamento do Conteúdo na Área Segura - contentInsetAdjustmentBehavior',
                en: 'contentInsetAdjustmentBehavior',
              },
              capsIptCapsDescription: {
                'pt-br': 'Digite para definir',
                en: 'This property specifies how the safe area insets are used to modify the content area of the scroll view. Available on iOS 11 and later.',
              },
              capsIptCapsDfCode: 'never',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Deslocamento de rolagem inicial - contentOffset
  contentOffset: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'contentOffset',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'deslocamento de rolagem inicial - contentOffset',
          en: 'contentOffset',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.contentOffset({ pass: {
          contentOffset: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Usado para definir manualmente o deslocamento de rolagem inicial.',
          en: 'Used to manually set the starting scroll offset.',
        },

        capsCodeInputs: {
          'contentOffset-0': {
            capsIptCodeID: 'contentOffset-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'deslocamento de rolagem inicial - contentOffset',
                en: 'contentOffset',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Digite para definir a posição na horizontal e vertical',
                en: 'Used to manually set the starting scroll offset.',
              },
              capsIptCapsDfCode: '{x: 0, y: 0}',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Taxa de desaceleração - decelerationRate
  decelerationRate: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'decelerationRate',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Taxa de desaceleração - decelerationRate',
          en: 'decelerationRate',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.decelerationRate({ pass: {
          decelerationRate: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Um número de ponto flutuante que determina a rapidez com que a exibição de rolagem desacelera depois que o usuário levanta o dedo',
          en: 'A floating-point number that determines how quickly the scroll view decelerates after the user lifts their finger.',
        },

        capsCodeInputs: {
          'decelerationRate-0': {
            capsIptCodeID: 'decelerationRate-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Taxa de desaceleração - decelerationRate',
                en: 'decelerationRate',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina a velocidade',
                en: 'A floating-point number that determines how quickly the scroll view decelerates after the user lifts their finger.',
              },
              capsIptCapsDfCode: 'normal',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Bloqueio de Rolagem Direcional - directionalLockEnabled
  directionalLockEnabled: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'directionalLockEnabled',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Bloqueio de Rolagem Direcional - directionalLockEnabled',
          en: 'directionalLockEnabled',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.directionalLockEnabled({ pass: {
          directionalLockEnabled: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Quando verdadeiro, o ScrollView tentará bloquear apenas a rolagem vertical ou horizontal durante o arrasto.',
          en: 'When true, the ScrollView will try to lock to only vertical or horizontal scrolling while dragging.',
        },

        capsCodeInputs: {
          'directionalLockEnabled-0': {
            capsIptCodeID: 'directionalLockEnabled-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Bloqueio de Rolagem Direcional - directionalLockEnabled',
                en: 'directionalLockEnabled',
              },
              capsIptCapsDescription: {
                'pt-br': 'Escolha "true" para ativar ou "false" para desativar',
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

  // Navegação por índices - disableIntervalMomentum
  disableIntervalMomentum: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'disableIntervalMomentum',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Navegação por índices - disableIntervalMomentum',
          en: 'disableIntervalMomentum',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.disableIntervalMomentum({ pass: {
          disableIntervalMomentum: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Quando verdadeiro, o modo de exibição de rolagem pára no próximo índice (em relação à posição de rolagem na liberação), independentemente da rapidez do gesto. Isso pode ser usado para paginação quando a página é menor do que a largura do ScrollView horizontal ou a altura do ScrollView vertical..',
          en: 'When true, the scroll view stops on the next index (in relation to scroll position at release) regardless of how fast the gesture is. This can be used for pagination when the page is less than the width of the horizontal ScrollView or the height of the vertical ScrollView.',
        },

        capsCodeInputs: {
          'disableIntervalMomentum-0': {
            capsIptCodeID: 'disableIntervalMomentum-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Navegação por índices - disableIntervalMomentum',
                en: 'disableIntervalMomentum',
              },
              capsIptCapsDescription: {
                'pt-br': 'Escolha "true" para ativar ou "false" para desativar',
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

  // Desabilitar  controle de toques da View - disableScrollViewPanResponder
  disableScrollViewPanResponder: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'disableScrollViewPanResponder',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br':
            'Desabilitar  controle de toques da View - disableScrollViewPanResponder',
          en: 'disableScrollViewPanResponder',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.disableScrollViewPanResponder({ pass: {
          disableScrollViewPanResponder: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Controle de toques do ScrollView é desabilitado e o controle total sobre os toques dentro do ScrollView é deixado para seus componentes filho',
          en: 'When true, the default JS pan responder on the ScrollView is disabled, and full control over touches inside the ScrollView is left to its child components. ',
        },

        capsCodeInputs: {
          'disableScrollViewPanResponder-0': {
            capsIptCodeID: 'disableScrollViewPanResponder-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Desabilitar  controle de toques da View - disableScrollViewPanResponder',
                en: 'disableScrollViewPanResponder',
              },
              capsIptCapsDescription: {
                'pt-br': 'Escolha "true" para ativar ou "false" para desativar',
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

  // Cor de preenchimento da rolagem - endFillColor
  endFillColor: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'endFillColor',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Cor de preenchimento da rolagem - endFillColor',
          en: 'endFillColor',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.endFillColor({ pass: {
          endFillColor: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Preencherá o resto da visualização de rolagem com uma cor',
          en: 'Will fill the rest of the scrollview with a color',
        },
        capsCodeInputs: {
          'endFillColor-0': {
            capsIptCodeID: 'endFillColor-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Cor de preenchimento da rolagem - endFillColor',
                en: 'endFillColor',
              },
              capsIptCapsDescription: {
                'pt-br': 'Escolha "true" para ativar ou "false" para desativar',
                en: 'Set "true" or "false"',
              },
              capsIptCapsDfCode: 'white',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Cor de preenchimento da rolagem - fadingEdgeLength
  fadingEdgeLength: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'fadingEdgeLength',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Cor de preenchimento da rolagem - fadingEdgeLength ',
          en: 'fadingEdgeLength ',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.fadingEdgeLength({ pass: {
          fadingEdgeLength: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Desvanece as bordas do conteúdo de rolagem.',
          en: 'Fades out the edges of the the scroll content.',
        },

        capsCodeInputs: {
          'fadingEdgeLength-0': {
            capsIptCodeID: 'fadingEdgeLength-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Cor de preenchimento da rolagem - fadingEdgeLength ',
                en: 'fadingEdgeLength',
              },
              capsIptCapsDescription: {
                'pt-br': 'Número',
                en: 'Number',
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

  // Horizontal - horizontal - descontinuado (usar de /workspace/flaxboll/C_preview/.flaxboll/seeds/base/properties/list/index.ts)

  //  Estilo dos indicadores - indicatorStyle
  indicatorStyle: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'indicatorStyle',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Estilo dos indicadores  - indicatorStyle',
          en: 'indicatorStyle',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.indicatorStyle({ pass: {
          indicatorStyle: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'O estilo dos indicadores de rolagem.',
          en: 'The style of the scroll indicators.',
        },

        capsCodeInputs: {
          'indicatorStyle-0': {
            capsIptCodeID: 'indicatorStyle-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Estilo dos indicadores - indicatorStyle ',
                en: 'indicatorStyle',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escolha black contra fundo claro e white contra fundo escuro.',
                en: 'Set black against a light background and white against a dark background.',
              },
              capsIptCapsTypesToAdd: ['string process'],
              capsIptCapsDfCode: 'default',
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  //  Inverter Cabeçalho - invertStickyHeaders
  invertStickyHeaders: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'invertStickyHeaders',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Inverter Cabeçalho  - invertStickyHeaders',
          en: 'invertStickyHeaders',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.invertStickyHeaders({ pass: {
          invertStickyHeaders: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Se cabeçalhos adesivos devem ficar na parte inferior em vez da parte superior do ScrollView.',
          en: 'If sticky headers should stick at the bottom instead of the top of the ScrollView.',
        },

        capsCodeInputs: {
          'invertStickyHeaders-0': {
            capsIptCodeID: 'invertStickyHeaders-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Inverter Cabeçalho - invertStickyHeaders ',
                en: 'invertStickyHeaders',
              },
              capsIptCapsDescription: {
                'pt-br': 'Escolha "true" para ativar ou "false" para desativar',
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

  //  Descartar Teclado - keyboardDismissMode
  keyboardDismissMode: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'keyboardDismissMode',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Descartar Teclado  - keyboardDismissMode',
          en: 'keyboardDismissMode',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.keyboardDismissMode({ pass: {
          keyboardDismissMode: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Determina se o teclado é dispensado em resposta a um arrasto.',
          en: 'Determines whether the keyboard gets dismissed in response to a drag.',
        },

        capsCodeInputs: {
          'keyboardDismissMode-0': {
            capsIptCodeID: 'keyboardDismissMode-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Descartar Teclado - keyboardDismissMode',
                en: 'keyboardDismissMode',
              },
              capsIptCapsDescription: {
                'pt-br': 'Escolha o modo',
                en: 'Set mode',
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

  //  Teclado Segue Visível - keyboardShouldPersistTaps
  keyboardShouldPersistTaps: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'keyboardShouldPersistTaps',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Teclado Segue Visível  - keyboardShouldPersistTaps',
          en: 'keyboardShouldPersistTaps',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.keyboardShouldPersistTaps({ pass: {
          keyboardShouldPersistTaps: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Determina quando o teclado deve permanecer visível após um toque.',
          en: 'Determines when the keyboard should stay visible after a tap.',
        },

        capsCodeInputs: {
          'keyboardShouldPersistTaps-0': {
            capsIptCodeID: 'keyboardShouldPersistTaps-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Teclado Segue Visível - keyboardShouldPersistTaps',
                en: 'keyboardShouldPersistTaps',
              },
              capsIptCapsDescription: {
                'pt-br': 'Escolha o modo',
                en: 'Set mode',
              },
              capsIptCapsDfCode: 'never',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  //  Fixar Posição do Conteúdo Visível - maintainVisibleContentPosition
  maintainVisibleContentPosition: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'maintainVisibleContentPosition',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br':
            'Fixar Posição do Conteúdo Visível  - maintainVisibleContentPosition',
          en: 'maintainVisibleContentPosition',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.maintainVisibleContentPosition({ pass: {
          maintainVisibleContentPosition: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Quando definido, o modo de exibição de rolagem ajustará a posição de rolagem para que o primeiro filho que está atualmente visível e em ou além não mude de posição.',
          en: 'When set, the scroll view will adjust the scroll position so that the first child that is currently visible and at or beyond will not change position.',
        },

        capsCodeInputs: {
          'maintainVisibleContentPosition-0': {
            capsIptCodeID: 'maintainVisibleContentPosition-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Fixar Posição do Conteúdo Visível - maintainVisibleContentPosition',
                en: 'maintainVisibleContentPosition',
              },
              capsIptCapsDescription: {
                'pt-br': 'Mudar valor numérico para ignorar elementos',
                en: 'Change numeric value to ignore elements',
              },
              capsIptCapsDfCode:
                '{ minIndexForVisible: 0, autoscrollToTopThreshold: 0 }',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  //  Escala máxima de Zoom - maximumZoomScale
  maximumZoomScale: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'maximumZoomScale',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Escala máxima de Zoom  - maximumZoomScale',
          en: 'maximumZoomScale',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.maximumZoomScale({ pass: {
          maximumZoomScale: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'A escala de zoom máxima permitida.',
          en: 'The maximum allowed zoom scale.',
        },

        capsCodeInputs: {
          'maximumZoomScale-0': {
            capsIptCodeID: 'maximumZoomScale-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Escala máxima de Zoom - maximumZoomScale',
                en: 'maximumZoomScale',
              },
              capsIptCapsDescription: {
                'pt-br': 'Mudar valor numérico para ajustar',
                en: 'Change numeric value to adjust',
              },
              capsIptCapsDfCode: '1.0',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  //  Escala mínima de Zoom - minimumZoomScale
  minimumZoomScale: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'minimumZoomScale',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Escala mínima de Zoom - minimumZoomScale',
          en: 'minimumZoomScale',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.minimumZoomScale({ pass: {
          minimumZoomScale: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'A escala de zoom mínima permitida.',
          en: 'The minimum allowed zoom scale.',
        },

        capsCodeInputs: {
          'minimumZoomScale-0': {
            capsIptCodeID: 'minimumZoomScale-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Escala mínima de Zoom - minimumZoomScale',
                en: 'minimumZoomScale',
              },
              capsIptCapsDescription: {
                'pt-br': 'Mudar valor numérico para ajustar',
                en: 'Change numeric value to adjust',
              },
              capsIptCapsDfCode: '1.0',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  //  Rolagem aninhada - nestedScrollEnabled
  nestedScrollEnabled: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'nestedScrollEnabled',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Rolagem aninhada  - nestedScrollEnabled',
          en: 'nestedScrollEnabled',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.nestedScrollEnabled({ pass: {
          nestedScrollEnabled: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Ativa a rolagem aninhada para API Android nível 21+.',
          en: 'Enables nested scrolling for Android API level 21+.',
        },

        capsCodeInputs: {
          'nestedScrollEnabled-0': {
            capsIptCodeID: 'nestedScrollEnabled-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Rolagem aninhada - nestedScrollEnabled',
                en: 'nestedScrollEnabled',
              },
              capsIptCapsDescription: {
                'pt-br': 'Escolha "true" para ativar ou "false" para desativar',
                en: 'Set "true" or "false"',
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

  //  Substituição do overScroll - overScrollMode
  overScrollMode: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'overScrollMode',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Substituição do overScroll - overScrollMode',
          en: 'overScrollMode',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.overScrollMode({ pass: {
          overScrollMode: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Usado para substituir o valor padrão do modo overScroll.',
          en: 'Used to override default value of overScroll mode.',
        },

        capsCodeInputs: {
          'overScrollMode-0': {
            capsIptCodeID: 'overScrollMode-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Substituição do overScroll - overScrollMode',
                en: 'overScrollMode',
              },
              capsIptCapsDescription: {
                'pt-br': 'Define novo valor para o modo overScroll.',
                en: 'Set new value for overScroll mode.',
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

  //  Habilitar paginação - pagingEnabled
  pagingEnabled: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'pagingEnabled',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Habilitar paginação - pagingEnabled',
          en: 'pagingEnabled',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.pagingEnabled({ pass: {
          pagingEnabled: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Quando verdadeiro, o modo de exibição de rolagem pára em múltiplos do tamanho do modo de exibição de rolagem durante a rolagem',
          en: 'When true, the scroll view stops on multiples of the scroll views size when scrolling.',
        },

        capsCodeInputs: {
          'pagingEnabled-0': {
            capsIptCodeID: 'pagingEnabled-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Habilitar paginação - pagingEnabled',
                en: 'pagingEnabled',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escolha "true" para habilitar ou "false" para desabilitar.',
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

  //  Manter barra de rolagem - persistentScrollbar
  persistentScrollbar: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'persistentScrollbar',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Manter barra de rolagem - persistentScrollbar',
          en: 'persistentScrollbar',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.persistentScrollbar({ pass: {
          persistentScrollbar: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Faz com que as barras de rolagem não se tornem transparentes quando não estiverem em uso.',
          en: 'Causes the scrollbars not to turn transparent when they are not in use.',
        },

        capsCodeInputs: {
          'persistentScrollbar-0': {
            capsIptCodeID: 'persistentScrollbar-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Manter barra de rolagem - persistentScrollbar',
                en: 'persistentScrollbar',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escolha "true" para habilitar ou "false" para desabilitar.',
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

  //  Gestos de pinça para Zoom - pinchGestureEnabled
  pinchGestureEnabled: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'pinchGestureEnabled',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Gestos de pinça para Zoom - pinchGestureEnabled',
          en: 'pinchGestureEnabled',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.pinchGestureEnabled({ pass: {
          pinchGestureEnabled: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Quando verdadeiro, o ScrollView permite o uso de gestos de pinça para aumentar e diminuir o zoom.',
          en: 'When true, ScrollView allows use of pinch gestures to zoom in and out.',
        },

        capsCodeInputs: {
          'pinchGestureEnabled-0': {
            capsIptCodeID: 'pinchGestureEnabled-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Gestos de pinça para Zoom - pinchGestureEnabled',
                en: 'pinchGestureEnabled',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escolha "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
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

  //  Remoção de Subvisualização Cortada - removeClippedSubviews
  removeClippedSubviews: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'removeClippedSubviews',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Remoção de Subvisualização Cortada - removeClippedSubviews',
          en: 'removeClippedSubviews',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.removeClippedSubviews({ pass: {
          removeClippedSubviews: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Um componente removeClippedSubviews, usado para fornecer funcionalidade pull-to-refresh para o ScrollView.',
          en: '',
        },

        capsCodeInputs: {
          'removeClippedSubviews-0': {
            capsIptCodeID: 'removeClippedSubviews-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Remoção de Subvisualização Cortada - removeClippedSubviews',
                en: 'removeClippedSubviews',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escolha "true" para habilitar ou "false" para desabilitar.',
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

  // Habilitar rolagem - scrollEnabled
  scrollEnabled: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'scrollEnabled',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Habilitar rolagem - scrollEnabled',
          en: 'scrollEnabled',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.scrollEnabled({ pass: {
          scrollEnabled: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Quando false, a visualização não pode ser rolada por meio da interação por toque.',
          en: 'When false, the view cannot be scrolled via touch interaction.',
        },

        capsCodeInputs: {
          'scrollEnabled-0': {
            capsIptCodeID: 'scrollEnabled-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Habilitar rolagem - scrollEnabled',
                en: 'scrollEnabled',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
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

  // Disparador de evento de rolagem - scrollEventThrottle
  scrollEventThrottle: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'scrollEventThrottle',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Disparador de evento de rolagem - scrollEventThrottle',
          en: 'scrollEventThrottle',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.scrollEventThrottle({ pass: {
          scrollEventThrottle: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Controla a frequência com que o evento de rolagem será disparado durante a rolagem.',
          en: 'This controls how often the scroll event will be fired while scrolling',
        },

        capsCodeInputs: {
          'scrollEventThrottle-0': {
            capsIptCodeID: 'scrollEventThrottle-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Disparador de evento de rolagem - scrollEventThrottle',
                en: 'scrollEventThrottle',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina o valor do intervalo',
                en: 'Set the range value',
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

  // Inserção de Indicadores de Rolagem - scrollIndicatorInsets
  scrollIndicatorInsets: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'scrollIndicatorInsets',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Inserção de Indicadores de Rolagem - scrollIndicatorInsets',
          en: 'scrollIndicatorInsets',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.scrollIndicatorInsets({ pass: {
          scrollIndicatorInsets: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'A quantidade pela qual os indicadores de exibição de rolagem são inseridos a partir das bordas do modo de exibição de rolagem.',
          en: 'The amount by which the scroll view indicators are inset from the edges of the scroll view.',
        },

        capsCodeInputs: {
          'scrollIndicatorInsets-0': {
            capsIptCodeID: 'scrollIndicatorInsets-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Inserção de Indicadores de Rolagem - scrollIndicatorInsets',
                en: 'scrollIndicatorInsets',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina os valores base',
                en: 'Set the range value',
              },
              capsIptCapsDfCode: '{top: 0, left: 0, bottom: 0, right: 0}',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Rolar além do conteúdo - scrollToOverflowEnabled
  scrollToOverflowEnabled: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'scrollToOverflowEnabled',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Rolar além do conteúdo - scrollToOverflowEnabled',
          en: 'scrollToOverflowEnabled',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.scrollToOverflowEnabled({ pass: {
          scrollToOverflowEnabled: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'O modo de exibição de rolagem pode ser programaticamente rolado além de seu tamanho de conteúdo.',
          en: 'When true, the scroll view can be programmatically scrolled beyond its content size.',
        },

        capsCodeInputs: {
          'scrollToOverflowEnabled-0': {
            capsIptCodeID: 'scrollToOverflowEnabled-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Rolar além do conteúdo - scrollToOverflowEnabled',
                en: 'scrollToOverflowEnabled',
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

  // Voltar ao Topo - scrollsToTop
  scrollsToTop: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'scrollsToTop',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Voltar ao Topo - scrollsToTop',
          en: 'scrollsToTop',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.scrollsToTop({ pass: {
          scrollsToTop: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Rola para cima quando a barra de status é tocada.',
          en: 'When true, the scroll view scrolls to top when the status bar is tapped.',
        },

        capsCodeInputs: {
          'scrollsToTop-0': {
            capsIptCodeID: 'scrollsToTop-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Voltar ao Topo - scrollsToTop',
                en: 'scrollsToTop',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
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

  // Mostrar Barra Horizontal - showsHorizontalScrollIndicator
  showsHorizontalScrollIndicator: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'showsHorizontalScrollIndicator',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Mostrar Barra Horizontal - showsHorizontalScrollIndicator',
          en: 'showsHorizontalScrollIndicator',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.showsHorizontalScrollIndicator({ pass: {
          showsHorizontalScrollIndicator: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Mostra um Mostrar Barra Horizontal.',
          en: 'Shows a horizontal scroll indicator.',
        },

        capsCodeInputs: {
          'showsHorizontalScrollIndicator-0': {
            capsIptCodeID: 'showsHorizontalScrollIndicator-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Mostrar Barra Horizontal - showsHorizontalScrollIndicator',
                en: 'showsHorizontalScrollIndicator',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Defina "true" para habilitar ou "false" para desabilitar.',
                en: 'Set "true" or "false"',
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

  // Mostrar Barra Vertical - ShowsVerticalScrollIndicator
  ShowsVerticalScrollIndicator: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'ShowsVerticalScrollIndicator',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Mostrar Barra Vertical - showsVerticalScrollIndicator',
          en: 'showsVerticalScrollIndicator',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.ShowsVerticalScrollIndicator({ pass: {
         ShowsVerticalScrollIndicator: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Mostra um indicador de rolagem vertical',
          en: 'Shows a vertical scroll indicator',
        },

        capsCodeInputs: {
          'ShowsVerticalScrollIndicator-0': {
            capsIptCodeID: 'ShowsVerticalScrollIndicator-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Mostrar Barra Vertical - showsVerticalScrollIndicator',
                en: 'showsVerticalScrollIndicator',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escolha "true" para mostrar a barra vertical ou "false" para ocultá-la.',
                en: 'Set "true" (show) or "false" (hide)',
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

  // Encaixar ao Alinhamento - snapToAlignment
  snapToAlignment: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'snapToAlignment',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Encaixar ao Alinhamento - snapToAlignment',
          en: 'snapToAlignment',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.snapToAlignment({ pass: {
          snapToAlignment: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Define a relação do ajuste com o modo de exibição de rolagem.',
          en: 'Define the relationship of the snapping to the scroll view.',
        },

        capsCodeInputs: {
          'snapToAlignment-0': {
            capsIptCodeID: 'snapToAlignment-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Encaixar ao Alinhamento - snapToAlignment',
                en: 'snapToAlignment',
              },
              capsIptCapsDescription: {
                'pt-br': 'Define o alinhamento com relação a rolagem',
                en: 'Sets the alignment with respect to scrolling',
              },
              capsIptCapsDfCode: 'start',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Desativar Encaixe Final - snapToEnd
  snapToEnd: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'snapToEnd',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Desativar Encaixe Final - snapToEnd',
          en: 'snapToEnd',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.snapToEnd({ pass: {
          snapToEnd: [!#!1!#!]
          }})`,
        capsDescription: {
          'pt-br':
            'Define a relação do ajuste com o modo de exibição de rolagem.',
          en: '',
        },

        capsCodeInputs: {
          'snapToEnd-0': {
            capsIptCodeID: 'snapToEnd-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Desativar Encaixe Final - snapToEnd',
                en: 'snapToEnd',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escolha "false" para permitir que a lista role livremente entre seu final e o último deslocamento.',
                en: '',
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

  // Encaixar ao Intervalo - snapToInterval
  snapToInterval: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'snapToInterval',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Encaixar ao Intervalo - snapToInterval',
          en: 'snapToInterval',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.snapToInterval({ pass: {
          snapToInterval: [!#!1!#!]
          }})`,
        capsDescription: {
          'pt-br':
            'Faz com que o modo de exibição de rolagem pare em múltiplos intervalos.',
          en: 'Causes the scroll view to stop at multiples of the value.',
        },

        capsCodeInputs: {
          'snapToInterval-0': {
            capsIptCodeID: 'snapToInterval-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Encaixar ao Intervalo - snapToInterval',
                en: 'snapToInterval',
              },
              capsIptCapsDescription: {
                'pt-br': 'Define o valor para o Intervalo',
                en: 'Set the value for the range',
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

  // Encaixar ao Deslocamento - snapToOffsets
  snapToOffsets: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'snapToOffsets',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Encaixar ao Deslocamento - snapToOffsets',
          en: 'snapToOffsets',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.snapToOffsets({ pass: {
          snapToOffsets: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Faz com que o modo de exibição de rolagem pare nos deslocamentos definidos.',
          en: 'Causes the scroll view to stop at the defined offsets.',
        },

        capsCodeInputs: {
          'snapToOffsets-0': {
            capsIptCodeID: 'snapToOffsets-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Encaixar ao Deslocamento - snapToOffsets',
                en: 'snapToOffsets',
              },
              capsIptCapsDescription: {
                'pt-br': 'Define os valores para o Deslocamento',
                en: 'Sets the values ​​for the offset',
              },
              capsIptCapsDfCode: '[1,2,3]',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Desativar Encaixe ao Início - snapToStart
  snapToStart: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'snapToStart',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Desativar Encaixe ao Início - snapToStart',
          en: 'snapToStart',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.snapToStart({ pass: {
          snapToStart: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Desativa o padrão em que o início da lista conta como um deslocamento de encaixe',
          en: '',
        },

        capsCodeInputs: {
          'snapToStart-0': {
            capsIptCodeID: 'snapToStart-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Desativar Encaixe ao Início - snapToStart',
                en: 'snapToStart',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escolha "false" para permitir que a lista role livremente entre seu início e o primeiro deslocamento.',
                en: '',
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

  // Ocultar Cabeçalho ao Rolar - stickyHeaderHiddenOnScroll
  stickyHeaderHiddenOnScroll: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'stickyHeaderHiddenOnScroll',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Ocultar Cabeçalho ao Rolar - stickyHeaderHiddenOnScroll',
          en: 'stickyHeaderHiddenOnScroll',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.stickyHeaderHiddenOnScroll({ pass: {
          stickyHeaderHiddenOnScroll: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Quando ativado, o cabeçalho adesivo ficará oculto ao rolar a lista para baixo e será encaixado no topo da lista ao rolar para cima.',
          en: 'When set to true, sticky header will be hidden when scrolling down the list, and it will dock at the top of the list when scrolling up.',
        },

        capsCodeInputs: {
          'stickyHeaderHiddenOnScroll-0': {
            capsIptCodeID: 'stickyHeaderHiddenOnScroll-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br':
                  'Ocultar Cabeçalho ao Rolar - stickyHeaderHiddenOnScroll',
                en: 'stickyHeaderHiddenOnScroll',
              },
              capsIptCapsDescription: {
                'pt-br': 'Escolha "true" para ativar o efeito.',
                en: 'Set "true" (active)',
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

  // Matriz de Índices - stickyHeaderIndices
  stickyHeaderIndices: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'stickyHeaderIndices',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeVersionID: '1',

        capsLabel: {
          'pt-br': 'Matriz de Índices - stickyHeaderIndices',
          en: 'stickyHeaderIndices',
        },
        capsDescription: {
          'pt-br':
            'Quando ativado, o cabeçalho adesivo ficará oculto ao rolar a lista para baixo e será encaixado no topo da lista ao rolar para cima.',
          en: '',
        },

        capsCodeText: `

        (...args:any) => props.stickyHeaderIndices({ pass: {
          stickyHeaderIndices: [!#!1!#!]
          }})`,

        capsCodeTypes: ['Propriedade Rolagem'],

        capsCodeInputs: {
          'stickyHeaderIndices-0': {
            capsIptCodeID: 'stickyHeaderIndices-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Matriz de Índices - stickyHeaderIndices',
                en: 'stickyHeaderIndices',
              },
              capsIptCapsDescription: {
                'pt-br': 'Passe um array de números para definir os índices',
                en: '',
              },
              capsIptCapsDfCode: '{[0]}',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Escala do Conteúdo - zoomScale
  zoomScale: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'zoomScale',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Escala do Conteúdo - zoomScale',
          en: 'zoomScale',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.zoomScale({ pass: {
          zoomScale: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'A escala atual do conteúdo do modo de exibição de rolagem.',
          en: 'The current scale of the scroll view content.',
        },

        capsCodeInputs: {
          'zoomScale-0': {
            capsIptCodeID: 'zoomScale-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Escala do Conteúdo - zoomScale',
                en: 'zoomScale',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina um número para o Zoom',
                en: 'Set a number for Zoom',
              },
              capsIptCapsDfCode: '1.0',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  //  Ao parar de arrastar rolagem - onScrollEndDrag
  onScrollEndDrag: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'onScrollEndDrag',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Ao parar de arrastar rolagem - onScrollEndDrag',
          en: 'onScrollEndDrag',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText:
          '(...args) => props.onScrollEndDrag({ pass: { onScrollEndDrag: [!#!1!#!], args }})',
        //       capsCodeText: `onScrollEndDrag={}`,
        capsDescription: {
          'pt-br':
            'Chamado quando o usuário para de arrastar o modo de exibição de rolagem e ele para ou começa a deslizar.',
          en: 'Called when the user stops dragging the scroll view and it either stops or begins to glide.',
        },

        capsCodeInputs: {},
      },
    },
    capsType: 'code',
  },

  // Etiqueta de Rolagem - scrollPerfTag
  scrollPerfTag: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'scrollPerfTag',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Etiqueta de Rolagem - scrollPerfTag',
          en: 'scrollPerfTag',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args) => props.pX({ pass: { scrollPerfTag: [!#!1!#!], args }})`,
        // capsCodeText: `{scrollPerfTag:{!#!Etiqueta de Rolagem!#!}}`,
        capsDescription: {
          'pt-br': 'Registra o desempenho de rolagem nesta exibição de rolagem',
          en: 'Log scroll performance on this scroll view.',
        },

        capsCodeInputs: {
          'scrollPerfTag-0': {
            capsIptCodeID:
              'rfaTtgK9890automaticallyAdjustContentInsets60Pqxlmj40-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Etiqueta de Rolagem - scrollPerfTag',
                en: 'scrollPerfTag',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina os valores base',
                en: 'Set the base values',
              },
              capsIptCapsDfCode: '???',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  //  Controle de Atualização - refreshControl
  refreshControl: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'refreshControl',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Controle de Atualização - refreshControl',
          en: 'refreshControl',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args) => props.refreshControl({ pass: { refreshControl: [!#!1!#!], args }})`,
        // capsCodeText: `{refreshControl={!#!Controle de Atualização!#!}}`,
        capsDescription: {
          'pt-br':
            'Um componente RefreshControl, usado para fornecer funcionalidade pull-to-refresh para o ScrollView.',
          en: 'A RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.',
        },

        capsCodeInputs: {
          'refreshControl-0': {
            capsIptCodeID:
              'rfaTtgK9890automaticallyAdjustContentInsets60Pqxlmj40-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Controle de Atualização - refreshControl',
                en: 'refreshControl',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina seu componente e o que atualizar',
                en: 'Define your component and what to update',
              },
              capsIptCapsDfCode:
                '<RefreshControl refreshing={refreshing} onRefresh={loadUserData} />',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  //  Ajuste ao mudar tamanho do conteúdo - onContentSizeChange
  onContentSizeChange: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'onContentSizeChange',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Ajuste ao mudar tamanho do conteúdo  - onContentSizeChange',
          en: 'onContentSizeChange',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args) => props.onContentSizeChange({ pass: { onContentSizeChange: "!#!1!#!", args }})`,
        //       capsCodeText: `onContentSizeChange={(width, height) => {
        //         this.setState({scrollHeight: height});
        //         console.log(width)
        // }}
        // style={{height:this.state.height, width:this.state.width}}`,
        capsDescription: {
          'pt-br':
            'Chamado quando o modo de exibição de conteúdo rolável do ScrollView é alterado.',
          en: 'Called when scrollable content view of the ScrollView changes.',
        },

        capsCodeInputs: {},
      },
    },
    capsType: 'code',
  },

  //  Função ao começar rolagem - onMomentumScrollBegin
  onMomentumScrollBegin: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'onMomentumScrollBegin',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Função ao começar rolagem - onMomentumScrollBegin',
          en: 'onMomentumScrollBegin',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args) => props.onMomentumScrollBegin({ pass: { onMomentumScrollBegin: [!#!1!#!], args }})`,
        //       capsCodeText: `onMomentumScrollBegin={(width, height) => {
        //         this.setState({scrollHeight: height});
        //         console.log(width)
        // }}
        // style={{height:this.state.height, width:this.state.width}}`,
        capsDescription: {
          'pt-br':
            'É uma função de retorno de chamada que é chamada quando a rolagem de impulso começa.',
          en: 'Called when the momentum scroll starts (scroll which occurs as the ScrollView starts gliding).',
        },

        capsCodeInputs: {},
      },
    },
    capsType: 'code',
  },

  //  Função ao terminar rolagem - onMomentumScrollEnd
  onMomentumScrollEnd: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'onMomentumScrollEnd',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Função ao terminar rolagem - onMomentumScrollEnd',
          en: 'onMomentumScrollEnd',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args) => props.onMomentumScrollEnd({ pass: { onMomentumScrollEnd: [!#!1!#!], args }})`,
        //       capsCodeText: `onMomentumScrollEnd={(width, height) => {
        //         this.setState({scrollHeight: height});
        //         console.log(width)
        // }}
        // style={{height:this.state.height, width:this.state.width}}`,
        capsDescription: {
          'pt-br':
            'É uma função de retorno de chamada que é chamada quando a rolagem de impulso termina.',
          en: 'Called when the momentum scroll ends (scroll which occurs as the ScrollView glides to a stop).',
        },

        capsCodeInputs: {},
      },
    },
    capsType: 'code',
  },

  //  Ao rolar - onScroll
  onScroll: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'onScroll',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Ao rolar - onScroll',
          en: 'onScroll',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args) => props.onMomentumScrollEnd({ pass: { onScroll: [!#!1!#!], args }})`,
        // capsCodeText: `onScroll={
        //   nativeEvent: {
        //     contentInset: {bottom, left, right, top},
        //     contentOffset: {x, y},
        //     contentSize: {height, width},
        //     layoutMeasurement: {height, width},
        //     zoomScale
        //   }
        // }`,
        capsDescription: {
          'pt-br': 'Dispara no máximo uma vez por quadro durante a rolagem.',
          en: 'Fires at most once per frame during scrolling.',
        },

        capsCodeInputs: {},
      },
    },
    capsType: 'code',
  },

  //  Ao arrastar rolagem - onScrollBeginDrag
  onScrollBeginDrag: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'onScrollBeginDrag',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Ao arrastar rolagem - onScrollBeginDrag',
          en: 'onScrollBeginDrag',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args) => props.onScrollBeginDrag({ pass: { onScrollBeginDrag: [!#!1!#!], args }})`,
        // capsCodeText: `onScrollBeginDrag={}`,
        capsDescription: {
          'pt-br':
            'Chamado quando o usuário começa a arrastar o modo de exibição de rolagem.',
          en: 'Called when the user begins to drag the scroll view.',
        },

        capsCodeInputs: {},
      },
    },
    capsType: 'code',
  },

  //  Ao rolar para cima - onScrollToTop
  onScrollToTop: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'onScrollToTop',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Ao parar de arrastar rolagem - onScrollToTop',
          en: 'onScrollToTop',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args) => props.onScrollBeginDrag({ pass: { onScrollToTop: [!#!1!#!], args }})`,
        // capsCodeText: `onScrollToTop={}`,
        capsDescription: {
          'pt-br':
            'É acionado quando o modo de exibição de rolagem rola para cima depois que a barra de status é tocada.',
          en: 'Fires when the scroll view scrolls to top after the status bar has been tapped.',
        },

        capsCodeInputs: {},
      },
    },
    capsType: 'code',
  },

  // Estilo - style
  style: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'style',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Papel - style',
          en: 'style',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Caixa'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args) => props.onScrollBeginDrag({ pass: { style: [!#!1!#!], args }})`,
        // capsCodeText: `{style= !#!style!#!}`,
        capsDescription: {
          'pt-br': 'Estilo de Exibição',
          en: 'Display Styles',
        },

        capsCodeInputs: {
          'style-0': {
            capsIptCodeID: 'style-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Estilo - style',
                en: 'style',
              },
              capsIptCapsDescription: {
                'pt-br': 'Um objeto com várias propriedades',
                en: 'An object with multiple properties',
              },
              capsIptCapsDfCode: '{}',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },
};

// ######################################
// ######################################
// FALTA REVISAR E  RENOMEAR AS ENTRADAS
// CONTINUAR DA LINHA 713
// ######################################
// ######################################
