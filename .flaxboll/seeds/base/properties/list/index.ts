import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const listProps: TcapsCodeData = {
  // ItemSeparatorComponent
  ItemSeparatorComponent: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'ItemSeparatorComponent',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Separador de Itens - ItemSeparatorComponent',
          en: 'ItemSeparatorComponent',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Lista'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.ItemSeparatorComponent({ pass: {
          component: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Define um elemento para ser renderizado entre os itens',
          en: 'An element to be rendered between items',
        },

        capsCodeInputs: {
          'ItemSeparatorComponent-0': {
            capsIptCodeID: 'ItemSeparatorComponent-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Itens do Separador',
                en: 'Separator Items',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsDfCode: `(props) => {
                  const dfStl = {height: 10, width: '100%'};
                  return (
                    <RN.View style={dfStl} />
                  );
                }`,
              capsIptCapsTypesToAdd: ['Elemento de Tela'],
            },
          },
        },
      },
    },
    capsType: 'code',

    // capsCodeText: `{ItemSeparatorComponent: !#!Itens do Separador!#!}`,

    // MODELO P/ COPIAR
    // capsCodeText: `

    // (...args:any) => props.p1({ pass: {
    //    A: [!#!1!#!]
    //  }})`,

    // SEMPRE QUE VER <></>
    // capsCodeText: `(...args:any) => <props.ListHeaderComponent pass={{
    //   A: [!#!1!#!]
    // }} />`
  },

  // ListFooterComponent
  ListFooterComponent: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'ListFooterComponent',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Itens do Final da Lista - ListFooterComponent',
          en: 'ListFooterComponent',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Lista'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.ListFooterComponent({ pass: {
          component: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Define um elemento para ser renderizado quando não há itens de lista pra exibir.',
          en: 'Rendered at the bottom of all the items.',
        },

        capsCodeInputs: {
          'ListFooterComponent-0': {
            capsIptCodeID: 'ListFooterComponent-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Itens do Final Lista',
                en: 'ListFooterItem',
              },
              capsIptCapsDescription: {
                'pt-br': 'Permite a inserção de elementos.',
                en: 'Insert Items at the end of a list',
              },
              capsIptCapsDfCode: `(props) => {
                    const dfStl = {color: 'white'};
                    return (
                      <RN.Text style={dfStl}>
                        Final da Lista.
                      </RN.Text>
                    );
                  }`,
              capsIptCapsTypesToAdd: ['Elemento de Tela'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // ListHeaderComponent
  ListHeaderComponent: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'ListHeaderComponent',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Cabeçalhos dos Itens da Lista - ListHeaderComponent',
          en: 'ListHeaderComponent',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Lista'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.ListHeaderComponent({pass: {
          component: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Renderizado na parte superior de todos os itens.',
          en: 'Rendered on top of every item.',
        },

        capsCodeInputs: {
          'ListHeaderComponent-0': {
            capsIptCodeID: 'ListHeaderComponent-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Cabeçalhos dos Itens da Lista',
                en: 'List Item Headers',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsDfCode: `(props) => {
                const dfStl = {color: 'white'};
                return (
                  <RN.Text style={dfStl}>
                    Cabeçalho da Lista.
                  </RN.Text>
                );
              }`,
              capsIptCapsTypesToAdd: ['Elemento de Tela'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // ListFooterComponentStyle
  ListFooterComponentStyle: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'ListFooterComponentStyle',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Estilos do Rodapé da Lista - ListFooterComponentStyle',
          en: 'ListFooterComponentStyle',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Lista'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.ListFooterComponentStyle({ pass: {
          styles: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Estilização para a Vista interna para o ListFooterComponent',
          en: 'Styles to ListFooterComponent',
        },

        capsCodeInputs: {
          'ListFooterComponentStyle-0': {
            capsIptCodeID: 'ListFooterComponentStyle-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsLabel: {
                'pt-br': 'Adicionar Estilos',
                en: 'Add Styles',
              },
              capsIptCapsDfCode: `{color: 'white'}`,
              capsIptCapsTypesToAdd: [
                'Estilo Layout',
                'Estilo Caixa',
                'Grupo de Estilos',
              ],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // ListHeaderComponentStyle
  ListHeaderComponentStyle: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'ListHeaderComponentStyle',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br':
            'Estilos do Cabeçalho dos Itens da Lista - ListHeaderComponentStyle',
          en: 'ListHeaderComponentStyle',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Lista'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.ListHeaderComponentStyle({ pass: {
          styles: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Estilização para a Vista interna para o ListHeaderComponent',
          en: 'ListHeaderComponent Styles',
        },

        capsCodeInputs: {
          'ListHeaderComponentStyle-0': {
            capsIptCodeID: 'ListHeaderComponentStyle-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Estilos do Cabeçalho dos Itens da Lista',
                en: 'List Items Headers Styles',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsDfCode: `{color: 'white'}`,
              capsIptCapsTypesToAdd: [
                'Estilo Layout',
                'Estilo Caixa',
                'Grupo de Estilos',
              ],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // columnWrapperStyle
  columnWrapperStyle: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'columnWrapperStyle',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Estilização para linhas multi-itens - columnWrapperStyle',
          en: 'columnWrapperStyle',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Lista'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.columnWrapperStyle({ pass: {
          styles: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Estilo personalizado opcional para linhas de várias colunas',
          en: 'Optional style to multi items columns',
        },

        capsCodeInputs: {
          'columnWrapperStyle-0': {
            capsIptCodeID: 'columnWrapperStyle-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Estilização para linhas multi-itens',
                en: 'columnWrapperStyle',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsDfCode: `{color: 'white'}`,
              capsIptCapsTypesToAdd: [
                'Estilo Layout',
                'Estilo Caixa',
                'Grupo de Estilos',
              ],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // extraData
  extraData: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'extraData',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': '??? - extraData',
          en: 'extraData',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Lista'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.extraData({ pass: {
          data: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Uma propriedade de marcador para dizer à lista para renderizar novamente',
          en: 'A markup property to tell the list to render again',
        },

        capsCodeInputs: {
          'extraData-0': {
            capsIptCodeID: 'extraData-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': '???',
                en: '???',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
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

  // getItemLayout
  getItemLayout: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'getItemLayout',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Layout de Itens de Tamanho Fixo - getItemLayout',
          en: 'getItemLayout',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Lista'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.getItemLayout({ pass: {
        func: [!#!1!#!]
      }})`,
        capsDescription: {
          'pt-br':
            'Otimização opcional que permite ignorar a medição de conteúdo dinâmico quando o tamanho dos itens com for previamente conhecido',
          en: 'An optional optimization that allows skipping the measurement of dynamic content if you know the size (height or width) of items ahead of time.',
        },

        capsCodeInputs: {
          'getItemLayout-0': {
            capsIptCodeID: 'getItemLayout-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Layout de Itens de Tamanho Fixo',
                en: 'getItemLayout',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsDfCode: `'()=>{}'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // horizontal
  horizontal: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'horizontal',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Itens na Horizontal - horizontal',
          en: 'horizontal',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Lista', 'Propriedade Rolagem'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.horizontal({ pass: {
          boolean: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Renderiza itens próximos uns dos outros horizontalmente em vez de empilhados verticalmente',
          en: 'If true, renders items next to each other horizontally instead of stacked vertically.',
        },

        capsCodeInputs: {
          'horizontal-0': {
            capsIptCodeID: 'horizontal-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Itens na Horizontal?',
                en: 'Horizontal?',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsDfCode: `'true'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // initialScrollIndex
  initialScrollIndex: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'initialScrollIndex',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Ponto de Início da Lista - initialScrollIndex',
          en: 'initialScrollIndex',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Lista'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.initialScrollIndex({ pass: {
          index: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Em vez de começar no topo com o primeiro item, comece no Ponto de Início da Lista',
          en: 'Instead of starting at the top with the first item, start at initialScrollIndex.',
        },

        capsCodeInputs: {
          'initialScrollIndex-0': {
            capsIptCodeID: 'initialScrollIndex-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Ponto de Início da Lista',
                en: 'initialScrollIndex',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Em vez de começar no topo com o primeiro item, comece no Ponto de Início da Lista',
                en: 'Instead of starting at the top with the first item, start at initialScrollIndex.',
              },
              capsIptCapsDfCode: '10',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // inverted
  inverted: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'inverted',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Inverter direção de rolagem da lista - inverted',
          en: 'inverted',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Lista'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.inverted({ pass: {
          boolean: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': 'Inverte a direção da rolagem',
          en: 'Reverses the direction of scroll.',
        },

        capsCodeInputs: {
          'inverted-0': {
            capsIptCodeID: 'inverted-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Inverter direção de rolagem da lista',
                en: 'Invert list scroll direction',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
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

  // keyExtractor
  keyExtractor: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'keyExtractor',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Extrator de Chave - keyExtractor',
          en: 'keyExtractor',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Lista'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.keyExtractor({ pass: {
          func: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Usado para extrair uma chave exclusiva para um determinado item no índice especificado.',
          en: 'Used to extract a unique key for a given item at the specified index.',
        },

        capsCodeInputs: {
          'keyExtractor-0': {
            capsIptCodeID: 'keyExtractor-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Extrator de Chave',
                en: 'keyExtractor',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsDfCode: `'()=>{}'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // onRefresh
  onRefresh: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'onRefresh',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Adicionar RefreshControl - onRefresh',
          en: 'onRefresh',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Lista'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.onRefresh({ pass: {
          func: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Se fornecido, um RefreshControl padrão será adicionado para a funcionalidade "Pull to Refresh"',
          en: 'If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. ',
        },

        capsCodeInputs: {
          'onRefresh-0': {
            capsIptCodeID: 'inverted-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Adicionar RefreshControl',
                en: 'Add RefreshControl',
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

  // ListEmptyComponent
  ListEmptyComponent: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'ListEmptyComponent',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Itens de Lista Vazia - ListEmptyComponent',
          en: 'ListEmptyComponent',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Lista'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.ListEmptyComponent({ pass: {
          component: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Define um elemento para ser renderizado quando não há itens de lista pra exibir.',
          en: 'Rendered when the list is empty. ',
        },

        capsCodeInputs: {
          'ListEmptyComponent-0': {
            capsIptCodeID: 'ListEmptyComponent-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Itens de Lista Vazia',
                en: 'ListEmptyItem',
              },
              capsIptCapsDescription: {
                'pt-br': 'Permite a inserção de elementos.',
                en: 'Insert Items on an empty list',
              },

              capsIptCapsDfCode: `(props) => {
                  const dfStl = {height: 10, width: '100%'};
                  return (
                    <RN.Text style={dfStl}>
                      Não há itens para mostrar.
                    </RN.Text>
                    );
                  }`,
              capsIptCapsTypesToAdd: ['Elemento de Tela'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // onEndReachedThreshold
  onEndReachedThreshold: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'onEndReachedThreshold',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Proximidade do Fim da Lista - onEndReachedThreshold',
          en: 'onEndReachedThreshold',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Lista'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.onEndReachedThreshold({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Representa percentual de distância do fim que o usuário deve chegar para carregar novos dados, nesse caso, 0.1 significa 10%',
          en: 'How far from the end (in units of visible length of the list) the bottom edge of the list must be from the end of the content to trigger the onEndReached callback.',
        },

        capsCodeInputs: {
          'onEndReachedThreshold-0': {
            capsIptCodeID: 'onEndReachedThreshold-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Valor de Referência',
                en: 'Reference CocapsIptCapsDfCode',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsDfCode: '',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // onEndReached
  onEndReached: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'onEndReached',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Acionar no Fim da Lista - onEndReached',
          en: 'onEndReached',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Lista'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.onEndReached({ pass: {
          A: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br':
            'Função(s) acionada(s) ao chegar no "range" indicado em onEndReachedThreshold.',
          en: 'Function)s= activated on range set in onEndReachedThreshold.',
        },

        capsCodeInputs: {
          'onEndReached-0': {
            capsIptCodeID: 'onEndReached-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Funções da Rolagem',
                en: 'Scroll Functions',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsDfCode: `()=>console.log("Você Clicou!")`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // numColumns
  numColumns: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'numColumns',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Número de Colunas - numColumns',
          en: 'numColumns',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 779000000 },
        capsCodeTypes: ['Propriedade Lista'],
        capsCodeVersionID: '1',
        capsCodeText: `(...args:any) => props.numColumns({ pass: {
          numberToEnter: [!#!1!#!]
        }})`,
        capsDescription: {
          'pt-br': '',
          en: '',
        },

        capsCodeInputs: {
          'numColumns-0': {
            capsIptCodeID: 'numColumns-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Número de Colunas',
                en: 'Number of Columns',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsDfCode: `'1'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },
};
