import { TcapsCodeData } from '../../types/Tcaps/TcapsCode';

export const ccc_btnUpdateAmount: TcapsCodeData = {
  // (ocorrências: 11)
  ccc_btnUpdateAmount: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Btn Update Amount',
          en: 'Btn Update Amount',
        },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['Elemento de Tela', 'btnUpdateAmount'],

        capsCodeText: `(...args:any) => <customs.BtnUpdateAmount pass={{
          type: "!#!1!#!",
          args,
        }}/>`,

        capsCodeInputs: {
          // ---------- element properties
          'ccc_btnUpdateAmount-0': {
            capsIptCodeID: 'ccc_btnUpdateAmount-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtLabel: { 'pt-br': 'Tipo', en: 'Tipo' },

              capsIptTxtDfValue: `'plus'`,
              capsIptTxtDescription: { 'pt-br': '', en: '' },
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_btnUpdateAmount',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
