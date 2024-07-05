import { TcapsCodeData } from '../../types/Tcaps/TcapsCode';

export const ccc_mapPlaces: TcapsCodeData = {
  // (ocorrências: 11)
  ccc_mapPlaces: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'MapPlaces',
          en: 'MapPlaces',
        },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['Elemento de Tela', 'MapPlaces'],

        capsCodeText: `

          (...args:any) => {

            return <customs.MapPlaces pass={{
              keyPlaces: "!#!Chave OAuth Google Places!#!",
              pathInitMap: [!#!Inital Map Path!#!],
              arrPins: [!#!Arr Pins!#!],
              arrFuncs: [!#!Arr Functions!#!],
              args,
            }}/>
          }`,

        capsCodeInputs: {
          // ---------- element properties
          'ccc_mapPlaces-0': {
            capsIptCodeID: 'ccc_mapPlaces-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtLabel: {
                'pt-br': 'Chave OAuth Google Places',
                en: 'OAuth Google Places Key',
              },

              capsIptTxtDfValue: `'no key'`,
              capsIptTxtDescription: {
                'pt-br': '',
                en: '',
              },
            },
          },
          'ccc_mapPlaces-1': {
            capsIptCodeID: 'ccc_mapPlaces-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Caminho Ponto Inicial',
                en: 'Initial Map Path',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `''`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_mapPlaces-2': {
            capsIptCodeID: 'ccc_mapPlaces-2',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Caminho Arr Pontos',
                en: 'Pins Path',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `''`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_mapPlaces-3': {
            capsIptCodeID: 'ccc_mapPlaces-3',
            capsIptPosition: '3',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Função Selecionar Ponto',
                en: 'Functions Select Map Pin',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `() => {}`,
              capsIptCapsTypesToAdd: ['function'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_mapPlaces',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
