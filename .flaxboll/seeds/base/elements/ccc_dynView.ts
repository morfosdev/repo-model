import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_dynView: TcapsCodeData = {
  // (ocorrências: 11)
  ccc_dynView: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'DynView', en: 'DynView' },
        capsDescription: {
          'pt-br': 'Renderiza uma caixa ou container na tela',
          en: 'Makes a view in the screen',
        },
        capsCodeTypes: ['Elemento de Tela', 'DynView'],

        capsCodeText: `

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[!#!1!#!],

            styles:[!#!2!#!],

            variablePath:[!#!3!#!],

            expectedVal:[!#!4!#!],

            childrenItems:[!#!5!#!],

            args,
          }}/>
        `,

        capsCodeInputs: {
          // ---------- element properties
          'ccc_dynView-0': {
            capsIptCodeID: 'ccc_dynView-0',
            capsIptPosition: '0',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Propredades de Elementos',
                en: 'Elements Properties',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `{}`,
              capsIptCapsTypesToAdd: ['Propriedade Caixa'],
            },
          },
          // ---------- element styles
          'ccc_dynView-1': {
            capsIptCodeID: 'ccc_dynView-1',
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

              capsIptCapsDfCode: `
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              `,
              capsIptCapsTypesToAdd: [
                'Estilo Layout',
                'Estilo Caixa',
                'Grupo de Estilos',
              ],
            },
          },
          // ---------- variable path
          'ccc_dynView-2': {
            capsIptPosition: '2',
            capsIptCodeID: 'ccc_dynView-2',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Caminho da Variável',
                en: 'variable path',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsTypesToAdd: ['string process'],
              capsIptCapsDfCode: ' ',
            },
          },
          // ---------- variable value
          'ccc_dynView-3': {
            capsIptPosition: '3',
            capsIptCodeID: 'ccc_dynView-3',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Valor Esperado',
                en: 'Expected Value',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: ' ',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          // ---------- text value
          'ccc_dynView-4': {
            capsIptPosition: '4',
            capsIptCodeID: 'ccc_dynView-4',
            capsIptCapsInfo: {
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsLabel: {
                'pt-br': 'Itens Filhos',
                en: 'Children Items',
              },
              capsIptCapsTypesToAdd: ['Elemento de Tela'],
              capsIptCapsDfCode: '() =><></>',
            },
            capsIptType: 'capsules',
            capsIptRemoved: false,
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_dynView',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
