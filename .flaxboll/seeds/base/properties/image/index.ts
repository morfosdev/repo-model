import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const imageProps: TcapsCodeData = {
  // accessibilityLabel - Rótulo de Acessibilidade
  accessibilityLabel: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'accessibilityLabel',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'accessibilityLabel - Rótulo de Acessibilidade',
          en: 'accessibilityLabel',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.accessibilityLabel({ pass: {
          accessibilityLabel: [!#!1!#!]
          }})`,
        capsDescription: {
          'pt-br':
            'O texto que é lido pelo leitor de tela quando o usuário interage com a imagem.',
          en: 'The text thats read by the screen reader when the user interacts with the image.',
        },

        capsCodeInputs: {
          'accessibilityLabel-0': {
            capsIptCodeID: 'accessibilityLabel-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Rótulo de Acessibilidade',
                en: 'accessibilityLabel',
              },
              capsIptCapsDescription: {
                'pt-br': 'Escreva um rótulo',
                en: 'Write a label',
              },
              capsIptCapsDfCode: 'Escreva um rótulo',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // alt - Alternativo
  alt: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'alt',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'alt - Alternativo', en: 'alt' },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.alt({ pass: {
          alt: [!#!1!#!]
          }})`,
        capsDescription: {
          'pt-br':
            'Uma cadeia de caracteres que define uma descrição de texto alternativa da imagem, que será lida pelo leitor de tela quando o usuário interagir com ela. O uso disso marcará automaticamente esse elemento como acessível.',
          en: 'A string that defines an alternative text description of the image, which will be read by the screen reader when the user interacts with it. Using this will automatically mark this element as accessible.',
        },

        capsCodeInputs: {
          'alt-0': {
            capsIptCodeID: 'alt-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Alternativo',
                en: 'alt',
              },
              capsIptCapsDescription: {
                'pt-br': 'Escreva uma descrição',
                en: 'Escreva uma descriçãoWrite a description',
              },
              capsIptCapsDfCode: 'Escreva uma descrição',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // blurRadius - Raio de Desfoque
  blurRadius: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'blurRadius',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'blurRadius - Raio de Desfoque',
          en: 'blurRadius',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.blurRadius({ pass: {
          blurRadius: [!#!1!#!]
          }})`,
        capsDescription: {
          'pt-br':
            'O raio de desfoque do filtro de desfoque adicionado à imagem.',
          en: 'The blur radius of the blur filter added to the image.',
        },

        capsCodeInputs: {
          'blurRadius-0': {
            capsIptCodeID: 'blurRadius-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Raio de Desfoque',
                en: 'blurRadius',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina um raio',
                en: 'Set a radius',
              },
              capsIptCapsDfCode: '6',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // capInsets - Inserções
  capInsets: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'capInsets',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'capInsets - Inserções', en: 'capInsets' },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.capInsets({ pass: {
          capInsets: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Quando a imagem for redimensionada, os cantos do tamanho especificado por capInsets permanecerão com um tamanho fixo, mas o conteúdo central e as bordas da imagem serão esticados.',
          en: 'When the image is resized, the corners of the size specified by capInsets will stay a fixed size, but the center content and borders of the image will be stretched. This is useful for creating resizable rounded buttons, shadows, and other resizable assets.',
        },

        capsCodeInputs: {
          'capInsets-0': {
            capsIptCodeID: 'capInsets-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Inserções',
                en: 'capInsets',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina o tamanho dos cantos',
                en: 'Set edge sizes',
              },
              capsIptCapsDfCode:
                '{bottom: 20, left: null, right: undefined, top: 50}',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // crossOrigin - Origem Cruzada
  crossOrigin: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'crossOrigin',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'crossOrigin - Origem Cruzada',
          en: 'crossOrigin',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.crossOrigin({ pass: {
          crossOrigin: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Uma cadeia de caracteres de uma palavra-chave especificando o modo CORS a ser usado ao buscar o recurso de imagem. Ele funciona de forma semelhante ao atributo crossorigin em HTML.',
          en: 'A string of a keyword specifying the CORS mode to use when fetching the image resource. It works similar to crossorigin attribute in HTML.',
        },

        capsCodeInputs: {
          'crossOrigin-0': {
            capsIptCodeID: 'crossOrigin-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Origem Cruzada',
                en: 'crossOrigin',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina o funcionamento da propriedade',
                en: 'Set the property function',
              },
              capsIptCapsDfCode: 'anonymous',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // defaultSource - Fonte Padrão
  defaultSource: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'defaultSource',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'defaultSource - Fonte Padrão',
          en: 'defaultSource',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `

        (...args:any) => props.defaultSource({ pass: {
          defaultSource: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Uma imagem estática a ser exibida durante o carregamento da fonte da imagem.',
          en: 'A static image to display while loading the image source.',
        },

        capsCodeInputs: {
          'defaultSource-0': {
            capsIptCodeID: 'defaultSource-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Fonte Padrão',
                en: 'defaultSource',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina a URL padrão',
                en: 'Set the default URL',
              },
              capsIptCapsDfCode:
                'https://images.unsplash.com/photo-1640774196921-11bc470ef88b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // fadeDuration - Duração do Esmaecimento
  fadeDuration: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'fadeDuration',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'fadeDuration - Duração do Esmaecimento',
          en: 'fadeDuration',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.fadeDuration({ pass: {
          fadeDuration: [!#!1!#!]
          }})`,
        capsDescription: {
          'pt-br': 'Esmaeça a duração da animação em milissegundos.',
          en: 'Fade animation duration in milliseconds.',
        },

        capsCodeInputs: {
          'fadeDuration-0': {
            capsIptCodeID: 'fadeDuration-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Duração do Esmaecimento',
                en: 'fadeDuration',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina a duração',
                en: 'Set the duration',
              },
              capsIptCapsDfCode: '300',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // height - Altura
  height: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'height',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'height - Altura',
          en: 'height',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.height({ pass: {
          height: [!#!1!#!]
          }})`,
        capsDescription: {
          'pt-br': 'Altura do componente de imagem.',
          en: 'Height of the image component.',
        },

        capsCodeInputs: {
          'height-0': {
            capsIptCodeID: 'height-0',
            capsIptRemoved: false,
            capsIptPosition: '0',

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Altura',
                en: 'height',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina a altura',
                en: 'Set the height',
              },
              capsIptCapsDfCode: '100',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // loadingIndicatorSource - Fonte do Indicador de Carregamento
  loadingIndicatorSource: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'loadingIndicatorSource',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br':
            'loadingIndicatorSource - Fonte do Indicador de Carregamento',
          en: 'loadingIndicatorSource',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.loadingIndicatorSource({ pass: {
          loadingIndicatorSource: [!#!1!#!]
          }})`,
        capsDescription: {
          'pt-br':
            'Essa propriedade representa o recurso usado para renderizar o indicador de carregamento da imagem.',
          en: 'Similarly to source, this property represents the resource used to render the loading indicator for the image. The loading indicator is displayed until image is ready to be displayed, typically after the image is downloaded.',
        },

        capsCodeInputs: {
          'loadingIndicatorSource-0': {
            capsIptCodeID: 'loadingIndicatorSource-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Fonte do Indicador de Carregamento',
                en: 'loadingIndicatorSource',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina a fonte',
                en: 'Set the source',
              },
              capsIptCapsDfCode: 'Escreva a uri',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // objectFit - Ajuste de Objeto
  objectFit: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'objectFit',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'objectFit - Ajuste de Objeto',
          en: 'objectFit',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.objectFit({ pass: {
          objectFit: [!#!1!#!]
          }})`,
        capsDescription: {
          'pt-br':
            'Determina como redimensionar a imagem quando o quadro não corresponde às dimensões da imagem bruta.',
          en: 'Determines how to resize the image when the frame does not match the raw image dimensions.',
        },

        capsCodeInputs: {
          'objectFit-0': {
            capsIptCodeID: 'objectFit-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Ajuste de Objeto',
                en: 'objectFit',
              },
              capsIptCapsDescription: {
                'pt-br': 'Defina o modo de redimensionamento',
                en: 'Set resize mode',
              },
              capsIptCapsDfCode: 'cover',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // onError - Ao dar Erro
  onError: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'onError',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'onError - Ao dar Erro',
          en: 'onError',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.onError({ pass: {
          onError: [!#!1!#!]
          }})`,
        capsDescription: {
          'pt-br': 'Invocado no erro de carregamento.',
          en: 'Invoked on load error.',
        },

        capsCodeInputs: {
          'onError-0': {
            capsIptCodeID: 'onError-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Ao dar Erro',
                en: 'onError',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsDfCode: '({nativeEvent: {error} }) => void',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // onLayout - Ao Alterar Layout
  onLayout: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'onLayout',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'onLayout - Ao Alterar Layout',
          en: 'onLayout',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.onLayout({ pass: {
          onLayout: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Invocado na montagem e nas alterações de layout.',
          en: 'Invoked on mount and on layout changes.',
        },

        capsCodeInputs: {
          'onLayout-0': {
            capsIptCodeID: 'onLayout-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Ao Alterar Layout',
                en: 'onLayout',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsDfCode:
                '({nativeEvent: [LayoutEvent]layoutevent)} => void',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // onLoad - Ao Carregar com Sucesso
  onLoad: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'onLoad',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'onLoad - Ao Carregar com Sucesso',
          en: 'onLoad',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.onLoad({ pass: {
          onLoad: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Invocado quando o carregamento é concluído com êxito.',
          en: 'Invoked when load completes successfully.',
        },

        capsCodeInputs: {
          'onLoad-0': {
            capsIptCodeID: 'onLoad-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Ao Carregar com Sucesso',
                en: 'onLoad',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsDfCode:
                '({nativeEvent: [ImageLoadEvent]image#imageloadevent)} => void',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // onLoadEnd - Ao Carregar
  onLoadEnd: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'onLoadEnd',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'onLoadEnd - Ao Carregar',
          en: 'onLoadEnd',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.onLoadEnd({ pass: {
          onLoadEnd: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Invocado quando a carga é bem-sucedida ou falha.',
          en: 'Invoked when load either succeeds or fails.',
        },

        capsCodeInputs: {
          'onLoadEnd-0': {
            capsIptCodeID: 'onLoadEnd-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Ao Carregar',
                en: 'onLoadEnd',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsDfCode: '() => void',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // onLoadStart - Ao Iniciar Carregamento
  onLoadStart: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'onLoadStart',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'onLoadStart - Ao Iniciar Carregamento',
          en: 'onLoadStart',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.onLoadStart({ pass: {
          onLoadStart: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Invocado no início do carregamento.',
          en: 'Invoked on load start.',
        },

        capsCodeInputs: {
          'onLoadStart-0': {
            capsIptCodeID: 'onLoadStart-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Ao Iniciar Carregamento',
                en: 'onLoadStart',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsDfCode: '() => void',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // resizeMode - Redimensionamento de Imagem
  JuErT8YkDllR4zErw83O04: {
    capsDB: {
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsID: 'JuErT8YkDllR4zErw83O04',
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'resizeMode - Redimensionamento de Imagem',
          en: 'resizeMode',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `stls.resizeMode({ pass: { arrayValue: [!#!1!#!] }})`,
        capsDescription: {
          'pt-br':
            'Determina como redimensionar a imagem quando o quadro não corresponde às dimensões brutas da imagem.',
          en: 'Determines how to resize the image when the frame doesnt match the raw image dimensions.',
        },

        capsCodeInputs: {
          'JuErT8YkDllR4zErw83O04-0': {
            capsIptCodeID: 'JuErT8YkDllR4zErw83O04-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Tipo de Redimensionamento',
                en: 'resizeMode',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escreva uma das opções: "cover", "contain", "stretch", "repeat", ou "center".',
                en: 'Type one of the options: "cover", "contain", "stretch", "repeat", or "center".',
              },
              capsIptCapsDfCode: `'cover'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },
};
