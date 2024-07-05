import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_svgIcon: TcapsCodeData = {
  ccc_svgIcon: {
    capsType: 'code',

    capsDB: {
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 763000000 },
      capsID: 'ccc_svgIcon',
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },

    capsCodeInfo: {
      '1': {
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 763000000 },
        capsCodeVersionID: '1',

        capsLabel: {
          'pt-br': 'Ícone SVG',
          en: 'SVG Icon',
        },
        capsDescription: {
          'pt-br': 'Use um SVG como ícone',
          en: 'Use a SVG as an Icon',
        },

        capsCodeTypes: ['Elemento de Tela', 'SVG Icon'],
        capsCodeText: `(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (!#!1!#!)
      },

      svgOriginal: \`
        !#!2!#!
      \`,

      altura: "!#!3!#!",

      largura: "!#!4!#!",

      preenchimento: [!#!5!#!],

      args,
    }}/>`,

        capsCodeInputs: {
          'ccc_svgIcon-0': {
            capsIptCodeID: 'ccc_svgIcon-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: `<Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={14}
              viewBox="0 0 20 14"
              {...props}
              >
              <Path
              fillRule="evenodd"
              d="M7.707.293a1 1 0 0 1 0 1.414L3.414 6H19a1 1 0 1 1 0 2H3.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
              clipRule="evenodd"
              {...props}
              />
              </Svg>`,

              capsIptTxtLabel: {
                'pt-br': 'Svg como Componente',
                en: 'Svg as Component',
              },
              capsIptTxtDescription: {
                'pt-br':
                  'Transforme um svg usando o link https://bit.ly/SVG-RN-6 e cole apenas o que está depois do return nesse campo.',
                en: 'Transform a svg in https://bit.ly/SVG-RN-6 adn paste the return here.',
              },
            },
          },
          'ccc_svgIcon-1': {
            capsIptCodeID: 'ccc_svgIcon-1',
            capsIptPosition: '1',
            capsIptRemoved: false,
            capsIptType: 'text',

            capsIptTxtInfo: {
              capsIptTxtDfValue: `<svg></svg>`,

              capsIptTxtLabel: {
                ['pt-br']: 'Svg Original',
                en: 'Svg Original',
              },
              capsIptTxtDescription: {
                ['pt-br']: 'Armazene aqui o código svg original.',
                en: 'Enter the original code',
              },
            },
          },
          'ccc_svgIcon-2': {
            capsIptCodeID: 'ccc_svgIcon-2',
            capsIptPosition: '2',
            capsIptRemoved: false,
            capsIptType: 'text',

            capsIptTxtInfo: {
              capsIptTxtDfValue: `30px`,

              capsIptTxtLabel: {
                ['pt-br']: 'Altura',
                en: 'Height',
              },
              capsIptTxtDescription: {
                ['pt-br']: 'Define uma altura para o svg',
                en: 'Define svg height',
              },
            },
          },
          'ccc_svgIcon-3': {
            capsIptCodeID: 'ccc_svgIcon-3',
            capsIptPosition: '3',
            capsIptRemoved: false,
            capsIptType: 'text',

            capsIptTxtInfo: {
              capsIptTxtDfValue: `30px`,

              capsIptTxtLabel: {
                ['pt-br']: 'Largura',
                en: 'Width',
              },
              capsIptTxtDescription: {
                ['pt-br']: 'Define uma largura para o svg',
                en: 'Define svg width',
              },
            },
          },
          'ccc_svgIcon-4': {
            capsIptCodeID: 'ccc_svgIcon-4',
            capsIptPosition: '4',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Cor de Preenchimento',
                en: 'Fill',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `'transparent'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
  },
};
