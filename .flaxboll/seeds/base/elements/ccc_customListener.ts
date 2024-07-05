import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_customListener: TcapsCodeData = {
  ccc_customListener: {
    capsCodeInfo: {
      '1': {
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 761000000 },
        capsCodeVersionID: '1',

        capsLabel: { 'pt-br': 'Custom Listener', en: 'Custom Listener' },
        capsDescription: { 'pt-br': '', en: '' },

        capsCodeTypes: ['Elemento de Tela', 'Custom Listener'],

        capsCodeText: `(...args:any) => <Elements.CustomListener pass={{
          
            variable: [!#!Variable!#!],
            childrenItems: [!#!Children Items!#!],
            arrFunctions: [!#!Children Items!#!],
            args,
        }}/>`,

        capsCodeInputs: {
          'ccc_customListener-0': {
            capsIptCodeID: 'ccc_customListener-0',
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
          'ccc_customListener-1': {
            capsIptCodeID: 'ccc_customListener-1',
            capsIptRemoved: false,
            capsIptPosition: '1',

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
          'ccc_customListener-2': {
            capsIptCodeID: 'ccc_customListener-2',
            capsIptRemoved: false,
            capsIptType: 'capsules',
            capsIptPosition: '2',
            capsIptCapsInfo: {
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsLabel: {
                'pt-br': 'Funções de Início',
                en: 'Start Functions',
              },
              capsIptCapsTypesToAdd: ['function'],
              capsIptCapsDfCode: '()=>console.log("Você Clicou!")',
            },
          },
        },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_customListener',
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 761000000 },
    },
  },
};
