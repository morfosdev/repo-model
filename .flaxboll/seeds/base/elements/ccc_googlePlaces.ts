import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_googlePlaces: TcapsCodeData = {
  ccc_googlePlaces: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Autocomplete Google Places',
          en: 'Autocomplete Google Places',
        },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['Elemento de Tela', 'Autocomplete Google Places'],

        capsCodeText: `

        (...args:any) => <Elements.AutocompleteGooglePlaces pass={{
          apiKey: "!#!Api Key!#!",
          pathList: [!#!Path List!#!],
          args,
        }}/>`,

        capsCodeInputs: {
          'ccc_googlePlaces-0': {
            capsIptRemoved: false,
            capsIptCodeID: 'ccc_googlePlaces-0',
            capsIptPosition: '0',
            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDescription: { 'pt-br': '', en: '' },
              capsIptTxtDfValue: 'home',
              capsIptTxtLabel: {
                'pt-br': 'Api Key',
                en: 'Api Key',
              },
            },
          },
          'ccc_googlePlaces-1': {
            capsIptRemoved: false,
            capsIptCodeID: 'ccc_googlePlaces-1',
            capsIptPosition: '1',
            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Caminho da Lista' },
              capsIptCapsDescription: { 'pt-br': '' },
              capsIptCapsDfCode: `""`,
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
      capsID: 'ccc_googlePlaces',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
