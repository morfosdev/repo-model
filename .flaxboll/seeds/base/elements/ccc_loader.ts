import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_loader: TcapsCodeData = {
  ccc_loader: {
    capsCodeInfo: {
      '1': {
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 761000000 },
        capsCodeVersionID: '1',

        capsLabel: { 'pt-br': 'Loader', en: 'Loader' },
        capsDescription: { 'pt-br': '', en: '' },

        capsCodeTypes: ['Elemento de Tela', 'Loader'],

        capsCodeText: `(...args:any) => <Elements.Loader pass={{
            size: "!#!tamanho!#!",
            color: !#!cor!#!,
            args,
        }}/>`,

        capsCodeInputs: {
          'ccc_loader-0': {
            capsIptCodeID: 'ccc_loader-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtLabel: { 'pt-br': 'tamanho', en: 'size' },

              capsIptTxtDescription: {
                'pt-br': 'small or large.',
                en: 'small or large.',
              },
              capsIptTxtDfValue: `small`,
            },
          },
          'ccc_dynView-1': {
            capsIptPosition: '1',
            capsIptCodeID: 'ccc_dynView-1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'cor',
                en: 'color',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsTypesToAdd: ['string process'],
              capsIptCapsDfCode: `' '`,
            },
          },
        },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_loader',
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 761000000 },
    },
  },
};
