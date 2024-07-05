import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_login: TcapsCodeData = {
  ccc_login: {
    capsCodeInfo: {
      '1': {
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 761000000 },
        capsCodeVersionID: '1',

        capsLabel: {
          'pt-br': 'Login (botão)',
          en: 'Login (button)',
        },
        capsDescription: { 'pt-br': '', en: '' },

        capsCodeTypes: ['Elemento de Tela', 'Login'],

        capsCodeText: `(...args:any) => <Elements.Login pass={{
          elementProperties: [!#!0!#!],
          styles: [!#!1!#!],
          childrenItems: [!#!2!#!],
          pressableFunctions: [!#!3!#!],

          args,
        }}/>`,

        capsCodeInputs: {
          'ccc_login-0': {
            capsIptCodeID: 'ccc_login-0',
            capsIptPosition: '0',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Propriedades de Elementos',
                en: 'Element Properties',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{}`,
              capsIptCapsTypesToAdd: ['Propriedade Botão'],
            },
          },
          'ccc_login-1': {
            capsIptCodeID: 'ccc_login-1',
            capsIptType: 'capsules',
            capsIptRemoved: false,
            capsIptPosition: '1',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Estilos',
                en: 'Styles',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsTypesToAdd: ['Estilo Caixa'],
              capsIptCapsDfCode: `
              {
                backgroundColor: 'blue',
                borderRadius: 20,
                paddingVertical: 5,
                paddingHorizontal: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }
              `,
            },
          },
          'ccc_login-2': {
            capsIptCodeID: 'ccc_login-2',
            capsIptRemoved: false,
            capsIptPosition: '3',

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
          'ccc_login-3': {
            capsIptCodeID: 'ccc_login-3',
            capsIptRemoved: false,
            capsIptType: 'capsules',
            capsIptPosition: '2',
            capsIptCapsInfo: {
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsLabel: {
                'pt-br': 'Funções do Botão',
                en: 'Pressable Functions',
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
      capsID: 'ccc_login',
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 761000000 },
    },
  },
};
