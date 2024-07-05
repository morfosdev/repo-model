import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_customPrepareData: TcapsCodeData = {
  ccc_customPrepareData: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Preparar Informação personalizada',
          en: 'custom Prepare Data',
        },
        capsDescription: {
          'pt-br': 'Uma função para preparar informações',
          en: 'A function to prepare customized data',
        },
        capsCodeTypes: ['Função', 'function', 'prepareData'],

        capsCodeText: `Elements.F5({ pass: {args} })`,

        capsCodeInputs: {
          'ccc_customPrepareData-0': {
            capsIptCodeID: 'ccc_customPrepareData-0',
            capsIptPosition: '0',
            capsIptRemoved: false,
            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: '',
              capsIptTxtLabel: { 'pt-br': 'inativo', en: 'inactive' },
              capsIptTxtDescription: { 'pt-br': '', en: '' },
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_customPrepareData',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
