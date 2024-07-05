import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_flatList: TcapsCodeData = {
  // Lista Dinâmica - FlatList
  ccc_flatList: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Lista Simples (FlatList)',
          en: 'FlatList',
        },
        capsDescription: {
          'pt-br':
            'Uma interface eficiente para renderizar listas simples básicas',
          en: 'A performant interface for rendering basic, flat lists',
        },
        capsCodeTypes: ['Elemento de Tela', 'FlatList'],

        capsCodeText: `(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            !#!Element Properties!#!
          ],

          pData: !#!Path Data!#!,

          itemElements: [
            !#!Item Elements!#!
          ],

          args,
        }}/>`,

        capsCodeInputs: {
          'ccc_flatList-0': {
            capsIptCodeID: 'ccc_flatList-0',
            capsIptPosition: '0',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Propriedades de Elemento',
                en: 'Element Properties',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{}`,
              capsIptCapsTypesToAdd: [
                'Propriedade Lista',
                'Propriedade Rolagem',
              ],
            },
          },
          'ccc_flatList-1': {
            capsIptCodeID: 'ccc_flatList-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Caminho dos Dados',
                en: 'Path Data',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: "''",
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_flatList-2': {
            capsIptCodeID: 'ccc_flatList-2',
            capsIptPosition: '2',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Elementos Itens',
                en: 'Item Elements',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `
              (...args) => {
                return (
                  <RN.Text>
                    Adicione os campos que quer mostrar aqui.
                  </RN.Text>
                );
              }
              `,
              capsIptCapsTypesToAdd: ['Elemento de Tela'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_flatList',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
