import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_arrayValue: TcapsCodeData = {
  ccc_arrayValue: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'ccc_arrayValue',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 766000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsType: 'code',
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'valor de array',
          en: 'array value',
        },

        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['jsValue', 'array value'],
        capsCodeText: `jsvals.j8({pass: {
          propertieValues: [!#!Values!#!]
        }})`,
        capsCodeVersionID: '1',
        capsCodeInputs: {
          'ccc_arrayValue-0': {
            capsIptType: 'capsules',
            capsIptRemoved: false,
            capsIptCodeID: 'ccc_arrayValue-0',
            capsIptPosition: '0',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Values',
                en: 'Values',
              },

              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsDfCode: ' ',
              capsIptCapsTypesToAdd: ['jsValue'],
            },
          },
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 766000000 },
      },
    },
  },
};
