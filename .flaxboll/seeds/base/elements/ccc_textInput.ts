import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_textInput: TcapsCodeData = {
  ccc_textInput_C: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Entrada de Texto (TextInput)',
          en: 'TextInput',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['Elemento de Tela', 'TextInput'],

        capsCodeText: `(...args:any) => <Elements.IptTxt2 pass={{
          propsArray: [!#!Properties!#!],

          stylesArray: [!#!Styles!#!],

          funcsArray: [!#!Functions!#!],

          args,
        }}/>`,

        capsCodeInputs: {
          // ---------- element properties
          'ccc_textInput_C-0': {
            capsIptCodeID: 'ccc_textInput_C-0',
            capsIptPosition: '0',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Propriedades',
                en: 'Properties',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{}`,
              capsIptCapsTypesToAdd: [
                'Propriedade Texto',
                'Propriedade Entrada Texto',
              ],
            },
          },
          // ---------- element styles
          'ccc_textInput_C-1': {
            capsIptCodeID: 'ccc_textInput_C-1',
            capsIptPosition: '1',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Estilos',
                en: 'Styles',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }`,
              capsIptCapsTypesToAdd: [
                'Estilo Layout',
                'Estilo Caixa',
                'Estilo Texto',
                'Grupo de Estilos',
              ],
            },
          },
          // ---------- element functions
          'ccc_textInput_C-2': {
            capsIptCodeID: 'ccc_textInput_C-2',
            capsIptPosition: '2',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Funções',
                en: 'Functions',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `() => {}`,
              capsIptCapsTypesToAdd: ['setVar', 'setTimeout'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_textInput_C',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },

  ccc_textInputEdit_C: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Entrada de Texto (TextInput Edit)',
          en: 'TextInput Edit',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['Elemento de Tela', 'TextInput Edit'],

        capsCodeText: `(...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [!#!Properties!#!],

          stylesArray: [!#!Styles!#!],

          editPath: [!#!Edit Path!#!],

          funcsArray: [!#!Functions!#!],

          args,
        }}/>`,

        capsCodeInputs: {
          // ---------- element properties
          'ccc_textInputEdit_C-0': {
            capsIptCodeID: 'ccc_textInputEdit_C-0',
            capsIptPosition: '0',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Propriedades',
                en: 'Properties',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{}`,
              capsIptCapsTypesToAdd: [
                'Propriedade Texto',
                'Propriedade Entrada Texto',
              ],
            },
          },
          // ---------- element styles
          'ccc_textInputEdit_C-1': {
            capsIptCodeID: 'ccc_textInputEdit_C-1',
            capsIptPosition: '1',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Estilos',
                en: 'Styles',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }`,
              capsIptCapsTypesToAdd: [
                'Estilo Layout',
                'Estilo Caixa',
                'Estilo Texto',
                'Grupo de Estilos',
              ],
            },
          },
          // ---------- element functions
          'ccc_textInputEdit_C-2': {
            capsIptCodeID: 'ccc_textInputEdit_C-2',
            capsIptPosition: '2',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Edit Path', en: 'Edit Path' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `" "`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          // ---------- element functions
          'ccc_textInputEdit_C-3': {
            capsIptCodeID: 'ccc_textInputEdit_C-3',
            capsIptPosition: '3',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Funções',
                en: 'Functions',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `() => {}`,
              capsIptCapsTypesToAdd: ['setVar', 'setTimeout'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_textInputEdit_C',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },

  ccc_textIptCNPJ: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Máscara CNPJ - Entrada de Texto',
          en: '',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['Elemento de Tela', 'Text Input Mask'],

        capsCodeText: `(...args:any) => <Elements.IptTxtMaskCNPJ pass={{
          propsArray: [!#!Properties!#!],

          stylesArray: [!#!Styles!#!],

          editPath: [!#!Edit Path!#!],

          funcsArray: [!#!Functions!#!],

          args,
        }}/>`,

        capsCodeInputs: {
          // ---------- element properties
          'ccc_textIptCNPJ-0': {
            capsIptCodeID: 'ccc_textIptCNPJ-0',
            capsIptPosition: '0',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Propriedades',
                en: 'Properties',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{}`,
              capsIptCapsTypesToAdd: [
                'Propriedade Texto',
                'Propriedade Entrada Texto',
              ],
            },
          },
          // ---------- element styles
          'ccc_textIptCNPJ-1': {
            capsIptCodeID: 'ccc_textIptCNPJ-1',
            capsIptPosition: '1',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Estilos',
                en: 'Styles',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }`,
              capsIptCapsTypesToAdd: [
                'Estilo Layout',
                'Estilo Caixa',
                'Estilo Texto',
                'Grupo de Estilos',
              ],
            },
          },
          // ---------- element functions
          'ccc_textIptCNPJ-2': {
            capsIptCodeID: 'ccc_textIptCNPJ-2',
            capsIptPosition: '2',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Edit Path', en: 'Edit Path' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `" "`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          // ---------- element functions
          'ccc_textIptCNPJ-3': {
            capsIptCodeID: 'ccc_textIptCNPJ-3',
            capsIptPosition: '3',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Funções',
                en: 'Functions',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `() => {}`,
              capsIptCapsTypesToAdd: ['setVar', 'setTimeout'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_textIptCNPJ',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },

  ccc_textIptCPF: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Máscara CPF - Entrada de Texto',
          en: '',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['Elemento de Tela', 'Text Input Mask'],

        capsCodeText: `(...args:any) => <Elements.IptTxtMaskCPF pass={{
          propsArray: [!#!Properties!#!],

          stylesArray: [!#!Styles!#!],

          editPath: [!#!Edit Path!#!],

          funcsArray: [!#!Functions!#!],

          args,
        }}/>`,

        capsCodeInputs: {
          // ---------- element properties
          'ccc_textIptCPF-0': {
            capsIptCodeID: 'ccc_textIptCPF-0',
            capsIptPosition: '0',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Propriedades',
                en: 'Properties',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{}`,
              capsIptCapsTypesToAdd: [
                'Propriedade Texto',
                'Propriedade Entrada Texto',
              ],
            },
          },
          // ---------- element styles
          'ccc_textIptCPF-1': {
            capsIptCodeID: 'ccc_textIptCPF-1',
            capsIptPosition: '1',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Estilos',
                en: 'Styles',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }`,
              capsIptCapsTypesToAdd: [
                'Estilo Layout',
                'Estilo Caixa',
                'Estilo Texto',
                'Grupo de Estilos',
              ],
            },
          },
          // ---------- element functions
          'ccc_textIptCPF-2': {
            capsIptCodeID: 'ccc_textIptCPF-2',
            capsIptPosition: '2',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Edit Path', en: 'Edit Path' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `" "`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          // ---------- element functions
          'ccc_textIptCPF-3': {
            capsIptCodeID: 'ccc_textIptCPF-3',
            capsIptPosition: '3',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Funções',
                en: 'Functions',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `() => {}`,
              capsIptCapsTypesToAdd: ['setVar', 'setTimeout'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_textIptCPF',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },

  ccc_textIptRG: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Máscara RG - Entrada de Texto',
          en: '',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['Elemento de Tela', 'Text Input Mask'],

        capsCodeText: `(...args:any) => <Elements.IptTxtMaskRG pass={{
          propsArray: [!#!Properties!#!],

          stylesArray: [!#!Styles!#!],

          editPath: [!#!Edit Path!#!],

          funcsArray: [!#!Functions!#!],

          args,
        }}/>`,

        capsCodeInputs: {
          // ---------- element properties
          'ccc_textIptRG-0': {
            capsIptCodeID: 'ccc_textIptRG-0',
            capsIptPosition: '0',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Propriedades',
                en: 'Properties',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{}`,
              capsIptCapsTypesToAdd: [
                'Propriedade Texto',
                'Propriedade Entrada Texto',
              ],
            },
          },
          // ---------- element styles
          'ccc_textIptRG-1': {
            capsIptCodeID: 'ccc_textIptRG-1',
            capsIptPosition: '1',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Estilos',
                en: 'Styles',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }`,
              capsIptCapsTypesToAdd: [
                'Estilo Layout',
                'Estilo Caixa',
                'Estilo Texto',
                'Grupo de Estilos',
              ],
            },
          },
          // ---------- element functions
          'ccc_textIptRG-2': {
            capsIptCodeID: 'ccc_textIptRG-2',
            capsIptPosition: '2',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Edit Path', en: 'Edit Path' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `" "`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          // ---------- element functions
          'ccc_textIptRG-3': {
            capsIptCodeID: 'ccc_textIptRG-3',
            capsIptPosition: '3',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Funções',
                en: 'Functions',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `() => {}`,
              capsIptCapsTypesToAdd: ['setVar', 'setTimeout'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_textIptRG',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },

  ccc_textIptPhone: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Máscara Telefone - Entrada de Texto',
          en: '',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['Elemento de Tela', 'Text Input Mask'],

        capsCodeText: `(...args:any) => <Elements.IptTxtMaskPhone pass={{
          propsArray: [!#!Properties!#!],

          stylesArray: [!#!Styles!#!],

          editPath: [!#!Edit Path!#!],

          funcsArray: [!#!Functions!#!],

          args,
        }}/>`,

        capsCodeInputs: {
          // ---------- element properties
          'ccc_textIptPhone-0': {
            capsIptCodeID: 'ccc_textIptPhone-0',
            capsIptPosition: '0',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Propriedades',
                en: 'Properties',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{}`,
              capsIptCapsTypesToAdd: [
                'Propriedade Texto',
                'Propriedade Entrada Texto',
              ],
            },
          },
          // ---------- element styles
          'ccc_textIptPhone-1': {
            capsIptCodeID: 'ccc_textIptPhone-1',
            capsIptPosition: '1',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Estilos',
                en: 'Styles',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }`,
              capsIptCapsTypesToAdd: [
                'Estilo Layout',
                'Estilo Caixa',
                'Estilo Texto',
                'Grupo de Estilos',
              ],
            },
          },
          // ---------- element functions
          'ccc_textIptPhone-2': {
            capsIptCodeID: 'ccc_textIptPhone-2',
            capsIptPosition: '2',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Edit Path', en: 'Edit Path' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `" "`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          // ---------- element functions
          'ccc_textIptPhone-3': {
            capsIptCodeID: 'ccc_textIptPhone-3',
            capsIptPosition: '3',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Funções',
                en: 'Functions',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `() => {}`,
              capsIptCapsTypesToAdd: ['setVar', 'setTimeout'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_textIptPhone',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },

  // ccc_textIptWhatsApp: {
  //   capsCodeInfo: {
  //     '1': {
  //       capsLabel: {
  //         'pt-br': 'Máscara WhatsApp - Entrada de Texto',
  //         en: '',
  //       },
  //       capsDescription: {
  //         'pt-br': '',
  //         en: '',
  //       },
  //       capsCodeTypes: ['Elemento de Tela', 'Text Input Mask'],

  //       capsCodeText: `(...args:any) => <Elements.IptTxtMaskWhatsApp pass={{
  //         propsArray: [!#!Properties!#!],

  //         stylesArray: [!#!Styles!#!],

  //         editPath: [!#!Edit Path!#!],

  //         funcsArray: [!#!Functions!#!],

  //         args,
  //       }}/>`,

  //       capsCodeInputs: {
  //         // ---------- element properties
  //         'ccc_textIptWhatsApp-0': {
  //           capsIptCodeID: 'ccc_textIptWhatsApp-0',
  //           capsIptPosition: '0',
  //           capsIptRemoved: false,
  //           capsIptType: 'capsules',

  //           capsIptCapsInfo: {
  //             capsIptCapsLabel: {
  //               'pt-br': 'Propriedades',
  //               en: 'Properties',
  //             },
  //             capsIptCapsDescription: {
  //               'pt-br': '',
  //               en: '',
  //             },

  //             capsIptCapsDfCode: `{}`,
  //             capsIptCapsTypesToAdd: [
  //               'Propriedade Texto',
  //               'Propriedade Entrada Texto',
  //             ],
  //           },
  //         },
  //         // ---------- element styles
  //         'ccc_textIptWhatsApp-1': {
  //           capsIptCodeID: 'ccc_textIptWhatsApp-1',
  //           capsIptPosition: '1',
  //           capsIptRemoved: false,
  //           capsIptType: 'capsules',

  //           capsIptCapsInfo: {
  //             capsIptCapsLabel: {
  //               'pt-br': 'Estilos',
  //               en: 'Styles',
  //             },
  //             capsIptCapsDescription: {
  //               'pt-br': '',
  //               en: '',
  //             },

  //             capsIptCapsDfCode: `{
  //               color: 'black',
  //               fontSize: 14,
  //               // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
  //             }`,
  //             capsIptCapsTypesToAdd: [
  //               'Estilo Layout',
  //               'Estilo Caixa',
  //               'Estilo Texto',
  //               'Grupo de Estilos',
  //             ],
  //           },
  //         },
  //         // ---------- element functions
  //         'ccc_textIptWhatsApp-2': {
  //           capsIptCodeID: 'ccc_textIptWhatsApp-2',
  //           capsIptPosition: '2',
  //           capsIptRemoved: false,
  //           capsIptType: 'capsules',

  //           capsIptCapsInfo: {
  //             capsIptCapsLabel: { 'pt-br': 'Edit Path', en: 'Edit Path' },
  //             capsIptCapsDescription: { 'pt-br': '', en: '' },

  //             capsIptCapsDfCode: `" "`,
  //             capsIptCapsTypesToAdd: ['string process'],
  //           },
  //         },
  //         // ---------- element functions
  //         'ccc_textIptWhatsApp-3': {
  //           capsIptCodeID: 'ccc_textIptWhatsApp-3',
  //           capsIptPosition: '3',
  //           capsIptRemoved: false,
  //           capsIptType: 'capsules',

  //           capsIptCapsInfo: {
  //             capsIptCapsLabel: {
  //               'pt-br': 'Funções',
  //               en: 'Functions',
  //             },
  //             capsIptCapsDescription: {
  //               'pt-br': '',
  //               en: '',
  //             },

  //             capsIptCapsDfCode: `() => {}`,
  //             capsIptCapsTypesToAdd: ['setVar', 'setTimeout'],
  //           },
  //         },
  //       },

  //       capsCodeVersionID: '1',
  //       capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
  //     },
  //   },

  //   capsType: 'code',

  //   capsDB: {
  //     capsID: 'ccc_textIptWhatsApp',

  //     capsPrjID: 'yyy1',
  //     capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
  //     capsUserID: 'xxx1',
  //   },
  // },

  ccc_textIptCCard: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Máscara Cartão de Crédito - Entrada de Texto',
          en: '',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['Elemento de Tela', 'Text Input Mask'],

        capsCodeText: `(...args:any) => <Elements.IptTxtMaskCCard pass={{
          propsArray: [!#!Properties!#!],

          stylesArray: [!#!Styles!#!],

          editPath: [!#!Edit Path!#!],

          funcsArray: [!#!Functions!#!],

          args,
        }}/>`,

        capsCodeInputs: {
          // ---------- element properties
          'ccc_textIptCCard-0': {
            capsIptCodeID: 'ccc_textIptCCard-0',
            capsIptPosition: '0',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Propriedades',
                en: 'Properties',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{}`,
              capsIptCapsTypesToAdd: [
                'Propriedade Texto',
                'Propriedade Entrada Texto',
              ],
            },
          },
          // ---------- element styles
          'ccc_textIptCCard-1': {
            capsIptCodeID: 'ccc_textIptCCard-1',
            capsIptPosition: '1',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Estilos',
                en: 'Styles',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }`,
              capsIptCapsTypesToAdd: [
                'Estilo Layout',
                'Estilo Caixa',
                'Estilo Texto',
                'Grupo de Estilos',
              ],
            },
          },
          // ---------- element functions
          'ccc_textIptCCard-2': {
            capsIptCodeID: 'ccc_textIptCCard-2',
            capsIptPosition: '2',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Edit Path', en: 'Edit Path' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `" "`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          // ---------- element functions
          'ccc_textIptCCard-3': {
            capsIptCodeID: 'ccc_textIptCCard-3',
            capsIptPosition: '3',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Funções',
                en: 'Functions',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `() => {}`,
              capsIptCapsTypesToAdd: ['setVar', 'setTimeout'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_textIptCCard',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },

  ccc_textIptPassword: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Máscara Senha - Entrada de Texto',
          en: '',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['Elemento de Tela', 'Text Input Mask'],

        capsCodeText: `(...args:any) => <Elements.IptTxtPassword pass={{
          propsArray: [!#!Properties!#!],

          stylesArray: [!#!Styles!#!],

          editPath: [!#!Edit Path!#!],

          funcsArray: [!#!Functions!#!],

          args,
        }}/>`,

        capsCodeInputs: {
          // ---------- element properties
          'ccc_textIptPassword-0': {
            capsIptCodeID: 'ccc_textIptPassword-0',
            capsIptPosition: '0',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Propriedades',
                en: 'Properties',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{}`,
              capsIptCapsTypesToAdd: [
                'Propriedade Texto',
                'Propriedade Entrada Texto',
              ],
            },
          },
          // ---------- element styles
          'ccc_textIptPassword-1': {
            capsIptCodeID: 'ccc_textIptPassword-1',
            capsIptPosition: '1',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Estilos',
                en: 'Styles',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }`,
              capsIptCapsTypesToAdd: [
                'Estilo Layout',
                'Estilo Caixa',
                'Estilo Texto',
                'Grupo de Estilos',
              ],
            },
          },
          // ---------- element functions
          'ccc_textIptPassword-2': {
            capsIptCodeID: 'ccc_textIptPassword-2',
            capsIptPosition: '2',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Edit Path', en: 'Edit Path' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `" "`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          // ---------- element functions
          'ccc_textIptPassword-3': {
            capsIptCodeID: 'ccc_textIptPassword-3',
            capsIptPosition: '3',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Funções',
                en: 'Functions',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `() => {}`,
              capsIptCapsTypesToAdd: ['setVar', 'setTimeout'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_textIptPassword',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },

  ccc_textIptCustomNum: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Máscara Apenas Números - Entrada de Texto',
          en: '',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['Elemento de Tela', 'Text Input Mask'],

        capsCodeText: `(...args:any) => <Elements.IptTxtMaskCustomNumbers pass={{
          propsArray: [!#!Properties!#!],

          stylesArray: [!#!Styles!#!],

          editPath: [!#!Edit Path!#!],

          funcsArray: [!#!Functions!#!],

          ipt5: [!#!Max Chars!#!],

          args,
        }}/>`,

        capsCodeInputs: {
          // ---------- element properties
          'ccc_textIptCustomNum-0': {
            capsIptCodeID: 'ccc_textIptCustomNum-0',
            capsIptPosition: '0',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Propriedades',
                en: 'Properties',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{}`,
              capsIptCapsTypesToAdd: [
                'Propriedade Texto',
                'Propriedade Entrada Texto',
              ],
            },
          },
          // ---------- element styles
          'ccc_textIptCustomNum-1': {
            capsIptCodeID: 'ccc_textIptCustomNum-1',
            capsIptPosition: '1',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Estilos',
                en: 'Styles',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }`,
              capsIptCapsTypesToAdd: [
                'Estilo Layout',
                'Estilo Caixa',
                'Estilo Texto',
                'Grupo de Estilos',
              ],
            },
          },
          // ---------- element functions
          'ccc_textIptCustomNum-2': {
            capsIptCodeID: 'ccc_textIptCustomNum-2',
            capsIptPosition: '2',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Edit Path', en: 'Edit Path' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `" "`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          // ---------- element functions
          'ccc_textIptCustomNum-3': {
            capsIptCodeID: 'ccc_textIptCustomNum-3',
            capsIptPosition: '3',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Funções',
                en: 'Functions',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `() => {}`,
              capsIptCapsTypesToAdd: ['setVar', 'setTimeout'],
            },
          },
          // ---------- element functions
          'ccc_textIptCustomNum-4': {
            capsIptCodeID: 'ccc_textIptCustomNum-4',
            capsIptPosition: '4',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Número Limite de Caracteres',
                en: '',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `" "`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_textIptCustomNum',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
