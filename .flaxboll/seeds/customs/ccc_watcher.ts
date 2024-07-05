import { TcapsCodeData } from '../../types/Tcaps/TcapsCode';

export const ccc_watcher: TcapsCodeData = {
  ccc_watcher: {
    capsCodeInfo: {
      '1': {
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 761000000 },
        capsCodeVersionID: '1',

        capsLabel: { 'pt-br': 'Watcher', en: 'Watcher' },
        capsDescription: { 'pt-br': '', en: '' },

        capsCodeTypes: ['Elemento de Tela', 'Watcher'],

        capsCodeText: `(...args:any) => <customs.Watcher pass={{

            variable: [!#!Variable!#!],
            childrenItems: [!#!Children Items!#!],
            arrFuncs: [!#!Start Functions!#!],
            args,
        }}/>`,

        capsCodeInputs: {
          'ccc_watcher-0': {
            capsIptCodeID: 'ccc_watcher-0',
            capsIptRemoved: false,
            capsIptType: 'capsules',
            capsIptPosition: '0',
            capsIptCapsInfo: {
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsLabel: {
                'pt-br': 'Variável (Monitorar)',
                en: 'Variable (Track)',
              },
              capsIptCapsTypesToAdd: ['string process'],
              capsIptCapsDfCode: `''`,
            },
          },
          'ccc_watcher-1': {
            capsIptCodeID: 'ccc_watcher-1',
            capsIptRemoved: false,
            capsIptPosition: '2',

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Itens Filhos',
                en: 'Children Items',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `
              () => (
                <RN.Text style={{color: 'white'}}>
                  Insira elementos aqui
                </RN.Text>
              )
              `,
              capsIptCapsTypesToAdd: ['Elemento de Tela'],
            },
          },
          'ccc_watcher-2': {
            capsIptCodeID: 'ccc_watcher-2',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Funções de Início',
                en: 'Start Functions',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsTypesToAdd: ['function'],
              capsIptCapsDfCode: `() => {}`,
            },
          },
        },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_watcher',
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 761000000 },
    },
  },
};
