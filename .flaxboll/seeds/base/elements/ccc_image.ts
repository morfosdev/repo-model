import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_image: TcapsCodeData = {
  ccc_image: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Imagem',
          en: 'Image',
        },
        capsDescription: {
          'pt-br':
            'Um componente React para exibir diferentes tipos de imagens',
          en: 'A React component for displaying different types of images',
        },
        capsCodeTypes: ['Elemento de Tela', 'Image'],

        capsCodeText: `

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[!#!1!#!],

      styles:[!#!2!#!],

      URIvariablePath:[!#!3!#!],

      args,
    }}/>`,

        capsCodeInputs: {
          // ---------- element properties
          'ccc_image-0': {
            capsIptCodeID: 'ccc_image-0',
            capsIptPosition: '0',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Propriedades de Elementos',
                en: 'Elements Properties',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{}`,
              capsIptCapsTypesToAdd: [
                'Propriedade Caixa',
                'Propriedade Imagem',
              ],
            },
          },
          // ---------- element styles
          'ccc_image-1': {
            capsIptCodeID: 'ccc_image-1',
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
                height: "50px",
                width: "80px",
                backgroundColor: "#FDFDFD",
                borderWidth: 2,
                borderColor: "#EEE"
              }
              `,
              capsIptCapsTypesToAdd: [
                'Estilo Caixa',
                'Estilo Layout',
                'Estilo Imagem',
              ],
            },
          },
          // ---------- variable path
          'ccc_image-2': {
            capsIptPosition: '2',
            capsIptCodeID: 'ccc_image-2',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'caminho da variável URI',
                en: 'URI variable path',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsTypesToAdd: ['string process'],
              capsIptCapsDfCode:
                '"https://images.unsplash.com/photo-1488831861984-179da3647265?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"',
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_image',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
