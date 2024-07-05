import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const imageStyles: TcapsCodeData = {
  // Apenas em IMAGE:

  // overlayColorAndroid - Cor de Preenchimento de Esquinas
  '1E39cOOZzRWcHAcKPnwJ': {
    capsDB: {
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 791000000 },
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: '1E39cOOZzRWcHAcKPnwJ',
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'overlayColorAndroid - Cor de Preenchimento de Esquinas',
          en: 'overlayColorAndroid',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 791000000 },
        capsCodeTypes: ['Estilo Imagem'],
        capsCodeVersionID: '1',
        capsCodeText: `stls.overlayColor({ pass: { arrayValue: [!#!1!#!] }})`,
        capsDescription: {
          'pt-br':
            'When the image has rounded corners, specifying an overlayColor will cause the remaining space in the corners to be filled with a solid color.',
          en: 'Quando a imagem tiver cantos arredondados, especificar uma overlayColor fará com que o espaço restante nos cantos seja preenchido com uma cor sólida',
        },

        capsCodeInputs: {
          '1E39cOOZzRWcHAcKPnwJ-0': {
            capsIptCodeID: '1E39cOOZzRWcHAcKPnwJ-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Valor', en: 'Value' },
              capsIptCapsDescription: {
                'pt-br': 'Defina a cor',
                en: 'Set a color',
              },
              capsIptCapsDfCode: `'black'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },

  // FALTA colocar aqui:
  // ######## objectFit #######
  // ######## tintColor #######

  //Em View:
  //  backfaceVisibility
  //  backgroundColor
  //  borderBottomLeftRadius
  //  borderBottomRightRadius
  //  borderColor
  //  borderRadius
  //  borderTopLeftRadius
  //  borderTopRightRadius
  //  borderWidth
  //  opacity
  //  overflow

  //Em Propriedades da Imagem:
  //  resizeMode

  // ???:
  // borderRightColor, borderBottomColor
  // borderBottomStartRadius, borderEndColor
  // borderRightColor, borderStartColor
};
