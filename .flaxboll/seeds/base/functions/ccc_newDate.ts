import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_newDate: TcapsCodeData = {
  ccc_newDate: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'nova data', en: 'newDate' },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['function', 'newDate'],

        capsCodeText: `async (...args) => {

          const fullDate = {
            "dataPeriodoInicio": "2023-06-12T00:00:00.000-0400",
        };

        const date = new Date(objeto.dataPeriodoInicio);

        const formatDate = { year: 'numeric', month: 'long', day: 'numeric' };
        const dateFormInicio = date.toLocaleDateString('pt-BR', formatDate);

        Return dataFormInicio;

        }`,

        capsCodeInputs: {
          'ccc_newDate-0': {
            capsIptCodeID: 'ccc_newDate-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: ' ',

              capsIptTxtLabel: { 'pt-br': ' ', en: '' },
              capsIptTxtDescription: { 'pt-br': ' ', en: '' },
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_newDate',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
