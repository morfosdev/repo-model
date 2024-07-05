import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_text: TcapsCodeData = {
  ccc_text: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Texto',
          en: 'Text',
        },
        capsDescription: {
          'pt-br': 'Um componente React para exibir texto.',
          en: 'A React component for displaying text.',
        },
        capsCodeTypes: ['Elemento de Tela', 'Text Component'],

        capsCodeText: `(...args:any) => <Elements.Text pass={{
          arrProps: [
            !#!Elements Properties!#!
          ],

          arrStyles: [
            !#!Styles!#!
          ],

          children: [
            !#!Text Value!#!
          ],

          args,

        }}/>`,

        capsCodeInputs: {
          // ---------- element properties
          'ccc_text-0': {
            capsIptCodeID: 'ccc_text-0',
            capsIptPosition: '0',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Propriedades de Elementos',
                en: 'Elements Properties',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `{}`,
              capsIptCapsTypesToAdd: ['Propriedade Texto'],
            },
          },
          // ---------- element styles
          'ccc_text-1': {
            capsIptCodeID: 'ccc_text-1',
            capsIptPosition: '1',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Estilos', en: 'Styles' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `{ color: 'black', fontSize: 12, }`,
              capsIptCapsTypesToAdd: ['Estilo Texto'],
            },
          },
          // ---------- text value
          'ccc_text-2': {
            capsIptCodeID: 'ccc_text-2',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Valor de Texto', en: 'Text Value' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `"Escreva..."`,
              capsIptCapsTypesToAdd: ['string process', 'string values'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_text',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
