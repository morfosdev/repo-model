import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_screen: TcapsCodeData = {
  ccc_screen: {
    capsCodeInfo: {
      '1': {
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 760000000 },
        capsCodeVersionID: '1',

        capsLabel: {
          'pt-br': 'tela',
          en: 'screen',
        },

        capsDescription: {
          'pt-br': 'Cria uma nova Tela',
          en: 'Creates a new Screen',
        },

        capsCodeTypes: ['Tela'],
        capsCodeText: `

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"!#!0!#!",

          styles:[!#!1!#!],

          screenElements:[!#!2!#!],

          startFunctions:[!#!3!#!],

          args,
        }}/>`,

        capsCodeInputs: {
          'ccc_screen-0': {
            capsIptCodeID: 'ccc_screen-0',
            capsIptPosition: '0',
            capsIptRemoved: false,
            capsIptType: 'text',

            capsIptTxtInfo: {
              capsIptTxtDescription: {
                'pt-br': 'Caminho pra vc definir a rota da sua tela',
                en: 'Path to screen route',
              },
              capsIptTxtDfValue: 'home',
              capsIptTxtLabel: {
                'pt-br': 'Caminho da Tela',
                en: 'Path Screen',
              },
            },
          },
          'ccc_screen-1': {
            capsIptCodeID: 'ccc_screen-1',
            capsIptPosition: '2',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsTypesToAdd: ['Estilo Caixa', 'Estilo Layout'],
              capsIptCapsLabel: {
                'pt-br': 'Estilos',
                en: 'Styles',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Adicione os itens que desejar para modificar o estilo dessa Tela.',
                en: 'Add items to change screen style.',
              },
              capsIptCapsDfCode: `
              {
                backgroundColor: '#101',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
              }
              `,
            },
          },
          'ccc_screen-2': {
            capsIptCodeID: 'ccc_screen-2',
            capsIptPosition: '3',
            capsIptRemoved: false,
            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Elementos de Tela',
                en: 'Screen Elements',
              },
              capsIptCapsDescription: {
                'pt-br': 'Permite a inserção de elementos filhos',
                en: 'Add children items',
              },
              capsIptCapsDfCode: `() => {
                  const textStyle = {
                    fontSize: 20,
                    color: '#fff2',
                    textAlign:'center',
                    maxWidth: 200,
                    // maxWidth: '200px'<= #ATTENTION: Native ERROR! No string!
                  };

                  return (
                    <RN.Text style={textStyle}>
                      {'Adicione Elementos nessa tela!'}
                    </RN.Text>);
                }`,
              capsIptCapsTypesToAdd: ['Elemento de Tela'],
            },
          },
          'ccc_screen-3': {
            capsIptCodeID: 'ccc_screen-3',
            capsIptPosition: '1',
            capsIptRemoved: false,
            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Funções de Início',
                en: 'Start Functions',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `()=>{}`,
              capsIptCapsTypesToAdd: ['function'],
            },
          },
        },
      },
    },

    capsType: 'code',

    capsDB: {
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 760000000 },
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
      capsID: 'ccc_screen',
    },
  },
};
