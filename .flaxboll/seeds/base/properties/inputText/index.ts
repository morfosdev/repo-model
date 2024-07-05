import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const inputProps: TcapsCodeData = {
  // allowFontScaling
  allowFontScaling: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'allowFontScaling',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'allowFontScaling',
          en: 'allowFontScaling',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Entrada Texto'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.allowFontScaling({ pass: {
          condition: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Especifica se as fontes devem escalar segundo as configurações de acessibilidade de Tamanho de Texto.',
          en: 'Specifies whether fonts should scale to respect Text Size accessibility settings.',
        },

        capsCodeInputs: {
          'allowFontScaling-0': {
            capsIptCodeID: 'allowFontScaling-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'allowFontScaling',
                en: 'allowFontScaling',
              },
              capsIptCapsDescription: {
                'pt-br': '',
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

  // autoCapitalize
  autoCapitalize: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'autoCapitalize',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'autoCapitalize',
          en: 'autoCapitalize',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Entrada Texto'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.autoCapitalize({ pass: {
          condition: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Diz ao TextInput para capitalizar automaticamente alguns caracteres',
          en: 'Tells TextInput to automatically capitalize certain characters.',
        },

        capsCodeInputs: {
          'autoCapitalize-0': {
            capsIptCodeID: 'autoCapitalize-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'autoCapitalize',
                en: 'autoCapitalize',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsDfCode: `'characters'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // editable
  editable: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'editable',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Editável',
          en: 'Editable',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Entrada Texto'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.editable({ pass: {
          condition: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Define se o texto é editável',
          en: 'Set the text as editable or not',
        },

        capsCodeInputs: {
          'editable-0': {
            capsIptCodeID: 'editable-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Editável',
                en: 'Editable',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Indica se o botão está num estado de uso ou não (desabilitado).',
                en: 'Shows if the button is enabled or disabled',
              },
              capsIptCapsDfCode: '()=>{}',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // placeholder
  placeholder: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'placeholder',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Texto de Campo Vazio - placeholder',
          en: 'placeholder',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Texto', 'Propriedade Entrada Texto'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.placeholder({ pass: {
          text: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'A cadeia de caracteres que será renderizada antes que a entrada de texto tenha sido inserida',
          en: 'String to be rendered before the input text has been entered',
        },

        capsCodeInputs: {
          'placeholder-0': {
            capsIptCodeID: 'placeholder-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Texto de Campo Vazio',
                en: 'Empty field text',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Texto exibido quando o campo de texto encontra-se vazio (não preenchido).',
                en: 'Text shown when text field is empty',
              },
              capsIptCapsDfCode: `'Digite...'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // placeholderTextColor
  placeholderTextColor: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'placeholderTextColor',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Cor do Texto de Campo Vazio - placeholderTextColor',
          en: 'placeholderTextColor',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Texto', 'Propriedade Entrada Texto'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.placeholderTextColor({ pass: {
          color: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': '',
          en: '',
        },

        capsCodeInputs: {
          'placeholderTextColor-0': {
            capsIptCodeID: 'placeholderTextColor-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Cor do Texto de Campo Vazio',
                en: 'placeholderTextColor',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Cor do Texto exibido quando o campo de texto encontra-se vazio (não preenchido).',
                en: 'Text color when field is empty.',
              },
              capsIptCapsDfCode: `'red'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // onFocus
  onFocus: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'onFocus',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'onFocus',
          en: 'onFocus',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Texto'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.onFocus({ pass: {
          focus: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': '',
          en: '',
        },

        capsCodeInputs: {
          'onFocus-0': {
            capsIptCodeID: 'onFocus-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Funções para onFocus',
                en: 'Functions To onFocus',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsDfCode: `() => {}`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // onBlur
  onBlur: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'onBlur',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'onBlur',
          en: 'onBlur',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Texto'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.onBlur({ pass: {
          func: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': '',
          en: '',
        },

        capsCodeInputs: {
          'onBlur-0': {
            capsIptCodeID: 'onBlur-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Funções para onBlur',
                en: 'Functions To onBlur',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsDfCode: `() => {}`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // multiline
  p24: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'p24',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Linhas múltiplas - multiline',
          en: 'multiline',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Texto'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.pt24({ pass: {
          boolean: [!#!1!#!]
        }})`,
        capsDescription: { 'pt-br': 'Define o número de linhas' },

        capsCodeInputs: {
          'p24-0': {
            capsIptCodeID: 'p24-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Linhas Múltiplas' },
              capsIptCapsDescription: { 'pt-br': '' },
              capsIptCapsDfCode: `'true'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },
};
