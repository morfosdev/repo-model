import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const shadowStyles: TcapsCodeData = {
  ccc_shadows: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 784000000 },
      capsID: 'ccc_shadows',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'shadows',
          en: 'shadows',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 784000000 },
        capsCodeTypes: ['Estilo Caixa', 'Estilo Imagem', 'Estilo Layout'],
        capsCodeVersionID: '1',
        capsCodeText: `stls.shadows({ pass: {
          shadowColor: [!#!1!#!],
          shadowOffset: [!#!2!#!],
          shadowOpacity: [!#!3!#!],
          shadowRadius: [!#!4!#!],
        }})`,
        capsDescription: {
          'pt-br': 'Defina um valor de opacidade da sombra',
          en: 'Sets the drop shadow opacity',
        },

        capsCodeInputs: {
          'ccc_shadows-0': {
            capsIptCodeID: 'ccc_shadows-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'cor da sombra', en: '' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsDfCode: `'#000'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_shadows-1': {
            capsIptCodeID: 'ccc_shadows-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'direção da sombra', en: '' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsDfCode: `'{width: 0, height: 0}'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_shadows-2': {
            capsIptCodeID: 'ccc_shadows-2',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'transparência da sombra', en: '' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsDfCode: `'0.4px'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_shadows-3': {
            capsIptCodeID: 'ccc_shadows-3',
            capsIptPosition: '3',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'desfoque da sombra', en: '' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsDfCode: `'20px'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Fonte - textShadowColor
  d6UQNdQeUZjXzhhTSASV: {
    capsDB: {
      capsID: 'd6UQNdQeUZjXzhhTSASV',
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 786000000 },
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Cor da Sombra do Texto - textShadowColor',
          en: 'textShadowColor',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 786000000 },
        capsCodeTypes: ['Estilo Texto'],
        capsCodeVersionID: '1',
        capsCodeText: `stls.textShadowColor({ pass: { arrayValue: [!#!1!#!] }})`,
        capsDescription: {
          'pt-br': 'Define a cor da sombra projetada',
          en: 'Sets the drop shadow color.',
        },

        capsCodeInputs: {
          'd6UQNdQeUZjXzhhTSASV-0': {
            capsIptCodeID: 'd6UQNdQeUZjXzhhTSASV-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Valor', en: 'Value' },
              capsIptCapsDescription: {
                'pt-br': 'Defina um valor',
                en: 'Set a value',
              },
              capsIptCapsDfCode: `'black'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Sombreamento do Texto - textShadowOffset
  BtjgtNPZ576eceFVmATc: {
    capsDB: {
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 787000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'BtjgtNPZ576eceFVmATc',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Sombreamento do Texto - textShadowOffset',
          en: 'textShadowOffset',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 787000000 },
        capsCodeTypes: ['Estilo Texto'],
        capsCodeVersionID: '1',
        capsCodeText: `stls.textShadowOffset({ pass: { arrayValue: [!#!1!#!] }})`,
        capsDescription: {
          'pt-br': 'Define o valor de deslocamento do sombreamento do texto',
          en: 'Sets the drop shadow offset.',
        },

        capsCodeInputs: {
          'BtjgtNPZ576eceFVmATc-0': {
            capsIptCodeID: 'BtjgtNPZ576eceFVmATc-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Valor', en: 'Value' },
              capsIptCapsDescription: {
                'pt-br': 'Defina um valor',
                en: 'Set a value',
              },
              capsIptCapsDfCode: `'{ width?: 2, height?: 2 }'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // -----------------------------
  // --------------- descontinuado
  // -----------------------------
  // Opacidade da Sombra - shadowOpacity
  fjstSf1LVd9Jvu2Oe4AV: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 784000000 },
      capsID: 'fjstSf1LVd9Jvu2Oe4AV',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'NÃO USAR - shadowOpacity_OLD',
          en: 'shadowOpacity',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 784000000 },
        capsCodeTypes: ['Estilo Caixa', 'Estilo Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `stls.shadowOpacity({ pass: { arrayValue: [!#!1!#!] }})`,
        capsDescription: {
          'pt-br': 'Defina um valor de opacidade da sombra',
          en: 'Sets the drop shadow opacity',
        },

        capsCodeInputs: {
          'fjstSf1LVd9Jvu2Oe4AV-0': {
            capsIptCodeID: 'fjstSf1LVd9Jvu2Oe4AV-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Valor', en: 'Value' },
              capsIptCapsDescription: {
                'pt-br': 'Defina um valor',
                en: 'Set a value',
              },
              capsIptCapsDfCode: `'0.5px'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Raio da Sombra - shadowRadius
  FXHJH7mRdZfGASuoL5i9: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
      capsID: 'FXHJH7mRdZfGASuoL5i9',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 784000000 },
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'NÃO USAR - shadowRadius_OLD',
          en: 'shadowRadius',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 784000000 },
        capsCodeTypes: ['Estilo Caixa', 'Estilo Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `stls.shadowRadius({ pass: { arrayValue: [!#!1!#!] }})`,
        capsDescription: {
          'pt-br': 'Define o raio de desfoque da sombra projetada.',
          en: 'Sets the drop shadow blur radius.',
        },

        capsCodeInputs: {
          'FXHJH7mRdZfGASuoL5i9-0': {
            capsIptCodeID: 'FXHJH7mRdZfGASuoL5i9-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Valor', en: 'Value' },
              capsIptCapsDescription: {
                'pt-br': 'Defina um valor',
                en: 'Set a value',
              },
              capsIptCapsDfCode: `'16px'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Cor da Sombra - shadowColor
  ccc_shadowColor: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
      capsID: 'ccc_shadowColor',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 784000000 },
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'NÃO USAR - shadowColor_OLD',
          en: 'shadowColor',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 784000000 },
        capsCodeTypes: ['Estilo Caixa', 'Estilo Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `stls.shadowColor({ pass: { arrayValue: [!#!1!#!] }})`,
        capsDescription: { 'pt-br': '', en: '' },

        capsCodeInputs: {
          'ccc_shadowColor-0': {
            capsIptCodeID: 'ccc_shadowColor-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Valor', en: 'Value' },
              capsIptCapsDescription: {
                'pt-br': 'Defina um valor',
                en: 'Set a value',
              },
              capsIptCapsDfCode: `'black'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Raio da Sombra - shadowOffset
  ccc_shadowOffset: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
      capsID: 'ccc_shadowOffset',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 784000000 },
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'NÃO USAR - shadowOffset_OLD',
          en: 'shadowOffset',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 784000000 },
        capsCodeTypes: ['Estilo Caixa', 'Estilo Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `stls.shadowOffset({ pass: {
          arrayValue1: [!#!1!#!],
          arrayValue2: [!#!2!#!],
        }})`,
        capsDescription: { 'pt-br': '', en: '' },

        capsCodeInputs: {
          'ccc_shadowOffset-0': {
            capsIptCodeID: 'ccc_shadowOffset-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Valor Width', en: 'Width Value' },
              capsIptCapsDescription: {
                'pt-br': 'Defina um valor',
                en: 'Set a value',
              },
              capsIptCapsDfCode: `'0px'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_shadowOffset-1': {
            capsIptCodeID: 'ccc_shadowOffset-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Valor Height', en: 'Height Value' },
              capsIptCapsDescription: {
                'pt-br': 'Defina um valor',
                en: 'Set a value',
              },
              capsIptCapsDfCode: `'0px'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // Raio da Sombra - boxShadow
  ccc_boxShadow: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
      capsID: 'ccc_boxShadow',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 784000000 },
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'NÃO USAR - boxShadow_OLD',
          en: 'boxShadow',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 784000000 },
        capsCodeTypes: ['Estilo Caixa', 'Estilo Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `stls.boxShadow({ pass: {
          arrayValue1: [!#!1!#!],
          arrayValue2: [!#!2!#!],
          arrayValue3: [!#!3!#!],
          arrayValue4: [!#!4!#!],
        }})`,
        capsDescription: { 'pt-br': '', en: '' },

        capsCodeInputs: {
          'ccc_boxShadow-0': {
            capsIptCodeID: 'ccc_boxShadow-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': '', en: '' },
              capsIptCapsDescription: {
                'pt-br': 'shadowOffset',
                en: 'shadowOffset',
              },
              capsIptCapsDfCode: `'{width: 0px, height: 0px}'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_boxShadow-1': {
            capsIptCodeID: 'ccc_boxShadow-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'shadowColor', en: 'shadowColor' },
              capsIptCapsDescription: {
                'pt-br': 'Defina um valor',
                en: 'Set a value',
              },
              capsIptCapsDfCode: `'black'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_boxShadow-2': {
            capsIptCodeID: 'ccc_boxShadow-2',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'shadowOpacity',
                en: 'shadowOpacity',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina um valor',
                en: 'Set a value',
              },
              capsIptCapsDfCode: `'0.5px'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_boxShadow-3': {
            capsIptCodeID: 'ccc_boxShadow-3',
            capsIptPosition: '3',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'shadowRadius', en: 'shadowRadius' },
              capsIptCapsDescription: {
                'pt-br': 'Defina um valor',
                en: 'Set a value',
              },
              capsIptCapsDfCode: `'16px'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },
};
