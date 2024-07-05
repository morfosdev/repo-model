import { TcapsCodeData } from '../../types/Tcaps/TcapsCode';

export const ccc_filePicker: TcapsCodeData = {
  ccc_filePicker: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'FilePicker', en: 'FilePicker' },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['Elemento de Tela', 'FilePicker'],

        capsCodeText: `
        (...args) => <customs.FilePicker pass={{
            arrChildren: [!#!children items!#!],
            styles:[!#!styles!#!],
            arrFuncs: [!#!arr functions!#!],
            args
          }} />`,

        capsCodeInputs: {
          'ccc_filePicker-0': {
            capsIptPosition: '2',
            capsIptCodeID: 'ccc_filePicker-0',
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
          'ccc_filePicker-1': {
            capsIptCodeID: 'ccc_filePicker-1',
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
                width: 100,
              }
              `,
              capsIptCapsTypesToAdd: [
                'Estilo Layout',
                'Estilo Caixa',
                'Grupo de Estilos',
              ],
            },
          },
          'ccc_filePicker-2': {
            capsIptCodeID: 'ccc_filePicker-2',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Funções', en: 'Functions' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsTypesToAdd: ['function'],
              capsIptCapsDfCode: `() => {}`,
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_filePicker',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
