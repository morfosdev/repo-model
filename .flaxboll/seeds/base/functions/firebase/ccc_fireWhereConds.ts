import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

export const ccc_fireWhereConds: TcapsCodeData = {
  ccc_fireWhereConds: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'firestore where condition' },
        capsDescription: {
          'pt-br':
            'Usada para "pegar" documentos específicos de acordo com a instrução fornecida.',
        },
        capsCodeTypes: ['where conditions'],

        capsCodeText: `(...args) =>
        functions.firebase.whereConds({ args, pass:{
          arrStrings: [!#!where params!#!],
        }})`,

        capsCodeInputs: {
          'ccc_fireWhereConds-0': {
            capsIptCodeID: 'ccc_fireWhereConds-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'where condition' },
              capsIptCapsDescription: { 'pt-br': '' },

              capsIptCapsDfCode: ` `,
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
      capsID: 'ccc_fireWhereConds',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
