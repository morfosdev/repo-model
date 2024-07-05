import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_number: TcapsCodeData = {
  ccc_number: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'ccc_number',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 766000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsType: 'code',
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'número', en: 'number' },

        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['jsValue', 'number'],
        capsCodeText: `jsvals.j8({pass: {
          propertieValues: !#!number!#!
        }})
        `,

        capsCodeVersionID: '1',
        capsCodeInputs: {
          'ccc_number-0': {
            capsIptType: 'text',
            capsIptRemoved: false,
            capsIptCodeID: 'ccc_number-0',
            capsIptPosition: '0',
            capsIptTxtInfo: {
              capsIptTxtLabel: { 'pt-br': 'número', en: 'number' },

              capsIptTxtDescription: { 'pt-br': '', en: '' },
              capsIptTxtDfValue: '0',
            },
          },
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 766000000 },
      },
    },
  },
};
