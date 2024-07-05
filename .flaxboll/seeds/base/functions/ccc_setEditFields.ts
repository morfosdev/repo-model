import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_setEditFields: TcapsCodeData = {
  // (ocorrências: 97)
  ccc_setEditFields: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'setEditFields',
          en: 'setEditFields',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['function', 'setEditFields'],

        capsCodeText: `async (...args) =>
        functions.setEditFields({ args, pass:{
          arrFieldsName: [!#!Variable Path!#!],
          arrFormPath: [!#!Variable Path!#!],
        }})`,

        capsCodeInputs: {
          'ccc_setEditFields-0': {
            capsIptCodeID: 'ccc_setEditFields-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Nomes dos Campos',
                en: 'Field Names',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `''`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_setEditFields-1': {
            capsIptCodeID: 'ccc_setEditFields-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Caminho do Formulário',
                en: 'Form Path',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `''`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_setEditFields',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
