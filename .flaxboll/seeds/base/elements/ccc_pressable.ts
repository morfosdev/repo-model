import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_pressable: TcapsCodeData = {
  ccc_pressable: {
    capsCodeInfo: {
      '1': {
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 761000000 },
        capsCodeVersionID: '1',

        capsLabel: {
          'pt-br': 'Pressionável (botão)',
          en: 'Pressable',
        },
        capsDescription: {
          'pt-br':
            'É um invólucro de componente principal que pode detectar vários estágios de interações de imprensa em qualquer um de seus filhos definidos.',
          en: 'Is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.',
        },

        capsCodeTypes: ['Elemento de Tela', 'Pressable'],

        capsCodeText: `(...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [!#!1!#!],

          styles: [!#!2!#!],

          childrenItems: [!#!3!#!],

          pressableFunctions: [!#!4!#!],

          args,
        }}/>`,

        capsCodeInputs: {
          'ccc_pressable-0': {
            capsIptCodeID: 'ccc_pressable-0',
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
          'ccc_pressable-1': {
            capsIptCodeID: 'ccc_pressable-1',
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
          'ccc_pressable-2': {
            capsIptCodeID: 'ccc_pressable-2',
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

              capsIptCapsDfCode: `()=><></>`,
              capsIptCapsTypesToAdd: ['Elemento de Tela'],
            },
          },
          'ccc_pressable-3': {
            capsIptCodeID: 'ccc_pressable-3',
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
      capsID: 'ccc_pressable',
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 761000000 },
    },
  },
};
